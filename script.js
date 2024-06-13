document.addEventListener("DOMContentLoaded", function() {

    
    const options = ["<i class='bx bx-menu'></i>", "<i class='bx bx-x'></i>"];
    let icon = document.querySelector(".nav-hamburger");
    let isMenu = true;

    icon.addEventListener("click", () => {
        let lists = document.querySelectorAll(".nav-hamburger-list > a");
        if (isMenu) {
            icon.innerHTML = options[1];
            lists.forEach((e)=>{
                e.style.display="inline-block";
            })
        } else {
            icon.innerHTML = options[0];
            lists.forEach((e)=>{
                e.style.display="none";
            })
        }
        isMenu = !isMenu;
    });

    const c = document.querySelector(".cursor");
    document.addEventListener('mousemove',function(e){
        var x = e.clientX;
        var y = e.clientY;
        c.style.left = x+"px";
        c.style.top = y+"px";
    })
});