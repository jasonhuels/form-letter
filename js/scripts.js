$(function() {
  $("#who-dat").submit(function(event) {
    var person = $("input#username").val();
    $(".username").text(person);
    $("#who-dat").hide();
    $("#letter").show();
    event.preventDefault();
  });
});
