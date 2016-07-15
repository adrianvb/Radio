#!/usr/bin/python
# -*- coding: utf-8 -*-

import json
import sys

reload(sys)
sys.setdefaultencoding('utf-8')

aws = {}
aws['RadioStation'] = [];

search_terms = ['ndr', 'swr', 'wdr', 'deutschlandradio', 'bayern', 'antenne', 'hamburg', 'hessen', 'niedersachen']

with open ('./stations.json','r') as f:
    data = json.load(f)
    #print data
    for row in data['radio-station']:
        for term in search_terms:
            if term in row['title'].lower() or term in row['description'].lower(): 
                print (row['title'].encode('utf-8'))