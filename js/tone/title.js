var width = $(window).width();
var height = $(window).height();
var divWidth;
var fontsize = parseInt($("body").css("font-size"));

var str = "HTML graffiti";
var words_arr = str.split(" ");
var word_index = 0;
var position_index = 0;
var word_queue = [];

var resizeSwitch = true;
var currInterval = 550;
var numDivs = 1;
var divisor = 2;
var intervalDelta = 0.95;
var synth = new Tone.FMSynth(100, Tone.Synth).toMaster();
var notes = Tone.Frequency("G2").harmonize([5, 7, 10, 12, 15, 17]);

StartAudioContext(Tone.context, 'div').then(function(){
  //started
  console.log("clicked");

});

//have to click to start audio context
$('div').click(function(){
  //Tone.start();
  console.log("clicked");
});

$(document).ready(function(event){
  //setupDivs();

  // $(".panel").click(function(){
  //   var index = $(".panel").index(this);
  //   rotate(this, index);
  // });
  var newDiv = $('<div />').addClass("innertext");
  newDiv.text(str);
  $("#container").append(newDiv);

  var divHeight = parseInt(newDiv.css("height"));
  console.log(divHeight);

  newDiv.css({
        width: "100%",
        left: 0,
        top: height/2 - (divHeight/2)
  });

  setTimeout(split, interval());


});

$(window).resize(function(){
  clearTimeout(window.resizeFinished);
  window.resizeFinished = setTimeout(function(){
      resizeSwitch = !resizeSwitch;
      console.log("resize finished")
  }, 250);
  resize();
});

function interval(){
  if(currInterval <= 300){
    intervalDelta = 1;
  }
  if(currInterval >= 450){
    intervalDelta = .75;
  }
  console.log(currInterval * intervalDelta);

  return currInterval *= intervalDelta;
}

function split(){
  var randNote = Math.floor(Math.random() * notes.length);
  synth.triggerAttackRelease(notes[randNote], "2n");

  $("#container").empty();
  numDivs *= divisor;
  for(var i = 0; i < numDivs; i++){
    var newDiv = $('<div />').addClass("innertext");
    newDiv.text(str.slice( i*(str.length/numDivs) , (i+1)*(str.length/numDivs) ) );
    $("#container").append(newDiv);

    var divHeight = parseInt(newDiv.css("height"));
    var top = (height/(numDivs+1))*(i+1) - (divHeight);
    if(top < 0){
      top = 0;
    } else if (top >= (height - divHeight)){
      top = height - divHeight;
    }
    newDiv.css({
      width: width/numDivs - 2,
      left: 0,
      top: top
    });
  }
  if(numDivs >= str.length || numDivs >= width/4){
    divisor = 0.5;
  }
  if(numDivs <= 1){
    divisor = 2;
  }

  setTimeout(split, interval());

}

function resize(){
  width = $(window).width();
  height = $(window).height();
}
