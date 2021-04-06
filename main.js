left_wristX=0;
left_wristy=0;
right_wristX=0;
right_wristy=0;
function preload()
{

}
function setup()
{
video=createCapture(VIDEO);
video.size(550 , 450);

console.log("ml5" , ml5.version);

canvas=createCanvas(550,450);
canvas.position(560 , 150);

poseNet=ml5.poseNet(video , ModelLoaded);
poseNet.on("pose" , gotPoses);
}
function draw()
{
background('#969A97');
}

function ModelLoaded()
{
console.error("poseNet is Working!!");
}
function gotPoses(result)
{
    if(result.length > 0)
   { console.log(result); 
left_wristX=result[0].pose.leftWrist.x;
console.log(left_wristX);
left_wristy=result[0].pose.leftWrist.y;
console.log(left_wristy)};


   }
