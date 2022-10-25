
// Select some elements...
let Header = document.querySelector('#page-header')
Header.style.textAlign = "left"
Header.style.color = "aquamarine"

let dogImages = document.querySelectorAll('.dog-image')
for (let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
    dogImages[i].style.rotate = "180deg"
    dogImages[i].style.borderColor = "aquamarine"
    dogImages[i].style.borderStyle = "dotted"
    dogImages[i].style.borderWidth = "30px"
}

let dogNames = document.querySelectorAll('.dog-name')
for (let i = 0; i < dogImages.length; i++){
dogNames[i].style.textAlign = 'right'
dogNames[i].style.backgroundColor = 'blue'
}

let footerText = document.querySelector('#footer')
footerText.style.textColor = 'red'
footerText.style.backgroundColor = 'blue'


