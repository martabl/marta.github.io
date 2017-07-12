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
  } else if (isScrolledIntoView('js-project')) {
  	indicateBlock('js-project')
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
    var docViewHeight = $(window).height();
    var docViewTop = $(window).scrollTop() * 1.15;
    var docViewBottom = (docViewTop + docViewHeight) * 0.95;

    var elementHeight = $('#' + elementId).height();
    var elemTop = $('#' + elementId).offset().top;
    var elemBottom = (elemTop + elementHeight);

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop) || (elemBottom >= docViewBottom && elemTop <= docViewTop && elementHeight >= docViewHeight) );
}

window.addEventListener("scroll", handleScroll);

$(function() {

  $('a.link-nav').click(function() {

    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname) {

      var $target = $(this.hash);

      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body').animate({
          scrollTop: targetOffset
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function() {
  $('.up-page').click(function() {
    $('body, html').animate({
      scrollTop: '0px'
    }, 1000);
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.up-page').fadeIn(300);
    } else {
      $('.up-page').fadeOut(300);
    }
  });
})
