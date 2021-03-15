module.exports = function toReadable (number) {
  let unit = ['', 'one', 'two','three', 'four', 'five', 'six', 'seven', 'eight', 'nine']; 
  let ten = ['ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']; 
  let twenty = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let human = ' ';
  if (number == 0){
    human = 'zero';
  }
  else if (number<10){
      human = unit[number];
    }
  else if (number>=10 && number<=20){
      human = ten[number-10];
  } 
  else if (number>20 && number<100){
    let a = Math.floor(number/10);
    let b = number%10;
    if (b==0){
      human = twenty[a]
    }
    else {
      human = twenty[a] + " " + unit[b];
   }
  }
  else if (number>=100){
    let a = Math.floor(number/100);
    let b = (Math.floor(number/10))%10;
    let c = number%10;
    if (b==1){
     human = unit[a] + ' hundred ' + ten[c];
    }
     else if (b==0 && c==0) {
      human = unit[a] + " hundred";
    }
    else if (b==0){
      human = unit[a] + " hundred " + unit[c];
    }
    else if (c==0){
      human = unit[a] + " hundred " + twenty[b];
    }
   
    else {
      human = unit[a] + " hundred " + twenty[b] + " " + unit[c];
    }
  }
  return human;
}
