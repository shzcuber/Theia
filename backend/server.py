import shutil
from duckduckgo_search import ddg_images
import base64
import requests
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS

from time import sleep
from fastai.vision.all import *
import urllib.request # save img locally
from PIL import Image
import os



app = Flask(__name__)
CORS(app)

@app.get("/simple_search")
def hello_world():
    print(request.args)
    keywords = request.args.get('keywords') 
    if(not keywords):
        return "INVALID REQUEST"

    safesearch = request.args.get('safesearch') or "Off" # On or Off
    max_results = int(request.args.get('max_results')) or 100

    return jsonify(ddg_images(keywords, region='wt-wt', safesearch=safesearch, size=None,
                color='Monochrome', type_image=None, layout=None, license_image=None, max_results=max_results))

@app.route('/image/<path:url>')
def get_image(url):
    response = requests.get(url)
    image_content = response.content
    encoded_image = base64.b64encode(image_content).decode('utf-8')
    return jsonify({'image': encoded_image})

#defining a download image function using urllib
def download_image(url, file_path, file_name):
  #some images are going to be broken, adding try and except is a good strategy
    try:
      full_path = file_path + file_name + '.jpg'
      urllib.request.urlretrieve(url, full_path)
    except Exception as e:
      print("coudn't download")
      print(e)

def delete_img(file_path, number=0):
  try:
    try:
      Image.open(file_path)
      print(f"image number {number} was successfully opened")

    except:
      os.remove(file_path)
      print(f"image number {number} deleted")
  except:
    print(f"no image number {number} found")

@app.route('/train', methods=['POST'])
def train():
    content_type = request.headers.get('Content-Type')
    unwantedImages = request.json.get('unwantedImages')
    wantedImages = request.json.get('wantedImages')
    dset = []

    for (index, url) in enumerate(wantedImages):
        dest = f"wanted_{index}"
        download_image(url, 'data/', dest)
        file_path = 'data/' + dest + '.jpg'
        delete_img(file_path, index) # delete if faulty
        sleep(10)
    for (index, url) in enumerate(unwantedImages):
        dest = f"unwanted_{index}"
        download_image(url, 'data/', dest)
        file_path = 'data/' + dest + '.jpg'
        delete_img(file_path, index) # delete if faulty
        sleep(10)

    path = Path('data')
    batch_size = 3

    def label_func(file_path): 
        return 'unwanted' if file_path.name[0]=='u' else 'wanted'

    data_block = DataBlock(
        blocks=(ImageBlock, CategoryBlock),
        get_items=get_image_files,
        splitter=RandomSplitter(),
        get_y=label_func,
        item_tfms=Resize(113),
    )

    dls = data_block.dataloaders(path, bs=batch_size)

    global learn
    learn = vision_learner(dls, resnet34, metrics=error_rate)
    learn.fine_tune(3)
    return content_type