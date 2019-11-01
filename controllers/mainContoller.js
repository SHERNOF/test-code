const User = require('../models/Main')

exports.home = function (req, res){
    res.render('main')
}

exports.register = function (req, res){
    
    console.log(req.body)
    res.send('nice')
}

exports.downtime = function downtime(req, res){
    var start = Date.parse($("input#dateS").val());
    var end = Date.parse($("input#dateR").val());
    var hr = 1000*60*60
    var dif = end - start
    var dwntime = (dif/hr)
    document.getElementById("dtm").value = dwntime
    }