$(document).ready(function(){
  $("form").submit(function(){
    var name = $("input#name").val();
    var frontEnd = $("#front-end").val();
    var appType = $("input:radio[name=app-type]:checked").val();
    var companySize = $("input:radio[name=companySize]:checked").val();
    var javaOrC = $("#javaOrC").val();

    if (frontEnd === "front-end1" || frontEnd === "front-end2") {
      $(".results #track-name").text("CSS/Design");
    } else if (appType === "mobile") {
      $(".results #track-name").text("Java/Android");
    } else if (companySize === "small") {
      $(".results #track-name").text("Ruby/Rails");
    } else if (javaOrC === "cSharp") {
      $(".results #track-name").text("C#/.Net");
    } else {
      $(".results #track-name").text("Java/Android");
    }

    $(".results #inputName").text(name);

    event.preventDefault();
  });

});
