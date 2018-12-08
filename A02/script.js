
document.getElementById("highlight-product").onclick = function(e){
    let font_size = prompt("შრიფტის ზომა");
    let brand = prompt("მწარმოებელი");
    
    let els = document.querySelectorAll("[data-brand='"+brand+"']");
    if (!els) {
        alert("ჩანაწერი ვერ მოიძებნა");
        return;
    }
   for (let i = 0; i < els.length; i++) {
    els[i].style.fontSize = font_size+"px";
    els[i].style.fontWeight = "900";
   }
    
}

