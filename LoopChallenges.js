function printOddNumbers (start, end){
    for (var i=0;i <= end; i++){
        if (i % 2 == 1){
            console.log(i)
        }
    }
}

printOddNumbers(1,100)

function decreaseByThree(start, end){
    for (var i = end; i >= start; i--){
        if(i % 3 == 0){
            console.log(i)
        }
    }
}

decreaseByThree(0,100)

function printSequence(arr){
    for (var i = 0; i < arr.length; i++){
        console.log (arr[i])
    }
}

printSequence (["4","2.5", "1","-0.5","-2","-3.5"])

function sigma(start, end){
    var result = 0
    for (var i = start;i <= end;i++){
        result = result + i
    }
    console.log(result)
    return result
}

sigma(1, 100)

function factorial(end){
    var product = 1
    for (var i = 1; i <= end; i++){
        product = product * i
    }
    console.log(product)
    return product
}

factorial(12)