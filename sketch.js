
let Vampires = [];
let Fairies = [];
let Selkie = [];

let v, v1, v2, v3, v4;
let f, f1, f2, f3, f4;
let s, s1, s2, s3, s4, s5;

function preload() {
v = loadImage("vampires/1.jpg");
v1 = loadImage("vampires/2.jpg");
v2 = loadImage("vampires/3.jpg");
v3 = loadImage("vampires/4.jpg");
v4 = loadImage("vampires/17.jpg");

f = loadImage("fairies/f.jpg");
f1 = loadImage("fairies/f1.jpg");
f2 = loadImage("fairies/f2.jpg");
f3 = loadImage("fairies/f3.jpg");
f4 = loadImage("fairies/f4.jpg");

s = loadImage("selkie/1.jpg");
s1 = loadImage("selkie/2.jpg");
s2 = loadImage("selkie/3.jpg");
s3 = loadImage("selkie/4.webp");
s4 = loadImage("selkie/5.jpg");
s5 = loadImage("selkie/6.webp");

bg = loadImage ("background/bg.png"); 

}

function setup() {
  v.resize (350,350);
  v1.resize (350,350);
  v2.resize (350,350); 
  v3.resize (350,350); 
  v4.resize (350,350);

  f.resize (350,350); 
  f1.resize (350,350); 
  f2.resize (350,350); 
  f3.resize (350,350); 
  f4.resize (350,350);

  s.resize (350,350); 
  s1.resize (350,350); 
  s2.resize (350,350); 
  s3.resize (350,350); 
  s4.resize (350,350); 
  s5.resize (350,350);

  Vampires.push(v);
  Vampires.push(v1);
  Vampires.push(v2);
  Vampires.push(v3);
  Vampires.push(v4);

  Fairies.push(f);
  Fairies.push(f1);
  Fairies.push(f2);
  Fairies.push(f3);
  Fairies.push(f4);

  Selkie.push(s);
  Selkie.push(s1);
  Selkie.push(s2);
  Selkie.push(s3);
  Selkie.push(s4);
  Selkie.push(s5);
  

  let c = color(255, 0, 0);

  createCanvas(1000, 1000);
  background(bg);
  

  let button = createButton ('Vampires');
  button.position (300, 500);
  button.style ('background-color', c);
  button.mousePressed (() => { 
    let r = random(Vampires); 
    image(r, 350, button.y - 360);
  });

  let button2 = createButton ('Fairies');
  button2.style ('background-color', c);
  button2.position (button.x + 100, button.y);
  button2.mousePressed (() => { 
    let r2 = random(Fairies); 
    image(r2,350, button.y - 360);
  }); 

  let button3 = createButton ('Selkie');
  button3.position (button2.x + 75, button2.y);
  button3.style ('background-color', c);
  button3.mousePressed (() => { 
    let r3 = random(Selkie); 
    image(r3,350, button.y - 360);
  }); 
}

function draw() {
 
}