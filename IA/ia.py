from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import classification_report
from sklearn.metrics import confusion_matrix
import pandas as pd
import numpy as np

message = 'asdasd'
dataframe = pd.read_csv(r"./csv_normalize_2018.csv",sep=',')

def mejor_pres(x, y):
    X_train, X_test, y_train, y_test = train_test_split(x, y, random_state=0)

    mayor = 0
    pos = 0

    for k in range(1, 20):
        knn = KNeighborsClassifier(n_neighbors = k)
        knn.fit(X_train, y_train)
        
        pres = knn.score(X_test, y_test)

        if mayor <= pres:
            mayor = pres
            pos = k
    return pos

def KNN(x, y, test):
    scaler = MinMaxScaler()
    x = scaler.fit_transform(x)

    # MEJOR VALOR DE K
    vecinos = mejor_pres(x, y)
    print('MEJOR K:' + str(vecinos))

    # CLASIFICACIÓN
    knn = KNeighborsClassifier(vecinos)
    knn.fit(x, y)

    # PREDECIR VALOR SEGÚN LOS DATOS
    pred = knn.predict([test])
    print(pred)

    # PREDECIR LAS DEMÁS PROBABILIDADES
    print(knn.predict_proba([test]))

if __name__== "__main__":
    
    # LEVES EN FUNCIÓN DE COMUNA Y TIPO DE CALZADA
    x = dataframe[['Encoded_comuna', 'Cód__Tipo']].values
    y = dataframe['Leves'].values
    test = [14, 2]

    KNN(x, y, test)

    # API
    # app.run(host='0.0.0.0', port=80, debug = True, threaded = True)