$(document).ready(function(){
    $("#design").click(function(){
       $(this).hide();
       $("#pdesign").show(); 
    })
    $("#pdesign").click(function(){
      $(this).hide();
      $("#design").show(); 
   })
   
     $("#dev").click(function(){
        $(this).hide();
        $("#pdev").show(); 
     })
     $("#pdev").click(function(){
      $(this).hide();
      $("#dev").show(); 
   })
     
      $("#product").click(function(){
         $(this).hide();
         $("#pproduct").show(); 
     })
     $("#pproduct").click(function(){
      $(this).hide();
      $("#product").show(); 
  })
   


})