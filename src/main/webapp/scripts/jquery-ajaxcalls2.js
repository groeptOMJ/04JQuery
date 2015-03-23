//executed on load, couple all buttons with the handlers.
$(function() {
	//validate form and call servlet when valid
    $("#button-1").click(function(){
    		$("#data-from").validate();
    		if($("#data-form").valid()){
    			showName();
    		}
    	}
    );
});

//ajax call to show-time jsp, passing the result to showAlert
//Remark: make sure to use an anonymous function or define a custom function form handling 
//success and error or they will be triggered always :-)
function showName() {
  $.ajax({ url: "search-name",
	  	   data: $("#data-form").serialize(),
	  	   dataType : "json",
           success: insertResult,
           error: function(){alert("error");},
           cache: false 
           });
}

//send form data to jsp and load result into result region
function insertResult(json) {
    $("#search-result").html(json.name);
}

