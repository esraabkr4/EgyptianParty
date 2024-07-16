$(document).ready(function () {
  // const eventDate='25/10/2024';
  $('.close').trigger('click');
  $('.content').not(':first').slideUp();
  // showCounterVal();
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() >= $("#details").offset().top - 200) {
      showCounterVal();
  //   }
  // });

});
//////////////////////events
$('.head').on('click', function () {
  $('.content').not($(this).next()).slideUp();
  $(this).next().slideToggle(500);
});
$('.close').on('click', function () {
  // $('.nav-links').hide(500);
  let width = - $(".nav-links").outerWidth(true);//true value to include margin value if exist
  $("aside").animate({ left: width + "px" }, "slow");
  $('body').scrollTop(0);
});
$('.aside-button').on('click', function () {
  // $('.nav-links').show(500);
  $("aside").animate({ left: '0px' }, "slow");

});

$("#txtArea").on('keydown', function (e) {
  var words = ($(this).val().length) + 1;
  if (words <= 100) {
    // $('#display_count').text(words);
    $('.remaining').text(100 - words)
  } else {
    if (e.which !== 8) e.preventDefault();
  }
});
//////////////////////functions
function getCurrentDate() {
  var d = new Date();

  var month = d.getMonth() + 1;
  var day = d.getDate();

  var output = (day < 10 ? '0' : '') + day + '/' +
    (month < 10 ? '0' : '') + month + '/' +
    d.getFullYear();
  return output;
}
function getDiffrDays(startDate, endDate) {
  debugger;
  const diffInDays = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
  return diffInDays;
}
function parseDate(str) {
  var mdy = str.split('/');
  return new Date(mdy[2], mdy[1] - 1, mdy[0]);
}
function showCounterVal() {
  const eventDate = '25/10/2024';
  const days = getDiffrDays(parseDate(getCurrentDate()), parseDate(eventDate)),
    hours = 24,
    minutes = 60,
    seconds = 60;
  $('.seconds').text(seconds);
  $('.minutes').text(minutes);
  $('.hours').text(hours);
  $('.days').text(days);

  debugger;
  // let s=60;
  // do {
  //   setTimeout(() => {
  //     $('.seconds').text(s + " s");
  //   }, 1000);
  //   s--;
  // } while (s >= 0);
  var myCounter = setInterval(function () {
    let s = parseInt($('.seconds').html());
    if (s > 0) {
      s--;
      $('.seconds').html(s);
    } else {
      let m = parseInt($('.minutes').html());
      if(m>0){
        m--;
        $('.minutes').html(m);
        $('.seconds').html(seconds);
      }else{
        let h = parseInt($('.hours').html());
        h--;
        $('.hours').html(h);
        $('.minutes').html(minutes);
      }
      if(h==0){clearInterval(myCounter);}
      
    }
  }, 1000);



  ///////////this code go on infinite loop *_*
  // for (let d = days; d >= 0; d--) {
  //   $('.days').text(d+" D");
  //   for (let h = hours; h >= 0; h--) {
  //     $('.hours').text(h+" h");
  //     for (let m = minutes; m >= 0; m--) {
  //       $('.minutes').text(m+" m");
  //       for (let s = seconds; s >= 0; s--) {
  //         setTimeout(() => {
  //           $('.seconds').text(s+" s");
  //         }, 1000);
  //       }
  //     }
  //   }
  // }
}

