const pic=['https://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg&quot','https://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg&quot','https://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg&quot'];

const btn=document.querySelector('.btn')
const randomPic=document.querySelector('.randomPic')
btn.addEventListener('click',randomImg)


function randomImg(){
    let randomNum=Math.floor(Math.random()*pic.length)
    let img=document.createElement('img')
    img.setAttribute('src',pic[randomNum])
    randomPic.src=pic[randomNum]
}



