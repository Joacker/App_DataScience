from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
from sklearn.neighbors import KNeighborsClassifier

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

def KNN(x, y):
    scaler = MinMaxScaler()
    x = scaler.fit_transform(x)
    #print(len(x))
    #print(y)
    
    # MEJOR VALOR DE K
    k = mejor_pres(x, y)

    # CLASIFICACIÓN
    knn = KNeighborsClassifier(k)
    knn.fit(x, y)

    return knn

    # # PREDECIR VALOR SEGÚN LOS DATOS
    # pred = knn.predict([test])
    # print(pred)

    # # PREDECIR LAS DEMÁS PROBABILIDADES
    # print(knn.predict_proba([test]))