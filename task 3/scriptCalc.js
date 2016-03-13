
var res = null;
var lastOper = "";
var clearField = false;

    var field = document.getElementById("field");
    var btns = document.getElementsByTagName("button");
    for (var i = 0; i < btns.length; i++) {
        var btn = btns[i];
        btn.onclick = function() {
            var val = this.value;
            switch (val) {
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                case "0":
                    if (clearField) {
                        field.value = "";
                        clearField = false;
                        }
                    field.value += val;
                    break;
                case ".":
                    if (clearField) {
                        field.value = "";
                        clearField = false;
                    }
                    field.value += val;
                   
                    break;      
                case "plusMinus":
                    field.value = parseFloat(field.value * -1);    
                    break; 
                case "addition":
                    clearField = true;
                    Calc(res, parseFloat(field.value), lastOper);
                    lastOper = val;                
                    break;
                case "subtract":
                    clearField = true;
                    Calc(res, parseFloat(field.value), lastOper);
                    lastOper = val;                
                    break;
                case "multiply":
                    clearField = true;
                    Calc(res, parseFloat(field.value), lastOper);
                    lastOper = val;                
                    break;
                case "division":
                    clearField = true;
                    Calc(res, parseFloat(field.value), lastOper);
                    lastOper = val;                
                    break;
                case "getResult":
                    if (res != null) {
                        clearField = true;
                        Calc(res, parseFloat(field.value), lastOper);
                        field.value = res;
                        res = null;
                    }
                    break;
                case "reset":
                    res = null;
                    lastOper = "";
                    clearField = false;
                    field.value = "";
                    break;
            }
        }
    }  

function Calc(arg1, arg2, oper) {
    switch(oper) {
        case "addition":
            res = arg1 + arg2;
            break;
        case "subtract":
            res = arg1 - arg2;
            break;
        case "multiply":
            res = arg1 * arg2;
            break;
        case "division":
            res = arg1 / arg2;
            if (field.value == 0) { alert("! Запрет / на ноль !"); }
            break;
        default:
            res = arg2;    
    }
}

