
var palying = false;
var score;
var step;
var action;
var trailsleft;
var fruits = ["apple","banana","cherries","grapes","mango","orange","peach","pear","watermelon"];
$(function(){
    $("#startreset").click(function(){
      if(palying==true){
          location.reload();
      }else{
          palying = true;
          score=0;
          $("#scorevalue").html(score);
          trailsleft=3;
          $("#trailsleft").show();
          addHearths();
          $("#gameover").hide();

          $("#startreset").html("Reset Game");

        startaction();

      }
    });


    $("#fruit1").mouseover(function(){
        score++;
        $("#scorevalue").html(score);
        document.getElementById("play").play();

        clearInterval(action);
        
        $("#fruit1").hide("explode",500);

       setTimeout(startaction ,500);
    });


function addHearths(){
    $("#trailsleft").empty();
    for(i=0 ; i< trailsleft; i++){
        $("#trailsleft").append('<img src="images/heart.png" class="life">');
    }
}

function startaction(){
    $("#fruit1").show();
   choosefruit();
   $("#fruit1").css({
       "left": Math.round(750*Math.random()),
       "top" : -50
   });

   step = 1+Math.round(5*Math.random());

   action = setInterval(function(){
       $("#fruit1").css('top', $("#fruit1").position().top + step);

       if($("#fruit1").position().top > $("#fruitcontiner").height()){
           if(trailsleft > 1){

            $("#fruit1").show();
            choosefruit();
            $("#fruit1").css({
                "left": Math.round(750*Math.random()),
                "top" : -50
            });
         
            step = 1+Math.round(5*Math.random());

            trailsleft--;

            addHearths();

           }else{
               palying = false;
                $("#startreset").html("Start Game");
                $("#gameover").show();
                $("#gameover").html("<p>Game Over</p><p>Your Score is"+score+"</p>");

             
                $("#trailsleft").hide();
                stopaction();

           }
       }
   },10);

}
function choosefruit(){
  $("#fruit1").attr('src' , "images/"+fruits[Math.round(8*Math.random())]+".png")  
}
function stopaction(){
    clearInterval(action);
    $("#fruit1").hide();

}
});