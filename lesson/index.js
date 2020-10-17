//.click() is a jquery event function that you attach to an element that whenever that element is clicked on, you can provide functionality after it is clicked within the brackets
$(".show-toast-button").click(function(){
  //.toast('show') is strictly for the "toast" bootstrap component
  $('.toast').toast('show')
});

$(".close-alert-button").click(function(){
  //.alert('close') is strictly for the "alert" bootstrap component
  $('.alert-success').alert('close')
})

$(".show-alert-button").click(function(){
  //.show() is a jQuery function that you attach to an element to remove the css display property from the element
  $('.alert-warning').show();
})

$(".btn-primary").click(function(){
  //.hide() is jQuery function that you attach to an element to add the css display property tp the element and give it a value of none
  $(".mx-auto").hide();
});

//to access an html element using jQuery, you do $("element") - element here can be a tag, a class, or an id
//to access an html id with jQuery, you do $("#id-of-element") - this would be accessing the element with an id of "id-of-element"
//to access an html class with jQuery, you do $(".class-of-element") - this would be accessing every element with a class of "class-of-element"
//to access just the element tag, you do $("p") - that would be accessing every "p" tag on the page
