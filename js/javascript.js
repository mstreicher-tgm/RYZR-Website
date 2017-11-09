$(".button-collapse").sideNav();
$(".slider").slider();
$('.parallax').parallax();
$('.carousel').carousel();
$('.modal').modal();
$('.tooltipped').tooltip({delay: 50});
$('ul.tabs').tabs();
$('#news').css('margin-top', $('.slider').height() - $('.nav').height());


$(function() {
  var section = 0;

  if(($(window).scrollTop() >= 0) && ($(window).scrollTop() < $('.slider').height() - 65)) {
    section = 1;
    $("nav").css('backgroundColor', 'rgba(0, 0, 0, 0.6) !important');
  }
  if(($(window).scrollTop() >= $('.slider').height() - 65) && ($(window).scrollTop() < $('#about').position().top - 65)) {
    section = 2;
    $("nav").css('backgroundColor', 'rgba(29, 41, 57, 1); !important');
  }
  if(($(window).scrollTop() >= $('#about').position().top - 65) && ($(window).scrollTop() < $('#members').position().top - 65)) {
    section = 3;
    $("nav").css('backgroundColor', 'rgba(29, 175, 154, 1) !important');
  }
  if(($(window).scrollTop() >= $('#members').position().top - 65) && ($(window).scrollTop() < $('#content').position().top - 65)) {
    section = 4;
    $("nav").css('backgroundColor', 'rgba(194, 205, 68, 1) !important');
  }
  if(($(window).scrollTop() >= $('#content').position().top - 65) && ($(window).scrollTop() < $('#social').position().top - 65)) {
    section = 5;
    $("nav").css('backgroundColor', 'rgba(238, 100, 87, 1) !important');
  }
  if(($(window).scrollTop() >= $('#social').position().top - 65) && ($(window).scrollTop() < $('#contact').position().top - 65)) {
    section = 6;
    $("nav").css('backgroundColor', 'rgba(29, 41, 57, 1) !important');
  }
  if(($(window).scrollTop() >= $('#contact').position().top - 65)) {
    section = 7;
    $("nav").css('backgroundColor', 'rgba(29, 175, 154, 1) !important');
  }

  $(document).scroll(function() {

    if(($(window).scrollTop() >= 0) && ($(window).scrollTop() < $('.slider').height() - 65) && (section != 1)) {
      section = 1;
      $("nav").stop().animate({backgroundColor: 'rgba(0, 0, 0, 0.6) !important'}, 500);
      $("#backtotop").stop().animate({backgroundColor: 'rgba(29, 41, 57, 1); !important'}, 500);
    }
    else if(($(window).scrollTop() >= $('.slider').height() - 65) && ($(window).scrollTop() < $('#about').position().top - 65) && (section != 2)) {
      section = 2;
      $("nav").stop().animate({backgroundColor: 'rgba(29, 41, 57, 1); !important'}, 500);
      $("#backtotop").stop().animate({backgroundColor: 'rgba(29, 41, 57, 1); !important'}, 500);
    }
    else if(($(window).scrollTop() >= $('#about').position().top - 65) && ($(window).scrollTop() < $('#members').position().top - 65) && (section != 3)) {
      section = 3;
      $("nav").stop().animate({backgroundColor: 'rgba(29, 175, 154, 1) !important'}, 500);
      $("#backtotop").stop().animate({backgroundColor: 'rgba(29, 175, 154, 1) !important'}, 500);
    }
    else if(($(window).scrollTop() >= $('#members').position().top - 65) && ($(window).scrollTop() < $('#content').position().top - 65) && (section != 4)) {
      section = 4;
      $("nav").stop().animate({backgroundColor: 'rgba(194, 205, 68, 1) !important'}, 500);
      $("#backtotop").stop().animate({backgroundColor: 'rgba(194, 205, 68, 1) !important'}, 500);
    }
    else if(($(window).scrollTop() >= $('#content').position().top - 65) && ($(window).scrollTop() < $('#social').position().top - 65) && (section != 5)) {
      section = 5;
      $("nav").stop().animate({backgroundColor: 'rgba(238, 100, 87, 1) !important'}, 500);
      $("#backtotop").stop().animate({backgroundColor: 'rgba(238, 100, 87, 1) !important'}, 500);
    }
    else if(($(window).scrollTop() >= $('#social').position().top - 65) && ($(window).scrollTop() < $('#contact').position().top - 65) && (section != 6)) {
      section = 6;
      $("nav").stop().animate({backgroundColor: 'rgba(29, 41, 57, 1); !important'}, 500);
      $("#backtotop").stop().animate({backgroundColor: 'rgba(29, 41, 57, 1); !important'}, 500);
    }
    else if(($(window).scrollTop() >= $('#contact').position().top - 65) && (section != 7)) {
      section = 7;
      $("nav").stop().animate({backgroundColor: 'rgba(29, 175, 154, 1) !important'}, 500);
      $("#backtotop").stop().animate({backgroundColor: 'rgba(29, 175, 154, 1) !important'}, 500);

    }
  });
});
$(function() {
  $(document).on('click', 'a.page-scroll', function(event) {
    $(".button-collapse").sideNav('hide');
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - $('.nav').height()
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});
$(function() {
  var visible = false;

  if($(window).scrollTop() < $('.nav').height()) {
    $(".fixed-action-btn").addClass('scale-out');
    visible = false;
  } else {
    $(".fixed-action-btn").addClass('scale-in');
    visible = true;
  }
  $(document).scroll(function() {
    if($(window).scrollTop() < $('.nav').height() && visible != false) {
      visible = false;
      $(".fixed-action-btn").removeClass('scale-in');
      $(".fixed-action-btn").addClass('scale-out');
    }
    if($(window).scrollTop() > $('.nav').height() && visible != true) {
      visible = true;
      $(".fixed-action-btn").removeClass('scale-out');
      $(".fixed-action-btn").addClass('scale-in');
    }
  });
});
$(function() {
  if(($(window).scrollTop() >= 0) && ($(window).scrollTop() <= $('.slider').height() - 70)) {
    $('#navhome').addClass('active');
  } else {
    $('#navhome').removeClass('active');
  }
  if(($(window).scrollTop() >= $('.slider').height() - 70) && ($(window).scrollTop() <= $('#about').position().top - 70)) {
    $('#navnews').addClass('active');
  } else {
    $('#navnews').removeClass('active');
  }
  if(($(window).scrollTop() >= $('#about').position().top - 70) && ($(window).scrollTop() <= $('#members').position().top - 70)) {
    $('#navabout').addClass('active');
  } else {
    $('#navabout').removeClass('active');
  }
  if(($(window).scrollTop() >= $('#members').position().top - 70) && ($(window).scrollTop() <= $('#content').position().top - 70)) {
    $('#navmembers').addClass('active');
  } else {
    $('#navmembers').removeClass('active');
  }
  if(($(window).scrollTop() >= $('#content').position().top - 70) && ($(window).scrollTop() <= $('#social').position().top - 70)) {
    $('#navcontent').addClass('active');
  } else {
    $('#navcontent').removeClass('active');
  }
  if(($(window).scrollTop() >= $('#social').position().top - 70) && ($(window).scrollTop() <= $('#contact').position().top - 70)) {
    $('#navcontent').addClass('active');
  } else {
    $('#navcontent').removeClass('active');
  }
  if(($(window).scrollTop() >= $('#contact').position().top - 70)) {
    $('#navcontact').addClass('active');
  } else {
    $('#navcontact').removeClass('active');
  }

  $(document).scroll(function() {
    if(($(window).scrollTop() >= 0) && ($(window).scrollTop() <= $('.slider').height() - 70)) {
      $('#navhome').addClass('active');
    } else {
      $('#navhome').removeClass('active');
    }
    if(($(window).scrollTop() >= $('.slider').height() - 70) && ($(window).scrollTop() <= $('#about').position().top - 70)) {
      $('#navnews').addClass('active');
    } else {
      $('#navnews').removeClass('active');
    }
    if(($(window).scrollTop() >= $('#about').position().top - 70) && ($(window).scrollTop() <= $('#members').position().top - 70)) {
      $('#navabout').addClass('active');
    } else {
      $('#navabout').removeClass('active');
    }
    if(($(window).scrollTop() >= $('#members').position().top - 70) && ($(window).scrollTop() <= $('#content').position().top - 70)) {
      $('#navmembers').addClass('active');
    } else {
      $('#navmembers').removeClass('active');
    }
    if(($(window).scrollTop() >= $('#content').position().top - 70) && ($(window).scrollTop() <= $('#social').position().top - 70)) {
      $('#navcontent').addClass('active');
    } else {
      $('#navcontent').removeClass('active');
    }
    if(($(window).scrollTop() >= $('#social').position().top - 70) && ($(window).scrollTop() <= $('#contact').position().top - 70)) {
      $('#navsocial').addClass('active');
    } else {
      $('#navsocial').removeClass('active');
    }
    if(($(window).scrollTop() >= $('#contact').position().top - 70)) {
      $('#navcontact').addClass('active');
    } else {
      $('#navcontact').removeClass('active');
    }
  });
});

function newSmall() {
  document.getElementById('videoSmall').src = "http://www.youtube.com/embed?max-results=1&showinfo=0&rel=0&listType=user_uploads&list=ryzrde";
}
function filmSmall() {
  document.getElementById('videoSmall').src = "https://www.youtube.com/embed/videoseries?list=PLCAV3qU7VqSrr4M_dxVS2gq9npQ5SXUOE";
}
function gamingSmall() {
  document.getElementById('videoSmall').src = "https://www.youtube.com/embed/videoseries?list=PLCAV3qU7VqSq31pDpKyb8As-pyiBBD4M1";
}
function techSmall() {
  document.getElementById('videoSmall').src = "https://www.youtube.com/embed/videoseries?list=PLCAV3qU7VqSqz-qU9QBEZD0_RxhKtaGyS";
}

function newBig() {
  document.getElementById('videoBig').src = "http://www.youtube.com/embed?max-results=1&showinfo=0&rel=0&listType=user_uploads&list=ryzrde";
}
function filmBig() {
  document.getElementById('videoBig').src = "https://www.youtube.com/embed/videoseries?list=PLCAV3qU7VqSrr4M_dxVS2gq9npQ5SXUOE";
}
function gamingBig() {
  document.getElementById('videoBig').src = "https://www.youtube.com/embed/videoseries?list=PLCAV3qU7VqSq31pDpKyb8As-pyiBBD4M1";
}
function techBig() {
  document.getElementById('videoBig').src = "https://www.youtube.com/embed/videoseries?list=PLCAV3qU7VqSqz-qU9QBEZD0_RxhKtaGyS";
}
