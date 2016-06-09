var num;
var bank = [
  ["M", 0, 1000, false],
  ["D", 0, 500, false],
  ["C", 0, 100, false],
  ["L", 0, 50, false],
  ["X", 0, 10, false],
  ["V", 0, 5, false],
  ["I", 0, 1, false],
];
var i;
var output;

$(document).ready(function() {
  $("#romanForm").submit(function(event) {
    num = parseInt($('#userNumber').val());
    i = 0;
    bank.forEach(function(array) {
      var amt = Math.floor(num/array[2]);
      if (amt !== 4) {
        array[1] = amt;
      } else {

      }
      num = num % array [2];
      console.log(amt+" "+num);
      i++;
    })

    event.preventDefault();
  })
});
