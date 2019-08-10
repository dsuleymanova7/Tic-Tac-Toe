  $(document).ready(function() {
            $("#result").hide();
            var flag = true;
            var counter = 0;
            $("#p1").css('background-color', 'cyan');
            $("#btn").click(function() {
                $("#tab").show();
                $("#cont").show();
                $("#result").hide();
                flag = true;
                counter = 0;
                $("#p2").css('background-color', 'white');
                $("#p1").css('background-color', 'cyan');
                $("td").text("");

            });
            var a = {};

            $("td").click(function() {

                if ($(this).text() === '' && flag === true) {
                    $("#p1").css('background-color', 'white');
                    $("#p2").css('background-color', 'cyan');
                    $(this).text("X");
                    flag = false;
                    counter++;

                } else if ($(this).text() === '' && flag === false) {
                    $("#p2").css('background-color', 'white');
                    $("#p1").css('background-color', 'cyan');

                    $(this).text("O");
                    flag = true;
                    counter++;
                }

                var i = 0;
                $("td").each(function() {

                    var value = $(this).text();
                    a[i++] = value;
                    arr = {};
                    for (var k = 0, t = 0; k < 3; k++) {
                        newarr = {};
                        for (var j = 0; j < 3; j++) {
                            newarr[j] = a[t++];
                        }
                        arr[k] = newarr;
                    }
                });
                var b = checkWinner(arr);
                var p;
                if (b == 'X') {
                    p = 'Player 1';
                } else if (b == 'O') {
                    p = 'Player 2';
                } else {
                    p = 'No one';
                }
                if (b !== "" || counter === 9) {
                    $("#result").text(p + " won!");
                    $("#result").fadeToggle("slow");
                    $("#tab").hide();
                    $("#cont").hide();

                    flag = true;
                    counter = 0;
                    arr = {};
                }
            });
        });

        function checkWinner(arr) {
            for (i = 0; i < 3; i++) {
                if (arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2] && arr[i][0] != "") {
                    return arr[i][0];
                } else if (arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i] && arr[0][i] != "") {
                    return arr[0][i];
                }
            }
            if (arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2] && arr[0][0] != "") {
                return arr[0][0];
            } else if (arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0] && arr[0][2] != "") {
                return arr[0][2];
            } else return "";
        }