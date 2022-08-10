// let disp = true;
// let landing = document.querySelector('.landing');
// let work = document.querySelector('.work');

// work.style.display="none";

// // function ClickWork() {
// //     if(disp){
// //         work.style.display="block";
// //         landing.style.display="n";
// //     }
    
// // }
// // function ClickLanding() {
// //   if(!disp){
// //     work.style.display="block";
// //     landing.style.display="none";
// //   }
// // }

let disp = true;
let landing = document.querySelector('.landing');
let work = document.querySelector('.work');

work.style.display="none";

let md = document.getElementById('MD');
let w = document.getElementById('w');

md.addEventListener("click", function() {
    if(!disp) {
        work.style.display="none";
        landing.style.display="block";
        disp = !disp;
    }
});

w.addEventListener("click", function() {
    if(disp) {
        work.style.display="block";
        landing.style.display="none";
        disp=!disp;
    }
});