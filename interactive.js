$("#name").focus();  //make the name-texbox get focus when page loads


// JOB ROLE
$(".info").append('<input type="text" id="other-title" placeholder="Your Job Role"  name="user_otherJob">');  //appending an input-textbox to the info-field
$("#other-title").hide();   //hide the textbox

$("#title").change(function(){      //when the user change option in the job-role drop-down menu execute the function down below
  	if ($("#title option:selected").val() == "other")    //if the option selected has the value "other"
  		$("#other-title").show(); 			//show the input-textbox
    else
  		$("#other-title").hide();    //otherwise, hide it
  });


// T-SHIRT DESIGN

//variables (arrays)
var puns = [
$('#color option[value="cornflowerblue"]'),
$('#color option[value="darkslategrey"]'),
$('#color option[value="gold"]')];

var heart = [
$('#color option[value="tomato"]'),
$('#color option[value="steelblue"]'),
$('#color option[value="dimgrey"]')];

for (var x = 0; x < 4; x++){
$(puns[x]).hide();   //hide dropdown menu for "js puns"
$(heart[x]).hide();  //hide dropdown menu for "i <3 js"
}

$("#design").change ( function () {   //when user change option in the t-shirt design dropdown execute function below

	if($(this).val () == "js puns"){
    	$("#color option[value='select']").hide();             //hide the text that tells you to "select a theme"
        for (var x = 0; x < 4; x++){
          $(puns[x]).show();   //show options for "js puns"
          $(heart[x]).hide();  //hide options for "i <3 js"
        }
	}

	else if ($(this).val () == "heart js"){   //same but for the other shirt-design
		$("#color option[value='select']").hide();
	    for (var x = 0; x < 4; x++){
		  $(puns[x]).hide();   //hide options for "js puns"
		  $(heart[x]).show();  //show options for "i <3 js"
        }
	}
	else {
		$("#color option[value='select']").show();
	    for (var x = 0; x < 4; x++){
		  $(puns[x]).hide();   //hide options for "js puns"
		  $(heart[x]).hide();  //hide options for "i <3 js"
        }
	}
});

//ACTIVITIES

//variables

var main = $("input[name='all']");
var jsFrameworks = $("input[name='js-frameworks'");
var jsLibraries = $("input[name='js-libs']");
var express = $("input[name='express']");
var node = $("input[name='node']");
var buildTools = $("input[name='build-tools']");
var npm = $("input[name='npm']");

var totalCost = 0;
$(".activities").append("<div id='total'></div>");  //appending a div under the checkboxes to show total cost

var updateCost = function (cost) {   //making a function so it will be easier to update the cost later
	totalCost += cost;
	document.getElementById("total").innerHTML = "Total: $" + totalCost;
	};

//im using the change-method so when the checkbox is checked or unchecked the cost will be updated
//all these methods has a function and it all works the same way

    main.change(function () {
		if ($(this).prop("checked")) {
			updateCost(200);
		} else {
			updateCost(-200);
		}
	});

	jsFrameworks.change(function () {
		if ($(this).prop("checked")) {
			express.prop("disabled", true);     //i disable the checkbox to the activity that is at the same time as the frameworks
			express.parent().addClass("disabled");
			$("#ex").css("color", "grey");   //give it another color so it will be clear for the user that it is disabled
			updateCost(100);
		} else {
			express.prop("disabled", false);
			express.parent().removeClass("disabled");  //making the checkbox enable again when frameworks is unchecked
			$("#ex").css("color", "black");
			updateCost(-100);
		}
	});

	jsLibraries.change(function () {
		if ($(this).prop("checked")) {
			node.prop("disabled", true);   //Same as above
			node.parent().addClass("disabled");
			$("#nod").css("color", "grey");
			updateCost(100);
		} else {
			node.prop("disabled", false);
			node.parent().removeClass("disabled");
			$("#nod").css("color", "black");
			updateCost(-100);
		}
	});

	express.change(function () {
		if ($(this).prop("checked")) {
			jsFrameworks.prop("disabled", true);   //Same as above
			jsFrameworks.parent().addClass("disabled");
			$("#frame").css("color", "grey");
			updateCost(100);
		} else {
			jsFrameworks.prop("disabled", false);
			jsFrameworks.parent().removeClass("disabled");
			$("#frame").css("color", "black");
			updateCost(-100);
		}
	});

	node.change(function () {
		if ($(this).prop("checked")) {
			jsLibraries.prop("disabled", true);   //Same as above
			jsLibraries.parent().addClass("disabled");
			$("#lib").css("color", "grey");
			updateCost(100);
		} else {
			jsLibraries.prop("disabled", false);
			jsLibraries.parent().removeClass("disabled");
			$("#lib").css("color", "black");
			updateCost(-100);
		}
	});

	buildTools.change(function () {
		if ($(this).prop("checked")) {
			updateCost(100);
		} else {
			updateCost(-100);
		}
	});

	npm.change(function () {
		if ($(this).prop("checked")) {
			updateCost(100);
		} else {
			updateCost(-100);
		}
	});

// PAYMENT
$("#pay-pal").hide();
$("#bit-coin").hide();

$("#payment").change(function(){      //when the user change option in the job-role drop-down menu execute the function down below
  	if ($("#payment option:selected").val() == "credit card"){    //if the option selected has the value "credit card"
  		$("#credit-card").show();  //show that option, hide all others
  		$("#bit-coin").hide();
  		$("#pay-pal").hide();
	}
    else if ($("#payment option:selected").val() == "paypal"){  //if the option selected is paypal
  		$("#pay-pal").show();  //show that option, hide all others
  		$("#credit-card").hide();
  		$("#bit-coin").hide();
	}
  	else if ($("#payment option:selected").val() == "bitcoin"){  //if the option selected is bitcoin
		$("#bit-coin").show();  //show that option, hide all others
		$("#credit-card").hide();
		$("#pay-pal").hide();
	}
  });

  //ERRORS

  //variables
  var selectA = $('<p style="color: red">*You need to select atleast one activity*</p>').appendTo('#activity');
  selectA.hide();

 $('form').submit(function (e){

	 if ($.trim($("#name").val()) == ""){   //if the name field is empty
		e.preventDefault();  //prevent form from submitting
		$("#name").focus().css("border-color", "red");  //make the border red so that the user knows something's wrong
	 } else {
		$("#name").css("border-color", "#5e97b0");  //else, go back to orignial
	 }

	 if ($.trim($("#mail").val()) == "" || $("#mail").val().indexOf("@") == -1) { //same as namefield except that the field must also contain a "@"
		 e.preventDefault();                                                 //if indexOf("something") == -1 is true it means it didnt find that "something"
		 $("#mail").focus().css("border-color", "red"); //same as above
	 } else{
		$("#mail").css("border-color", "#5e97b0");
	 }

   	 if($(".activities input:checked").length == 0){ //if no checkbox is checked
		e.preventDefault();
		selectA.show(); //show this text
	 } else{
		 selectA.hide();  //else hide it
		 }

	 if($("#cc-num").val().length < 12 || $("#cc-num").val().length > 17){ //if the field dosent contain a number between 13 and 16 digits
		 e.preventDefault();
		  $("#cc-num").focus().css("border-color", "red"); //same as before
		 } else{
		  $("#cc-num").css("border-color", "#5e97b0"); //same as before
		 }

     if($("#zip").val().length !== 5){  //if number is not 5 digits
		 e.preventDefault();
		  $("#zip").focus().css("border-color", "red"); //same as before
		 } else{
		  $("#zip").css("border-color", "#5e97b0"); //same as before
		 }

     if($("#cvv").val().length !==3){  //if number is not 3 digits
		 e.preventDefault();
		  $("#cvv").focus().css("border-color", "red"); //same
		 } else{
		  $("#cvv").css("border-color", "#5e97b0"); //same
		 }
});

//these credit card fields does accepts letters tho but it can easily be fixed by giving the input-fields a type="number"
//but i didn't add that since the css wasn't made for that so it looked all crazy
//i found some other ways that i found much harder and complex so i didn't want to add that either
//if i were to build something like this from scratch myself i would go with the type="number"