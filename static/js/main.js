/**
 * Created with PyCharm.
 * User: pridemai
 * Date: 7/11/14
 * Time: 2:30 PM
 * To change this template use File | Settings | File Templates.
 */
//document.element.getEle
//$('body').css("background", "url(\'/media/bill.jpg\')");
//function launchFullScreen(element) {
//  if(element.requestFullscreen) {
//    element.requestFullscreen();
//  } else if(element.mozRequestFullScreen) {
//    element.mozRequestFullScreen();
//  } else if(element.webkitRequestFullscreen) {
//    element.webkitRequestFullscreen();
//  } else if(element.msRequestFullscreen) {
//    element.msRequestFullscreen();
//  }
//}
//  // Launch fullscreen for browsers that support it!
//launchFullScreen(document.documentElement); // the whole page
//


//            $('body').hide();
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
//$('.sometag').backgroundImage("url(/media/white.png)")
function startTime() {
//    alert(screen.height + " " + screen.width);
    var today = new Date();

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = days[ today.getDay() ];
    // add a zero in front of numbers<10
    if(h > 12){
        h = h-12;
    }

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = "<div class=\"inner-time\"><p class=\"big-time\">"+h + ":" + m + ":" + s+"</p>"
//    document.getElementById('time').innerHTML ="<div class=\"inner-date\"><p class=\"big-text\">"+day+"<br>"+today.getMonth()+"/"+today.getDate()+"/"+today.getFullYear()+"<br></p>";
    t = setTimeout(function () {
        startTime()
    }, 500);
}

function startDate(){
        var today = new Date();

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = days[today.getDay() ];
    // add a zero in front of numbers<10
    if(h > 12){
        h = h-12;
    }

    m = checkTime(m);
    s = checkTime(s);
//    document.getElementById('clock').innerHTML = "<div class=\"inner-time\"><p class=\"big-time\">"+h + ":" + m + ":" + s+"</p>"
    document.getElementById('time').innerHTML ="<div class=\"inner-date\"><p class=\"big-text\">"+day+"<br>"+(today.getMonth()+1)+"/"+today.getDate()+"/"+today.getFullYear()+"<br></p>";
    t = setTimeout(function () {
        startTime()
    }, 500);

}

//startDate();
var dateTimer = setInterval(startDate, 10000);
var timeTimer = setInterval(startTime, 1000);
//startTime();

/*
 background: url(images/bg.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  */
//$(function(){
//});
    $.ajax({
            type: "GET",
            url: "/weather/",
            success: function (data, textStatus, jqXHR){
                $("#weather_col").html(data);
//              alert(data);
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('could not fetch data from remote server');
            }

        });
//$('.main_twitter').slick({
//                    autoplay: true,
//                    autoplaySpeed: 5000
////
//                });

    $.ajax({
            type: "GET",
            url: "/twitter/",
            success: function (data, textStatus, jqXHR){
                $("#twitter_col").html(data);
//              alert(data);
                $('.main_twitter').slick({
                    autoplay: true,
                    autoplaySpeed: 5000

                });

                //remove the slick buttons
                $('.slick-next, .slick-prev').remove();


            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('could not fetch data from remote server');
            }

        });

//startDate();
var counter = 1;
var flashTimer = setInterval(function(){
    $('body').css(
    {
        backgroundColor : "white"
//        backgroundColor : 'url(/media/background2.png)',
//        backgroundSize : 'cover',
//        backgroundRepeat: 'no-repeat'

    }

);

$('.big-text, .big-tisme, body').fadeOut("slow", function(){

//    $('body').css(
//     {background : 'url(/media/white.png)',
// webkitBackgroundSize: "cover",
//         oBackgroundSize: "cover",
//         backgroundSize: "cover"
//     });

$('.big-text, big-time, body').fadeIn("slow", function(){
    //just to determine whether they should swap one way vs the other

});
//     $('#weather_col').swap({
//            target: "time"
//        });
});


//        var htmlNew = "<style class=\"background-style\">body{background: url(/media/white.png) no-repeat center center fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;}</style>"
//        $('head').append(htmlNew);
//
          $('.time_col').remove();
    $('.weather_col').remove();






          if(counter %2 == 0){
        $('<div class="col-md-4 time_col" id="time"></div>').insertBefore(".clock-col");
        $('<div class="col-md-4 weather_col" id="weather_col"></div>').insertAfter(".clock-col");
    }else{
        $('<div class="col-md-4 weather_col" id="weather_col"></div>').insertBefore(".clock-col");
        $('<div class="col-md-4 time_col" id="time"></div>').insertAfter(".clock-col");

    }
        //just to test for now
          $.ajax({
            type: "GET",
            url: "/weather/",
            success: function (data, textStatus, jqXHR){
                $("#weather_col").html(data);
//              alert(data);
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('could not fetch data from remote server');
            }

        });


//        $('body').css(
//    {backgroundImage : 'url(/media/background2.png)',
//        backgroundSize : 'cover',
//        backgroundRepeat: 'no-repeat'
//
//    }
//
//);
        var today = new Date();

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = days[ today.getDay() ];
    // add a zero in front of numbers<10
    if(h > 12){
        h = h-12;
    }

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML ="<div class=\"inner-date\"><p class=\"big-text\">"+day+"<br>"+(today.getMonth()+1)+"/"+today.getDate()+"/"+today.getFullYear()+"<br></p>";
    //increment
    counter = (counter > 100) ? 1 : counter +1;
//$('body').show();
},
//5000
    60000
);


//there's a reason for this.. I think
//flashing different backgrounds
var bgCunter = 2;
var backgroundTimer = setInterval(function(){
        var imageURL = "url(/media/background"+bgCunter+".png)";
           $('body').css(
     {background : imageURL,
 webkitBackgroundSize: "100%",
         oBackgroundSize: "100%",
         backgroundSize: "100%"
     });
//alert(bgCunter);


if(bgCunter == 5){
    $('.row, .twitter_content, .twitter_user').css({
        'color' : '#000000'
    });


    bgCunter = 2;
}else{
    $('.row, .twitter_content, .twitter_user').css({
        'color' : '#ffffff'
    });
    bgCunter++;


}


},
//5000
    4000
);


function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}






function loadCSS(url){
alert(screen.height+" " + screen.width);
//    if(isNaN(screen.width)){
//        alert("Not a number");
//    }else{
//        alert("Number");
//    }
//    alert(screen.height.valueOf()+ " " + screen.width);
    //here's where we will dynamically set the font size and such
//if(750 < screen.height.valueOf() <800 || 1300 < screen.width.valueOf() < 1399){
    if (1190 <= screen.height.valueOf() <= 1300 && 1850 <= screen.width.valueOf() <= 1999){
        $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', url+"large/main.css") );

}else if(750 < screen.height.valueOf() <800 && 1300 < screen.width.valueOf() < 1399){
    //we're just going to try to load the css from a file
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', url+"small/main.css") );
    }


//    $("body").photoResize({
//					bottomSpacing: 15
//				});
}