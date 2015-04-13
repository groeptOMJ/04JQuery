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
    $("#data-form2").validate( {
    	debug: true,
    	rules: {
    		id:{
    			required : true,
    			minlength : 2
    		} 
	    },
	    messages: {
	        id:{
	        	required : "Please enter your id",
    			minlength : "Minimum length is 2"
	        } 
	    }
    });
    $("#button-2").click(function(){    	
		if($("#data-form2").valid()){
			showName2();
		}
	});
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
function showName2() {
	  $.ajax({ url: "search-name",
		  	   data: $("#data-form2").serialize(),
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

