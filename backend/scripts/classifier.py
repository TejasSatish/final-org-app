#vscode may show warnings with imports but this is because its uses the %PATH% version of python to compile,
#not the python version installed in the venv
#use an external terminal and run it
#for more help, visit https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/ 
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.neighbors import NearestNeighbors
from sklearn.cluster import KMeans
import sys
import pickle
import os

# print('Hello World')

# with open("../assets/model.pkl", "rb") as f:
#     loadedKModel = pickle.load(f)

# loadedKModel.predict([[45,10.7]])

def sayHello(age,size):
    with open("../assets/model.pkl", "rb") as f:
        loadedKModel = pickle.load(f)

    query=loadedKModel.predict([[age,size]])
    print(query)
    


print(sayHello(sys.argv[1],sys.argv[2]))
#print(os.environ['VIRTUAL_ENV']+" "+os.path.dirname(sys.executable))

sys.stdout.flush()
 ###TO DO
 ### runs w/o error from venv terminal, shows FileNotFound error for model when run