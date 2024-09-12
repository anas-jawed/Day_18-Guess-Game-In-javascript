const max = prompt("Enter your max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Enter the guess number");

while(true){
    if(guess == "quit"){
         guess = prompt("User Quit");
        break;
    } 
    if(guess == random){
         console.log("Your guess is right congrts! the guess number is", random);
        break;
    } else if(guess < random){
        guess = prompt("Your guess is to small");
    } else{
         guess = prompt("Your guess is to large");
    }
}


