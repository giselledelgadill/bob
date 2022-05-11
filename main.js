function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,500);
    canvas.position(700,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('gray');
}
function modelLoaded(){
console.log('poseNet started');
}
function gotPoses(){
if(results.length>0){
    console.log(results);
}
}