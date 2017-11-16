


const Consumer = require('sqs-consumer');

const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-1.amazonaws.com/977584754471/test1',
  handleMessage: (message, done) => {
    // do some work with `message`
    console.log(message);
    done();
  }
});

app.on('error', (err) => {
  console.log(err.message);
});

app.start();
