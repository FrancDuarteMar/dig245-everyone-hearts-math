
/* javascript */
// $("h1").hide();

$(".click-me").click(function(e) { 
    console.log("Clicked the button",e);
    
});

let username = "";
let requiredUsername = "secret"

$("form").submit(function (e) { 
    e.preventDefault();
    username = $(".username").val();   
    console.log(username);

    let str = ""
    if(username == requiredUsername){
        str=`<div class="alert alert-success" role="alert">
        Welcome!</div>`;
    }
    else{
        str =`<div class="alert alert-danger" role="alert"> Danger! </div>`;
    }
    
    $(".output").html(str);
});
