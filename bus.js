const Bus = function(routeNum, distance, destination, passengers){
  this.routeNum = routeNum;
  this.distance = distance;
  this.destination = destination;
  this.passengers = passengers;
};

Bus.prototype.drive = function(miles = 10){
  this.distance += miles;
}

Bus.prototype.pickUp = function(passenger){
  this.passengers.push(passenger);
};

Bus.prototype.checkPassengers = function(){
  return this.passengers.length;
}

Bus.prototype.dropOff = function(passenger){
  this.passengers.splice(this.passengers.indexOf(passenger),1);
}

Bus.prototype.empty = function(){
  this.passengers.splice(0);
}

Bus.prototype.pickUpFromStop = function(busStop){
  for (let passenger of busStop.queue){
    this.passengers.push(passenger);
  };
  busStop.queue.splice(0);
}

module.exports = Bus;
