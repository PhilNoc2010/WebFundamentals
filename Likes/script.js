var namesArray = ["Neil", "Nichole", "Jim"]
var likesArray = [9 , 12, 9]

// function addLike() {
//     likes++
//     document.querySelector("#likes").innerText = `${likes} Like(s)`
// }

function addLike(id, name){
    // Likes will be stored in an array,
    //the index is assigned based on the order the boxes
    //are shown on the page
    likesArray[id]++
    selector = "#" + namesArray[id]
    document.querySelector(selector).innerText = `${likesArray[id]} likes(s)`
}