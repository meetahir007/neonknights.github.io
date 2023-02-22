const hello12 = document.querySelector(".hello12");
const sectionOne = document.querySelector(".hire1");

const sectionOneOptions = {};

const sectionOneObserver = new IntersectionObserver
(function (

entries, 
sectionOneObserver
) {

entries.forEach(entry => {
if (!entry.isIntersecting) {
hello12.classList.add("nav-scrolled");
}else {

hello12.classList.remove("nav-scrolled");}

});

},
sectionOneOptions);
sectionOneObserver.observe(sectionOne);