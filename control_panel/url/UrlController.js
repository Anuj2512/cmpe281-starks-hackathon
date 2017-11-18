var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var Url = require('./Url');
var Producer = require('sqs-producer');
 
 
// create custom producer (supporting all opts as per the API docs: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html#constructor-property)
var producer = Producer.create({
  queueUrl: 'https://sqs.us-west-1.amazonaws.com/977584754471/controlpanelqueue',
  region: 'us-west-1',
  accessKeyId: 'AKIAIEGAN5IFBPJJJSUA',
  secretAccessKey: '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'
});


function createSlug(){
    var arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
                "p","q","r","s","t","u","v","w","x","y","z","1","2","3","4",
                "5","6","7","8","9","0","A","B","C","D","E","F","G","H","I",
                "J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X",
                "Y","Z"];
    var map = {};
    var i;
    for(i = 0; i<62; i++){
        map[i] = arr[i];
    }
    var x;
    var text = "http://thepk.xyz/";
    var t; 
    for (i = 0; i<7;i++){
        x = Math.floor(Math.random()*62);
        t = map[x];         
        text += t;
    }
    return text;
}

// CREATES A NEW URL
router.post('/url', function (req, res) {
     if(!req.body.custom){
        console.log("no custom");
        var slugVal = createSlug();
        producer.send([{
            id: 'id1',
            body: slugVal + ',' + req.body.destination
        }], function(err) {
                if (err) console.log(err);
            });
        Url.create({
            slug : slugVal,
            destination : req.body.destination,
            createdAt : new Date()
        }, 
        function (err, url) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).json({slug : url.slug});
        });
    } else{
        console.log("Custom")
        var s = "http://thepk.xyz/" + req.body.custom;

        Url.findOne({slug: s}, function(err, url) {
        if(err){
            return res.status(500).send("There was a problem finding the url.");
        }
        if(url) 
            return res.json({error: 'Shortlink is already present! Try other names.'});
        else{
            producer.send([{
                id: 'id1',
                body: s + ',' + req.body.destination
            }], function(err) {
                if (err) console.log(err);
            });
            Url.create({
                slug : s,
                destination : req.body.destination,
                createdAt: new Date()
            }, 
            function (err, url) {
                if (err) return res.status(500).send("There was a problem adding the information to the database.");
                return res.status(200).send(url);
            });        
        }

    });  
        
    }
});

// CREATE A SHORT URL (OPTIONAL CUSTOM)
router.post('/d', function (req, res) {
    if(!req.body.custom){
        console.log("No Custom")
        var slugVal = createSlug();
        Url.create({
            slug : slugVal,
            destination : req.body.destination
        }, 
        function (err, url) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(url);
        });
    }
    else{
        console.log("Custom")

        // Get just slug value, here it is taking full short url.
        var ck = Url.findOne({slug: req.body.custom},{slug:0})
        console.log(ck)
        if (!ck)
        {
        Url.create({
            slug : req.body.custom,
            destination : req.body.destination
        }, 
        function (err, url) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(url);
        });
        }
        res.send("This ShortURL is already taken.")    
    }
});

// RETURNS ALL THE URLS IN THE DATABASE
router.get('/urls', function (req, res) {
    Url.find({}, function (err, urls) {
        if (err) return res.status(500).send("There was a problem finding the urls.");
        res.status(200).json(urls);
        //res.set('Content-Type','application/javascript; charset=utf-8');
    });
});

// GETS A SINGLE URL FROM THE DATABASE
router.get('/:id', function (req, res) {
    Url.findById(req.params.id, function (err, url) {
        if (err) return res.status(500).send("There was a problem finding the url.");
        if (!url) return res.status(404).send("No url found.");
        res.status(200).send(url);
    });
});

router.get('/:slug', function (req, res) {
    Url.findOne({slug: req.params.slug}, function(err, url) {
        if(err){
            return res.status(500).send("There was a problem finding the url.");
        }
        if(!url){
            return res.status(404).send();
        }

        return res.status(200).send(url.destination);
    }); 
});



// DELETES A URL FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Url.findByIdAndRemove(req.params.id, function (err, url) {
        if (err) return res.status(500).send("There was a problem deleting the url.");
        res.status(200).send("Url "+ url.destination +" was deleted.");
    });
});

// UPDATES A SINGLE URL IN THE DATABASE
router.put('/:id', function (req, res) {
    
    Url.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, url) {
        if (err) return res.status(500).send("There was a problem updating the url.");
        res.status(200).send(url);
    });
});

module.exports = router;

