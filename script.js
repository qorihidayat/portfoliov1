


//About
// $(window).on('load', function() {
//   $('.pKiri').addClass('pMuncul');
//   $('.pKanan').addClass('pMuncul');
// });

$(window).ready(function() {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

//jumbotron paralax
// test script jquery
$(window).scroll(function () {
var wScroll = $(this).scrollTop();
$('.jumbotron img').css({
  'transform' : 'translate(0px, '+ wScroll/4 +'%)'
});
$('.jumbotron h1').css({
  'transform' : 'translate(0px, '+ wScroll/2 +'%)'
});
$('.jumbotron p').css({
  'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
});

console.log(wScroll);

//portofolio paralax
if (wScroll > $('.portofolio').offset().top-400) {
  $('.portofolio .thumbnail').each(function (i) {
    setTimeout(function () {
      $('.portofolio .thumbnail').eq(i).addClass('muncul');
    }, 500 * i);
  });

  // $('.portofolio .thumbnail').addClass('muncul');
}

});
//MEnu Bar Clik
//buat script
$('.page-scroll').on("click", function(e) {

//ambil [href] dari [ybs]
  var tujuan = $(this).attr('href');

//ambil section dari var
  var elementTujuan = $(tujuan);

//test scrolltop dan elementTujuan.offset().top
// console.log($('html, bdoy').scrollTop(elementTujuan.offset().top));
//buat animate
$('html, body').animate({
  scrollTop : elementTujuan.offset().top - 70
}, 1250, 'swing');



  e.preventDefault();
});
