song1 = "";
song2 = "";

function preload(){

    song1 = loadSound("ENHYPEn - FEVER.mp3");
    song2 = loadSound("music.mp3");
}

function setup(){

    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

}

function draw(){

    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#FF0000");
}

function play(){

    song1.play();
    song2.play();
    
}