from flask import Flask, request, jsonify, render_template
from mlxtend.frequent_patterns import association_rules
from flask_cors import CORS
from apyori import apriori
import pandas as pd
import numpy as np
import collections
import joblib
import random
import csv

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['GET'])
def home():
    return '''Past purchases'''


@app.route('/predict/<string:txt>', methods=['GET'])
def predict(txt):
    # product = pd.read_csv('Unique Items with ProductId.csv')
    # itemlist = list(product['ITEM'])
    #
    # if txt not in itemlist[0:121]:
    #     return jsonify({})

    # Past Purchase  History
    purchases = pd.read_csv('Book1.csv', header=None)
    purchases.head()
    purchases.values.tolist()
    purchaseList = []
    for i in range(len(purchases)):
        purchaseList.append([str(purchases.values[i, j]) for j in range(0, 20) if str(purchases.values[i, j]) != 'nan'])

    # Apriori Algorithm to Predict
    rules = apriori(purchaseList, min_support=0.001, min_confidence=0.03, min_lift=3, min_length=1)

    # Prediction
    cart_item = txt
    previous = []
    final = []
    for item in rules:
        pair = item[0]
        items = [x for x in pair]
        if cart_item in items:
            previous = [x for x in items]
            final += previous
    final = list(set(final))
    finalDict = {}
    for i in range(len(final)):
        item = {}
        item["Name"] = final[i]
        size = ""
        with open('Unique Items with ProductId with Size.csv', 'r') as csvfile:
            datareader = csv.reader(csvfile)
            for row in datareader:
                if row[0] == final[i]:
                    size = row[4]
                    price = row[2]
                    break
        imgLink = ""
        with open('Unique Items with ProductId.csv', 'r') as csvfile:
            datareader = csv.reader(csvfile)
            for row in datareader:
                if row[0] == final[i]:
                    imgLink = row[4]
                    id = row[1]
                    break
        item["Price"] = price
        item["ImgLink"] = imgLink
        item["Size"] = size
        item["api"] = "Recent Purchase"
        finalDict[id] = item

    keys = list(finalDict.keys())

    output = {}
    if len(finalDict) >= 5:
        for i in range(5):
            x = random.choice(keys)
            output[x] = finalDict[x]
    else:
        output = finalDict
    return jsonify(output)


if __name__ == "__main__":
    app.run(debug=True)
