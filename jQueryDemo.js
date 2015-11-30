/*
 * jQueryDemo.js - External Javascript file for jQueryDemo.html
 * Written by Kole Swearingen - Kole.Swearingen@my.southcentral.edu - 12108876
 * Written: 10/22/15
 * Revised: 
*/

jQuery.fn.changeColor = function(){
	$("input:radio[value=1]").click(function(){
	$("div.content").css("color", "blue");
	$("header").css("color", "blue");
  });
  
  $("input:radio[value=2]").click(function(){
	$("div.content").css("color", "black");
	$("header").css("color", "black");
  });
  
  $("input:radio[value=3]").click(function(){
	$("div.content").css("color", "purple");
	$("header").css("color", "purple");
  });
}

$(document).ready(function() {
  // dont display the contents of each
  // section when JS is enabled 
  $("ul").attr("style", "display:none");
  
  // Hide the ad div when the user clicks
 // the 'Hide' text
  $("h5").click(function() {
     $("#ad").hide("slow");
  }); // end of click event
  
  // create a link to a website the user specifies
  $("input:submit[id=submitLink]").click(function(){
   // grab the value from the text box
	 var $userText = $("input:text[id=link]").val();
   // create the link and add the site text
	 var $link = $("<a/>", {href: $userText, text: $userText});
	 $("fieldset").last().append().after($link);
  });
 // create a random node that the user specifies
  $("input:submit[id=submitNode]").click(function(){
    // grab the node value from the dropdown list
	 var $userText = $("input:text[id=nodeText]").val();
   // set the value and the node
	 var $value = $("#createNode option:selected").attr("value");
	 var $node = $($value, {text: $userText});
	 if($value == "<a/>") {
		 $node.attr('href', $userText);
	 }
   // append to the top of the page.
	 $("fieldset").last().append().after($node);
	 if($value == "<input type='radio'/>")
	 {
		 $node.append().after("<label>" + $userText);
	 }
  });
  // call the function to change text color
  $("input:radio").changeColor();
}); // end of (document).ready
   