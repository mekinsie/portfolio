$(document).ready(function(){
  $("form.form").submit(function(event){
    event.preventDefault();
    let number =$("input#number").val();
    let result = [];
    for (let i=0; i <= number; i ++) {
      if (i % 100 == 31) {
        result.push("Won't you be my neighbor? ");
      }
      else if (i % 100 == 32) {
        result.push("Won't you be my neighbor? ");
      }
      else if (i % 100 == 21) {
        result.push("Boop! ");
      }
      else if (i % 10 == 1) {
        result.push("Beep! ");
      }
      else if (i % 10 == 2) {
        result.push("Boop! ");
      }
      else if (i % 10 == 3) {
        result.push("Won't you be my neighbor? ")
      }
      else {
        result.push(i+ ", ");
      }    
    }
    $(".container2").show();
    $("#output").append(result);
  });
});