$("button").bind("click", function() {
    var points = 0;
    
    checkQ1 = $("input:radio[name=q1]:checked").val();
    rightQ1 = $("input:radio[name=q1]").eq(0).val();
    $(function() {
        if (checkQ1 == rightQ1) {
            points += 1;
        } else {
            points += 0;
        }
    });
    
    checkQ2 = $("input:radio[name=q2]:checked").val();
    rightQ2 = $("input:radio[name=q2]").eq(2).val();
    $(function() {
        if (checkQ2 == rightQ2) {
            points += 1;
        } else {
            points += 0;
        }
    });    

    checkQ3 = $("input:radio[name=q3]:checked").val();
    rightQ3 = $("input:radio[name=q3]").eq(3).val();
    $(function() {
        if (checkQ3 == rightQ3) {
            points += 1;
        } else {
            points += 0;
        }
    });   
    
    var checkQ4 = $("input:checkbox[name=q4]:checked");
    var rightOneQ4 = $("input:checkbox[name=q4]").eq(1).val();
    var rightTwoQ4 = $("input:checkbox[name=q4]").eq(3).val();
    var pointQ4 = 0;
	$(function() {
        for (var i = 0; i < checkQ4.length; i++){
        var markQ4 = checkQ4.eq(i).val();
            if (markQ4 == rightOneQ4) {
                pointQ4 += 0.5;
            } else if (markQ4 == rightTwoQ4) {
                pointQ4 += 0.5;
            } else {
                pointQ4 -= 0.5;
            }
        }
    });
    
	$(function () {
        if (pointQ4 < 0) {
            points += 0;
        } else {
            points += pointQ4;
        }
    });
    
    var checkQ5 = $("input:checkbox[name=q5]:checked");
    var rightOneQ5 = $("input:checkbox[name=q5]").eq(0).val();
    var rightTwoQ5 = $("input:checkbox[name=q5]").eq(1).val();
    var pointQ5 = 0;
	$(function() {
        for (var i = 0; i < checkQ5.length; i++){
        var markQ5 = checkQ5.eq(i).val();
            if (markQ5 == rightOneQ5) {
                pointQ5 += 0.5;
            } else if (markQ5 == rightTwoQ5) {
                pointQ5 += 0.5;
            } else {
                pointQ5 -= 0.5;
            }
        }
    });
    
	$(function () {
        if (pointQ5 < 0) {
            points += 0;
        } else {
            points += pointQ5;
        }
    });
    
    var persents = (points * 100) / 5;
    alert("Баллов: " + points + "\nПроцент правильных ответов: " + persents + "%");
});
    
    
