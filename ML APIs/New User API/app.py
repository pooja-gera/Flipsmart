from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import pandas as pd
import csv

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['GET'])
def home():
    return '''New Users'''


@app.route('/predict', methods=['GET'])
def predict():
    # Past Purchase  History
    ratings = pd.read_csv('similar users.csv')
    ratings = ratings.dropna()

    popular_products = pd.DataFrame(ratings.groupby('ITEM',as_index=False)['Rating'].count())
    most_popular = popular_products.sort_values('Rating', ascending=False).reset_index()

    recommendation = {}
    for i in range(10):
        item = {}
        with open('Unique Items with ProductId.csv', 'r') as csvfile:
            datareader = csv.reader(csvfile)
            for row in datareader:
                if row[0] == most_popular['ITEM'][i]:
                    price = row[2]
                    imgLink = row[4]
                    size = row[5]
                    id = row[1]
                    break

        item["item"] = most_popular['ITEM'][i]
        item["price"] = price
        item["imgLink"] = imgLink
        item["size"] = size
        item["api"] = "New User"
        recommendation[id] = item

    # output = most_popular

    return jsonify(recommendation)


if __name__ == "__main__":
    app.run(debug=True)