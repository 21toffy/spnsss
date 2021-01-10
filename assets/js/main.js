/**
* Template Name: Mamba - v2.0.1
* Template URL: https://bootstrapmade.com/mamba-one-page-bootstrap-template-free/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

$(document).ready(function() {  
  
    getItems();  
  
});  




function getItems() {  
  
    $.ajax({  
  
        async: true,  
        url: 'https://spns.herokuapp.com/get-downloads',  
        method: "GET", 

  
        headers: {  
            "accept": "application/json;odata=verbose",  
            "content-type": "application/json;odata=verbose"  
  
        },  
        success: function(data) {  
            // data = data.d.results;  
            console.log(data);  
            $.each(data, function(index, val) {  
                 const key   = index[0];
                 const value = val[1];
  
                var html = 
                 "<tr><td>" + value.name +
                 "</td><td>" + value.email + 
                 "</td><td>" + value.phone + 
                 "</td><td>" + value.company + 
                 "</td><td>" + value.service + 
                 "</td><td>" + value.date + 
                 "</td><td>" + value.acknowledged + 
                 "</td><td><a href='#' data-target='#ModalForUpdateEmployee' data-toggle='modal' onclick='edit(" + value.id + ")'><img src='https://sharepointtechie.sharepoint.com/sites/automatedwiki/SiteAssets/CRUD/003-edit-document.png'></a></td><td><a href='#' onclick='deleteItem(" + value.phone + ");'>del</a></td></tr>";  
                console.log(value);
                $('.table tbody').append(html);  
  
            });  
  
            table = $('#subsiteList').DataTable();  
        },  
        error: function(error) {  
            console.log(JSON.stringify(error));  
  
        }  
  
    })  
  
  
}  




function deleteItem(value) {  
     console.log(JSON.stringify(error));  
            console.log(productId)
        console.log(productId.id)
        console.log(productId.value)
        console.log(productId.key)
        console.log(productId.index)

    $.ajax({  
  
  
        url: '127.0.0.1:5000/acknowledged' + productId,  
        method: "GET",  
        headers: {  
            "accept": "application/json;odata=verbose",  
            "content-type": "application/json;odata=verbose",  
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),  
            "IF-MATCH": "*",  
            "X-HTTP-Method": "GET"  
        },  
        success: function(data) {  
  
            console.log("Deleted!", "Item Deleted successfully", "success");  
  
            // if ($.fn.DataTable.isDataTable('#subsiteList')) {  
            //     $('#subsiteList').DataTable().destroy();  
            // }  
            // $('#subsiteList tbody').empty();  
  
  
            getItems();  
        },  
        error: function(error) {  
            console.log(JSON.stringify(error));  
  
        }  
  
    })  
         console.log('dnnf')




            console.log(JSON.stringify(error));  
            console.log(productId)
        console.log(productId.id)
        console.log(productId.value)
        console.log(productId.key)
        console.log(productId.index)
  
}  



!(function($) {
  "use strict";

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Stick the header at top on scroll
  $("#header").sticky({
    topSpacing: 0,
    zIndex: '50'
  });


  

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;
        var scrolled = 2;

        if ($('#header-sticky-wrapper').length) {
          scrollto -= $('#header-sticky-wrapper').outerHeight() - scrolled;
        }

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Intro carousel
  var heroCarousel = $("#heroCarousel");
  var heroCarouselIndicators = $("#hero-carousel-indicators");
  heroCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
    (index === 0) ?
    heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "' class='active'></li>"):
      heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "'></li>");
  });

  heroCarousel.on('slid.bs.carousel', function(e) {
    $(this).find('h2').addClass('animated fadeInDown');
    $(this).find('p').addClass('animated fadeInUp');
    $(this).find('.btn-get-started').addClass('animated fadeInUp');
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the venobox plugin
  $(window).on('load', function() {
    $('.venobox').venobox();
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Initi AOS
  AOS.init({
    duration: 1000,
    easing: "ease-in-out-back"
  });

})(jQuery);