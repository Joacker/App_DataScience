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
dataframe = pd.read_csv(r"./csv_normalize_2018.csv",sep=',')

def query1():
    #print(dataframe.head(10))
    print("hola2")
    print("alo1")
    print(dataframe.describe())
    print(dataframe.groupby('Cód_Causa').size())
    
    X = dataframe[['Cód_Zona','Encoded_comuna']].values
    y = dataframe['Cód_Causa'].values

    X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=0)
    scaler = MinMaxScaler()
    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)
    n_neighbors=7

    knn = KNeighborsClassifier(n_neighbors)
    knn.fit(X_train, y_train)
    print('Accuracy of K-NN classifier on training set: {:.2f}'.format(knn.score(X_train, y_train)))
    print('Accuracy of K-NN classifier on test set: {:.2f}'.format(knn.score(X_test, y_test)))
    pred = knn.predict(X_test)
    print(confusion_matrix(y_test, pred))
    print(classification_report(y_test, pred)) 
    #print(knn.score(X_train, y_train))
    return format(knn.score(X_train, y_train))
    
@app.route('/api', methods=['GET'])
def ping():
    return jsonify({'prob1': query1()})

if __name__== "__main__":
    query1()
    app.run(host='0.0.0.0', port=80, debug = True, threaded = True)