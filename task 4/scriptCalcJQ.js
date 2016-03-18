window.onload = function () { }

var res = null;
var lastOper = "";
var clearField = false;

var calcField = "";


$("button").click(function () {
    var btn = $(this).val();
    switch (btn) {
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
                $("#field").val(btn);
                clearField = false;
                calcField = "";
            }
            calcField += btn;
            $("#field").val(calcField);
            break;

        case ".":
            if (clearField) {
                $("#field").val(btn);
                calcField = "";
                clearField = false;
            }
            calcField += btn;
            $("#field").val(calcField);
            break;

        case "plusMinus":
            var plusMinus = parseFloat($("#field").val() * -1);
            $("#field").val(plusMinus);
            break;
            
        case "addition":
            clearField = true;            
            Calc(res, parseFloat(calcField), lastOper);
            lastOper = btn;
            break;
        case "subtract":
            clearField = true;
            Calc(res, parseFloat(calcField), lastOper);
            lastOper = btn;
            break;
        case "multiply":
            clearField = true;
            Calc(res, parseFloat(calcField), lastOper);
            lastOper = btn;
            break;
        case "division":
            clearField = true;
            Calc(res, parseFloat(calcField), lastOper);
            lastOper = btn;
            break;
        case "getResult":
            if (res != null) {
                clearField = true;
                Calc(res, parseFloat(calcField), lastOper);
                $("#field").val(res);
                calcField = res;
                res = null;
            }
            break;
        case "reset":
            res = null;
            lastOper = "";
            $("#field").val("");
            calcField = "";
            break;
    }
});

function Calc(arg1, arg2, oper) {
    switch (oper) {
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
            if (calcField == 0) { alert("! Запрет / на ноль !"); }
            break;
        default:
            res = arg2;
    }
}


