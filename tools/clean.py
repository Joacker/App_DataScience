import csv
import pandas as pd
from sklearn.preprocessing import LabelEncoder

PATH = './clean/2018_Columna.csv'

if __name__ == "__main__":
    data = pd.read_csv(PATH, delimiter=';')
    print((data.loc[:,'Fecha'][0]).split("/"))
    for i in range(len(data)):
        data.loc[i,'Fecha'] = (data.loc[i,'Fecha']).split("/")[1]
    print((data.loc[:,'Fecha']))
    
    data['Encoded_mes'] = (data.loc[:,'Fecha'])
    le = LabelEncoder()
    data['Encoded_comuna'] = le.fit_transform(data['Comuna'])

    #print(data['Encoded_comuna'])
    cod = le.classes_

    data.to_csv('../ia/csv_normalize_2018v2.csv')
    #print(data['Encoded_mes'])
    #cod = le.classes_

    #data.to_csv('../ia/csv_normalize_2018.csv')

    
# le = LabelEncoder()

# cod = []
# col_s = ['Gender', 'Customer Type', 'Type of Travel', 'Class', 'satisfaction']

# for col in col_s:
#   data['Encoded_'+col] = le.fit_transform(data[col])
#   cod.append(le.classes_)

# data.info()
# data.head(n=10)