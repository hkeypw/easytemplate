(function(){
  //loader
  $(".loaded").delay(600).fadeOut();
  $(".loader").delay(900).fadeOut("slow");
  //to top
  


  $("a[href='#']").click(function(e) {
    e.preventDefault();
  });

  

  $('.bs-component [data-toggle="popover"]').popover();
  $('.bs-component [data-toggle="tooltip"]').tooltip();

})();
