/* javascript */


let selection = "";
let selectionIndex = 0;
let optimalSol = document.getElementById("optimal-solution")
// let maxWidth = document.getElementsByClassName("streetVisual").offsetWidth;

$('#solutions').on('click', function(e){
  // var sel = document.getElementById("solutions");
  var sel = $("#solutions")
  selectionIndex = sel.val();
  selection= $("#solutions :selected").text();
  // var optimalSol = document.getElementById("optimal-solution");
  console.log("Index " +selectionIndex);
  // e.preventDefault();
  // selectionIndex = sel.value
  // $('#solutions').val($(this).text());
  // selection = sel.options[sel.selectedIndex].text;
  var maxWidth = $(".streetVisual").width();

    if(selectionIndex == 0){
      $(".selected-solution").html("");
      $("#optimal-solution").html("");
      
      $(".optimal-solution-description").html("")
      $(".selected-solution-description").html("")

      $(".selected-solution").css({"height":"",
      "width":"", "background-color":"","position":""});
    $("#optimal-solution").css({"height":"",
      "width":"", "background-color":"","position":""});
    }
    else if(selectionIndex == 1){
      $(".optimal-solution-description").html("This is the shortest path guaranteed to find your friend")
      $(".selected-solution-description").html("But... you might not find your friend")
      
      $(".selected-solution").css({"height":maxWidth*1/8,
        "width":"5px", "background-color":"green","position":"relative"});
      $("#optimal-solution").css({"height": maxWidth,
        "width":"5px", "background-color":"red","position":"relative"});

    }
    else if(selectionIndex == 2){
      $(".optimal-solution-description").html("This is the shortest path!")
      $(".selected-solution-description").html("Almost but not quite!")

      $(".selected-solution").css({"height":maxWidth+(maxWidth*1/8),
        "width":"5px", "background-color":"red","position":"relative"});
      $("#optimal-solution").css({"height":maxWidth,
        "width":"5px", "background-color":"green","position":"relative"});
    }
    else if(selectionIndex == 3){
      $(".optimal-solution-description").html("This is the shortest path!")
      $(".selected-solution-description").html("Good luck with your walk!")

      $(".selected-solution").css({"height":maxWidth**2,
        "width":"5px", "background-color":"red","position":"relative"});
      $("#optimal-solution").css({"height": maxWidth,
        "width":"5px", "background-color":"green","position":"relative"});
    }
    else if(selectionIndex == 4){
      $(".optimal-solution-description").html("Hey they're the same distance!")
      $(".selected-solution-description").html("That's it!")

      $(".selected-solution").css({"height":maxWidth,
        "width":"5px", "background-color":"green","position":"relative"});
      $("#optimal-solution").css({"height":maxWidth,
        "width":"5px", "background-color":"green","position":"relative"});
    }
    else if(selectionIndex == 5){
      $(".optimal-solution-description").html("This is the shortest path!")
      $(".selected-solution-description").html("Eh, you still had to walk a while")

      $(".selected-solution").css({"height":maxWidth+(maxWidth*7/8),
        "width":"5px", "background-color":"red","position":"relative"});
      $("#optimal-solution").css({"height":maxWidth,
        "width":"5px", "background-color":"green","position":"relative"});
    }

});





// $("h1").hide();
// $(".clickme").click(function(eventObject){
//   console.log("hello!", eventObject);
// });

// let username = "";
// let requiredUsername = "secret";

// $("form").submit(function(e){
//   e.preventDefault();
//   username = $(".username").val();
//   console.log(username);


// let str = "";

// if (username == requiredUsername){
//   str = `
//   <div class="alert alert-success" role="alert">
//   Welcome, friend.
//   </div>`;
// }
// else {
//   str = `
//   <div class="alert alert-danger" role="alert">
//   Not allowed.
//   </div>`;
// }


// $(".output").html(str);

// });
{/* <div class="row ">
      <h1 style="text-decoration:underline ">Solutions!</h1>

      <div class="col">
        <h4>Your Solution</h4>
        <p class="selected-solution-description">

        </p>
        <div class="selected-solution">

        </div>
      </div>

      <div class="col">
        <h4>Optimal Solution</h4>
        <p class="optimal-solution-description">

        </p>
        <div class="optimal-solution" id="optimal-solution">
        </div>
      </div>
    </div> */}