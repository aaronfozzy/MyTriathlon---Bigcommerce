$(window).ready(function(){
  if($("body").hasClass('category')){
    var currentPage = window.location.href;
    var splitCurrentPage = currentPage.split("?")[0];
    var subCategories = $(".page-sidebar .sidebarBlock .navList-item a[data-cate-url='"+splitCurrentPage+"']").parent('li').children('ul').html();
    var subCategoriesStart = '<div class="content-sub-categories"><ul>';
    var subCategoriesEnd = '</ul></div>';
    var finalMarkup = subCategoriesStart + subCategories + subCategoriesEnd;
    if(subCategories != undefined){
      $(".page-content").prepend(finalMarkup);
    }
  }
});