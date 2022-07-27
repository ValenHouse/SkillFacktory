document.getElementById("button1").style.backgroundColor ="gray";
document.getElementById("button2").style.backgroundColor ="gray";


document.getElementById("button1").onclick = function(){
            this.style.backgroundColor ="black";
            document.getElementById("button2").style.backgroundColor ="gray";
        };

document.getElementById("button2").onclick = function(){
            this.style.backgroundColor ="black";
            document.getElementById("button1").style.backgroundColor ="gray";
        };