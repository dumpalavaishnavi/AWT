function car(brand) {
    this.brand = brand;
}
car.prototype.start=function(){
    console.log(this.brand+" is starting.");
}

function electricCar(brand,batteryLife){
    car.call(this,brand);
    this.batteryLife=batteryLife;
}

electricCar.prototype=Object.create(car.prototype);

const myCar = new electricCar("Tesla",10);
console.log(myCar.brand+" runs on a battery for " + myCar.batteryLife+" hours.");