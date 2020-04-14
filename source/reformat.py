import os

cwd = os.getcwd()

files = os.listdir(cwd)
i = 0
for filex in files:
	if(filex[-4:] == ".jpg"):
		os.rename(cwd+"/"+filex,cwd+"/output/image_"+str(i)+".jpg")
		print filex	
		i = i+1

