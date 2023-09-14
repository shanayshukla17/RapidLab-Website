
window.addEventListener('scroll',function(){
    let value=window.scrollY;
    console.log(document.getElementById("content").style.top*value)
})