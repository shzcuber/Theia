from duckduckgo_search import ddg_images
from flask import Flask, request

app = Flask(__name__)

@app.get("/simple_search")
def hello_world():
    print(request.args)
    keywords = request.args.get('keywords') 
    if(not keywords):
        return "INVALID REQUEST"

    safesearch = request.args.get('safesearch') or "Off" # On or Off
    max_results = request.args.get('maxresults') or 100

    return ddg_images(keywords, region='wt-wt', safesearch=safesearch, size=None,
                color='Monochrome', type_image=None, layout=None, license_image=None, max_results=max_results)