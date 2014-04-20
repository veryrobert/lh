$(document).ready(function(){


// $('.bottom-row div').height();

console.log($('.bottom-row').height());


$('.one').each(function(){
      var height = $('.two').height();
      $(this).height(height);    
});

// Ajax Request
///////////////////////////////////////////////////////////////////////////////


   $("a").find("ul.subMenu").addClass('active');
    ajaxCall('nav a.ajaxCall', '#container', '#guts', 200);

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


$('.dropdown').hover(
  function(){
  $(this).addClass("hover");
  $(this).find( ".subMenu" ).addClass("active");
    // $("ul.subMenu").addClass('active');
    // $(".dropdown").find("ul").addClass('active');
  }, function(){
    $(this).find( ".subMenu" ).removeClass("active");
  }
);


$('.up').click(function(){
  $(this).parent().toggleClass('active');
  $(this).toggleClass('active');
});

$('.summary button.readmore').click(function(){
  $('div.none').slideToggle();

     if($(this).text() == 'Read More'){
           $(this).text('Close');
       } else {
           $(this).text('Read More');
       }

});


$("ul.subMenu li:nth-child(2) a").hover(function(){
  $(".arrow-up").css("border-bottom-color", "rgb(7, 23, 37)");
  // $(".arrow-up").addClass("active");
  
}, function(){
  $(".arrow-up").css("border-bottom-color", "");
  // $(".arrow-up").removeClass("active");
});




// Vertical Tabs
///////////////////////////////////////////////////////////////////////////////


  $(".js-vertical-tab-content").hide();
  $(".js-vertical-tab-content:first").show();


/* if in tab mode */

  $(".js-vertical-tab").click(function(event) {
    event.preventDefault();

    $(".js-vertical-tab-content").hide().html();
    var activeTab = $(this).attr("rel");
    var url = $(this).attr("href");

    $( "#test" ).load(url+" #loadme", function() {
        $(this).hide().fadeIn();
    });

    $("#"+activeTab).show();

    $(".js-vertical-tab").removeClass("is-active");


    $(".js-vertical-tab-accordion-heading").removeClass("is-active");
    $('span').removeClass('is-active');
    $(".js-vertical-tab-accordion-heading[rel^='"+activeTab+"']").addClass("is-active");
    $(this).addClass("is-active");
   
   
  });

  
/* if in accordion mode */

  $(".js-vertical-tab-accordion-heading").click(function(event) {
    event.preventDefault()

    $(".js-vertical-tab-content").hide();
    var accordion_activeTab = $(this).attr("rel");
    $("#"+accordion_activeTab).show();

    $(".js-vertical-tab-accordion-heading").removeClass("is-active");
    $(this).addClass("is-active");


    $(".js-vertical-tab").removeClass("is-active");
    $(".js-vertical-tab[rel^='"+accordion_activeTab+"']").addClass("is-active");

  });



$('a.js-vertical-tab').click(function(){

  $(this).children('span').addClass('is-active');
  console.log('true');

});

 // if ($('a.js-vertical-tab').hasClass('is-active')) {
 //    $(this).children('span').addClass('is-active');
 //    console.log('true');
 //    } 






(function($) {
    $(function() {
        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var width = jcarousel.innerWidth();

                if (width >= 600) {
                    width = width / 3;
                } else if (width >= 320) {
                    width = width / 1;
                }

                jcarousel.jcarousel('items').css('width', width + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });


    });
})(jQuery);







// Ajax Function
///////////////////////////////////////////////////////////////////////////////

var ajaxCall = function(link, container, guts, speed){
 
    var mainContent = $(container);
    var contents = $(guts);
    var makeCall = $(link);
    var checkBack = function() {
        $(window).on('popstate', function(){
           _link = location.pathname.replace(/^.*[\\\/]/, ''); //get filename only
           loadContent(_link);
        });
    }
 
    makeCall.on("click", function(e) {
        _link = $(this).attr("href");
        history.pushState(null, null, _link);
        loadContent(_link);     
        e.preventDefault();
 
    });
 
    function loadContent(href){
        mainContent.find(guts).fadeOut(speed, function() {
            mainContent.hide().load(href + " " + guts, function() {
                mainContent.fadeIn(speed, function() {
                });
            });
        });
        checkBack();
    }
 
};


// dropdown Function
///////////////////////////////////////////////////////////////////////////////

var dropdowns = $(".dropdown");

// Onclick on a dropdown, toggle visibility
dropdowns.find("dt").click(function(){
  dropdowns.find("dd ul").hide();
  $(this).next().children().toggle();
});

// Clic handler for dropdown
dropdowns.find("dd ul li a").click(function(){
  var leSpan = $(this).parents(".dropdown").find("dt a span");
  
  // Remove selected class
  $(this).parents(".dropdown").find('dd a').each(function(){
    $(this).removeClass('selected');
  });
  
  // Update selected value
  leSpan.html($(this).html());
  
  // If back to default, remove selected class else addclass on right element
  if($(this).hasClass('default')){
    leSpan.removeClass('selected')
  }
  else{
    leSpan.addClass('selected');
    $(this).addClass('selected');
  }
  
  // Close dropdown
  $(this).parents("ul").hide();
});

// Close all dropdown onclick on another element
$(document).bind('click', function(e){
  if (! $(e.target).parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
});
   

// Ajax Success
///////////////////////////////////////////////////////////////////////////////


$(document).ajaxSuccess(function() {
  
  $('.accordion-tabs-minimal').each(function(index) {
      $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
    });

  $(".js-vertical-tab-content:first").show();

});


  $('.tab-header-and-content .tab-link')

  $(".tab-header-and-content:not(:first) .tab-link").append('<span class="arrow-down"></span>');

  $(".vertical-tab:not(:first)").append('<span class="arrow-right"></span>');

// Ajax Success
///////////////////////////////////////////////////////////////////////////////


// $(window).load(function(){

  $('.masonry').masonry({
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    itemSelector: '.item',
    transitionDuration: 0
  });

// }); // LOAD

