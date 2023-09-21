const obj = document.querySelectorAll('.obj')


document.getElementsByClassName('page-1')[0].addEventListener('mousemove', (e) => {
    let x = e.layerX
    let y = e.layerY
    let w = e.target.clientWidth
    let h = e.target.clientHeight
    e.cancelbubble = false

    obj.forEach((i) => {
        i.style.transition = '.2s linear'
        i.style.transform = 'translate(' + ((x - w / 2) / 70) + 'px,' + ((y - h / 2) / 70) + 'px)'
    })

})

// *********************************


const slide = document.querySelectorAll('.slide')
let arrS = Array.from(slide)

let src1 = slide[0].getAttribute('src')
let src2 = slide[1].getAttribute('src')
let src3 = slide[2].getAttribute('src')

const srcs = [src1, src2, src3]


shift()

document.getElementById('right').addEventListener('click', () => {

    transform()
    shift()

    setTimeout(() => {
        slide[0].removeAttribute('src')
        slide[0].style.transform = 'translate(-120%,0)'
        slide[0].setAttribute('src', srcs[2])
        slide[0].style.transform = 'translate(0,0)'
        slide[1].removeAttribute('src')
        slide[1].setAttribute('src', srcs[1])
        slide[1].style.transform = 'scale(1)'
        slide[2].removeAttribute('src')
        slide[2].style.transform = 'translate(0,-120%)'
        slide[2].setAttribute('src', srcs[0])
        slide[2].style.transform = 'translateY(0)'
    }, 700);

    flag++
    
})



document.getElementById('left').addEventListener('click',()=>{

    
    transform()
    shift()
    setTimeout(() => {
        slide[0].removeAttribute('src')
        slide[0].style.transform = 'translate(+120%,0)'
        slide[0].setAttribute('src', srcs[1])
        slide[0].style.transform = 'translate(0,0)'
        slide[1].removeAttribute('src')
        slide[1].setAttribute('src', srcs[2])
        slide[1].style.transform = 'scale(1)'
        slide[2].removeAttribute('src')
        slide[2].style.transform = 'translate(0,+120%)'
        slide[2].setAttribute('src', srcs[0])
        slide[2].style.transform = 'translateY(0)'
    }, 700);

    
})

// **************************************

function shift(){
    let shifted = srcs.shift()
    srcs.push(shifted) 
}

function transform(){
    slide[0].style.transform = 'translateY(120%)'

    slide[1].style.transform = 'scale(0)'

    slide[2].style.transform = 'translateX(120%)'
}

// ************************************

let ceo = document.getElementsByClassName('ceo')[0]
let p = ceo.innerText
let char = []
ceo.setAttribute('data-text',p)
ceo.innerHTML=''
let ceoText = ceo.getAttribute('data-text')

// ***********************************

for(i=0 ; i<ceoText.length ; i++){
    char.push(p.charAt(i))
}
let x =0
const set = setInterval(() => {
    if(x<char.length){
        ceo.innerHTML += char[x]
        x++
    }else{
        clearInterval(set)
    }

}, 30);

// *****************************

let txt = -330
let mt = -140
let flag = 0
document.getElementById('arrR').addEventListener('click',()=>{
    flag++
    if(flag>2){
        mt=0
        txt = 0
        document.getElementsByClassName('fig')[0].style.marginTop=mt+'px'
        document.getElementsByClassName('txt')[0].style.marginTop=txt + 'px'
    }else{
        document.getElementsByClassName('fig')[0].style.marginTop=mt+'px'
        mt = mt*2 
        document.getElementsByClassName('txt')[0].style.marginTop=txt + 'px'
        txt = txt*2 -30
    }
    
    
})


