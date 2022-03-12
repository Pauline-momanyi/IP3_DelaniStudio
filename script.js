$(document).ready(function(){
    $("#design").click(function(){
       $("#pdesign").toggle(); 
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