$(document).ready(function(){
  var userSection = $(".navUser-item.navUser-item--account").html();
  var searchSection = $(".dropdown.dropdown--quickSearch").html();
  var wishlistSection = $(".navUser-item.navUser-item--wishlist").html();
  var cartSection = $(".navUser-item.navUser-item--cart").html();
  $(".navPages-list.desktop-menu").append('<li class="dropdown dropdown--quickSearch is-open f-open-dropdown" id="quickSearchSticky" aria-hidden="false" tabindex="-1" data-prevent-quick-search-close="" style="top: 70px;">'+searchSection+'</li>');
  $(".navPages-list.desktop-menu").append('<li class="navUser-item navUser-item--account show">'+userSection+'</li>');
  $(".navPages-list.desktop-menu").append('<li class="navUser-item navUser-item--wishlist show">'+wishlistSection+'</li>');
  $(".navPages-list.desktop-menu").append('<li class="navUser-item navUser-item--cart show">'+cartSection+'</li>');
});
