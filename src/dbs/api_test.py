import requests

# to schedule on Heroku
#https://devcenter.heroku.com/articles/clock-processes-python

import json

URL = "http://apex.oracle.com/pls/apex/miscapstone19/events/allevents/"

r = requests.get(url = URL)

data = r.json()

print(data)

data2 = []

for d in data['items']:
	data2.append(d['event_name'])

for e in data2:
	print(e)

eventNameList = ",".join(data2)

with open('data.json', 'w') as outfile:
	json.dump(data['items'], outfile)


#writes to data.txt making a new line for each row
#outF = open('data.txt', "w")
#for line in data2:
#	outF.write(line)
#	outF.write("\n")
#outF.close()






#credential_name = "apiV1_cred"

#Client_ID = "events_apiV1"

#Client_Secret = "189204apicapstone#$%!#!@%"