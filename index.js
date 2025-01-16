var n = document.querySelectorAll(".drum").length;
for (var i = 0 ; i < n ; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var b = this.innerHTML;
        switch(b){
            case "l":
                var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "k":
                var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "s":
                var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "h":
                var crash=new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "m":
                var kickbass=new Audio("sounds/camerashutter.mp3");
                kickbass.play();
                break;
            case "i":
                var snare=new Audio("sounds/snare.mp3");
                snare.play();
                break;
            default:console.log("No sound mapped."+b);
        }
});
}