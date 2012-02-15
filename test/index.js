
function testcase(){
  $("#test").show();

  module("UI TEST");

  test("Tosaka Shutter Action Test", function() {
    $(".menubutton").click();
    equal( $(".menuform").css("display"),"block","open");  
    equal( $(".postform").css("display"),"none","close other");  


    $(".menubutton").click();
    equal( $(".menuform").css("display"),"none","click double and form close");  

    $(".postbutton").click();
    equal( $(".postform").css("display"),"block","open");  

    $(".postbutton").click();
    equal( $(".postform").css("display"),"none","click double and form close");  

  });

  test("a basic test example", function() {
    ok( true, "this test is fine" );
    var value = "hello";
    equal( value, "hello", "We expect value to be hello" );
  });

  module("AJAX TEST");

  test("friend list", function() {
  });
}

$().ready(function(){

  setTimeout("testcase()",5000);

});



