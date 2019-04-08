const BusStop = require('../bus_stop');
const Passenger = require('../passenger');
const Bus = require('../bus');

describe('bus', () =>{

  let numberFiveBus;

  let morningsideRoad;
  let dalkeithRoad;
  let princesStreet;

  let solBadguy;
  let agentFortySeven;
  let jeanGrey;
  let chunLi;

  beforeEach(() =>{
    numberFiveBus = new Bus(5, 0, 'Princes Street', []);

    morningsideRoad = new BusStop('Morningside Road',[]);
    dalkeithRoad = new BusStop('Dalkeith Road',[]);
    princesStreet = new BusStop('Princes Street',[]);

    solBadguy = new Passenger('Sol Badguy', 33);
    agentFortySeven = new Passenger('Agent 47', 57);
    jeanGrey = new Passenger('Jean Grey', 18);
    chunLi = new Passenger('Chun Li', 36);

  });

  test('the bus should have a route number', () => {
    expect(numberFiveBus.routeNum).toBe(5);
  });

  test('the bus should have zero miles on the clock', () => {
    expect(numberFiveBus.distance).toBe(0);
  });

  test('the bus should have a desitnation', () => {
    expect(numberFiveBus.destination).toBe('Princes Street');
  });

  test('the bus should have a method to add 10 to distance', () => {
    numberFiveBus.drive();
    expect(numberFiveBus.distance).toBe(10);
  });

  test('the bus should be empty to start with', () => {
    expect(numberFiveBus.passengers.length).toBe(0);
  });

  test('the bus should be able to pick up passengers', () => {
    numberFiveBus.pickUp(chunLi);
    expect(numberFiveBus.checkPassengers()).toBe(1);
  });

  test('the bus should be able to drop off passengers', () => {
    numberFiveBus.pickUp(chunLi);
    numberFiveBus.dropOff(chunLi);
    expect(numberFiveBus.checkPassengers()).toBe(0);
  });

  test('the bus should be able to empty all passengers', () => {
    numberFiveBus.pickUp(chunLi);
    numberFiveBus.pickUp(solBadguy);
    numberFiveBus.empty();
    expect(numberFiveBus.checkPassengers()).toBe(0);
  });

});
