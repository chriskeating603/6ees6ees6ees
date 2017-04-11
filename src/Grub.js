class Grub {
  constructor () {
    this.age = 0;
    this.color = 'pink';
    this.food = 'jelly';
  }
};

Grub.prototype = Object.create(Object);
Grub.prototype.constructor = Grub;
Grub.prototype.eat = function () {
  return 'Mmmmmmmmm jelly';
}

// Grub

// Create a Grub class, in ES6 style, with:
// an age property that is set to 0
// a color property that is set to pink
// a food property that is set to jelly
// an eat method that returns 'Mmmmmmmmm jelly'


