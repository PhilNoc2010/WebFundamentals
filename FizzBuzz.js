function FizzBuzz (start, end){
    for(var i = 0; i <= end; i++){
        if (i % 5 == 0 && i % 3 == 0){
            console.log("FizzBuzz")
        }
        else if (i % 3 == 0) {
            console.log("Fizz")
        }
        else if (i % 5 == 0) {
            console.log("Buzz")
        }
        else{
            console.log (i)
        }
    }
}

FizzBuzz(1,100)

FizzBuzz(1, 200)