$(document).ready(function() {
$(".message a").click(function(){
/*$(".form").on('click', '#b2', function () {*/
    $(".forgot-form").hide().attr("formnovalidate");
    $(".login-form").hide().attr("formnovalidate");
    $(".signup-form").show();
});



    $(".btnSignup").click(function(){
        $(".forgot-form").hide().attr("formnovalidate");
        $(".login-form").hide().attr("formnovalidate");
        $(".signup-form").toggle();

    });

$(".mess a").click(function(){
    $(".signup-form").hide().attr("formnovalidate");
    $(".login-form").hide().attr("formnovalidate");
    $(".forgot-form").toggle();
});
$(".mes a").click(function(){
    $(".signup-form").hide().attr("formnovalidate");
    $(".forgot-form").hide().attr("formnovalidate");
    $(".login-form").toggle();
});
});