$(document).ready(function () {
    $('#btn').click(function () {
        var num = $('#num');
        var hits = $('.outcome');
        hits.empty();
        var fizzBuzz = function (count) {
            for (var i = 1; i <= count; i++) {
                if (i%3 === 0 && i%5 === 0)  {
                    hits.append(" fizzbuzz, ");
                }
                else if (i%5 === 0) {
                    hits.append(" buzz, ");
                }
                else if (i%3 === 0 ) {
                    hits.append(" fizz, ");
                }
                else {
                    hits.append("" + i + ",");
                }

            }
        };
        if(+num.val()) {
            fizzBuzz(num.val());
        }
        else {
            alert("Please enter a value");
        }
        num.val('');
    });
});


