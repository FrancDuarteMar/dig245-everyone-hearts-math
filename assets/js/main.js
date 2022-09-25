/* javascript */
let selectionIndex = 0;

$('#solutions').on('change', function(){
  selectionIndex = $("#solutions").val();

  var maxWidth = $(".streetVisual").width();

    if(selectionIndex == 0){
      $(".selected-solution").html("");
      $("#optimal-solution").html("");
      
      $(".optimal-solution-description").html("");
      $(".selected-solution-description").html("");

      $(".selected-solution").css({"height":"",
      "width":"", "background-color":"","position":""});
    $("#optimal-solution").css({"height":"",
      "width":"", "background-color":"","position":""});
    }
    else if(selectionIndex == 1){
      $(".optimal-solution-description").html("This is the shortest path guaranteed to find your friend");
      $(".selected-solution-description").html("But... you might not find your friend");
      
      $(".selected-solution").css({"height":maxWidth*1/8,
        "width":"5px", "background-color":"green","position":"relative"});
      $("#optimal-solution").css({"height": maxWidth,
        "width":"5px", "background-color":"red","position":"relative"});

    }
    else if(selectionIndex == 2){
      $(".optimal-solution-description").html("This is the shortest path!");
      $(".selected-solution-description").html("Almost but not quite!");

      $(".selected-solution").css({"height":maxWidth+(maxWidth*1/8),
        "width":"5px", "background-color":"red","position":"relative"});
      $("#optimal-solution").css({"height":maxWidth,
        "width":"5px", "background-color":"green","position":"relative"});
    }
    else if(selectionIndex == 3){
      $(".optimal-solution-description").html("This is the shortest path!");
      $(".selected-solution-description").html("Good luck with your walk!");

      $(".selected-solution").css({"height":maxWidth**2,
        "width":"5px", "background-color":"red","position":"relative"});
      $("#optimal-solution").css({"height": maxWidth,
        "width":"5px", "background-color":"green","position":"relative"});
    }
    else if(selectionIndex == 4){
      $(".optimal-solution-description").html("Hey they're the same distance!");
      $(".selected-solution-description").html("That's it!");

      $(".selected-solution").css({"height":maxWidth,
        "width":"5px", "background-color":"green","position":"relative"});
      $("#optimal-solution").css({"height":maxWidth,
        "width":"5px", "background-color":"green","position":"relative"});
    }
    else if(selectionIndex == 5){
      $(".optimal-solution-description").html("This is the shortest path!");
      $(".selected-solution-description").html("Eh, you still had to walk a while");

      $(".selected-solution").css({"height":maxWidth+(maxWidth*7/8),
        "width":"5px", "background-color":"red","position":"relative"});
      $("#optimal-solution").css({"height":maxWidth,
        "width":"5px", "background-color":"green","position":"relative"});
    }

});
