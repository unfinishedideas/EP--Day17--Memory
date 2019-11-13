export function Card(type, image){
  this.type = type;
  this.image = image;
  this.showing = false;
};

Card.prototype.showCard = function(){
  this.showing = true;
  console.log("SHOW ME");
}
