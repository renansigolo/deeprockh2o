// Change the Navbar background on scroll
jQuery(function () {
  jQuery(document).scroll(function () {
    let $nav = jQuery(".fixed-top");
    let $products = jQuery(".masthead");
    $nav.toggleClass("scrolled", jQuery(this).scrollTop() > $products.height());
  });
});
