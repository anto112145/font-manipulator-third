sub = 100;
right_wrist =0;
left_wrist = 0;
function setup(){
    canvas = createCanvas(500,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,350);
    video.hide();
    classifier = ml5.poseNet(video,modelLoaded);
    classifier.on('pose',showResult)
}
function draw(){
    image(video,0,0,500,350);
    textSize(sub);
    fill("#000000");
    text('Antonio',50,100);
}
function modelLoaded(){
    console.log("Model Loaded!");
}
function showResult(error,result){
    if(error){
        console.log(error);
    }
    if(result){
         console.log(result);
        right_wrist = result[0].pose.rightWrist.x;
        left_wrist = result[0].pose.leftWrist.x;
        sub = right_wrist - left_wrist;
        Math.floor(sub);
    }
}