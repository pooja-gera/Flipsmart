from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from pandas import *
import csv

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['GET'])
def home():
    return '''Similar Products'''

@app.route('/predict/<string:txt>', methods=['GET'])
def predict(txt):
    data = read_csv("silimar-product.csv")
    item1 = data['item 1'].to_list()
    item2 = data['item 2'].to_list()

    ans = ""
    for i in range(len(item1)):
        if item2[i] == txt:
            ans = item1[i]
            break
        elif item1[i] == txt:
            ans = item2[i]
            break
    print(ans)

    with open('Unique Items with ProductId.csv', 'r') as csvfile:
        datareader = csv.reader(csvfile)
        for row in datareader:
            if row[0] == ans:
                price = row[2]
                imgLink = row[4]
                size = row[5]
                id = row[1]
                break

    return jsonify({"item": ans, "price": price, "imgLink": imgLink, "size": size, "api": "Similar Product", "id": id})

if __name__ == "__main__":
    app.run(debug=True)