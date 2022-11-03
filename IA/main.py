from flask import Flask, jsonify, request
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import classification_report
from sklearn.metrics import confusion_matrix
import pandas as pd
import numpy as np

app = Flask(__name__)
message = 'asdasd'

@app.route('/api', methods=['GET'])
def ping():
    dataframe = pd.read_csv(r"csv_normalize_2018.csv",sep=';')
    dataframe.head(10)
    return jsonify({'message': message})

if __name__== "__main__":
    app.run(host='0.0.0.0', port=80, debug = True, threaded = True)