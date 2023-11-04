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
    'pickle':'D:\\Tejas\\SEM7\\final-year-project\\final-org-app\\backend\\assets\\model.pkl',
    'dataset':'D:\\Tejas\\SEM7\\final-year-project\\final-org-app\\backend\\assets\\gan_data.csv',
    'queryResult':'D:\\Tejas\\SEM7\\final-year-project\\final-org-app\\backend\\assets\\queryResult.csv',
    'matchJson':'D:\\Tejas\\SEM7\\final-year-project\\final-org-app\\backend\\assets\\match.json',
    'donor_data':'D:\\Tejas\\SEM7\\final-year-project\\final-org-app\\backend\\assets\\organ_bank_donor.csv'
}

#converts a csv file to json
def csv_to_json(csvFilePath):
     
    #dictionary
    data = {}
     
    # Open a csv reader called DictReader
    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        index=0
        # Convert each row into a dictionary 
        # and add it to data
        for rows in csvReader:
             
            # Assuming a column named 'No' to
            # be the primary key
            key = rows['Id']
            data[key] = rows

    # function to dump data
    data
    return json.dumps(data, indent=4)


def findCluster(size,age):
    with open(windows['pickle'], "rb") as f:
        loadedKModel = pickle.load(f)
    data = {
    "Size": [size],
    "Age": [age]
    }

    dataset=pd.read_csv(windows['dataset'],index_col=0)

    #load data into a DataFrame object:
    queryDF = pd.DataFrame(data)
    query=loadedKModel.predict(queryDF[['Size','Age']])

    return query

def findDonorCluster(id,name,locality,bloodtype,tissuetype,gender,age,size):

    cluster=findCluster(size,age)

    csv_header=['Id','Name','Locality','BloodType','TissueTyping','Gender','Age','Size','cluster']
    csv_data=[id,name,locality,bloodtype,tissuetype,gender,age,size,cluster[0]]
    filename = windows['donor_data']
    with open(filename, 'a', newline="") as file:
        csvwriter = csv.writer(file) # 2. create a csvwriter object
        #csvwriter.writerow(csv_header) # 4. write the header
        csvwriter.writerow(csv_data) # 5. write the rest of the data

 

# passes query point to model and saves match.json
#server.js uses match.json to create results.json
def findRecipientMatch(id,name,locality,bloodtype,tissuetyping,gender,age,size):
    
    #find cluster of recipient
    cluster=findCluster(size,age)

    #get same cluster donors 
    donor_csv=pd.read_csv(windows['donor_data'],index_col=0)
    #sameCluster=dataset.loc[dataset['cluster']==query[0]]
    
    #bloodTypeMatch=sameCluster.loc[(dataset['BloodType']=='B-') | (dataset['BloodType']=='B+') | (dataset['BloodType']=='AB+')]

    clusterMatch= donor_csv.loc[donor_csv['cluster']==cluster]

    clusterMatch.to_csv(windows['queryResult'])
    
    matchJson=csv_to_json(windows['queryResult'])

    with open(windows['matchJson'], "w") as outfile:
        print(matchJson, file=outfile)
    


if(sys.argv[9] == 'recipient'):
    findRecipientMatch(sys.argv[1],sys.argv[2],sys.argv[3],sys.argv[4],sys.argv[5],sys.argv[6],sys.argv[7],sys.argv[8])
elif(sys.argv[9] == 'donor'):
    findDonorCluster(sys.argv[1],sys.argv[2],sys.argv[3],sys.argv[4],sys.argv[5],sys.argv[6],sys.argv[7],sys.argv[8])

