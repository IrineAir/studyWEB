window.onload = function () {};
    
    var res = null;
    var lastOper = "";
    var clearField = false;

    var calcField = $("#field");
    calcField[0].value = "";
    
    
        $("button").click(function () {
            var btn = this;
            var valBtn = btn.value;
            switch (valBtn) {
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
                        calcField[0].value = "";
                        clearField = false;
                    }
                    calcField[0].value += valBtn;
                    break;
                case ".":
                    if (clearField) {
                        calcField[0].value = "";
                        clearField = false;
                    }
                    calcField[0].value += valBtn;
                    break;
                case "plusMinus":
                    calcField[0].value = parseFloat(calcField[0].value * -1);    
                    break; 
                case "addition":
                    clearField = true; 
                    Calc(res, parseFloat(calcField[0].value), lastOper);
                    lastOper = valBtn;                
                    break;
                case "subtract":
                    clearField = true;
                    Calc(res, parseFloat(calcField[0].value), lastOper);
                    lastOper = valBtn;                
                    break;
                case "multiply":
                    clearField = true;
                    Calc(res, parseFloat(calcField[0].value), lastOper);
                    lastOper = valBtn;                
                    break;
                case "division":
                    clearField = true;
                    Calc(res, parseFloat(calcField[0].value), lastOper);
                    lastOper = valBtn;                
                    break;
                case "getResult":
                    if (res != null) {
                        clearField = true;
                        Calc(res, parseFloat(calcField[0].value), lastOper);
                        calcField[0].value = res;
                        res = null;
                    }
                    break;
                case "reset":
                    res = null;
                    lastOper = "";
                    calcField[0].value = "";
                    break;
            }
        });
 

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
                if (calcField[0].value == 0) { alert("! Запрет / на ноль !"); }
                break;
            default:
                res = arg2;    
        }
    }
    

   