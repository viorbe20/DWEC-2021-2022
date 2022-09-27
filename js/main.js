document.addEventListener('DOMContentLoaded', function(){
const ud = document.getElementsByTagName("article");

for (let key in ud) {
ud[key].addEventListener("mouseenter", function(){
      this.classList.add("mouseenter");  
});

ud[key].addEventListener("mouseleave", function(){
    this.classList.remove("mouseenter");  
});
}


});