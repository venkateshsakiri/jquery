/*$(document).ready(function(){
    $("tr:even").css("background-color","red");  
    $("tr:odd").css("background-color","blue");
    $("button").click(function(){
        $("tr:even").css("background-color","yellow","color","red"); 
    });
    $("#btn").click(function(){
        $("tr:odd").css("color","white");
    });
    $("#p1").click(function(){
        alert("you Enterd the paragraph");
    });
    $("input").focus(function(){
        $(this).css("background-color","yellow");
    });
    $("input").blur(function(){
        $(this).css("background-color","#fff");
    });
    $("p").on({mouseenter:function(){
        $(this).css("background-color","lightgrey");
    },mouseleave:function(){
        $(this).css("background-color","red");
    },click:function(){
        $(this).css("color","yellow");
    }
});
});*/


/*$(document).ready(function(){
   $("button").click(function(){
       $("#div1").fadeToggle();
       $("#div2").fadeToggle("slow");
       $("#div3").fadeToggle(3000);
   });
   $("#btn").click(function(){
       $("#div1").fadeOut();
       $("#div2").fadeOut("slow");
       $("#div3").fadeOut(3000);
   });



   $("button").click(function(){
       $("#div1").fadeTo("slow",0.15);
       $("#div2").fadeTo("slow",0.4);
       $("#div3").fadeTo("slow",0.7);
   });
});*/



    $("document").ready(function(){
       $("#div4").click(function(){
        $("#div5").slideToggle("slow");
       }) ;
    });

