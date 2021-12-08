alert("Click the Row")
let arr = generatePascal()
for (let i = 0; i < arr.length; i++) {
    let div = document.createElement("div")
    div.classList.add("divblock")
    for (let j = 0; j < arr[i].length; j++) {
        let span = document.createElement("span")
        span.innerHTML = arr[i][j]
        span.classList.add("block")
        div.appendChild(span)
        if (arr[i].length == 1) {
            let rowOne = document.querySelector(`#row-1`)
            rowOne.appendChild(div)
        }
        else if (arr[i].length == 2) {
            let rowTwo = document.querySelector(`#row-2`)
            rowTwo.style.display = "none"
            rowTwo.appendChild(div)
        }
        else if (arr[i].length == 3) {
            let rowThree = document.querySelector(`#row-3`)
            rowThree.style.display = "none"
            rowThree.appendChild(div)
        }
        else if (arr[i].length == 4) {
            let rowFour = document.querySelector(`#row-4`)
            rowFour.style.display = "none"
            rowFour.appendChild(div)
        }
        else if (arr[i].length == 5) {
            let rowFive = document.querySelector(`#row-5`)
            rowFive.style.display = "none"
            rowFive.appendChild(div)
        }
        else if (arr[i].length == 6) {
            let rowSix = document.querySelector(`#row-6`)
            rowSix.style.display = "none"
            rowSix.appendChild(div)
        }
        else if (arr[i].length == 7) {
            let rowSeven = document.querySelector(`#row-7`)
            rowSeven.style.display = "none"
            rowSeven.appendChild(div)
        }
        else if (arr[i].length == 8) {
            let rowEight = document.querySelector(`#row-8`)
            rowEight.style.display = "none"
            rowEight.appendChild(div)
        }
        else if (arr[i].length == 9) {
            let rowNine = document.querySelector(`#row-9`)
            rowNine.style.display = "none"
            rowNine.appendChild(div)
        }
        else if (arr[i].length == 10) {
            let rowTen = document.querySelector(`#row-10`)
            rowTen.style.display = "none"
            rowTen.appendChild(div)
        }
        else if (arr[i].length == 11) {
            let rowEleven = document.querySelector(`#row-11`)
            rowEleven.style.display = "none"
            rowEleven.appendChild(div)
        }
        else if (arr[i].length == 12) {
            let rowTwelve = document.querySelector(`#row-12`)
            rowTwelve.style.display = "none"
            rowTwelve.appendChild(div)
        }
        else if (arr[i].length == 13) {
            let rowThirteen = document.querySelector(`#row-13`)
            rowThirteen.style.display = "none"
            rowThirteen.appendChild(div)
        }
        else if (arr[i].length == 14) {
            let rowFourteen = document.querySelector(`#row-14`)
            rowFourteen.style.display = "none"
            rowFourteen.appendChild(div)
        }
        else if (arr[i].length == 15) {
            let rowFifteen = document.querySelector(`#row-15`)
            rowFifteen.style.display = "none"
            rowFifteen.appendChild(div)
        }
        else if (arr[i].length == 16) {
            let rowSixteen = document.querySelector(`#row-16`)
            rowSixteen.style.display = "none"
            rowSixteen.appendChild(div)
        }
    }
}


function generatePascal() {
    let arr = []
    let insadeRow
    for (let i = 0; i < 16; i++) {
        arr[i] = []
        for (let j = 0; j <= i; j++) {
            if (j == i) {
                arr[i].push(1)
            }
            else {
                insadeRow = (!!arr[i - 1][j - 1] ? arr[i - 1][j - 1] : 0) + (!!arr[i - 1][j] ? arr[i - 1][j] : 0)
                arr[i].push(insadeRow)
            }
        }
    }
    return arr
}

document.querySelector(`#row-1`).addEventListener("click", function () {
    let rowTwo = document.querySelector(`#row-2`)
    rowTwo.style.display = "block"
})
document.querySelector(`#row-2`).addEventListener("click", function () {
    let rowThree = document.querySelector(`#row-3`)
    rowThree.style.display = "block"
})
document.querySelector(`#row-3`).addEventListener("click", function () {
    let rowFour = document.querySelector(`#row-4`)
    rowFour.style.display = "block"
})
document.querySelector(`#row-4`).addEventListener("click", function () {
    let rowFive = document.querySelector(`#row-5`)
    rowFive.style.display = "block"
})
document.querySelector(`#row-5`).addEventListener("click", function () {
    let rowSix = document.querySelector(`#row-6`)
    rowSix.style.display = "block"
})
document.querySelector(`#row-6`).addEventListener("click", function () {
    let rowSeven = document.querySelector(`#row-7`)
    rowSeven.style.display = "block"
})
document.querySelector(`#row-7`).addEventListener("click", function () {
    let rowEight = document.querySelector(`#row-8`)
    rowEight.style.display = "block"
})
document.querySelector(`#row-8`).addEventListener("click", function () {
    let rowNine = document.querySelector(`#row-9`)
    rowNine.style.display = "block"
})
document.querySelector(`#row-9`).addEventListener("click", function () {
    let rowTen = document.querySelector(`#row-10`)
    rowTen.style.display = "block"
})
document.querySelector(`#row-10`).addEventListener("click", function () {
    let rowEleven = document.querySelector(`#row-11`)
    rowEleven.style.display = "block"
})
document.querySelector(`#row-11`).addEventListener("click", function () {
    let rowTwelve = document.querySelector(`#row-12`)
    rowTwelve.style.display = "block"
})
document.querySelector(`#row-12`).addEventListener("click", function () {
    let rowThirteen = document.querySelector(`#row-13`)
    rowThirteen.style.display = "block"
})
document.querySelector(`#row-13`).addEventListener("click", function () {
    let rowFourteen = document.querySelector(`#row-14`)
    rowFourteen.style.display = "block"
})
document.querySelector(`#row-14`).addEventListener("click", function () {
    let rowFifteen = document.querySelector(`#row-15`)
    rowFifteen.style.display = "block"
})
document.querySelector(`#row-15`).addEventListener("click", function () {
    let rowSixteen = document.querySelector(`#row-16`)
    rowSixteen.style.display = "block"
})