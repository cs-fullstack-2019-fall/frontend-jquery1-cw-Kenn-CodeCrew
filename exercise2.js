let imageFlash = document.getElementById("hide2Seconds");
let isImageHiding = false;


function flashImageFunction(){
    console.log("test");
    if(isImageHiding) {
        imageFlash.removeAttribute("hidden");
        isImageHiding = false;
    }
    else {
        imageFlash.setAttribute("hidden", "");
        isImageHiding = true;
    }
}

function startFlashing(){
    let imageFlashing = setInterval(flashImageFunction, 2000);
}


startFlashing()