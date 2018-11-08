import os.path

import time
starttime=time.time()
count = 0

while True:
    if (count == 0):
        if (os.path.isfile("gemMappedFasta.sam")):
            print ("You are mapping with Gem3 and generating predictors for ML. 1/3.")
            print ("Make sure you chose both a fasta and index file or this will not complete properly.")

            count = count +1
    if (count ==1):
        if (os.path.isfile("NNDLResults.txt")):
            print("You have Finished Mapping and are now running the Neural Network. 2/3")
            count = count+1
    if(count == 2):
        if(os.path.isfile("gemMappedFastaWMl.sam")):
            if(os.path.isfile("NNDLResults.txt") == False):
                print "DONE! 3/3. Closing in 3 seconds."
                time.sleep(3)
                break
    time.sleep(1)
