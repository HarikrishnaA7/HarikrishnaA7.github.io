var canvas = document.getElementById('myCanvas')
var ctx = canvas.getContext('2d')
// ctx.beginPath()
// ctx.rect(20, 40, 50, 50)
// ctx.fillStyle = "#ff0000"
// ctx.fill()
// ctx.closePath()

// ctx.beginPath()
// ctx.arc(240,160,20,0, Math.PI*2,false)//x,y,width,start angle,end angle,360 degree radiums,direction default t-anti clock 
// ctx.fillStyle = "green"
// ctx.fill()
// ctx.closePath()

// ctx.beginPath()
// ctx.rect(160,10,100, 40)
// ctx.strokeStyle = "rgba(0,0,255,0.5)"
// ctx.stroke()
// ctx.closePath()
var x = canvas.width/2
var y = canvas.height -30;
var dx =2
var dy =-2
var ballRadious = 10
var paddleHeight = 10
var paddleWidth = 75
var paddleX =(canvas.width-paddleWidth)/2
var rightPress = false
var leftPress = false
var brickRowCount = 3
var brickColumnCount = 5
var brickWidth = 75
var brickHeight = 20
var brickPadding =10
var brickOffsetTop = 30
var brickOffsetLeft =30
var bricks = []
var score =0
for(c= 0;c<brickColumnCount;c++){
	bricks[c] = []
	for(r=0;r<brickRowCount;r++){
		bricks[c][r] = {x:0,y:0,status:1}
	}
}


document.addEventListener("keydown",keyDownHandler)
document.addEventListener("keyup",keyUpHandler)
function drawBricks(){
	for(c= 0;c<brickColumnCount;c++){
	  for(r=0;r<brickRowCount;r++){
	  	if(bricks[c][r].status == 1){
		  	var brickX =(c*(brickWidth+brickPadding) )+ brickOffsetLeft
		  	var brickY =(r*(brickHeight+brickPadding)) + brickOffsetTop
			bricks[c][r].x = brickX
			bricks[c][r].y = brickY
			ctx.beginPath()
			ctx.rect(brickX,brickY,brickWidth,brickHeight)
			ctx.fillStyle = "#0095DD"
			ctx.fill()
			ctx.closePath()	
		}		
	}
}
}

function keyDownHandler(e){
	if(e.keyCode == 39){
		rightPress = true
	}else if(e.keyCode == 37){
		leftPress = true
	}
}


function keyUpHandler(e){
	if(e.keyCode == 39){
		rightPress = false
	}else if(e.keyCode == 37){
		leftPress = false
	}
}







function drawBall(){
	ctx.beginPath()
	ctx.arc(x,y,ballRadious,0,Math.PI*2)
	ctx.fillStyle = "#0095DD"
	ctx.fill()
	ctx.closePath()
}

function drawPaddle(){
	ctx.beginPath()
	ctx.rect(paddleX,canvas.height-paddleHeight,paddleWidth,paddleHeight)
	ctx.fillStyle = "#0095DD"
	ctx.fill()
	ctx.closePath()
}



function collisionDetection(){
	for(c= 0;c<brickColumnCount;c++){
	  for(r=0;r<brickRowCount;r++){
	  		var b = bricks[c][r]
	  		if(b.status == 1){
		  		if(x >b.x && x< b.x+brickWidth && y > b.y && y < b.y+brickHeight){
		  			dy =-dy
		  			b.status =0
		  			score++
		  			if(score == brickRowCount*brickColumnCount){
		  				alert("You won, CONGRACTULATIONS")
		  				document.location.reload()
		  			}
		  	}	}

	  }
	} 
}


function drawScore(){
	ctx.font ="16px Arial"
	ctx.fillStyle ="#0095DD"
	ctx.fillText("Score:"+score,8,20)
}

function draw(){
	ctx.clearRect(0,0,canvas.width,canvas.height)
	drawBricks()	
	drawBall()
	drawPaddle()
	drawScore()
	collisionDetection()
	if( y+dy<ballRadious){
		dy = -dy
	}else if(y + dy >canvas.height-ballRadious){
		if(x >paddleX && x < paddleX + paddleWidth){
			dy = -dy
		}else{
		// alert("You lost, try again....")
		  				document.location.reload() 
		}
		
	}
	if( x + dx >canvas.width-ballRadious || x+dx<ballRadious){
		dx = -dx
	}

		if(rightPress && paddleX < canvas.width-paddleWidth){
			paddleX +=7
		}else if(leftPress && paddleX >0){
			paddleX -=7
		}



	x +=dx;
	y +=dy;
}
setInterval(draw,10)
