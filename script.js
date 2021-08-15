function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText = num;
}
function getOutput(){
    return document.getElementById("outputvalue").innerText;
}
function printOutput(num){
    if(num == ""){
        document.getElementById("outputvalue").innerHTML = num;
    }
    else{
        document.getElementById("outputvalue").innerHTML = getFormattedNumber(num);  
    }
}
function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    console.log(value);
    return value;
}
function reverseComma(num){
    return Number(num.replace(/,/g, ''));
}
var operator = document.getElementsByClassName("operator");
for(var i=0; i<operator.length; i++){
    operator[i].addEventListener('click', function(){
        if(this.id=="clear"){
            printOutput("");
            printHistory("");
        }
        else if(this.id=="backspace"){
            var output = reverseComma(getOutput()).toString();
            if(output){
                output = output.substr(0, output.length-1);
                printOutput(output);
            }
        }
        else{
            var output = getOutput();
            var history = getHistory();
            if(output == "" && history!=""){
                if(isNaN(history[history.length-1])){
                    history=history.substr(0, history.length-1);
                }
            }
            if(output!="" || history!=""){
                output = output==""?output:reverseComma(output);
                history = history + output;
                if(this.id=="="){
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                } 
            }
        }
    })
}
var number = document.getElementsByClassName("number");
for(var i=0; i<number.length; i++){
    number[i].addEventListener('click', function(){
        var output = reverseComma(getOutput());
        if (output!=NaN){
            output = output+this.id;
            printOutput(output);
        }
    });
}

function dt() {
    if(document.getElementById("body").style.backgroundColor != "black"){
        document.getElementById("body").style.backgroundColor = "black";
    }
    else{
        document.getElementById("body").style.backgroundColor = "white";
    }
}