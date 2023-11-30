// Your code here 
//import { makeDivWText } from "./helpers"

let randomCatImg = async () => {
    let res = await fetch("https://api.thecatapi.com/v1/images/search")
    let parsedRes = await res.json()
    let url = parsedRes[0].url

    let img = document.createElement("img")
        img.setAttribute('src', url )

     return img
}

// let append = (parent, child) => {
//     return parent.append(child)
// }


const initializePage = async () => {


    let catImg = await randomCatImg()
    //console.log(catImg)
    let imgBox = document.getElementById("img-box")
    console.log(imgBox)
    
    imgBox.append(catImg)
}

window.onload = initializePage

