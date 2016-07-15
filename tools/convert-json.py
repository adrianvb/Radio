import json

aws = {}
aws['RadioStation'] = [];

with open ('../app/radio/assets/stations.json','r') as f:
    data = json.load(f)
    for row in data['radio-station']:
        print (row)