function enableMessageWindow(){
    document.getElementById("initialScreen").style.display = 'none';
    document.getElementsByClassName("button1")[0].style.backgroundColor = '#1890f0';
    document.getElementById("messageScreen").style.display='block';
}

var b;

$( document ).ready(function() {
    document.getElementById("messageScreen").style.display = 'none';
    document.getElementById("textScreen").style.display='none';
    document.getElementById("musicScreen").style.display='none';
    document.getElementById("timerScreen").style.display='none';
    $.ajax({
    url: 'https://api.spotify.com/v1/me/playlists',
    type: 'GET',
    headers :{
        'Authorization' : 'Bearer ' + 'BQDZwDaRhWvXLsadFZ0l-xgDKOIsf0Kg7wqlDPW7BTT9j0Wvhsw9K7F0XaccLzqFk1HXPi_eh5U4G4gSNVYNyDmX3fACmpjQJtK6VkbmGZxdhuBTRDwmy1eGjIoMsJpPaa0I3calnL_Ee56KoZYtlQcK6W8kfnF70xsByz6F05fedj61ncBW&refresh_token=AQBMaPvYCAuYVFb6cD6Mt524Owo3iNh5EllEiQdkH6tqKAMuKcd1O1lLkGAU9CezCqocxHdQuGOsN1OixsOqNwbwMrbBuF3l0v5ujNH_uptrQc8yDSKON2GBa-gKIN34OuBrdg'
    },
    success: function(data) {
        console.log(data.items[0].uri);
        $('#frame-id').attr("src", "https://embed.spotify.com/?uri="+data.items[0].uri);
    }
});
    
});

$(".button1").click(function(){
    $("#receivedMessages").append("<h6 id='messageList'>55556 <br><span>Sample text</span></h6>");
  });

function func1(){
  document.getElementById("messageScreen").style.display = 'none';
  document.getElementById("textScreen").style.display='block';
}


function enableMusicWindow(){
    document.getElementById("initialScreen").style.display = 'none';
    document.getElementsByClassName("button2")[0].style.backgroundColor = '#1890f0';
    document.getElementById("messageScreen").style.display='none';
    document.getElementById("musicScreen").style.display='block';
}

function enableTimerWindow(){
    document.getElementById("initialScreen").style.display = 'none';
    document.getElementsByClassName("button3")[0].style.backgroundColor = '#1890f0';
    document.getElementById("messageScreen").style.display='none';
    document.getElementById("musicScreen").style.display='none';
    document.getElementById("timerScreen").style.display='block';
}


function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

  function timerWatch(){
      
  }

 var b = "Sep "+6+", 2019 "+"17:"+"00"+":00"
  
var deadline = new Date(Date.parse(new Date(b)) + 15 * 24 * 60 * 60 * 1000);
console.log(deadline);
initializeClock('clockdiv', deadline);

