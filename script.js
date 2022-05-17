let button = document.querySelector('.button');
let blocksColor = document.querySelectorAll('.block');

const changeColor = blocks => {
    blocks.forEach(elem => {
        let q = Math.floor(Math.random() * 256)
        let w = Math.floor(Math.random() * 256)
        let e = Math.floor(Math.random() * 256)
        elem.style.background = 'rgb('+ q +','+ w +','+ e +')'
    })
}
button.addEventListener('click', function () {
    changeColor(blocksColor)
})