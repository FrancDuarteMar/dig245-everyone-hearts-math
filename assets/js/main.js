/* javascript */
let selectionIndex = 0;
var elem = document.getElementById("your-pos");
var pos = $("#your-pos").position().left;
var targetPos = $("#friend-pos").position().left;
var maxWidth = $(".streetVisual").width();
var id;

$('#solutions').on('change', function () {
  resetUserPos();
  selectionIndex = $("#solutions").val();

  setDefault();

  if (selectionIndex == 0) {
    setDefault();
  } else if (selectionIndex == 1) {
    resetUserPos();
    id = null;
    let thisPos = pos;
    id = setInterval(frame1, 10, pos, id);

    function frame1() {
      if (thisPos <= 0) {
        clearInterval(id);
      } else {
        thisPos--;
        elem.style.left = thisPos + 'px';
      }
    }

  } else if (selectionIndex == 2) {
    resetUserPos();
    id = null;
    id = setInterval(frame2, 10);
    let thisPos = pos;
    let tempEnded = false;

    function frame2() {
      if (thisPos >= $("#friend-pos").position().left) {
        clearInterval(id);
      } else if (!tempEnded) {
        thisPos--;
        elem.style.left = thisPos + 'px';
        if (thisPos <= 0) {
          tempEnded = true;
        }
      } else {
        thisPos++;
        elem.style.left = thisPos + 'px';
      }
    }
  } else if (selectionIndex == 3) {
    resetUserPos();
    id = null;
    id = setInterval(frame3, 50);
    let thisPos = pos;
    let walkDist = 1;
    let step = 0;

    function frame3() {
      if (thisPos >= $("#friend-pos").position().left) {
        clearInterval(id);
      } else if (step == 0) {
        thisPos -= walkDist;
        if (thisPos < 0) {
          elem.style.left = 0 + 'px';
        } else if (thisPos >= targetPos) {
          elem.style.left = targetPos + 'px';
          thisPos = targetPos;
        } else {
          elem.style.left = thisPos + 'px';
        }
        step = 1;
      } else if (step == 1) {
        thisPos += 2 * walkDist;
        if (thisPos < 0) {
          elem.style.left = 0 + 'px';
        } else if (thisPos >= targetPos) {
          elem.style.left = targetPos + 'px';
          thisPos = targetPos;
        } else {
          elem.style.left = thisPos + 'px';
        }
        step = 2;
      } else {
        thisPos -= walkDist;

        if (thisPos < 0) {
          elem.style.left = 0 + 'px';
        } else if (thisPos >= targetPos) {
          elem.style.left = targetPos + 'px';
          thisPos = targetPos;
        } else {
          elem.style.left = thisPos + 'px';
        }
        walkDist++;
        step = 0;
      }


    }
  } else if (selectionIndex == 4) {
    resetUserPos();
    id = null;
    id = setInterval(frame4, 50);
    let thisPos = pos;
    let walkDist = 1;
    let step = 0;

    function frame4() {
      if (thisPos >= $("#friend-pos").position().left) {
        clearInterval(id);
      } else if (step == 0) {
        thisPos -= walkDist;
        if (thisPos < 0) {
          elem.style.left = 0 + 'px';
        } else if (thisPos >= targetPos) {
          elem.style.left = targetPos + 'px';
          thisPos = targetPos;
        } else {
          elem.style.left = thisPos + 'px';
        }
        step = 1;
      } else if (step == 1) {
        thisPos += 2 * walkDist;

        if (thisPos < 0) {
          elem.style.left = 0 + 'px';
        } else if (thisPos >= targetPos) {
          elem.style.left = targetPos + 'px';
          thisPos = targetPos;
        } else {
          elem.style.left = thisPos + 'px';
        }
        step = 2;
      } else {
        thisPos -= walkDist;

        if (thisPos < 0) {
          elem.style.left = 0 + 'px';
        } else if (thisPos >= targetPos) {
          elem.style.left = targetPos + 'px';
          thisPos = targetPos;
        } else {
          elem.style.left = thisPos + 'px';
        }
        walkDist *= 2;
        step = 0;
      }
    }


  } else if (selectionIndex == 5) {
    resetUserPos();

    id = null;
    id = setInterval(frame, 100);
    let thisPos = pos;
    let walkDist = 2;
    let step = 0;

    function frame() {
      if (thisPos >= $("#friend-pos").position().left) {
        clearInterval(id);
      } else if (step == 0) {
        thisPos -= walkDist;
        if (thisPos < 0) {
          elem.style.left = 0 + 'px';
        } else if (thisPos >= targetPos) {
          elem.style.left = targetPos + 'px';
        } else {
          elem.style.left = thisPos + 'px';
        }
        step = 1;
      } else if (step == 1) {
        thisPos += 2 * walkDist;

        if (thisPos < 0) {
          elem.style.left = 0 + 'px';
        } else if (thisPos >= targetPos) {
          elem.style.left = targetPos + 'px';
        } else {
          elem.style.left = thisPos + 'px';
        }
        step = 2;
      } else {
        thisPos -= walkDist;

        if (thisPos < 0) {
          elem.style.left = 0 + 'px';
        } else if (thisPos >= targetPos) {
          elem.style.left = targetPos + 'px';
          thisPos = targetPos;
        } else {
          elem.style.left = thisPos + 'px';
        }
        walkDist = walkDist * walkDist;
        step = 0;
      }
    }
  }
});

$("#submit-button").click(function (e) {
  e.preventDefault();
  if (selectionIndex == 0) {
    resetUserPos();
    setDefault();
    console.log("User has not selected an option!");
  } else if (selectionIndex == 1) {
    $(".optimal-solution-description").html("This is the shortest path guaranteed to find your friend");
    $(".selected-solution-description").html("But... you might not find your friend");

    setSelectedBar(maxWidth * 1 / 8, "green");
    setOptimalBar("red");

    console.log("This corresponds to O(L) runtime! Not a correct algorithm!");

  } else if (selectionIndex == 2) {
    $(".optimal-solution-description").html("This is the shortest path!");
    $(".selected-solution-description").html("Eh, you still had to walk a while");

    setSelectedBar(maxWidth + (maxWidth * 7 / 8), "red");
    setOptimalBar("green");

    console.log("This corresponds to O(N*3L) runtime!");
  } else if (selectionIndex == 3) {
    $(".optimal-solution-description").html("This is the shortest path!");
    $(".selected-solution-description").html("Good luck with your walk!");
    setSelectedBar(maxWidth ** 2, "red");
    setOptimalBar("green");
    console.log("This solution corresponds to O(N^2) runtime! Its a lengthy one")
  } else if (selectionIndex == 4) {
    $(".optimal-solution-description").html("Hey they're the same distance!");
    $(".selected-solution-description").html("That's it!");
    setSelectedBar(maxWidth, "green");
    setOptimalBar("green");

    console.log("This corresponds to O(N) runtime! Its the optimal algorithm!");
  } else if (selectionIndex == 5) {
    $(".optimal-solution-description").html("This is the shortest path!");
    $(".selected-solution-description").html("Almost but not quite!");

    setSelectedBar(maxWidth + (maxWidth * 1 / 8), "red");
    setOptimalBar("green");
    console.log("This corresponds to O(N +L) runtime! Its almost the best but not quite");
  }


});

function setDefault() {
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
}

function resetUserPos() {
  elem.style.left = pos + 'px';
}

function setOptimalBar(color) {
  $("#optimal-solution").css({
    "height": maxWidth,
    "width": "5px",
    "background-color": color,
    "position": "relative"
  });
}

function setSelectedBar(width, color) {
  $(".selected-solution").css({
    "height": width,
    "width": "5px",
    "background-color": color,
    "position": "relative"
  });
}