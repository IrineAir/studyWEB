var f = document.forms[0];

var elemRes = document.getElementById("testResult");
    elemRes.onclick = function() {
    var points = 0;
        
        var q1 = f.elements.q1;
        for(var i = 0; i < q1.length; i++) {
                 if (q1[0].checked === true) {
                    points += 1;
                } else {
                    points += 0;
                }
                break;
        }

        var q2 = f.elements.q2;
        for(var i = 0; i < q2.length; i++) {
            if (q2[2].checked === true) {
                    points += 1;
                } else {
                    points += 0;
                }
                break;
        }

        var q3 = f.elements.q3;
        for(var i = 0; i < q3.length; i++) {
            if (q3[2].checked === true) {
                    points += 1;
                } else {
                    points += 0;
                }
                break;
        }

        var q4 = f.elements.q4;
                for(var i = 0; i < q4.length; i++){
           if (q4[i].checked) {
                switch(i){
                   case 1:
                   points += 0.5;
                   break;
                   case 3:
                   points += 0.5;
                   break;
                   case 0:
                   case 2:
                   points += 0;
                   break;
                }
            }
        }

        var q5 = f.elements.q5;
        for(var i = 0; i < q5.length; i++){
           if (q5[i].checked) {
                switch(i){
                   case 0:
                   points += 0.5;
                   break;
                   case 1:
                   points += 0.5;
                   break;
                   case 2:
                   case 3:
                   points += 0;
                   break;
                }
            }
        }

    var persents = (points * 100) / 5;
    alert("Баллов: " + points + "\nПроцент правильных ответов: " + persents + "%");
  }   

