//append  
let divs =  document.querySelector("div")
let div = document.createElement("div")
let p = document.createElement("p")
div.append(p)
divs.append(div)

//append child
let div1 = document.createElement("div")
let p1 = document.createElement("p")
div.appendChild(p)
divs.append(div1)