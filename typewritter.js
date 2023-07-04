// typewritter takes in a sentence and writes it to the console one letter at a time with a delay 
// it relies on setTimeOutBeforePrinting function to set the timeouts 
const typewritter = (sentence) => {
  let timesCalled = 0;
  

  // for each char of the sentence we call setTimeoutBeforePrinting, with char
  // and timesCalled as an argument. timesCalled is incremented each loop 
  for (const char of sentence) {
    setTimeOutBeforePrinting(char, timesCalled);
    timesCalled++;
  }

  
  setTimeOutBeforePrinting("\n", timesCalled);
};


// helper function that sets a modifier to passed to setTimeout each time it is called
const setTimeOutBeforePrinting = (char, timesCalled) => {
  const modifier = timesCalled * 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, 0 + modifier);
};

typewritter("beans beans beans");

