/*$(document).ready(function(){
  $("button").click(function(){
    $("#div1").animate({left: '250px',
                       opacity:'0.5',
                      height:'toggle'
                      
});
  });
});*/


    setInterval(function(){
        $('button').click(function(){
       var div = $('div');
       div.animate({height:'300px',opacity:'0.4'},1000);
       div.animate({width:'300px',opacity:'0.8'},1000);
       div.animate({height:'100px',opacity:'0.4'},1000);
       div.animate({width:'100px',opacity:'0.8'},1000);
    
    });
},1000);
