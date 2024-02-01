var ClassicalNoise = function(r) {
	if (r == undefined) r = Math;
  this.grad3 = [[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0], 
                                 [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1], 
                                 [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]]; 
  this.p = [];
  for (var i=0; i<256; i++) {
	  this.p[i] = Math.floor(r.random()*256);
  }

  this.perm = []; 
  for(var i=0; i<512; i++) {
		this.perm[i]=this.p[i & 255];
  }
};

ClassicalNoise.prototype.dot = function(g, x, y, z) { 
    return g[0]*x + g[1]*y + g[2]*z; 
};

ClassicalNoise.prototype.mix = function(a, b, t) { 
    return (1.0-t)*a + t*b; 
};

ClassicalNoise.prototype.fade = function(t) { 
    return t*t*t*(t*(t*6.0-15.0)+10.0); 
};


ClassicalNoise.prototype.noise = function(x, y, z) { 
 
  var X = Math.floor(x); 
  var Y = Math.floor(y); 
  var Z = Math.floor(z); 
  
 
  x = x - X; 
  y = y - Y; 
  z = z - Z; 
  
  
  X = X & 255; 
  Y = Y & 255; 
  Z = Z & 255;
  

  var gi000 = this.perm[X+this.perm[Y+this.perm[Z]]] % 12; 
  var gi001 = this.perm[X+this.perm[Y+this.perm[Z+1]]] % 12; 
  var gi010 = this.perm[X+this.perm[Y+1+this.perm[Z]]] % 12; 
  var gi011 = this.perm[X+this.perm[Y+1+this.perm[Z+1]]] % 12; 
  var gi100 = this.perm[X+1+this.perm[Y+this.perm[Z]]] % 12; 
  var gi101 = this.perm[X+1+this.perm[Y+this.perm[Z+1]]] % 12; 
  var gi110 = this.perm[X+1+this.perm[Y+1+this.perm[Z]]] % 12; 
  var gi111 = this.perm[X+1+this.perm[Y+1+this.perm[Z+1]]] % 12; 
  

  var n000= this.dot(this.grad3[gi000], x, y, z); 
  var n100= this.dot(this.grad3[gi100], x-1, y, z); 
  var n010= this.dot(this.grad3[gi010], x, y-1, z); 
  var n110= this.dot(this.grad3[gi110], x-1, y-1, z); 
  var n001= this.dot(this.grad3[gi001], x, y, z-1); 
  var n101= this.dot(this.grad3[gi101], x-1, y, z-1); 
  var n011= this.dot(this.grad3[gi011], x, y-1, z-1); 
  var n111= this.dot(this.grad3[gi111], x-1, y-1, z-1); 

  var u = this.fade(x); 
  var v = this.fade(y); 
  var w = this.fade(z); 

  var nx00 = this.mix(n000, n100, u); 
  var nx01 = this.mix(n001, n101, u); 
  var nx10 = this.mix(n010, n110, u); 
  var nx11 = this.mix(n011, n111, u); 

  var nxy0 = this.mix(nx00, nx10, v); 
  var nxy1 = this.mix(nx01, nx11, v); 

  var nxyz = this.mix(nxy0, nxy1, w); 

  return nxyz; 
};




var canvas = document.getElementById('waves'),
  ctx = canvas.getContext('2d'),
  perlin = new ClassicalNoise(),
  variation = 0.0015,
  amp = 280,
  maxLines = 50,
  variators = [],
  canvasWidth,
  canvasHeight,
  startY;

for (var i = 0, u = 0; i < maxLines; i++, u += 0.030) {
  variators[i] = u;
}

function draw() {
 
  

  for (var i = 0; i <= maxLines; i++) {
    ctx.beginPath();
    ctx.moveTo(0, startY);

    for (var x = 0; x <= canvasWidth; x++) {
      var y = perlin.noise(x * variation + variators[i], x * variation, 0);
      ctx.lineTo(x, startY + amp * y);
    }


    var color = Math.floor(100 * Math.abs(y));
    var alpha = Math.min(Math.abs(y)) + 1;


    alpha = isNaN(alpha) ? 1 : alpha;

    var gradient = ctx.createLinearGradient(0, 0, canvasWidth, 0);
    gradient.addColorStop(0, "rgba(246,140,30," + alpha + ")");
    gradient.addColorStop(1, "rgba(209,29,39," + alpha + ")");

    ctx.strokeStyle = gradient;
    ctx.stroke();
    ctx.closePath();

    variators[i] += 0.0020;
  }
}

(function init() {
  resizeCanvas();
  animate();
  window.addEventListener('resize', resizeCanvas);
})();

function animate() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  draw();
  requestAnimationFrame(animate);
}

function resizeCanvas() {
  canvasWidth = document.documentElement.clientWidth,
    canvasHeight = document.documentElement.clientHeight;

  canvas.setAttribute("width", canvasWidth);
  canvas.setAttribute("height", canvasHeight);

  startY = canvasHeight / 2;
}