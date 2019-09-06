let messageArray=[
    {id:1,from:'55555',message:"This is message 1"},
    {id:2,from:'56734',message:"This is message 2"},
    {id:3,from:'66677',message:"This is message 3"},
    {id:4,from:'78734',message:"This is message 4"},
    {id:5,from:'84734',message:"this is message 5"},
    {id:6,from:'78546',message:"This is message 6"}
]



function enableMessageWindow(){
    $("#initialScreen").hide();
    $("#musicScreen").hide();
    $("#timerScreen").hide();
    $("#textScreen").hide();
    $(".button1").css("background-color",'#1890f0');
    $(".button3").css("background-color",'#1b1b1b');
    $(".button2").css("background-color",'#1b1b1b');
    $("#messageScreen").show();
}

var b = new Date();

$( document ).ready(function() {
    $("#messageScreen").hide();
    $("#textScreen").hide();
    $("#musicScreen").hide();
    $("#timerScreen").hide();
    $("#timerInputScreen").hide();
   setInterval(timerWatch,1000);

   messageArray.forEach((txt)=>{
       var b = '<h6 id="messageList" onclick="func1('+txt.id+')"><b id="number">'+txt.from+'</b><br><span id="text">'+txt.message+'</span></h6>'
       $("#receivedMessages").append(b);
    //    console.log(b);
   });

    $.ajax({
    url: 'https://api.spotify.com/v1/me/playlists',
    type: 'GET',
    headers :{
        'Authorization' : 'Bearer ' + 'BQD3JM-p0XpxWJbTSR1-ogbp92dcjMBPuyEUZqT3y_JHMmd9d0_NU5qnEWfYexs-1G21CxdEvcsOLTmOoJky517fxC0oK2gNqcUapsuoBuMLfJHLxHMWtJ76n7TFW4AVlfL1KRhZTgaXrb2gOT0TM7cvqAqigqzt7RJJXAtp2NlePZV-XrrS&refresh_token=AQBt-MtuR9m6J4jGIKXQnoNdNFkRioM0HpKGnfKwwBf3-o_VP4Zrx5YSmVG7hWxwsVUchTtMXBKm8jb92uOPblsxAtMHt8qdHfBxikiHssUMtj-yP1Yu6dZ2O19ci2njXiAwlQ'
    },
    success: function(data) {
        console.log(data.items[0].uri);
        $('#frame-id').attr("src", "https://embed.spotify.com/?uri="+data.items[0].uri);
    }
});
    
});

// $(".button1").click(function(){
//     $("#receivedMessages").append("<h6 id='messageList'>55556 <br><span>Sample text</span></h6>");
//   });

function func1(id){
  
  let messageObject = messageArray.filter((obj)=>id===obj.id);
  
  $("#messageScreen").hide();
  $("#textScreen").show();
  $("#musicScreen").hide();
  $("#initialScreen").hide();
  $("#timerScreen").hide();
  $("#timerInputScreen").hide();
//   console.log(messageObject);
  $("#individualNumber").html(messageObject[0].from);
  $("#individualMessage").html(messageObject[0].message);
}


function enableMusicWindow(){
    $("#initialScreen").hide();
    $(".button2").css("background-color",'#1890f0');
    $(".button3").css("background-color",'#1b1b1b');
    $(".button1").css("background-color",'#1b1b1b');
    $("#messageScreen").hide();
    $("#musicScreen").show();
    $("#textScreen").hide();
    $("#timerScreen").hide();
    $("#timerInputScreen").hide();
}

function enableTimerWindow(){
    $("#initialScreen").hide();
    $(".button3").css("background-color", '#1890f0');
    $(".button2").css("background-color",'#1b1b1b');
    $(".button1").css("background-color",'#1b1b1b');
    $("#messageScreen").hide();
    $("#musicScreen").hide();
    $("#textScreen").hide();
    $("#timerInputScreen").hide();
    $("#timerScreen").show();
    let timing = $("#inputTime").val();
    timer(timing);
}

function enableInputTimerWindow(){
    $("#initialScreen").hide();
    $(".button3").css("background-color", '#1890f0');
    $(".button2").css("background-color",'#1b1b1b');
    $(".button1").css("background-color",'#1b1b1b');
    $("#messageScreen").hide();
    $("#musicScreen").hide();
    $("#textScreen").hide();
    $("#timerScreen").hide();
    $("#timerInputScreen").show();
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
    //  console.log(this.dayInNumber);
     let hours = new Date().getHours();
     let wishInString = hours>3 && hours<11?'Good Morning':
      hours>=11 && hours <16?'Good Afternoon':
      hours>=16 && hours <20?'Good Evening':'Good Night';
     let minutes = new Date().getMinutes();
     if(minutes<10)
     minutes = '0'+minutes;
     if(hours == 0)
     hours = 12;
     if(hours >= 12)
     {
      if(hours >= 13)
        hours -= 12;
     }

     if(hours < 10)
     $("#hour").html("0"+hours);
     else
     $("#hour").html(hours);
     $("#min").html(minutes);
     
     $("#wishBasedOnTime").html(wishInString);
     
    }

    let date = new Date();
    function timer(val){
        let monthArray=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let dayInNumber = date.getMonth();
        let dayInString = monthArray[dayInNumber];
        let dateInNumber = date.getDate();
        let year = date.getFullYear();
        let timeArray = val.split(":");
    //     let fixedTiming = timeArray[0]+date.getHours();
    //     if(fixedTiming >= 23)
    //     {
    //         fixedTiming -= 23;
    //     }
    //   console.log(fixedTiming);
    //     let minutes = timeArray[1];
    //     if(minutes < 10)
    //         minutes = "0"+minutes;
    //     let seconds = timeArray[2];
    //     if(seconds < 10)
    //        seconds = "0"+seconds;
        var deadline = new Date(Date.parse(new Date(dayInString+" "+dayInNumber+", "+year+" "+val)) + 15 * 24 * 60 * 60 * 1000);
        initializeClock('clockdiv', deadline);
    }