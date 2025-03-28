// Code your solutions in this file
function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

[
    "Thank you, Charlie, for the wonderful birthday gift!",
    "Thank you, Samip, for the wonderful birthday gift!",
    "Thank you, Ali, for the wonderful birthday gift!"
  ]
  countDown(10);
  10
  9
  8
  7
  6
  5
  4
  3
  2
  1
  0
  


