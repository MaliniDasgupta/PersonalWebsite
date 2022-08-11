var typed = new Typed(".tw", {
    strings: ["Malini Dasgupta", "Malini Dasgupta", "मालिनी दासगुप्ता", "মালিনী দাসগুপ্ত"],
    typeSpeed: 80,
    backSpeed: 80,
    typeSpeed: 80,
    backSpeed: 80,
    loop: true,
    showCursor: false
});

let disp = true;
let landing = document.querySelector('.landing');
let work = document.querySelector('.work');
let footer = document.querySelector('.footer');

work.style.display="none";

let md = document.getElementById('MD');
let w = document.getElementById('w');

md.addEventListener("click", function() {
    console.log("Hello");
    if(!disp) {
        work.style.display="none";
        landing.style.display="block";
        footer.classList.remove("relative");
        disp = !disp;
    }
});

w.addEventListener("click", function() {
    console.log("Hell1");
    if(disp) {
        work.style.display="block";
        landing.style.display="none";
        footer.classList.add("relative");
        disp=!disp;
    }
});


