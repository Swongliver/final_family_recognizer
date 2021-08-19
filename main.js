Webcam.set({
    height:300,
    width:350,
    image_format:"png",
    png_quality:80
})
camera=document.getElementById("webcam");
Webcam.attach(camera);
function capture(){
Webcam.snap(function(data_uri){
    console.log(data_uri);
    document.getElementById("picture").innerHTML="<img id='captured_image' src='"+ data_uri+"'>";
})
}
console.log("ml5 version=",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/JrYqzn9sj/model.json",modelLoaded)
function modelLoaded(){
    console.log("modelLoaded")
}
function check(){
    img=document.getElementById("captured_image")
    classifier.classify(img, gotResult)
}
function gotResult(error, results){
    if (error) {
        console.log("error");
    } else {
        console.log("result");
        document.getElementById("object").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}