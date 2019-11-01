exports.downtime = function (req, res){
    var start = Date.parse($("input#dateS").val());
    var end = Date.parse($("input#dateR").val());
    var hr = 1000*60*60
    var dif = end - start
    var dwntime = (dif/hr)
    document.getElementById("dtm").value = dwntime
    }