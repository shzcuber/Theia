from duckduckgo_search import ddg_images
import base64
import requests
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS


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