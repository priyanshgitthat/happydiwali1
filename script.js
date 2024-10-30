function show(){
    // Toggle the active class on the side menu
    document.getElementById("panel").classList.toggle("active");

     // Add click event listeners to individual menu links (optional)
 const menuLinks = document.querySelectorAll("#panel a");
 menuLinks.forEach(link => {
   link.addEventListener('click', () => {
     document.getElementById("panel").classList.remove("active");
   });
 });

}






// ============== typing effect===========

var typed = new Typed('#element', {
  strings: ['coder','web developer','web designer'],

  loop: true,
  typeSpeed: 50,
  backSpeed: 40,
  backDelay: 2000,
});

