import csv
predictorFile =csv.reader(open('machine.predictors', 'rb'), delimiter=' ')
row1 = predictorFile.next()

gemMapped=csv.reader(open('gemMappedFasta.sam', 'rb'), delimiter='\t')
row2 = gemMapped.next()

scores= open("NNDLResults.txt", "r")
score = str(int(scores.next()))

finalFile =open("gemMappedFastaWMl.sam", "w")

while (row2 != None):
    if str(row1[0]) == str(row2[0]):
        toWriteString = (row2[0], row2[1], row2[2], row2[3], score, row2[5], row2[6], row2[7], row2[8], row2[9], row2[10], row2[11], row2[12], row2[13])
        for item in toWriteString:
            finalFile.write(item+ "\t")
        finalFile.write("\n")
        try:
            row2 = gemMapped.next()
            row1 = predictorFile.next()
            score = str(int(scores.next()))
        except StopIteration:
                break

    else:
        for item in row2:
            finalFile.write(item + "\t")
        finalFile.write("\n")
        try:
            row2 = gemMapped.next()
        except StopIteration:
                break
