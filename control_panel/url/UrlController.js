var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var Url = require('./Url');


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
    var text = "https://thepk.xyz/";
    var t; 
    for (i = 0; i<7;i++){
        x = Math.floor(Math.random()*62);
        t = map[x];         
        text += t;
    }
    return text;
}


// CREATES A NEW URL
router.post('/', function (req, res) {
    var slugVal = createSlug();
    Url.create({
            slug : slugVal,
            destination : req.body.destination
        }, 
        function (err, url) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(url);
        });
});

// RETURNS ALL THE URLS IN THE DATABASE
router.get('/urls', function (req, res) {
    Url.find({}, function (err, urls) {
        if (err) return res.status(500).send("There was a problem finding the urls.");
        res.status(200).send(urls);
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

