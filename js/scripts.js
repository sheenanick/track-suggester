function Survey() {
  this.name;
  this.frontEnd;
  this.appType;
  this.companySize;
  this.javaOrC;
}

Survey.prototype.selectTrack = function() {
  var trackName;
  var trackID;
  if (this.frontEnd === "front-end1" || this.frontEnd === "front-end2") {
    trackName = "CSS/Design";
    trackID = "#css";
  } else if (this.appType === "mobile") {
    trackName = "Java/Android";
    trackID = "#java";
  } else if (this.companySize === "small") {
    trackName = "Ruby/Rails";
    trackID = "#ruby";
  } else if (this.javaOrC === "cSharp") {
    trackName = "C#/.NET";
    trackID = "#c-sharp";
  } else {
    trackName = "Java/Android";
    trackID = "#java";
  }
  return [trackName, trackID];
}

$(document).ready(function(){
  var survey = new Survey;
  $("button#start").click(function(event){
    $(".title-page").hide();
    $("form#question1").show();
  });
  $("form#question1").submit(function(){
    event.preventDefault();
    survey.name = $("input#name").val();
    $("form#question1").hide();
    $("form#question2").show();
  });
  $("form#question2").submit(function(){
    event.preventDefault();
    survey.frontEnd = $("input:radio[name=front-end]:checked").val();
    $("form#question2").hide();
    $("form#question3").show();
  });
  $("form#question3").submit(function(){
    event.preventDefault();
    survey.appType = $("input:radio[name=app-type]:checked").val();
    $("form#question3").hide();
    $("form#question4").show();
  });
  $("form#question4").submit(function(){
    event.preventDefault();
    survey.companySize = $("input:radio[name=size]:checked").val();
    $("form#question4").hide();
    $("form#question5").show();
  });
  $("form#question5").submit(function(){
    event.preventDefault();
    survey.javaOrC = $("input:radio[name=java-c]:checked").val();
    $("form#question5").hide();
    generateOutput(survey.selectTrack());
    $("#greeting, .restart-button").show();
    $("#insert-name").text(survey.name);
  });
  $("#restart").click(function(event){
    $("#greeting, #track-name, #css, #java, #ruby, #c-sharp, .restart-button").hide();
    $(".title-page").show();
    $("form#question1")[0].reset();
  });

  function generateOutput([trackName, trackId]) {
    $("#track-name").text('"' + trackName + '"').show();
    $(trackId).show();
  }

});
