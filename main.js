var noseX=0;
var noseY=0;
var difference=0;
var rightwristX=0;
var leftwristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(300,200);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw(){
    background('#CBC3E3');
    fill("#b43e8f");
    stroke("#613f75");
    textSize(difference);
    text('Mohitha.S',noseX,noseY);
}
function modelLoaded(){
    console.log('Model Loaded!');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX= "+noseX+" noseY= "+noseY);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("leftwristX= "+leftwristX + " rightwristX= "+rightwristX + " difference= "+difference);
    }
}


