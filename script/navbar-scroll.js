$(function () {
  $(document).scroll(function () {
    var $nav = $(".header-7-2 .header-sticky");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
