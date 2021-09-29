from flask import Flask, request, abort, redirect, send_from_directory, render_template, url_for, flash
from flask_cors import CORS
from functools import wraps
import json
#from twitter import search
import jpype
import datetime
import time
import os
import json
import pandas as pd
import data
import numpy as np
app = Flask(__name__)
app.secret_key = 'thisisthesupersecretkey'
CORS(app)

@app.route('/stamp/recommend', methods=['get','post'])
def stamp_recommend():
    if request.method == 'GET':
        sd = data.StampDataset()
        #rst = {}
        #rst['url'] = item.url
        #rst['url_image'] = item.url_image
        #rst['name']  = item.stamp_name
        #return '{"url":"https://www.saegigo.com/goods/view?no=128", "name":"이쁜 도장"}'
        N = sd.table2.shape[0]
        answers = []
        for i in range(N):
            item = sd.table2.iloc[i]
            D = len(item)
            ans = []
            for it in item[3:]:
                if pd.isnull(it):
                    break
                ans.append(it)

            answers.append(ans)

        questions = [item for item in sd.table2.question]

        return render_template('stamp_recommend.html',
                           questions = questions,
                          answers = answers)
    else:
        #for i in range(0):
        #    print('a'str(i))
        return str(request.form)

@app.route('/stamp/random', methods=['get'])
def stamp_random():
    sd = data.StampDataset()
    item = sd.get_random_stamp()
    rst = {}
    rst['url'] = item.url
    rst['url_image'] = item.url_image
    rst['name']  = item.stamp_name
    #return '{"url":"https://www.saegigo.com/goods/view?no=128", "name":"이쁜 도장"}'
    return render_template('stamp.html', rst=rst)


@app.route('/', methods=['GET'])
def index():
    #return render_template('index.html', username = username)
    sd = data.StampDataset()
    item = sd.get_random_stamp()
    rst = {}
    rst['url'] = item.url
    rst['url_image'] = item.url_image
    rst['name']  = item.stamp_name
    #return '{"url":"https://www.saegigo.com/goods/view?no=128", "name":"이쁜 도장"}'
    return render_template('index.html', rst=rst)

@app.route('/api/stamp/random', methods=['GET'])
def api_stamp_random():
    sd = data.StampDataset()
    item = sd.get_random_stamp()
    rst = {}
    rst['url'] = item.url
    rst['url_image'] = item.url_image
    rst['name']  = item.stamp_name
    return json.dumps(rst)

@app.route('/api/stamp', methods=['GET'])
def stamp():
    #return render_template('index.html', username = username)
    #q1 = request.args['q1']
    #q2 = request.args['q2']
    #q3 = request.args['q3']
    #q4 = request.args['q4']
    #q5 = request.args['q5']
    #q6 = request.args['q6']
    #q7 = request.args['q7']
    #q8 = request.args['q8']
    #q9 = request.args['q9']
    #q10 = request.args['q10']
    #q11 = request.args['q11']
    sd = data.StampDataset()
    item = sd.get_random_stamp()
    rst = {}
    rst['url'] = item.url
    rst['url_image'] = item.url_image
    rst['name']  = item.stamp_name
    return json.dumps(rst)
    #return '{"url":"https://www.saegigo.com/goods/view?no=128", "name":"이쁜 도장"}'

if __name__=='__main__':
    #app.run(host='0.0.0.0',port=8081)
    app.run(host='0.0.0.0',port=8080, debug=True)
