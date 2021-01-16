const add = function(option1, option2, option3, option4, option5, option6) {
  return (option1 + option2 + option3 + option4 + option5 + option6)
};

$(document).ready(function() { 
  $(".form").slideDown();
  $("form").submit(function (event) {
    event.preventDefault();
    let option1 = parseInt($("input:radio[name=code]:checked").val());
    let option2 = parseInt($("input:radio[name=pet]:checked").val());
    let option3 = parseInt($("#hand option:selected").val());
    let option4 = parseInt($("#coffee option:selected").val());
    let option5 = parseInt($("#sleep option:selected").val());
    let option6 = parseInt($("#tech option:selected").val());
    let result = (add(option1, option2, option3, option4, option5, option6));

    if (result <= 3) {
    $(".ruby").slideDown();
    $(".python, .csharp").hide();
    } 
    else if (result = 4 && result <= 7) {
    $(".python").slideDown();
    $(".ruby, .csharp").hide();
    } 
    else if (result = 8 && result <= 12) {
    $(".csharp").slideDown();
    $(".python, .ruby").hide();
    }
  });

  $("#submit").hover(function(){
    $(this).css("background-color", " rgb(45, 255, 45)");
  }, function() {
    $(this).css("background-color", "white");
  });
  $(".header").typeIt ({
    typeSpeed:80})

});