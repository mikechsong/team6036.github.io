import json
jsondata = {}
i = 0
con = True
while con:
	jsondata[i] = {"joke":raw_input("Joke >> "),"person":raw_input("Person >> ")}
	i +=1

	if(raw_input("Quit? (y/n) >> ") == 'y'):
		break
file = open('jokes3.json','w')
file.write(json.dumps(jsondata))
file.close()
	

