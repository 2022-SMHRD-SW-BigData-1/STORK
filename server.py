from flask import Flask, render_template
from flask import request, redirect
from tensorflow import keras
import numpy as np

app = Flask(__name__)

model = keras.models.load_model('best_model_GRU.h5')
# model = load_model('model/my_fashion_mnist_model.h5')
 
@app.route('/test', methods =['POST','GET'])
def hello() :
    #temp = model.summary()
    #if request.method =='POST' :
        # test = request.form['id']
        # num = 1 + 1 
        # print(test)
    # print('hi')
    # temp = model.predict("안녕")
    # model.predict("안돼")  
    test = 1
    return f"요약 : {test}"
    # return {"members" : ["1","2","3",f"{test}"]}
    #return "ssssssssssssssssssssssssssss"

if __name__ == "__main__" :
    app.run(debug=True)