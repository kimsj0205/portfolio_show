console.clear();

const nav = document.querySelector("nav");
const navLinksContainer = document.querySelector(".nav-links");
const navLinks = [...document.querySelectorAll(".link")];
const menuBtn = document.querySelector(".menu-btn");
const subMenuBtn = document.querySelector(".sub-menu-btn");


menuBtn.addEventListener("click", function() {
  nav.classList.toggle("nav-open");
  menuBtn.classList.toggle("close");
});
subMenuBtn.addEventListener("click", function() {
  nav.classList.toggle("sub-menu-open");
  removeSubmenu();
});
function createHoverEl() {
  let hoverEl = document.createElement("div");
  hoverEl.className = "hover-el";
  hoverEl.style.setProperty("--y", "0px");
  hoverEl.style.setProperty("--mousex", "0px");
  hoverEl.style.setProperty("--mousey", "0px");
  navLinksContainer.appendChild(hoverEl);
}
createHoverEl();

navLinks.forEach((link, index) => {
  let hoverEl = navLinksContainer.querySelector(".hover-el");
  link.style.setProperty("--delay", `${index * 50}ms`);
  link.addEventListener("mousemove", function(e) {
    hoverEl.style.setProperty("--y", `${index * 60}px`);
    hoverEl.style.setProperty("opacity", "1");
    hoverEl.style.setProperty("--mousex", `${e.pageX - hoverEl.offsetLeft}px`);
    hoverEl.style.setProperty("--mousey", `${e.pageY - hoverEl.offsetTop}px`);
  });
  navLinksContainer.addEventListener("mouseout", function() {
    hoverEl.style.setProperty("opacity", "0");
  });
  link.addEventListener("click", function() {
    let hoverEl = navLinksContainer.querySelector(".hover-el");
    hoverEl.style.opacity = '0';
    toggleSubmenu(link);
  });
});

function toggleSubmenu(el) {
  let subMenu = nav.querySelector(".sub-menu");
  if (el.children[1]) {
    createSubmenu(el);
  } else if (nav.contains(subMenu)) {
    removeSubmenu();
  } else {
    return;
  }
}


// scroll move
$(document).ready(function($) {
	$(".scroll_move").click(function(event){
			console.log(".scroll_move");
			$(nav).removeClass("nav-open");
			$(menuBtn).removeClass("close");
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});

});


// project

let panels = gsap.utils.toArray(".parallax__item");
let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));

panels.forEach((panel, i) => {
	ScrollTrigger.create({
		trigger: panel,
		start:"top top",
		pin: true, 
		pinSpacing: false 
	});
});

// popup

$(document).ready(function(){
  $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    resizesContainer: true,
    resizable: true,
  });
  $('.grid-item').click(function(){
    $(this).children(".popup").fadeIn().addClass("active")
    $('body').addClass("scrollLock ")
  })

  $(".popup").click(function(e){
    e.stopPropagation() 
    $(".popup").fadeOut().removeClass("active");
    $('body').removeClass("scrollLock ")
    })
  });




