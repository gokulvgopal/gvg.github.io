var mobile_mode = new CustomEvent("mobile");
var desktop_mode = new CustomEvent("desktop");


window.onload = function(){
   if($(window).width() <  800){
     window.dispatchEvent(mobile_mode);
   }else{
     window.dispatchEvent(desktop_mode);
   }
}

window.onresize = function(){
   if($(window).width() <  800){
     window.dispatchEvent(mobile_mode);
   }else{
     window.dispatchEvent(desktop_mode);
   }
}

window.addEventListener("mobile", function() {

  var top_top_padding = $("#navigation").height() + 50
  var window_width = $(window).width();
  console.log("Activate - mobile mode",top_top_padding);

  $("#top").css({"padding": top_top_padding+"px 0px 4em 0px"});

  if((window_width/5)<=200){
    $("#profile").css({  "width": "200px"});
    $("#profile_icons").css({  "width": "200px"});
  }else{
    $("#profile").css({  "width": (window_width/5)+"px"});
    $("#profile_icons").css({  "width": (window_width/5)+"px"});
  }


});

window.addEventListener("desktop", function() {
  console.log("Activate - desktop mode",top_top_padding);
  var top_top_padding = $("#navigation").height() + 50
  var window_width = $(window).width();

  $("#top").css({"padding": top_top_padding+"px 0px 4em 0px"});
  $("#profile").css({  "width": (window_width/5)+"px"});
  $("#profile_icons").css({  "width": (window_width/5)+"px"});


});
