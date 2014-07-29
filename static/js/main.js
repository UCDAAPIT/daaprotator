/**
 * Created with PyCharm.
 * User: pridemai
 * Date: 7/11/14
 * Time: 2:30 PM
 * To change this template use File | Settings | File Templates.
 */
//document.element.getEle
//$('body').css("background", "url(\'/media/bill.jpg\')");
function launchFullScreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}
  // Launch fullscreen for browsers that support it!
launchFullScreen(document.documentElement); // the whole page


$(function(){
$('body').css(
    {backgroundImage : 'url(/media/background2.png)',
        backgroundSize : 'cover',
        backgroundRepeat: 'no-repeat'

    }

);
});
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


            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('could not fetch data from remote server');
            }

        });

var timerId = setInterval(function(){


        $("#time").removeClass('time_col').addClass('weather_col');
        $("#weather_col").removeClass('weather_col').addClass('time_col');
//alert('test');weather_col
//ajax stuff to get the weather
//        $.ajax({
//            type: "GET",
//            url: "/weather/",
//            success: function (data, textStatus, jqXHR){
////              alert(data);
//            },
//            error: function(jqXHR, textStatus, errorThrown){
//                alert('could not fetch data from remote server');
//            }
//
//        });
//
////for twitter
//         $.ajax({
//            type: "GET",
//            url: "/twitter/",
//            success: function (data, textStatus, jqXHR){
//                $("#twitter_col").html(data);
////              alert(data);
//            },
//            error: function(jqXHR, textStatus, errorThrown){
//                alert('could not fetch data from remote server');
//            }
//
//        });

},
//5000
    5000
);


function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function startTime() {
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
    document.getElementById('time').innerHTML ="<div class=\"inner-date\"><p class=\"big-text\">"+day+"<br>"+today.getMonth()+"/"+today.getDate()+"/"+today.getFullYear()+"<br></p>";
    t = setTimeout(function () {
        startTime()
    }, 500);
}
var timeTimer = setInterval(startTime, 1000);
//startTime();