

function start(counter){
  if(counter <=5){
    // const boxes = document.getElementsByTagName("img");
    // for(const box of boxes) {
    //     box.classList.remove("selected");
    // }
    setTimeout(function(){
        counter++;
        if(counter==6){
            counter=1;
        }
        var imgLink = "image/qc"+counter+".png";
        document.getElementById("imgShow").src=imgLink;
        start(counter);
    }, 3000);
  }
}