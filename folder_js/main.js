document.getElementById("responsive-side-menu-open").addEventListener("click", function(){
    document.getElementById("responsive-side-menu").style.display="block";
})

document.getElementById("responsive-side-menu-closed").addEventListener("click", function(){
    document.getElementById("responsive-side-menu").style.display="none";
})







document.querySelector(".responsive-side-menu-open-grey").addEventListener("click", function(){
    console.log(123);
    document.querySelector(".responsive-side-menu-grey").style.display="block";
})

document.querySelector(".responsive-side-menu-closed-grey").addEventListener("click", function(){
    document.querySelector(".responsive-side-menu-grey").style.display="none";
})
