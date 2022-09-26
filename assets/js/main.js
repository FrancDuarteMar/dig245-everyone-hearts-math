/* javascript */
let selectionIndex = 0;
var elem = document.getElementById("your-pos");
var pos = $("#your-pos").position().left;
var targetPos = $("#friend-pos").position().left;
var maxWidth = $(".streetVisual").width();

$('#solutions').on('change', function (e) {
  elem.style.left = pos + 'px';

  selectionIndex = $("#solutions").val();
  elem.style.left = pos + 'px';

  $(".selected-solution").html("");
  $("#optimal-solution").html("");

  $(".optimal-solution-description").html("");
  $(".selected-solution-description").html("");

  $(".selected-solution").css({
    "height": "",
    "width": "",
    "background-color": "",
    "position": ""
  });
  $("#optimal-solution").css({
    "height": "",
    "width": "",
    "background-color": "",
    "position": ""
  });
  console.log("User has not selected an option!");

  if (selectionIndex == 0) {
    elem.style.left = pos + 'px';

    $(".selected-solution").html("");
    $("#optimal-solution").html("");

    $(".optimal-solution-description").html("");
    $(".selected-solution-description").html("");

    $(".selected-solution").css({
      "height": "",
      "width": "",
      "background-color": "",
      "position": ""
    });
    $("#optimal-solution").css({
      "height": "",
      "width": "",
      "background-color": "",
      "position": ""
    });
    console.log("User has not selected an option!");
  } else if (selectionIndex == 1) {
    elem.style.left = pos + 'px';
    var id = null;
    id = setInterval(frame, 10);
    console.log("initial position: "+pos);
    console.log("desired position: "+$("#street").position().left);
    let thisPos = pos;
    function frame() {
      if (thisPos <= 0) {
        clearInterval(id);
      } else {
        thisPos--;
      elem.style.left = thisPos + 'px';
      }
    }

  } else if (selectionIndex == 2) {
    elem.style.left = pos + 'px';
    var id = null;
    id = setInterval(frame, 10);
    console.log("initial position: "+pos);
    console.log("desired position: "+$("#street").position().left);
    let thisPos = pos;
    let tempEnded = false;
    function frame() {
      if (thisPos >= $("#friend-pos").position().left) {
        clearInterval(id);
      } else if(!tempEnded) {
        thisPos--;
        elem.style.left = thisPos + 'px';
        if(thisPos<=0){
          tempEnded = true;
        }
      }
      else{
        thisPos++;
        elem.style.left = thisPos + 'px';
      }
    }

    
    // $(".optimal-solution-description").html("This is the shortest path!");
    // $(".selected-solution-description").html("Eh, you still had to walk a while");


    // $(".selected-solution").css({
    //   "height": maxWidth + (maxWidth * 7 / 8),
    //   "width": "5px",
    //   "background-color": "red",
    //   "position": "relative"
    // });
    // $("#optimal-solution").css({
    //   "height": maxWidth,
    //   "width": "5px",
    //   "background-color": "green",
    //   "position": "relative"
    // });
    // console.log("This corresponds to O(N*3L) runtime!")
  } else if (selectionIndex == 3) {
    elem.style.left = pos + 'px';
    var id = null;
    id = setInterval(frame, 50);
    console.log("initial position: "+pos);
    console.log("desired position: "+$("#street").position().left);
    let thisPos = pos;
    let walkDist = 1;
    let step = 0;
    function frame() {
      if (thisPos >= $("#friend-pos").position().left) {
        clearInterval(id);
      } 
      else if(step == 0){
        thisPos-=walkDist;
        if(thisPos < 0){
          elem.style.left = 0 + 'px';
        }
        else if(thisPos >= targetPos){
          elem.style.left = targetPos + 'px';
          thisPos = targetPos;
        }
        else{
          elem.style.left = thisPos + 'px';
        }
        step = 1;
      }
      else if(step ==1){
        thisPos += 2*walkDist;
        if(thisPos < 0){
          elem.style.left = 0 + 'px';
        }
        else if(thisPos >= targetPos){
          elem.style.left = targetPos + 'px';
          thisPos = targetPos;
        }
        else{
          elem.style.left = thisPos + 'px';
        }
        step = 2;
      }
      else{
        thisPos-=walkDist;

        if(thisPos < 0){
          elem.style.left = 0 + 'px';
        }
        else if(thisPos >= targetPos){
          elem.style.left = targetPos + 'px';
          thisPos = targetPos;
        }
        else{
          elem.style.left = thisPos + 'px';
        }
        walkDist ++; 
        step = 0
      }

      
    }

    // $(".optimal-solution-description").html("This is the shortest path!");
    // $(".selected-solution-description").html("Good luck with your walk!");

    // $(".selected-solution").css({
    //   "height": maxWidth ** 2,
    //   "width": "5px",
    //   "background-color": "red",
    //   "position": "relative"
    // });
    // $("#optimal-solution").css({
    //   "height": maxWidth,
    //   "width": "5px",
    //   "background-color": "green",
    //   "position": "relative"
    // });
  } else if (selectionIndex == 4) {
    elem.style.left = pos + 'px';
    var id = null;
    id = setInterval(frame, 50);
    let thisPos = pos;
    let walkDist = 1;
    let step = 0;
    function frame() {
      if (thisPos >= $("#friend-pos").position().left) {
        clearInterval(id);
      } 
      else if(step == 0){
        thisPos-=walkDist;
        if(thisPos < 0){
          elem.style.left = 0 + 'px';
        }
        else if(thisPos >= targetPos){
          elem.style.left = targetPos + 'px';
          thisPos = targetPos;
        }
        else{
          elem.style.left = thisPos + 'px';
        }
        step = 1;
      }
      else if(step ==1){
        thisPos += 2*walkDist;

        if(thisPos < 0){
          elem.style.left = 0 + 'px';
        }
        else if(thisPos >= targetPos){
          elem.style.left = targetPos + 'px';
          thisPos = targetPos;
        }
        else{
          elem.style.left = thisPos + 'px';
        }
        step = 2;
      }
      else{
        thisPos-=walkDist;

        if(thisPos < 0){
          elem.style.left = 0 + 'px';
        }
        else if(thisPos >= targetPos){
          elem.style.left = targetPos + 'px';
          thisPos = targetPos;
        }
        else{
          elem.style.left = thisPos + 'px';
        }
        walkDist *=2; 
        step = 0
      }
    }

    // $(".optimal-solution-description").html("Hey they're the same distance!");
    // $(".selected-solution-description").html("That's it!");

    // $(".selected-solution").css({
    //   "height": maxWidth,
    //   "width": "5px",
    //   "background-color": "green",
    //   "position": "relative"
    // });
    // $("#optimal-solution").css({
    //   "height": maxWidth,
    //   "width": "5px",
    //   "background-color": "green",
    //   "position": "relative"
    // });
    // console.log("This corresponds to O(N) runtime! Its the optimal algorithm!")
  } else if (selectionIndex == 5) {
    elem.style.left = pos + 'px';

    var id = null;
    id = setInterval(frame, 100);
    let thisPos = pos;
    let tempEnded = false;
    
    let walkDist = 2;
    let step = 0;
    function frame() {
      if (thisPos >= $("#friend-pos").position().left) {
        clearInterval(id);
      } 
      else if(step == 0){
        thisPos-=walkDist;
        if(thisPos < 0){
          elem.style.left = 0 + 'px';
        }
        else if(thisPos >= targetPos){
          elem.style.left = targetPos + 'px';
        }
        else{
          elem.style.left = thisPos + 'px';
        }
        step = 1;
      }
      else if(step ==1){
        thisPos += 2*walkDist;

        if(thisPos < 0){
          elem.style.left = 0 + 'px';
        }
        else if(thisPos >= targetPos){
          elem.style.left = targetPos + 'px';
        }
        else{
          elem.style.left = thisPos + 'px';
        }
        step = 2;
      }
      else{
        thisPos-=walkDist;

        if(thisPos < 0){
          elem.style.left = 0 + 'px';
        }
        else if(thisPos >= targetPos){
          elem.style.left = targetPos + 'px';
          thisPos = targetPos;
        }
        else{
          elem.style.left = thisPos + 'px';
        }
        walkDist = walkDist*walkDist; 
        step = 0
      }
    }

    // $(".optimal-solution-description").html("This is the shortest path!");
    // $(".selected-solution-description").html("Almost but not quite!");

    // $(".selected-solution").css({
    //   "height": maxWidth + (maxWidth * 1 / 8),
    //   "width": "5px",
    //   "background-color": "red",
    //   "position": "relative"
    // });
    // $("#optimal-solution").css({
    //   "height": maxWidth,
    //   "width": "5px",
    //   "background-color": "green",
    //   "position": "relative"
    // });
    // console.log("This corresponds to O(N +L) runtime! Its almost the best but not quite")
  }
});

$("#submit-button").click(function (e) { 
  e.preventDefault();
  if (selectionIndex == 0) {
    elem.style.left = pos + 'px';

    $(".selected-solution").html("");
    $("#optimal-solution").html("");

    $(".optimal-solution-description").html("");
    $(".selected-solution-description").html("");

    $(".selected-solution").css({
      "height": "",
      "width": "",
      "background-color": "",
      "position": ""
    });
    $("#optimal-solution").css({
      "height": "",
      "width": "",
      "background-color": "",
      "position": ""
    });
    console.log("User has not selected an option!");
  } else if (selectionIndex == 1) {
    $(".optimal-solution-description").html("This is the shortest path guaranteed to find your friend");
    $(".selected-solution-description").html("But... you might not find your friend");

    $(".selected-solution").css({
      "height": maxWidth * 1 / 8,
      "width": "5px",
      "background-color": "green",
      "position": "relative"
    });
    $("#optimal-solution").css({
      "height": maxWidth,
      "width": "5px",
      "background-color": "red",
      "position": "relative"
    });
    console.log("This corresponds to O(L) runtime! Not a correct algorithm!")

  } else if (selectionIndex == 2) {
    $(".optimal-solution-description").html("This is the shortest path!");
    $(".selected-solution-description").html("Eh, you still had to walk a while");


    $(".selected-solution").css({
      "height": maxWidth + (maxWidth * 7 / 8),
      "width": "5px",
      "background-color": "red",
      "position": "relative"
    });
    $("#optimal-solution").css({
      "height": maxWidth,
      "width": "5px",
      "background-color": "green",
      "position": "relative"
    });
    console.log("This corresponds to O(N*3L) runtime!")
  } else if (selectionIndex == 3) {
    $(".optimal-solution-description").html("This is the shortest path!");
    $(".selected-solution-description").html("Good luck with your walk!");

    $(".selected-solution").css({
      "height": maxWidth ** 2,
      "width": "5px",
      "background-color": "red",
      "position": "relative"
    });
    $("#optimal-solution").css({
      "height": maxWidth,
      "width": "5px",
      "background-color": "green",
      "position": "relative"
    });
  } else if (selectionIndex == 4) {
    $(".optimal-solution-description").html("Hey they're the same distance!");
    $(".selected-solution-description").html("That's it!");

    $(".selected-solution").css({
      "height": maxWidth,
      "width": "5px",
      "background-color": "green",
      "position": "relative"
    });
    $("#optimal-solution").css({
      "height": maxWidth,
      "width": "5px",
      "background-color": "green",
      "position": "relative"
    });
    console.log("This corresponds to O(N) runtime! Its the optimal algorithm!")
  } else if (selectionIndex == 5) {
    $(".optimal-solution-description").html("This is the shortest path!");
    $(".selected-solution-description").html("Almost but not quite!");

    $(".selected-solution").css({
      "height": maxWidth + (maxWidth * 1 / 8),
      "width": "5px",
      "background-color": "red",
      "position": "relative"
    });
    $("#optimal-solution").css({
      "height": maxWidth,
      "width": "5px",
      "background-color": "green",
      "position": "relative"
    });
    console.log("This corresponds to O(N +L) runtime! Its almost the best but not quite")
  }
  
  
});