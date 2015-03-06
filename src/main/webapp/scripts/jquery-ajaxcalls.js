//executed on load, couple all buttons with the handlers.
$(function() {
    $("#time-button-1").click(showTime1);
    $("#data-button-1").click(showParams1);
    $("#data-button-2").click(showParams2);
    $("#data-button-3").click(showParams3);
    $("#load-button").click(insertParams);
    $("#nums-button").click(showNums);
});

//ajax call to show-time jsp, passing the result to showAlert
function showTime1() {
  $.ajax({ url: "show-time.jsp",
           success: showAlert,
           cache: false });
}

function showAlert(text, status) {
  alert(text);
}

//send fixed data to show-params jsp in a string format and pass the result to function showAlert
function showParams1() {
  $.ajax({ url: "show-params.jsp",
           data: "param1=foo&param2=bar",
           success: showAlert });
}

//create json element with param values 
//and send them to show-params jsp to finally pass the result to showAlert function
function showParams2() {
  var params =
    { param1: $("#field1").val(),
      param2: $("#field2").val() };
  $.ajax({ url: "show-params.jsp",
           data: params,
           success: showAlert });
}

//send form data to jsp and send result to showAlert function
function showParams3() {
  $.ajax({ url: "show-params.jsp",
           data: $("#data-form").serialize(),
           success: showAlert });
}

//send form data to jsp and load result into div params-result
function insertParams() {
  $("#params-result").load("show-params.jsp", 
                           $("#load-form").serialize());
}

//send request to show-nums servlet and send resulting Json data to showNumberList function
function showNums() {
  $.ajax({ url: "show-nums",
           dataType: "json",
           success: showNumberList });
}

//write incoming json data as a list in the div nums-result
function showNumberList(jsonData) {
  var list = makeList(jsonData.numbers);
  $("#nums-result").html(list);
}

function makeList(nums) {
  return(
    listStartTags() +
    listItems(nums) +
    listEndTags());
} 

function listStartTags() {
  return(
    "<div>\n" +
    "<ul>\n");
}

function listItems(items) {
  var result = "";
  for(var i=0; i<items.length; i++) {
    result = result + "<li>" + items[i] + "</li>\n";
  }
  return(result);
}

function listEndTags() {
  return("</ul></div>");
}