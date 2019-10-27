
function ClassMember(theName, theLikes) {
  this.name = theName;
  this.likes = theLikes;
  ClassMember.all.push(this);
}

ClassMember.all = [];

var fatima = new ClassMember('Fatima',['cats']);

// console.log('fatima : ', fatima);

var ahmedOmar = new ClassMember('Ahmed', ['cars','babji']);

// console.log('ahmedOmar : ', ahmedOmar);

console.log('classList : ', ClassMember.all);

console.log('ahmedOmar.all : ', ahmedOmar.all);


