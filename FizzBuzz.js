for (var num=1; num<101; num++ ){
    if (num % 15 == 0) 
        console.log("FizzBuzz");
    else if (num % 3 == 0)
        console.log("Fizz");
    else if (num % 5 == 0) 
        console.log("Buzz");
    else console.log(num);
}