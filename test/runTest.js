var rawTask = require('../index.js').rawTask;

var options = {
  traceurOptions: {
    sourceMaps: true
  },
  moduleMaps: {
    "mappedFile": "../test_files/fileToMap.js"
  }
}

var files = [{
  src: ['test_files/main.js'],
  dest: 'test_output/output.js'
}]

var done = function() {
  process.exit(0);
}

rawTask(options, files, done);
