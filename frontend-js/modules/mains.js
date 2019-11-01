
// DOM Elements selection

export default class Mains {
    constructor () {
        // alert('test')
        this.onChange = document.querySelector('#dateR')
        this.events()
    }


// Events

events() {
    this.onChange = document.addEventListener("change", () => {
        this.inputValue()
    })

}


// Methods
inputValue(){
    var start = Date.parse($("input#dateS").val());
    var end = Date.parse($("input#dateR").val());
    var hr = 1000*60*60
    var dif = end - start
    var dwntime = Math.round(dif/hr)
    document.getElementById("dtm").value = dwntime
}

}
