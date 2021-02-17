// var offset = 0;
var tvText = '';
var tvFont;
var channel = [0,1,2,3,4,5,6,7,8,9];
var chanNumb = 0;
var img, img2, img3;
var fbk1, fbk2, fbk3;
var fbk = 0;
var qvc1, qvc2, qvc3;
var qvc = 0;
var evs1, evs2, evs3;
var evs = 0;


// var vid = document.getElementById('yt');

function preload() {
  tvFont = loadFont('font.ttf');
}

function setup(){
  textFont(tvFont);
  textSize(72);
  textAlign(RIGHT);
  frameRate(24);
  createCanvas(windowWidth,windowHeight);
  img = loadImage('img/tv.png');
  img2 = loadImage('img/scl2.png');
  img3 = loadImage('img/control.png');
  fbk1 = createVideo('img/fbk1.mp4');
  fbk2 = createVideo('img/fbk2.mp4');
  fbk3 = createVideo('img/fbk3.mp4');
  qvc1 = createVideo('img/qvc1.mp4');
  qvc2 = createVideo('img/qvc2.mp4');
  qvc3 = createVideo('img/qvc3.mp4');
  evs1 = createVideo('img/evs1.mp4');
  evs2 = createVideo('img/evs2.mp4');
  evs3 = createVideo('img/evs3.mp4');
  fbk1.hide();
  fbk2.hide();
  fbk3.hide();
  qvc1.hide();
  qvc2.hide();
  qvc3.hide();
  evs1.hide();
  evs2.hide();
  evs3.hide();
  fbk1.volume(.35);
  fbk2.volume(.35);
  fbk3.volume(.35);
  evs1.volume(.5);
  evs2.volume(.5);
  evs3.volume(.5);
}

function chanZero() {
  for (var x = 0; x <= 640; x+= 10) {
    for (var y = 0; y <= 480; y+= 10) {
      fill(random(120,200));
      rect(x,y,10,10);
    }
  }
  fill(10,255,0);
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    chanNumb++;
    if (chanNumb == 0) {
      tvText = 'VIDEO';
    } else if (chanNumb == 1) {
      tvText = channel.value;
    } else if (chanNumb == 2) {
      tvText = channel.value;
      fbk++;
    } else if (chanNumb == 3) {
      tvText = channel.value;
      qvc++;
    } else if (chanNumb >= 4) {
      chanNumb = 0;
      evs++;
    }
  }
}

function draw() {
  background(0);
  noStroke();
  image(img, (windowWidth/2)-456, (windowHeight/2)-448);
  applyMatrix(1, 0, 0, 1, (windowWidth/2)-325, (windowHeight/2)-288);
  fill(0,255,0);
  if (chanNumb == 0) {
    chanZero();
    fill(10,255,0);
    text("VIDEO", 430, 65);
    evsStop();
  } else if (chanNumb == 1){
    if (fbk == 0){
      image(fbk1,5,4);
      fbk1.play();
    } else if (fbk == 1) {
      image(fbk2,5,4);
      fbk2.play();
    } else if (fbk == 2){
      image(fbk3,5,4);
      fbk3.play();
    } else if (fbk >= 3){
      fbk = 0;
    }
    text(channel[chanNumb], 589, 65);
    image(img2,5,4);
  } else if (chanNumb == 2){
    fbkStop();
    if (qvc == 0){
      image(qvc1,5,4);
      qvc1.play();
    } else if (qvc == 1) {
      image(qvc2,5,4);
      qvc2.play();
    } else if (qvc == 2){
      image(qvc3,5,4);
      qvc3.play();
    } else if (qvc >= 3){
      qvc = 0;
    }
    text(channel[chanNumb], 589, 65);
    image(img2,5,4);
  } else if (chanNumb == 3){
    qvcStop();
    if (evs == 0){
      image(evs1,6,6);
      evs1.play();
    } else if (evs == 1) {
      image(evs2,6,6);
      evs2.play();
    } else if (evs == 2){
      image(evs3,6,6);
      evs3.play();
    } else if (evs >= 3){
      evs = 0;
    }
    text(channel[chanNumb], 589, 65);
    image(img2,6,6);
  }
  resetMatrix();
  image(img3,5,0,250,300);

}


function fbkStop() {
  fbk1.stop();
  fbk2.stop();
  fbk3.stop();
  fbk1.hide();
  fbk2.hide();
  fbk3.hide();
}

function qvcStop() {
  qvc1.stop();
  qvc2.stop();
  qvc3.stop();
  qvc1.hide();
  qvc2.hide();
  qvc3.hide();
}

function evsStop() {
  evs1.stop();
  evs2.stop();
  evs3.stop();
  evs1.hide();
  evs2.hide();
  evs3.hide();
}
