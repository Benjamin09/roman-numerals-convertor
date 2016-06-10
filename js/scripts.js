var num;
var bank;
var i;
var output = "";
var outputTemp = "";
var arrayTemp = [];


$(document).ready(function() {

  $("#romanForm").submit(function(event) {
    var bank = [
      ["M", 0, 1000],
      ["D", 0, 500],
      ["C", 0, 100],
      ["L", 0, 50],
      ["X", 0, 10],
      ["V", 0, 5],
      ["I", 0, 1],
    ];
    $("#result").empty();
    output = "";
    num = parseInt($('#userNumber').val());
    if (num > 3999) {
      alert('Numbers over 3999 will not work.');
      num = 666;
    }
    i = 0;
    bank.forEach(function(array) {
      var amt = Math.floor(num/array[2]);
      if (amt !== 4) {
        array[1] = amt;
      } else {
        if (bank[i-1][1] === 0) {
          bank[i][1] = 0;
          bank[i-1][3] = array[0];
          bank[i-1][1] += 1;
        } else if (bank[i-1][1] === 1) {
          bank[i][1] = 0;
          bank[i-1][1] = 0;
          bank[i-2][3] = array[0];
          bank[i-2][1] += 1;

        }
      }
      num = num % array[2];
      i++;
    })
    bank.forEach(function(array) {
      var j = 0;
      for (j=0; j<array[1]; j++) {
        outputTemp += array[0];
      }
      //&& (!bank[j-1][3])
      if ((typeof array[3] === 'string')) {
        tempArray = outputTemp.split("");
        tempArray.splice(tempArray.length-1, 0, array[3]);
        outputTemp = tempArray.join("");
      }
      output += outputTemp;
      outputTemp = "";
    });
    $("#result").text(output);
    event.preventDefault();
  });
});
