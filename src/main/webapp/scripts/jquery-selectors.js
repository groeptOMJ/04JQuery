//onload - link hanlers to actions
$(function() {
    $("#turn-green-button").click(turnBlueToGreen);
    $("#revert-green-button").click(turnGreenToBlue);
    $("#hide-red-button").click(hideRed);
    $("#revert-red-button").click(showRed);
    //use of higher level event handlers
    $("#poem li").hover(addYellow, removeYellow);
    $("#highlight-button").click(highlightMissingValues);
    $("#unhighlight-button").click(removeHighlighting);
    //pass keyevent to own function
    $("#uppercase-field").keyup(makeUpperCase);
    $("#echo-button").click(echoText);
    //couple anonymous function to this submit button
    $("#submit-button").click(function () {
    	//use validate function from jquery-validator
        $("#form-2").validate();
      });

});

//Add or remove some css class to/from an element
function turnBlueToGreen() {
  $("#poem li.blue").removeClass("blue")
                    .addClass("green");
}

function turnGreenToBlue() {
  $("#poem li.green").removeClass("green")
                     .addClass("blue");
}

//use some jQuery functions
function hideRed() {
  $("#poem li.red").hide("slow");
}

function showRed() {
  $("#poem li.red").show("slow");
}

function addYellow() {
  $(this).addClass("yellow-bg");
}

function removeYellow() {
  $(this).removeClass("yellow-bg");
}

function highlightMissingValues() {
  removeHighlighting();
  //Loop over multiple elements using each
  $("#form-1 td input.required[value=]").parent()
                                        .addClass("missing")
                                        .each(addWarningStyle);
  $("#warning-msg.warning").html("Please enter required values");
}

function addWarningStyle() {
  $("#warning-msg").addClass("warning");
}

function removeHighlighting() {
  $("#warning-msg.warning").removeClass("warning").html("");
  $("#form-1 td input.required").parent().removeClass("missing");
}

function makeUpperCase(event) {
  $(this).val($(this).val().toUpperCase());
  //use event data
  if (event.keyCode == 40) {
    $("#echo-button").click();
  }
}

//read inputelement value and write container element content
function echoText() {
  var msg = 
    "Textfield value is '" + 
    $("#uppercase-field").val() +
    "'.";
  $("#echo-text").html(msg);
}

