$(document).ready(function(){
  $("button#green").click(function(){
    $("body").removeClass();
    $("body").addClass("green-background");
    });
  $("button#yellow").click(function(){
    $("body").removeClass();
    $("body").addClass("yellow-background");
    });
  $("button#plain").click(function(){
    $("body").removeClass();
    });
});
