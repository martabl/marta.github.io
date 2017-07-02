"use strict";
var navMobile = document.getElementById("js-navMobile");
var navShow = document.getElementById("js-navShow");

navMobile.addEventListener("click", mobile);

function mobile() {
  navShow.classList.toggle("list-show");
  navMobile.classList.toggle("open");
}

var header = document.querySelector(".nav-content");
var smallMenuLinkList = document.querySelectorAll(".nav-mobile li a");
for (var i = 0; i < smallMenuLinkList.length; i++) {
  smallMenuLinkList[i].addEventListener("click", mobile);
}
function handleScroll() {
  var title = document.querySelector(".head-line-container-desktop");
  if (document.body.scrollTop > header.offsetHeight) {
    title.classList.add("hide");
  } else {
    title.classList.remove("hide");
  }

  handleIndicatedBlock();
}
function handleIndicatedBlock() {
  if (isScrolledIntoView('js-contacts')) {
  	indicateBlock('js-contacts')
  } else if (isScrolledIntoView('js-thank')) {
  	indicateBlock('js-thank')
  } else if (isScrolledIntoView('js-skill')) {
  	indicateBlock('js-skill')
  } else if(isScrolledIntoView('js-about-me')) {
	  indicateBlock('js-about-me')
  }
}


function indicateBlock(elementId) {

	$('.js-scrollable-block').not('#' + elementId).removeClass('indicated').addClass('nonIndicated');
	$('#' + elementId).removeClass('nonIndicated').addClass('indicated');

}


function isScrolledIntoView(elementId)
{
    var docViewTop = $(window).scrollTop() * 1.15;
    var docViewBottom = (docViewTop + $(window).height()) * 0.95;

    var elemTop = $('#' + elementId).offset().top;
    var elemBottom = (elemTop + $('#' + elementId).height());

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


window.addEventListener("scroll", handleScroll);
