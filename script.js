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

  $("#myForm").submit(function(){
     return formVal();

     function formVal(){
        var name = $("#name").val()
        var email = $("#email").val()
        var text = $("#text").val()

        //validating name
        var regex1 = /^[A-Z a-z]+$/
        if (name === ""){
           alert ("Name cannot be blank");
           return false;
        }else if (name.length < 4){
           alert ("Name is too short");
           return false;
        }else if (!regex1.test(name)){
           alert ("Name should only contain alphabets");
           return false;
        }

        //validating email
        var regex2 = /^([A-Za-z0-9\!\.\-\]+)@([A-Za-z0-9]+)\.([A-Za-z0-9]+)(\.[A-Za-z0-9]+)?$/
        ///^([_\-\.%0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,7})?$/
        if(email === ""){
           alert ("Please input your email");
           return false;
        }else if (!regex2.test(email)){
           alert ("Invalid email.");
           return false;
        }

        //text area
        if(text === ""){
           alert ("You have not entered a message");
           return false;
        }else{
           //return true;
           alert ("Thank you " + name  + ". Your message has been received.");
        }
     }


  })
   


})