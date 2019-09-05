function trial(){
    document.getElementById("initialScreen").style.display = 'none';
    document.getElementsByClassName("button1")[0].style.backgroundColor = '#1890f0';
    document.getElementById("messageScreen").style.display='block';
}

$( document ).ready(function() {
    document.getElementById("messageScreen").style.display = 'none';
    document.getElementById("textScreen").style.display='none';
});

$(".button1").click(function(){
    $("#receivedMessages").append("<h6 id='messageList'>55556 <br><span>Sample text</span></h6>");
  });

function func1(){
  document.getElementById("messageScreen").style.display = 'none';
  document.getElementById("textScreen").style.display='block';
}