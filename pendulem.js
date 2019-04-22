function setup(){
  createCanvas(600,600);
  angleMode(DEGREES);
}

let r = 200;
let m = 0.01;
let g = 0.02;
let a = 50;
let v = 0;
let tor = 0;
let ke = 0;
let pe=0;

function draw(){
  background(255);
  let x = r * sin(a);
  let y =  r * cos(a);
  ;


  noFill();
  rect(0,0,600,600);

  translate(300,100);

  let t = (m*g)/cos(a);
  let f = Math.pow((t*t+ m*g*m*g + 2*t*m*g*cos(180 + a)),0.5);
  if(a>0){
    f= -f;
  }

  let tor = f*r;
  strokeWeight(2);
  line(0,0,x,y);
  fill(0);
  ellipse(x,y,25,25);
  v += tor;
  a += v;

  v = 0.99999*v;
  text("Angle: "+ Math.round(a) + " degrees", -290, 400)
  text("Potential Energy:", -290, 420);
  ke = 0.5*m*v*v;
  pe = m*g*(r-y);

  text("Kinetic Energy:", -290, 440);
  fill(0,150,0);

  rect(-205,431,ke*1700,12);

  rect(-195,412,pe*1200,12);

}
