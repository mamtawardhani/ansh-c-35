var ball;
var db 
var pos
var b

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    db = firebase.database()
    db.ref("ball/position").on("value", function(data){
        pos= data.val()
        ball.x = pos.x
        ball.y = pos.y
    })

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0)
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
//new ball position = old ball position + x
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function enter(){
    console.log("It works")
}
