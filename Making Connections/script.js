var names = [
    "Jane Smith",
    "Jane Darling",
    "Jessica Hampton",
    "Joanna Dark",
    "Sara Smile",
    "Mrytle Smith",
    "Jenny Richardson"
]

function updateName(){
    var nameIDX = Math.floor(Math.random()*names.length);
    document.querySelector("#profileName").innerText = names[nameIDX]
}

function declineReq(index){
    var selector = `#${index.id}`
    document.querySelector(selector).remove()
    var num = Number(document.querySelector("#connectionReq").innerText)
    document.querySelector("#connectionReq").innerText = num -1

}

function acceptReq(index){
    var selector = `#${index.id}`
    document.querySelector(selector).remove()
    var num = Number(document.querySelector("#connectionReq").innerText)
    document.querySelector("#connectionReq").innerText = num -1
    var num2 = Number(document.querySelector("#connectionTotal").innerText)
    document.querySelector("#connectionTotal").innerText = num2 +1
}