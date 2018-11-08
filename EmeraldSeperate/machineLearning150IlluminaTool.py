import numpy
import tensorflow as tf
import os

session_conf = tf.ConfigProto(intra_op_parallelism_threads=1, inter_op_parallelism_threads=1)
from keras.models import load_model



model = load_model('NN1209Model2.h5')

#file to write to
toWriteTo = open("NNDLResults.txt", "w")


#ToTest
dataset2 = numpy.loadtxt("toRunNeuralNetwork.csv",delimiter=",")
toPredictOn= dataset2[:,0:13]


#actual prediction
prediction = (model.predict(toPredictOn))

#write file
for x in prediction:
	value = (int(round(-10*numpy.log10(1-x))))
	if(value > 21):
		toWriteTo.write("100\n")
	elif(value > 20):
		toWriteTo.write("60\n")
	elif(value > 19):
		toWriteTo.write("45\n")
	else:
		toWriteTo.write(str(value))
		toWriteTo.write("\n")
