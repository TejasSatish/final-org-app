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

# print('Hello World')

# with open("../assets/model.pkl", "rb") as f:
#     loadedKModel = pickle.load(f)

# loadedKModel.predict([[45,10.7]])
#"/home/wsdev88/t/final-org-app/backend/assets/model.pkl"
#'/home/wsdev88/t/final-org-app/backend/assets/gan_data.csv'
def findRecipientMatch(size,age):
    with open("D:\\Tejas\\SEM7\\final-year-project\\final-org-app\\backend\\assets\\model.pkl", "rb") as f:
        loadedKModel = pickle.load(f)
    data = {
    "Size": [size],
    "Age": [age]
    }

    dataset=pd.read_csv("D:\\Tejas\\SEM7\\final-year-project\\final-org-app\\backend\\assets\\gan_data.csv")

    #load data into a DataFrame object:
    queryDF = pd.DataFrame(data)
    query=loadedKModel.predict(queryDF[['Size','Age']])

    # sameCluster=dataset.loc[dataset['cluster']==query[0]]
    
    #bloodTypeMatch=sameCluster.loc[(dataset['BloodType']=='B-') | (dataset['BloodType']=='B+') | (dataset['BloodType']=='AB+')]

    clusterMatch= dataset.loc[dataset['cluster']==query[0]].to_json()
    print(clusterMatch)



findRecipientMatch(sys.argv[1],sys.argv[2])