const cards = ['queen of hearts', 'jack of clubs', 'ten of diamonds', 'ace of spades'];
console.log(cards.indexOf('queen of hearts'))


const num = [4,5,6,7,8,9,10,11,12,13]

function isOdd(element) {
    return (element % 2 === 1);
  }
 const odd = num.find(isOdd)
 console.log(odd)