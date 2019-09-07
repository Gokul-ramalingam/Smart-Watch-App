let messageArray=[
    {id:1,from:'55555',message:"This is message 1"},
    {id:2,from:'56734',message:"This is message 2"},
    {id:3,from:'66677',message:"This is message 3"},
    {id:4,from:'78734',message:"This is message 4"},
    {id:5,from:'84734',message:"This is message 5"},
    {id:6,from:'78546',message:"This is message 6"}
]

// let array1 = [];

// function enableMessageWindow(){
//     $("#initialScreen").hide();
//     $("#musicScreen").hide();
//     $("#timerScreen").hide();
//     $("#textScreen").hide();
//     $("#timerInputScreen").hide();
//     $("#button1").css("color",'#1890f0');
//     $("#button3").css("color",'#bbaeae');
//     $("#button2").css("color",'#bbaeae');
//     $("#messageScreen").show();
    
// }

var b = new Date();

$( document ).ready(function() {
    $("#messageScreen").hide();
    $("#textScreen").hide();
    $("#musicScreen").hide();
    $("#timerScreen").hide();
    $("#timerInputScreen").hide();
    $("#homeButton").css("color",'#FF3031');
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
        'Authorization' : 'Bearer ' + 'BQAsoyKKYDJmPlZrRstbAu5MbrSY0Iy8B4vdU_wbgbYP0ivLoHZQI_oncmwgQDZSJMc7GOCgPXbTByPhFye5I5rBwRkl5CAZ1V62tbONSlH2Z46UYHCylwSOeG0YKUdqW46T5rPk0SSc8fTANGBrKkWe_b_blXyNqyR9ussIzaRZmwV3PZ0m&refresh_token=AQCh20IibX7paA_jpbuc0Fnobs-UR6hYy8j2tJtSCSZFt2dLuBO64lFgr6G2sPe-3KP2sm-Hl679GthZha8Grvv4k0sGNG5J2Vt9ezUhtOzOf0EFdhWXBoFDU9yRjnG5n-tZJQ'
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

function enableMessageWindow(){
    $("#initialScreen").hide();
    $("#musicScreen").hide();
    $("#timerScreen").hide();
    $("#textScreen").hide();
    $("#button1").css("color",'#1890f0');
    $("#button3").css("color",'#bbaeae');
    $("#button2").css("color",'#bbaeae');
    $("#homeButton").css("color",'#bbaeae');
    $("#messageScreen").show();
    $("#timerInputScreen").hide();
}

function enableMusicWindow(){
    $("#initialScreen").hide();
    $("#button2").css("color",'#1890f0');
    $("#button3").css("color",'#bbaeae');
    $("#button1").css("color",'#bbaeae');
    $("#homeButton").css("color",'#bbaeae');
    $("#messageScreen").hide();
    $("#musicScreen").show();
    $("#textScreen").hide();
    $("#timerScreen").hide();
    $("#timerInputScreen").hide();
}

function enableTimerWindow(){
    $("#initialScreen").hide();
    $("#button3").css("color", '#1890f0');
    $("#button2").css("color",'#bbaeae');
    $("#button1").css("color",'#bbaeae');
    $("#homeButton").css("color",'#bbaeae');
    $("#messageScreen").hide();
    $("#musicScreen").hide();
    $("#textScreen").hide();
    $("#timerInputScreen").hide();
    $("#timerScreen").show();
}

function enableInputTimerWindow(){
    $("#initialScreen").hide();
    $("#button3").css("color", '#1890f0');
    $("#button2").css("color",'#bbaeae');
    $("#button1").css("color",'#bbaeae');
    $("#homeButton").css("color",'#bbaeae');
    $("#messageScreen").hide();
    $("#musicScreen").hide();
    $("#textScreen").hide();
    $("#timerScreen").hide();
    $("#timerInputScreen").show();
    n();
}


function homeScreen(){
    $("#button3").css("color", '#bbaeae');
    $("#button2").css("color",'#bbaeae');
    $("#button1").css("color",'#bbaeae');
    $("#messageScreen").hide();
    $("#musicScreen").hide();
    $("#textScreen").hide();
    $("#timerScreen").hide();
    $("#timerInputScreen").hide();
    $("#initialScreen").show();
    $("#homeButton").css("color",'#FF3031');
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
     let hr = hours;
     if(hours < 10)
     {
     $("#hour").html("0"+hours);
      hr = "0"+hours;
     }
     else
     $("#hour").html(hours);
     $("#min").html(minutes);
     
     $("#wishBasedOnTime").html(wishInString);
     $("#time").html(hr+":"+minutes);
     $("#mtime").html(hr+":"+minutes);
     $("#ttime").html(hr+":"+minutes);
     $("#ltime").html(hr+":"+minutes);
    }

    let date = new Date();
    function timer(val){
        let monthArray=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let dayInNumber = date.getMonth();
        let dayInString = monthArray[dayInNumber];
        let dateInNumber = date.getDate();
        let year = date.getFullYear();
        // let timeArray = val.split(":");
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



    

    var h = document.getElementsByClassName('hours')[0];
    var m = document.getElementById('minute');
    var s = document.getElementById('second');
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var clear = document.getElementById('clear');
    var seconds = 0, minutes = 0, hours = 0;
    var t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h.textContent = hours ? (hours > 9 ? hours : "0" + hours) : "00";
    m.textContent = minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00";
    s.textContent = seconds > 9 ? seconds : "0" + seconds;

    timer();
}
function timer() {
    t = setTimeout(add, 10);
}
// timer();


/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
    console.log("check");
    clearTimeout(t);
}

/* Clear button */
clear.onclick = function() {
    h.textContent = "00";
    m.textContent = "00";
    s.textContent = "00";
    seconds = 0; minutes = 0; hours = 0;
}
let arr=[];
let count = 1;
let hr,sc,mn;
lap.onclick = function() {
arr.push({lap:count,hours:hours,minutes:minutes,seconds:seconds});
count++;
// console.log(arr);
}

function n(){
    arr.forEach(ar=>{$("#lapContent").append("<h6 id='list'>lap "+ar.lap+"&nbsp;&nbsp;&nbsp;"+ar.hours+":"+ar.minutes+":"+ar.seconds+"<h6>")});
}

