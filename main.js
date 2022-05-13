nosex=0;
difference=0;
rightWristx=0;
leftWristx=0;
nosey=0;

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
    document.getElementById("money").innerHTML="width & height off the square will be = "+difference+"px";
    fill('blue');
    stroke('red');
    square(nosex,nosey,difference);
}
function modelLoaded(){
console.log('poseNet started');
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log("nosex= "+nosex+"nosey= "+nosey);

    leftWristx=results[0].pose.leftWrist.x;
    rightWristx=results[0].pose.rightWrist.x;
    difference=floor(leftWristx-rightWristx);
    console.log("leftWristx= "+leftWristx+"rightWristx= "+"differecne= "+difference);
}
}