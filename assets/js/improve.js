/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */


$(document).ready(function(){


 $(".show-abstract").click(function(){

  var s=$(this).parents(".projects-item").next();
  if($(s).is(":visible"))
  {
  $(s).hide();
  }
  else {
    $(s).show();
  }

  return false;
 })

 $(".copy-bib").click(function(){
  $(".copy-bib span").text("Copy BibTex");

  var $temp = $("<input>");
$("body").append($temp);

var s=$(this).parents(".projects-item").next();

$temp.val($(s).text()).select();
document.execCommand("copy");
$(this).find("span").text("copied");
$temp.remove();
  return false;
 })


});



