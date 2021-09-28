from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import pandas as pd
import numpy as np
import joblib
import json
import csv

app = Flask(__name__)
CORS(app)

data = joblib.load('similarUser.pkl')
pt = joblib.load('item_pivot.pkl')


@app.route('/', methods=['GET'])
def home():
    return '''Similar User'''


@app.route('/predict/<string:txt>', methods=['GET'])
def predict(txt):

    recommendation = {}
    distances, suggestions = data.kneighbors(pt.loc[txt, :].values.reshape(1, -1), n_neighbors=6)
    output = list(pt.index[suggestions[0]])

    for i in range(len(output)):
        item = {}
        item["Name"] = output[i]
        size = ""
        imgLink = ""
        with open('Unique Items with ProductId.csv', 'r') as csvfile:
            datareader = csv.reader(csvfile)
            for row in datareader:
                if row[0] == output[i]:
                    imgLink = row[4]
                    id = row[1]
                    size = row[5]
                    price = row[2]
                    break
        item["Size"] = size
        item["Price"] = price
        item["ImgLink"] = imgLink
        item["api"] = "Similar User"
        recommendation[id] = item

    return jsonify(recommendation)

if __name__ == "__main__":
    app.run(debug=True)
