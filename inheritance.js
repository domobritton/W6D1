Function.prototype.inherits = function inherits(Parent) {
  function Surrogate() {}
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.inherits2 = function inherits2(Parent) {
  this.prototype = Object.create(Parent.prototype);
  this.prototype.constructor = this;
};

function Shape(color) {
  this.color = color;
}

Shape.prototype.yourColor = function yourColor() {
  return `This shape is ${this.color}`;
};

function Circle(color) {
  Shape.call(this, color);
}

Circle.inherits2(Shape);

Circle.prototype.yourCircle = function yourCircle() {
  return `This ${this.color} circle`;
};


const bigCircle = new Circle('blue');

const a = bigCircle.yourColor();
console.log(a);
const b = bigCircle.yourCircle();
console.log(b);
