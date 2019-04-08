const BusStop = function(name, queue){
  this.name = name;
  this.queue = queue;
};

BusStop.prototype.addPass = function(passenger){
  this.queue.push(passenger);
};

BusStop.prototype.decantPass = function(){
  this.queue.splice(0);
}

module.exports = BusStop;
