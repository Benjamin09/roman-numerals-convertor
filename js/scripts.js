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
        alert('the current value of '+array[0]+" is 4.");
        if (bank[i-1][1] === 0) {
          alert('400, 40, or 4 should work');
          bank[i][1] = 0;
          bank[i-1][3] = true;
          bank[i-1][1] += 1;
        } else if (bank[i-1][1] === 1) {
          alert('900, 90, or 9 should work');
          bank[i][1] = 0;
          bank[i-1][1] = 0;
          bank[i-2][3] = true;
          bank[i-2][1] += 1;
        }
      }
      num = num % array [2];

      i++;
    })
    event.preventDefault();
  })
});
