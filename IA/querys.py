import pandas as pd
import modelo


def querys():
    dataframe = pd.read_csv(r"./csv_normalize_2018v2.csv",sep=',')
    
    pred = []

    print("Cálculando modelos...")

    print("Modelo 0")
    # CAUSA EN FUNCIÓN DE COMUNA - POS 0
    x = dataframe[['Encoded_comuna']].values
    y = dataframe['Cód_Causa'].values
    pred.append(modelo.KNN(x, y))

    # ints_list2 = list(dict.fromkeys(y))
    # print(ints_list2)

    print("Modelo 1")
    # COMUNA CON MAYOR PROBABILIDAD DE X FALLECIDOS - POS 1
    x = dataframe[['Fallecidos']].values
    y = dataframe['Encoded_comuna'].values
    pred.append(modelo.KNN(x, y))

    print("Modelo 2")
    # COMUNA MÁS PROBABLE PARA CIERTA CAUSA - POS 2
    x = dataframe[['Cód_Causa']].values
    y = dataframe['Encoded_comuna'].values
    pred.append(modelo.KNN(x, y))

    print("Modelo 3")
    # TIPO DE UBICACIÓN EN FUNCIÓN DEL TIPO DE ACCIDENTE Y COMUNA - POS 3
    x = dataframe[['Cód_Tipo_', 'Encoded_comuna']].values
    y = dataframe['Cód_Ubica'].values
    pred.append(modelo.KNN(x, y))

    print("Modelo 4")
    # ESTADO DE CALZADA EN FUNCIÓN DE X FALLECIDOS - POS 4
    x = dataframe[['Fallecidos']].values
    y = dataframe['Cód_Estad'].values
    pred.append(modelo.KNN(x, y))

    print("Modelo 5")
    # CLIMA EN FUNCIÓN DE X FALLECIDOS - POS 5
    x = dataframe[['Fallecidos']].values
    y = dataframe['Cód_Est_1'].values
    pred.append(modelo.KNN(x, y))

    print("Modelo 6")
    # CAUSA EN FUNCIÓN DE X FALLECIDOS - POS 6
    x = dataframe[['Fallecidos']].values
    y = dataframe['Cód_Causa'].values
    pred.append(modelo.KNN(x, y))

    print("Modelo 7")
    # ESTADO DE LA CALLE EN RELACIÓN A UNA COMUNA Y UN TIPO DE CALZADA - POS 7
    x = dataframe[['Encoded_comuna', 'Cód__Tipo']].values
    y = dataframe['Cód_Estad'].values
    pred.append(modelo.KNN(x, y))

    print("Modelo 8")
    # EN FUNCIÓN DEL MES DETERMINA CAUSA
    x = dataframe[['Encoded_mes']].values
    y = dataframe['Cód_Causa'].values
    pred.append(modelo.KNN(x, y))

    print("Modelo 9")
    # EN FUNCIÓN DEL MES DETERMINA COMUNA
    x = dataframe[['Encoded_mes']].values
    y = dataframe['Encoded_comuna'].values
    pred.append(modelo.KNN(x, y))

    print("Modelo 10")
    # EN FUNCIÓN DEL MES DETERMINA CLIMA
    x = dataframe[['Encoded_mes']].values
    y = dataframe['Cód_Est_1'].values
    pred.append(modelo.KNN(x, y))

    return pred