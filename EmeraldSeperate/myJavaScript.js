function pythonInstaller(){
  var sys = require('sys');
  var exec = require('child_process').exec;
  var child;
  // executes `pwd`
  sys.print("Installing Python");
  child = exec("gnome-terminal -- /bin/bash -c \'sudo add-apt-repository universe && sudo apt-get update && sudo apt-get install python-pip\'", function (error, stdout, stderr) {
    sys.print(stdout);
    sys.print(stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}

  function gccInstaller(){
  var sys = require('sys');
  var exec = require('child_process').exec;
  var child;
  // executes `pwd`
  sys.print("Installing Git and GCC");
  child = exec("gnome-terminal -- /bin/bash -c \'sudo apt install git; sudo apt-get install gcc\'", function (error, stdout, stderr) {
    sys.print(stdout);
    sys.print(stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}

  function pipTensorFlowInstaller(){
  var sys = require('sys');
  var exec = require('child_process').exec;
  var child;
  // executes `pwd`
  sys.print("Installing Tensorflow");
  child = exec("gnome-terminal -- /bin/bash -c  \'pip install tensorflow\'", function (error, stdout, stderr) {
    sys.print(stdout);
    sys.print(stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}

  function kerasFlowInstaller(){
  var sys = require('sys');
  var exec = require('child_process').exec;
  var child;
  // executes `pwd`
  sys.print("Installing Keras and dependencies");
  child = exec("gnome-terminal -- /bin/bash -c  \'pip install numpy scipy scikit-learn pillow h5py keras\'", function (error, stdout, stderr) {
    sys.print(stdout);
    sys.print(stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}

  function Gem3Installer(){
  var sys = require('sys');
  var exec = require('child_process').exec;
  var child;
  // executes `pwd`
  sys.print("Configuring Gem3");
  child = exec("gnome-terminal -- /bin/bash -c \' git clone --recursive https://github.com/smarco/gem3-mapper.git gem3-mapper; cd gem3-mapper;./configure; make\' ", function (error, stdout, stderr) {
    sys.print(stdout);
    sys.print(stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
 
}



  function fastaIndexer(){
  var sys = require('sys');
  var exec = require('child_process').exec;
  var child;
  sys.print("Indexing with Gem3");
  var toRun = "gnome-terminal -- /bin/bash -c \'./gem3-mapper/bin/gem-indexer -i " + humanGenomeFile.value + " -o generatedIndex\' ";
  child = exec(toRun, function (error, stdout, stderr) {
    sys.print(stdout);
    sys.print(stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}

  function checkSteps(){
  var sys = require('sys');
  var exec = require('child_process').exec;
  var child;
  sys.print("Steps");
  if(document.getElementById('myonoffswitch').checked) {
    var toRun = "gnome-terminal -- /bin/bash -c \'python stepbyStep.py\' ";
      child = exec(toRun, function (error, stdout, stderr) {
        sys.print(stdout);
        sys.print(stderr);
        if (error !== null) {
          console.log('exec error: ' + error);
        }
      });
    }
}

function fastaMapper(){
  var sys = require('sys');
  var exec = require('child_process').exec;
  var child;
  if(document.getElementById('myonoffswitch').checked) {
    sys.print("Mapping with Gem3. Please wait while the code below executes... \n \n");
    var toRun1 = "gnome-terminal -e 'python stepbyStep.py' ;";
    var toRun2 = "./gem3-mapper/bin/gem-mapper -I " + humanGenomeIndex.value + " -i " + FastaFile.value + " -o" + " gemMappedFasta.sam";
    var toRun3 =" --mapq-model=dump-predictors -t1 " + ">" + " machine.predictors";
    var toRun4 = "; awk \'{print $2/61 \",\" 3/115 \",\" $4 \",\" $5 \",\" $6 \",\" $11 \",\" $12 \",\" $13 \",\" $15/35 \",\" $16/89 \",\" $17/10 \",\" $20/9.375 \",\" $22/10.051189 }\' machine.predictors > toRunNeuralNetwork.csv ";

    var toRun5 = ";python machineLearning150IlluminaTool.py";
    var toRun6 = ";python toCreateLastSam.py";
    var toRun7 = "; rm toRunNeuralNetwork.csv; rm NNDLResults.txt; rm machine.predictors ;"
    var toRun = toRun1 + toRun2 + toRun3 + toRun4 + toRun5 + toRun6 + toRun7;

    sys.print(toRun)
        child = exec(toRun, function (error, stdout, stderr) {
          sys.print(stdout);
          sys.print(stderr);
            if (error !== null) {
              console.log('exec error: ' + error);
            }
        });
  }else{
  sys.print("Mapping with Gem3");
  var toRun = "gnome-terminal -- /bin/bash -c './gem3-mapper/bin/gem-mapper -I " + humanGenomeIndex.value + " -i " + FastaFile.value + " -o " + "gemMappedFasta.sam' ";
      child = exec(toRun, function (error, stdout, stderr) {
        sys.print(stdout);
        sys.print(stderr);
          if (error !== null) {
            console.log('exec error: ' + error);
          }
      });
    }
  }

function previewFile(){
    var reader  = new FileReader();
    reader.readAsDataUrl(reader);
  }


function gemOfUser(){
  var reader2  = new FileReader();
  reader.readAsDataUrl(reader2);
}

function fastaOfUser(){
  var reader3  = new FileReader();
  reader.readAsDataUrl(reader3);
}
