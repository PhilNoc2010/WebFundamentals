var likesArray2 = [
    {"name":"Neil",      "likes": 9},
    {"name":"Nichole",   "likes":12},
    {"name":"Jim",       "likes":9}
]

// function addLike() {
//     likes++
//     document.querySelector("#likes").innerText = `${likes} Like(s)`
// }

function addLike(id){
    // Likes will be stored in an array, keyed to the matching individual
    //the index is assigned based on the order the boxes are shown on the page

    likesArray2[id].likes++

    selector = "#" + likesArray2[id].name
    document.querySelector(selector).innerText = `${likesArray2[id].likes} likes(s)`
}