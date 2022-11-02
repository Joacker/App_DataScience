import csv
import pandas as pd
from sklearn.preprocessing import LabelEncoder

PATH = './clean/2018_Columna.csv'

if __name__ == "__main__":
    data = pd.read_csv(PATH, delimiter=';')
    # print(data.loc[:,'Fecha'])
    
    le = LabelEncoder()
    data['Encoded_comuna'] = le.fit_transform(data['Comuna'])

    #print(data['Encoded_comuna'])
    cod = le.classes_

    data.to_csv('./clean/csv_normalize_2018.csv')

    
# le = LabelEncoder()

# cod = []
# col_s = ['Gender', 'Customer Type', 'Type of Travel', 'Class', 'satisfaction']

# for col in col_s:
#   data['Encoded_'+col] = le.fit_transform(data[col])
#   cod.append(le.classes_)

# data.info()
# data.head(n=10)