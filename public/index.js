// Your code here 

let randomCatImg = async () => {
    let res = await fetch("https://api.thecatapi.com/v1/images/search")
        //console.log(res)
    let parsedRes = await res.json()
        //console.log(parsedRes)
    let url = parsedRes[0].url

    let img = document.createElement("img")
        img.setAttribute('src', url )

     return img
}



const initializePage = async () => {


    let catImg = await randomCatImg()

    let imgBox = document.getElementById("img-box")
        imgBox.append(catImg)

    //spawn new cat and reset popularity and comments
    let newCatButton = document.querySelector("#spawn-cat")
    
        newCatButton.addEventListener("click", async (event) => {
            let newCat = await randomCatImg()
            catImg.src = newCat.src

                count = 0
                catScore.innerText = count
                
                //let lisQ = document.querySelectorAll("li")
                //console.log('lis with query:', lisQ)

                let lisG = document.getElementsByTagName("li")
                let lisGcopy = [...lisG]
                console.log('lisGcopy:',lisGcopy)

               if (lisG) {
                lisGcopy.forEach(li => li.remove())
               }

        })
        

    var count = 0
    var catScore = document.getElementById("score")


    let upVote = document.querySelector("#upvote")

        upVote.addEventListener("click", (event) => {
            count++
            catScore.innerText = count

        })

    let downVote = document.querySelector("#downvote")

        downVote.addEventListener("click", e => {
            count--
            catScore.innerText = count
        })

    //adding comments to ul
    let commentButton = document.querySelector("#cat-comment-button")
    let inputArea = document.getElementById("cat-comment")
    var ul = document.getElementsByTagName("ul")[0]
    //var lis = document.querySelectorAll("li")

        commentButton.addEventListener("click", (e) => {
            let comment = inputArea.value
            let li = document.createElement("li")

            li.innerText = comment
            ul.append(li)  
        })

    
       
        
}

window.onload = initializePage

