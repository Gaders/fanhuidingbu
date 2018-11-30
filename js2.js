window.onload = function() {
    var p=document.querySelector("body")
    p.insertAdjacentHTML("beforeend","<input type='buttton' id='fanhui' value='返回顶部'>")
    p.insertAdjacentHTML("beforeend","<img src='./111.png' class='tupian'></img>")

    var fanhui=document.querySelector("#fanhui")
        fanhui.addEventListener("click",function(){
        
           var biansu =setInterval(function(){
            var oTop =document.body.scrollTop 
            if (document.body.scrollTop >0 == false){
                clearInterval(biansu)
            }
            else {
                document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
            }
           },10);
            
              
               

        
            }) 
}
window.onscroll= function()  {
    var fanhui=document.querySelector("#fanhui")
    if (  document.body.scrollTop > 500){
        fanhui.style.display = "block"
}
    else {
        fanhui.style.display = "none"
    }

}