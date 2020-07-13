reload = function() {
    defaults = [["S","C","C","C"],["B","B","D","B"],["S","P","S","D"],["S","D","P","P"]];

    table = document.getElementsByClassName("diagram")[0].rows;

    serial = document.getElementById("serial").checked;
    parallel = document.getElementById("parallel").checked;
    batteries = document.getElementById("batteries").checked;

    for (rowNum = 1; rowNum < 5; rowNum++) {
        console.log(rowNum);
        row = table[rowNum].cells;
        for (col = 1; col < 5; col++) {
            text = defaults[rowNum - 1][col - 1];

            switch(text) {
                case "S": 
                    if (serial) row[col].innerText = "C";
                    else row[col].innerText = "D";
                    break;

                case "P":
                    if (parallel) row[col].innerText = "C";
                    else row[col].innerText = "D";
                    break;

                case "B":
                    if (batteries) row[col].innerText = "C";
                    else row[col].innerText = "D";
                    break;

                default:
                    row[col].innerText = text;
                    break;
            }
        }
    }
}