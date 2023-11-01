#vscode may show warnings with imports but this is because its uses the %PATH% version of python to compile,
#not the python version installed in the venv
#use an external terminal and run it
#for more help, visit https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/ 
#ALWAYS USE ABSOLUTE PATHS
import numpy as np
import pandas as pd
#import matplotlib.pyplot as plt
from sklearn.neighbors import NearestNeighbors
from sklearn.cluster import KMeans
import sys
import pickle
import os
import json
import csv

# print('Hello World')

# with open("../assets/model.pkl", "rb") as f:
#     loadedKModel = pickle.load(f)

# loadedKModel.predict([[45,10.7]])

picklePath=os.path.abspath("../assets/model.pkl")
datasetPath=os.path.abspath("../assets/gan_data.csv")

ubuntu={
    'pickle':'/home/wsdev88/t/final-org-app/backend/assets/model.pkl',
    'dataset':'/home/wsdev88/t/final-org-app/backend/assets/gan_data.csv',
    'queryResult':'/home/wsdev88/t/final-org-app/backend/assets/queryResult.csv',
    'matchJson':'/home/wsdev88/t/final-org-app/backend/assets/match.json'
}

windows={
    'pickle':'/home/wsdev88/t/final-org-app/backend/assets/model.pkl',
    'dataset':'/home/wsdev88/t/final-org-app/backend/assets/gan_data.csv',
    'queryResult':'/home/wsdev88/t/final-org-app/backend/assets/queryResult.csv',
    'matchJson':'/home/wsdev88/t/final-org-app/backend/assets/match.json'
}

#converts a csv file to json
def csv_to_json(csvFilePath):
     
    #dictionary
    data = {}
     
    # Open a csv reader called DictReader
    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
         
        # Convert each row into a dictionary 
        # and add it to data
        for rows in csvReader:
             
            # Assuming a column named 'No' to
            # be the primary key
            key = rows['No']
            data[key] = rows

    # function to dump data
    return json.dumps(data, indent=4)

# passes query point to model and saves match.json
#server.js uses match.json to create results.json
def findRecipientMatch(size,age):
    with open(ubuntu['pickle'], "rb") as f:
        loadedKModel = pickle.load(f)
    data = {
    "Size": [size],
    "Age": [age]
    }

    dataset=pd.read_csv(ubuntu['dataset'],index_col=0)

    #load data into a DataFrame object:
    queryDF = pd.DataFrame(data)
    query=loadedKModel.predict(queryDF[['Size','Age']])

    #sameCluster=dataset.loc[dataset['cluster']==query[0]]
    
    #bloodTypeMatch=sameCluster.loc[(dataset['BloodType']=='B-') | (dataset['BloodType']=='B+') | (dataset['BloodType']=='AB+')]

    clusterMatch= dataset.loc[dataset['cluster']==query[0]]
    clusterMatch.to_csv(ubuntu['queryResult'])
    
    matchJson=csv_to_json(ubuntu['queryResult'])
    with open(ubuntu['matchJson'], "w") as outfile:
        outfile.write(matchJson)
    

findRecipientMatch(sys.argv[1],sys.argv[2])