from duckduckgo_search import ddg_images
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
    download = request.args.get('download')

    if(download):
        r = ddg_images(keywords, region='wt-wt', safesearch=safesearch, size=None,
                color='Monochrome', output="json", type_image=None, layout=None, license_image=None, max_results=max_results, download=True)
        print(r);
        return r;
    else:
        return jsonify(ddg_images(keywords, region='wt-wt', safesearch=safesearch, size=None,
                    color='Monochrome', type_image=None, layout=None, license_image=None, max_results=max_results))