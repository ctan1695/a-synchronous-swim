// import swimFetcher from './httpHandler.js'

console.log('randomSwimmer envoked');

async function waitTime(time) {
  return new Promise((resolve) => {
     setTimeout(resolve, time);
  });
}
async function messageTyper() {
  for (let i = 0; i < 10; i++) {
     await waitTime(2000);
     console.log('my spaced out message')
  }
}



// var success = (data) => {console.log(data)};

//  swimFetcher(success);

