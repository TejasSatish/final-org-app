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
from pathlib import Path

# print('Hello World')

# with open("../assets/model.pkl", "rb") as f:
#     loadedKModel = pickle.load(f)

# loadedKModel.predict([[45,10.7]])

myPaths={
    'kidney_pickle':'/home/ubuntu/final-org-app/backend/assets/kidney_model.pkl',
    'liver_pickle':'/home/ubuntu/final-org-app/backend/assets/liver_model.pkl',
    'kidney_dataset':'/home/ubuntu/final-org-app/backend/assets/kidney-tabular-actgan.csv',
    'liver_dataset':'/home/ubuntu/final-org-app/backend/assets/liver-tabular-actgan.csv',
    'queryResult':'/home/ubuntu/final-org-app/backend/assets/queryResult.csv',
    'matchJson':'/home/ubuntu/final-org-app/backend/assets/match.json',
    'donor_data':'/home/ubuntufinal-org-app/backend/assets/organ_bank_donor.csv'
}

# myPaths={
#     'kidney_pickle':'D:\\Tejas\\SEM7\\final-year-project\\final-org-app\\backend\\assets\\kidney_model.pkl',
#     'liver_pickle':'D:\\Tejas\\SEM7\\final-year-project\\final-org-app\\backend\\assets\\liver_model.pkl',
#     'kidney_dataset':'D:\\Tejas\\SEM7\\final-year-project\\final-org-app\\backend\\assets\\kidney-tabular-actgan.csv',
#     'liver_dataset':'D:\\Tejas\\SEM7\\final-year-project\\final-org-app\\backend\\assets\\liver-tabular-actgan.csv',
#     'queryResult':'D:\\Tejas\\SEM7\\final-year-project\\final-org-app\\backend\\assets\\queryResult.csv',
#     'matchJson':'D:\\Tejas\\SEM7\\final-year-project\\final-org-app\\backend\\assets\\match.json',
#     'donor_data':'D:\\Tejas\\SEM7\\final-year-project\\final-org-app\\backend\\assets\\organ_bank_donor.csv'
# }

# myPaths={
#     'kidney_pickle':os.path.abspath(os.path.join('..','assets','kidney_model.pkl')),
#     'liver_pickle':os.path.abspath(os.path.join('..','assets','liver_model.pkl')),
#     'kidney_dataset':os.path.abspath(os.path.join('..','assets','kidney-tabular-actgan.csv')),
#     'liver_dataset':os.path.abspath(os.path.join('..','assets','liver-tabular-actgan.csv')),
#     'queryResult':os.path.abspath(os.path.join('..','assets','queryResult.csv')),
#     'matchJson':os.path.abspath(os.path.join('..','assets','match.json')),
#     'donor_data':os.path.abspath(os.path.join('..','assets','organ_bank_donor.csv'))
# }

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
    return json.dumps(data, indent=4)


def findCluster(size,age,organ):
    print('find cluster 1')
    if organ == 'kidney':
        print('find cluster kidney')
        with open(myPaths['kidney_pickle'], "rb") as f:
            loadedKModel = pickle.load(f)
        dataset=pd.read_csv(myPaths['kidney_dataset'],index_col=0)
    elif organ=='liver':
        print('find cluster liver')
        with open(myPaths['liver_pickle'], "rb") as f:
            print('find cluster load liver pickle')
            loadedKModel = pickle.load(f)
        dataset=pd.read_csv(myPaths['liver_dataset'],index_col=0)
    data = {
    "Size": [size],
    "Age": [age]
    }    
    
    #load data into a DataFrame object:
    queryDF = pd.DataFrame(data)
    query=loadedKModel.predict(queryDF[['Size','Age']])

    return query[0]

def findDonorCluster(id,name,organ,locality,bloodtype,tissuetype,gender,age,size):
    cluster=findCluster(size,age,organ)
    print(cluster)
    csv_header=['Id','Name','Organ','Locality','BloodType','TissueTyping','Gender','Age','Size','cluster']
    csv_data=[id,name,organ,locality,bloodtype,tissuetype,gender,age,size,cluster]
    print(csv_data)
    filename = myPaths['donor_data']
    with open(filename, 'a', newline="") as file:
        csvwriter = csv.writer(file) # 2. create a csvwriter object
        #csvwriter.writerow(csv_header) # 4. write the header
        csvwriter.writerow(csv_data) # 5. write the rest of the data

 
# def bloodtypeMatches(bloodtype):
#     match=[]
#     if(bloodtype=='AB+'):
#         match.insert


# passes query point to model and saves match.json
#server.js uses match.json to create results.json
def findRecipientMatch(id,name,organ,locality,bloodtype,tissuetyping,gender,age,size):
    print('in re ci match 1')
    #find cluster of recipient
    cluster=findCluster(size,age,organ)
    print('found cluster')
    #get same cluster donors 
    donor_csv=pd.read_csv(myPaths['donor_data'],index_col=0)
    #sameCluster=dataset.loc[dataset['cluster']==query[0]]
    
    clusterMatch= donor_csv.loc[(donor_csv['Organ']==organ) & (donor_csv['cluster']==cluster)]

    clusterMatch.to_csv(myPaths['queryResult'])
    
    matchJson=csv_to_json(myPaths['queryResult'])

    with open(myPaths['matchJson'], "w") as outfile:
        print(matchJson, file=outfile)
    

print('py script called')

if(sys.argv[10] == 'recipient'):
    print('re ci')
    findRecipientMatch(sys.argv[1],sys.argv[2],sys.argv[3],sys.argv[4],sys.argv[5],sys.argv[6],sys.argv[7],sys.argv[8],sys.argv[9])
elif(sys.argv[10] == 'donor'):
    print('do no')
    findDonorCluster(sys.argv[1],sys.argv[2],sys.argv[3],sys.argv[4],sys.argv[5],sys.argv[6],sys.argv[7],sys.argv[8],sys.argv[9])
print('script exec over')
sys.stdout.flush()

