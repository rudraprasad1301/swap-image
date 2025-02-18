const img1=document.querySelector('.i1')
const img2=document.querySelector('.i2')
const btn=document.querySelector('.btn')
btn.addEventListener('click',()=>{
    var src1=img1.src
    var src2=img2.src
    img1.src=src2
    img2.src=src1
})