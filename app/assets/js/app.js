$(document).ready(function() {
  // $('.bottom-row div').height();
  console.log($('.bottom-row').height());
  $('.one').each(function() {
    var height = $('.two').height();
    $(this).height(height);
  });
  
  // Ajax Request
  ///////////////////////////////////////////////////////////////////////////////
  
  // $("a").find("ul.subMenu").addClass('active');
  //  ajaxCall('nav a.ajaxCall', '#container', '#guts', 200);
  
  $('.accordion-tabs-minimal').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });

  $('.accordion-tabs-minimal').on('click', 'li > a', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs-minimal')
      accordionTabs.find('.is-open').removeClass('is-open').hide();
      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
      $(this).children('span').addClass('is-active');
    } else {
      event.preventDefault();
    }
  });

  // Carousel
  ///////////////////////////////////////////////////////////////////////////////
  window.mySwipe = new Swipe(document.getElementById('slider'), {
    startSlide: 2,
    speed: 800,
    auto: 7000,
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    callback: function(index, elem) {},
    transitionEnd: function(index, elem) {}
  });
});
// Navigation
///////////////////////////////////////////////////////////////////////////////


$('.btn').click(function(){
  $('.modal-window').fadeIn();
});

$('.modal-close').click(function(){
  $('.modal-window').fadeOut();
});

  $('.dropdown').hover(
    function() {
      $(this).addClass("hover");
      $(this).find(".subMenu").addClass("active");
      // $("ul.subMenu").addClass('active');
      // $(".dropdown").find("ul").addClass('active');
    }, function() {
      $(this).find(".subMenu").removeClass("active");
    });
  

 


$('.arrow-down').each(function() {
  $(this).on("click", function() {
    $(this).toggleClass('active');
    $(this).next('.subMenu').slideToggle();
  });
});
$('.up').click(function() {
  $(this).parent().toggleClass('active');
  $(this).toggleClass('active');
});
$('button.readmore').click(function() {
  $('div.none').slideToggle();
  if ($(this).text() == 'Read More') {
    $(this).text('Close');
  } else {
    $(this).text('Read More');
  }
});



$("ul.subMenu li:nth-child(2) a").hover(function() {
  $(".arrow-up").css("border-bottom-color", "rgb(7, 23, 37)");
  // $(".arrow-up").addClass("active");
}, function() {
  $(".arrow-up").css("border-bottom-color", "");
  // $(".arrow-up").removeClass("active");
});
// Vertical Tabs
///////////////////////////////////////////////////////////////////////////////
$(".js-vertical-tab-content").hide();
$(".js-vertical-tab-content:first").show(); /* if in tab mode */
$(".js-vertical-tab").click(function(event) {

  $("#" + activeTab).show();
  $(".js-vertical-tab").removeClass("is-active");
  $(".js-vertical-tab-accordion-heading").removeClass("is-active");
  $('span').removeClass('is-active');
  // $(".js-vertical-tab-accordion-heading[rel^='" + activeTab + "']").addClass("is-active");
  // $(this).addClass("is-active");
}); /* if in accordion mode */
$(".js-vertical-tab-accordion-heading").click(function(event) {
  event.preventDefault()
  $(".js-vertical-tab-content").hide();
  var accordion_activeTab = $(this).attr("rel");
  $("#" + accordion_activeTab).show();
  $(".js-vertical-tab-accordion-heading").removeClass("is-active");
  // $(this).addClass("is-active");
  $(".js-vertical-tab").removeClass("is-active");
  // $(".js-vertical-tab[rel^='" + accordion_activeTab + "']").addClass("is-active");
});

$('a.js-vertical-tab').click(function() {
  $(this).children('span').addClass('is-active');
  console.log('true');
});



(function($) {
  $(function() {
    var jcarousel = $('.jcarousel');
    jcarousel.on('jcarousel:reload jcarousel:create', function() {
      var width = jcarousel.innerWidth();
      if (width >= 600) {
        width = width / 3;
      } else if (width >= 320) {
        width = width / 1;
      }
      jcarousel.jcarousel('items').css('width', width + 'px');
    }).jcarousel({
      wrap: 'circular'
    });
    $('.jcarousel-control-prev').jcarouselControl({
      target: '-=1'
    });
    $('.jcarousel-control-next').jcarouselControl({
      target: '+=1'
    });
  });
})(jQuery);



var dropdowns = $(".dropdown");
// Onclick on a dropdown, toggle visibility
dropdowns.find("dt").click(function() {
  dropdowns.find("dd ul").hide();
  $(this).next().children().toggle();
});
// Clic handler for dropdown
dropdowns.find("dd ul li a").click(function() {
  var leSpan = $(this).parents(".dropdown").find("dt a span");
  // Remove selected class
  $(this).parents(".dropdown").find('dd a').each(function() {
    $(this).removeClass('selected');
  });
  // Update selected value
  leSpan.html($(this).html());
  // If back to default, remove selected class else addclass on right element
  if ($(this).hasClass('default')) {
    leSpan.removeClass('selected')
  } else {
    leSpan.addClass('selected');
    $(this).addClass('selected');
  }
  // Close dropdown
  $(this).parents("ul").hide();
});

// Close all dropdown onclick on another element

$(document).bind('click', function(e) {
  if (!$(e.target).parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
});



$('.masonry').masonry({
  columnWidth: '.grid-sizer',
  gutter: '.gutter-sizer',
  itemSelector: '.item',
  transitionDuration: 0
});

//  form validation jquery 

function validateForm()
{
var x=document.forms["myForm"]["fname"].value;
if (x==null || x=="")
  {
    $('input.required').addClass('warning');
    $('input.required').after('<p class="warning four-eight">Form field entered incorrectly please try again</p>');
    return false;
  }
}

 // $('.question').after('<span class="question">?</span>');

$(".question").hover(function(){
  $(this).children('div.tool-tip').toggleClass('active');
});

$(".tool-tip").append('<span class="arrow-down"></span>');

$('div.content').each(function(){
  $('div.close').on('click', function(event){
    $(this).parent().fadeOut();
    event.preventDefault();
  });
});


$(window).on("load resize", function() {

  if(checkDevice() === true || $(window).width() < 860) {
      $('.primaryMenu').css('display','none');
      $('a.is-active').removeClass('is-active').next().removeClass('is-open').hide();
      $('.arrow-down').addClass('mobile');
      $(".js-vertical-tab-content").show();
      $("a.vertical-tab-accordion-heading").hide();
  }

});

$(window).on("load resize", function() {
  if($(window).width() > 860) {
      $('.primaryMenu').css('display','inline-block');
      $('.arrow-down').removeClass('mobile');
       $('.accordion-tabs-minimal').each(function(index) {
        $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
        });

      tabPath();

  }
});

$('.menu-toggle').click(function() {
      $('ul.primaryMenu').slideToggle(function() {
      });
});


// checking devices below


  function checkDevice(){
      return (
          (navigator.userAgent.toLowerCase().indexOf("ipad") > -1) ||
          (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) ||
          (navigator.platform.toLowerCase().indexOf("android") > -1)||
          (navigator.userAgent.toLowerCase().indexOf("webOS") > -1) ||
          (navigator.userAgent.toLowerCase().indexOf("blackberry") > -1) ||
          (navigator.userAgent.toLowerCase().indexOf("IEMobile") > -1) ||
          (navigator.userAgent.toLowerCase().indexOf("opera mini") > -1)
      );
  }





var tabPath = function() {
    $(function(){
      var path = window.location.pathname;
      if ( path.length > 1 ) {
      $('a.vertical-tab[href*="' + path + '"]').addClass('is-active').append('<span class="arrow-right is-active"></span>');
      }
    });
};


// <span class="arrow-right">


