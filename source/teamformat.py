import json
jsondata = {}
i = 0
while True:
	jsondata = {"name":raw_input("Person Name >> "),"bio":raw_input("Person Bio >> "),"team":raw_input("Subteam >>")}
	file = open('teammembers/member_'+str(i)+'.json','w')
	i+= 1
	file.write(json.dumps(jsondata))
	file.close()
	break
	

