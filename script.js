let title = document.getElementById('title')

let list = document.querySelector(".btns").children;
// console.log(list)
[...list].forEach(value =>{
    let getCssValues = window.getComputedStyle(value)
    value.addEventListener('click', function(){
        let bgColor = getCssValues.backgroundColor
        title.style.color = bgColor;
    })
})

