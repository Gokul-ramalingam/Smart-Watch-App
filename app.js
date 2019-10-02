let messageArray=[
    {id:1,from:'55555',message:"This is message 1"},
    {id:2,from:'56734',message:"This is message 2"},
    {id:3,from:'66677',message:"This is message 3"},
    {id:4,from:'78734',message:"This is message 4"},
    {id:5,from:'84734',message:"This is message 5"},
    {id:6,from:'78546',message:"This is message 6"}
]



// var b = new Date();

$( document ).ready(function() {
    $("#messageScreen,#textScreen,#musicScreen,#timerScreen,#timerInputScreen").hide();
    $("#homeButton").css("color",'#FF3031');
   setInterval(timerWatch,1000);

   messageArray.forEach((txt)=>{
       let b = '<h6 id="messageList" onclick="func1('+txt.id+')"><b id="number">'+txt.from+'</b><br><span id="text">'+txt.message+'</span></h6>'
       $("#receivedMessages").append(b);
    //    console.log(b);
   });

    // $.ajax({
    // url: 'https://api.spotify.com/v1/playlists/4hknLqR95bP0hpTBTQxrsd',
    // type: 'GET',
    // success: function(data) {
        // console.log(data.uri);
        $('#frame-id').attr("src", "https://embed.spotify.com/?uri=spotify:playlist:4hknLqR95bP0hpTBTQxrsd");
//     }
// });

   $.ajax({
       url:'https://favqs.com/api/qotd',
       type: 'GET',
       success:function(data){
           $("#quote").text(data.quote.body);
       }
   })
    
});


function func1(id){
  
  let messageObject = messageArray.filter((obj)=>id===obj.id);
  
  $("#messageScreen,#musicScreen,#initialScreen,#timerScreen,#timerInputScreen").hide();
  $("#textScreen").show();
  $("#individualNumber").html(messageObject[0].from);
  $("#individualMessage").html(messageObject[0].message);
}

function enableMessageWindow(){
    $("#initialScreen,#musicScreen,#timerScreen,#textScreen,#timerInputScreen").hide();
    $("#button1").css("color",'#1890f0');
    $("#button3,#button2,#homeButton").css("color",'#bbaeae');
    $("#messageScreen").show();
}

function enableMusicWindow(){
    $("#initialScreen,#messageScreen,#textScreen,#timerScreen,#timerInputScreen").hide();
    $("#button2").css("color",'#1890f0');
    $("#button3,#button1,#homeButton").css("color",'#bbaeae');
    $("#musicScreen").show();
}

function enableTimerWindow(){
    $("#initialScreen,#messageScreen,#musicScreen,#textScreen,#timerInputScreen").hide();
    $("#button3").css("color", '#1890f0');
    $("#button2,#button1,#homeButton").css("color",'#bbaeae');
    $("#timerScreen").show()
}

function enableInputTimerWindow(){
    $("#initialScreen,#messageScreen,#musicScreen,#textScreen,#timerScreen").hide();
    $("#button3").css("color", '#1890f0');
    $("#button2,#button1,#homeButton").css("color",'#bbaeae');
    $("#timerInputScreen").show()
    lap1();
}


function homeScreen(){
    $("#button3,#button2,#button1").css("color", '#bbaeae');
    $("#messageScreen,#musicScreen,#textScreen,#timerScreen,#timerInputScreen").hide();
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
     $("#time,#mtime,#ttime,#ltime").html(hr+":"+minutes);
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

function lap1(){
    let hrs;
    let mns;
    let secs;
    arr.forEach(ar=>{ 
        (ar.hours<10)? hrs = "0"+ar.hours : hrs = ar.hours;
        (ar.minutes<10)?mns = "0"+ar.minutes : mns = ar.minutes;
        (ar.seconds<10)?secs = "0"+ar.seconds : secs = ar.seconds;
        $("#lapContent").append("<h6 id='list'>lap "+ar.lap+"&nbsp;&nbsp;&nbsp;"+hrs+":"+mns+":"+secs+"<h6>")});
}

