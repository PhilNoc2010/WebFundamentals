// var sandwich = {
//     bread:    "sourdough",
//     protein:  "london broil",
//     cheese:   "lacey swiss cheese",
//     toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
// };

// console.log(sandwich);

function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    return sandwich;
}

var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
console.log(s1);

function pizzaOven(crust, sauce, cheese, toppings){
    var pizza = {};
    pizza.crustType = crust;
    pizza.sauceType = sauce;
    pizza.cheeses = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("Deep Dish", "traditional", ["mozzarella"], ["pepperoni","sausage"])
console.log(pizza1)

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushroom","olives","onions"])
console.log(pizza2)

var pizza3 = pizzaOven("Detroit Style", "no sauce", "brick cheese", ["pepperoni", "sausage", "mushroom"])
console.log(pizza3)

var pizza4 = pizzaOven("Thin Crust","pizza sauce",["mmozzarella","cheddar"],["pinapple","ham","spinach","red peppers"])
console.log(pizza4)

function randomPizza(numberOfToppings){
    // this function will allow the user to submit how many toppings they desire, but other options will be limited to a single choice
    var crustType = ["Thin Crust","Hand Tossed","Deep Dish","Stuffed Crust"]
    var sauceType = ["Traditional", "Marinara", "White Sauce", "No Sauce", "Buffalo Sauce"]
    var cheese = ["mozzarella", "cheddar", "feta", "cottage cheese"]
    var toppings = ["sausage","pepperoni","ham","pineapple","green peppers", "sun dried tomatoes","onions","spinach","bacon",
                    "black onlives","garlic","mushrooms","fresh basil","arugula","shrimp","pickles","jalapenos","left beef"]

    var pizza = []

    // if the number of desired toppings exceeds the number of available toppings, the function will abort as it
    // will be too many toppings
    if(numberOfToppings > toppings.length){
        console.log("Too Many Toppings Requested")
        return pizza
    }

    pizza.crustType = crustType[Math.floor(Math.random() * crustType.length)]
    pizza.sauceType = sauceType[Math.floor(Math.random() * sauceType.length)]
    pizza.cheese = cheese[Math.floor(Math.random() * cheese.length)]

    pizza.toppings = []

    for(var i = 0; i < numberOfToppings; i++){
        var toppingIndex = 0
        //capture the randomly generated index in order to remove the randomly chosen topping and prevent duplicate toppings
        toppingIndex = Math.floor(Math.random() * toppings.length)
        pizza.toppings.push(toppings[toppingIndex])

        //splices the randomly chosen topping to prevent duplication
        toppings.splice(toppingIndex,1)
    }

    return pizza
}

console.log(randomPizza(4))
