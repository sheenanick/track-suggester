$(document).ready(function(){
  $("form").submit(function(){
    var name = $("input#name").val();
    var frontEnd = $("#front-end").val();
    var appType = $("input:radio[name=app-type]:checked").val();
    var companySize = $("input:radio[name=size]:checked").val();
    var javaOrC = $("#java-c").val();

    $(".results #greeting, #track-name, #css, #java, #ruby, #c-sharp").hide();

    $(".results #input-name").text(name);


    if (name && frontEnd && appType && companySize && javaOrC) {
      $(".results #greeting").show();
      if (frontEnd === "front-end1" || frontEnd === "front-end2") {
        generateOutput("CSS/Design", "#css");
      } else if (appType === "mobile") {
        generateOutput("Java/Android", "#java");
      } else if (companySize === "small") {
        generateOutput("Ruby/Rails", "#ruby");
      } else if (javaOrC === "cSharp") {
        generateOutput("C#/.NET", "#c-sharp");
      } else {
        generateOutput("Java/Android", "#java");
      }
    }
    function generateOutput(trackName, trackId) {
      $(".results #track-name").text('"' + trackName + '"').show();
      $(trackId).show();
    }
    event.preventDefault();
  });
});
