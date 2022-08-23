let home = document.getElementById("homeEl")
console.log("home")

let count = 0
function increment1(){
 count += 1
home.innerText = count
}

function increment3(){
    count += 3
    home.innerText = count
}

function increment5(){
    count += 5
    home.innerText = count
}

//second column

let guest = document.getElementById("GuestEl")
let cont = 0
function increments1(){
cont += 1
guest.innerText = cont
}
function increments3(){
    cont += 3
    guest.innerText = cont
}
function increments5(){
    cont += 5
    guest.innerText = cont
}
