/* Open when someone clicks on the span element */
    function openNav() {
        document.getElementById("MobileNav").style.height = "100%";
    }

    /* Close when someone clicks on the "x" symbol inside the overlay */
    function closeNav() {
        document.getElementById("MobileNav").style.height = "0%";
    }

function runScroll() {
  scrollTo(document.body, 0, 600);
}
var scrollme;
scrollme = document.querySelector("#scroll-up");
scrollme.addEventListener("click",runScroll,false)

function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop == to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
}