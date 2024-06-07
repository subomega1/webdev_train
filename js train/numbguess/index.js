const min = 1;
const max = 100;

const randnumb = Math.floor(Math.random()*(max-min+1)) + min;
let attempt=0;
let guess;
let running=true;
while(running)
  {
     guess = window.prompt(`guess nb between ${min}-${max}`);
     guess=Number(guess);
     console.log(guess)
     if(isNaN(guess))
      {
        window.alert("please give a valid nb");
      }
      else if (guess < min || guess > max)
      {
        window.alert("please give a valid nb");
      }
      else{
        attempt++;
        if(guess<randnumb)
        {
          window.alert("TOO LOW! TRY AGAIN")
        }
        else if(guess>randnumb)
          {
            window.alert("TOO HIGH! TRY AGAIN")
          }
        else{
          window.alert(`CORRECT! the answer was ${randnumb}. It took you ${attempt}`)
          running=false

        }
      }
      }
