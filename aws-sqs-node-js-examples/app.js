const Consumer = require('sqs-consumer');
const AWS = require('aws-sdk');
 
AWS.config.update({
  region: 'us-west-1',
  accessKeyId: 'AKIAIEGAN5IFBPJJJSUA',
  secretAccessKey: '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'
});
 
const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-1.amazonaws.com/977584754471/test1',
  handleMessage: (message, done) => {
    console.log(message);
    done();
  },
  sqs: new AWS.SQS()
});
 
app.on('error', (err) => {
  console.log(err.message);
});
 
app.start();
