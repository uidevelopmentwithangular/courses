var studentdata = {
    name : "",
    type : "Student"

}


document.addEventListener('DOMContentLoaded', contentLoaded);
function contentLoaded(event){
    document.getElementById('name').addEventListener('keyup', keyup);
}

function keyup(event){
    calculateNumericoutput();
}

function calculateNumericoutput(){
    studentdata.name = document.getElementById('name').value;
    var totalvalue = 0;
    for(var i =0; i< studentdata.name.length; i++){
        totalvalue += studentdata.name.charCodeAt(i);
    }
    var output = "Total Numeric Value is "+ totalvalue;
    document.getElementById('output').innerText = output;
}

