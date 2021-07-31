canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width= 90;
rover_height= 50;
background_image="mars.jpg";
rover_image="rover.png";
rover_x= 10;
rover_y= 10;

function add() {

    background_imgTag= new Image();
    background_imgTag.onload= uploadBackground;
    background_imgTag.src= background_image;

    rover_imgTag= new Image();
    rover_imgTag.onload= uploadrover;
    rover_imgTag.src= rover_image;

}

function uploadBackground() {
ctx.drawImage(background_imgTag, 0,0, canvas.width, canvas.height);

}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x,rover_y, rover.width, rover.height);
    
    }

window.addEventListener("keydown", my_keydown);

function my_keydown(e){

    keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed =='38'){

up();
console.log("up");
}

if(keyPressed =='40'){

    down();
    console.log("down");
    }
    if(keyPressed =='37'){

        left();
        console.log("left");
        }
        if(keyPressed =='39'){

            right();
            console.log("right");
            }
}


function up (){

    if(rover_y>=0){

        rover_y=rover_y-10;
console.log("WHEN UP ARROW IS PRESSED x="+ rover_x, "y="+ rover_y);
uploadBackground(); 
uploadrover();

    }
}

function down (){

    if(rover_y<=500){

        rover_y=rover_y+10;
console.log("WHEN DOWN ARROW IS PRESSED x="+ rover_x, "y="+ rover_y);
uploadBackground(); 
uploadrover();

    }
}
function left (){

    if(rover_x>=0){

        rover_x=rover_x-10;
console.log("WHEN LEFT ARROW IS PRESSED x="+ rover_x, "y="+ rover_y);
uploadBackground(); 
uploadrover();

    }
}

function right (){

    if(rover_x<=0){

        rover_x=rover_x=10;
console.log("WHEN RIGHT ARROW IS PRESSED x="+ rover_x, "y="+ rover_y);
uploadBackground(); 
uploadrover();;

    }
}





