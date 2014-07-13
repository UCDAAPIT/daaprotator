/**
 * Created with PyCharm.
 * User: pridemai
 * Date: 7/11/14
 * Time: 2:30 PM
 * To change this template use File | Settings | File Templates.
 */

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

    $.ajax({
            type: "GET",
            url: "/twitter/",
            success: function (data, textStatus, jqXHR){
                $("#twitter_col").html(data);
//              alert(data);
                $('.main_twitter').slick({
                  slidesToScroll: 15,
                    slidesToShow: 2,
                    autoplay: true,
                    autoplaySpeed: 2000
                })

            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('could not fetch data from remote server');
            }

        });

var timerId = setInterval(function(){

//alert('test');
//ajax stuff to get the weather
        $.ajax({
            type: "GET",
            url: "/weather/",
            success: function (data, textStatus, jqXHR){
//              alert(data);
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('could not fetch data from remote server');
            }

        });

//for twitter
         $.ajax({
            type: "GET",
            url: "/twitter/",
            success: function (data, textStatus, jqXHR){
                $("#twitter_col").html(data);
//              alert(data);
            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('could not fetch data from remote server');
            }

        });

},
//5000
    1800000
);


function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    if(h > 12){
        h = h-12;
    }

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s+"<br>"+today.getMonth()+"/"+today.getDate()+"/"+today.getFullYear();
    t = setTimeout(function () {
        startTime()
    }, 500);
}
var timeTimer = setInterval(startTime, 1000);
//startTime();