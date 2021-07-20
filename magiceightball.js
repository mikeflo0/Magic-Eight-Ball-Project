let userName = 'Mike';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
let userQuestion = 'will I win the game?';
console.log(`${userName} asked: ${userQuestion}`);
let randomNumber = Math.floor(Math.random() *8);
let eightBall = '';
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'No doubt';
    break;
  case 3:
    eightBall = 'nope';
    break;
  case 4:
    eightBall = 'only in your dreams';
    break;
  case 5:
    eightBall = 'thats never going to happen';
    break;
  case 6:
    eightBall = 'yep'
    break;
  case 7:
    eightBall = 'signs point to yes';
    break;
}
console.log(`The eight ball answered ${eightBall}`);

