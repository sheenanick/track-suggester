$(document).ready(function(){
  $("form").submit(function(){
    var name = $("input#name").val();
    var frontEnd = $("#front-end").val();
    var appType = $("input:radio[name=app-type]:checked").val();
    var companySize = $("input:radio[name=companySize]:checked").val();
    var javaOrC = $("#javaOrC").val();

    $(".results #inputName").text(name);

    $("button").click(function() {
      $(".results #greeting, #track-name, #css, #java, #ruby, #c-sharp").hide();
    });

    if (frontEnd === "front-end1" || frontEnd === "front-end2") {
      $(".results #track-name").text("CSS/Design");
      $(".results #greeting, #track-name, #css").show();
    } else if (appType === "mobile") {
      $(".results #track-name").text("Java/Android");
      $(".results #greeting, #track-name, #java").show();
    } else if (companySize === "small") {
      $(".results #track-name").text("Ruby/Rails");
      $(".results #greeting, #track-name, #ruby").show();
    } else if (javaOrC === "cSharp") {
      $(".results #track-name").text("C#/.Net");
      $(".results #greeting, #track-name, #c-sharp").show();
    } else {
      $(".results #track-name").text("Java/Android");
      $(".results #greeting, #track-name, #java").show();
    }

    event.preventDefault();
  });

});
