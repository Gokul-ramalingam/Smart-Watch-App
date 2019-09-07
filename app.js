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
    url: 'https://api.spotify.com/v1/playlists/4hknLqR95bP0hpTBTQxrsd',
    type: 'GET',
    headers :{
        'Authorization' : 'Bearer ' + 'BQCv-scUHsLaMuAgH7mcMySD12xGwoqzz4g9CUFJyN_AkoZbiH_BLr2qu2NIiisEMqBr3wfad6gQ2ofoG7r7eE5mtdwUkKHerrLSN25-94EEE2veegfxq--SG1sQSCp8M4p8ymJjyg3RGnMdwYXaUz0-GAFxNXphZCHLm6x8gFEmbe3K9Mkl&refresh_token=AQA15Wuq50YrJdgyyPr9EffeFQoXT2oma1_BK6KsKNlTYtIiiq4QYGOH7Wzt7QjljJZJcp9HeJuSF68Wlu30DxuYtd3PPo0sVulleQze_11SSPfm0VeLS896wPz2Nmxim5ZZfw'
    },
    success: function(data) {
        console.log(data.uri);
        $('#frame-id').attr("src", "https://embed.spotify.com/?uri="+data.uri);
    }
});

   $.ajax({
       url:'https://favqs.com/api/qotd',
       type: 'GET',
       success:function(data){
           $("#quote").text(data.quote.body);
           console.log(data);
           console.log($("#quote"));
       }
   })
    
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

    // $.ajax({
    //     url:'https://favqs.com/api/qotd',
    //     type: 'GET',
    //     success:function(data){
    //         $("#quote").text(data.quote.body);
    //         console.log(data);
    //         console.log($("#quote"));
    //     }
    // });
    
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
        var deadline = new Date(Date.parse(new Date(dayInString+" "+dayInNumber+", "+year+" "+val)) + 15 * 24 * 60 * 60 * 1000);
        initializeClock('clockdiv', deadline);
    }



    

    let h = document.getElementsByClassName('hours')[0];
    let m = document.getElementById('minute');
    let s = document.getElementById('second');
    let start = document.getElementById('start');
    let stop = document.getElementById('stop');
    let clear = document.getElementById('clear');
    let seconds = 0, minutes = 0, hours = 0;
    let t;

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
    let hrs;
    let mns;
    let secs;
    arr.forEach(ar=>{ 
        (ar.hours<10)? hrs = "0"+ar.hours : hrs = ar.hours;
        (ar.minutes<10)?mns = "0"+ar.minutes : mns = ar.minutes;
        (ar.seconds<10)?secs = "0"+ar.seconds : secs = ar.seconds;
        $("#lapContent").append("<h6 id='list'>lap "+ar.lap+"&nbsp;&nbsp;&nbsp;"+hrs+":"+mns+":"+secs+"<h6>")});
}

