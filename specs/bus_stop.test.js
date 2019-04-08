const BusStop = require('../bus_stop');
const Passenger = require('../passenger');
const Bus = require('../bus');

describe('bus stop', () =>{

  let numberFiveBus;

  let morningsideRoad;
  let dalkeithRoad;
  let princesStreet;

  let solBadguy;
  let agentFortySeven;
  let jeanGrey;
  let chunLi;

  beforeEach(() =>{
    numberFiveBus = new Bus(5,0,'Princes Street',[]);

    morningsideRoad = new BusStop('Morningside Road',[]);
    dalkeithRoad = new BusStop('Dalkeith Road',[]);
    princesStreet = new BusStop('Princes Street',[]);

    solBadguy = new Passenger('Sol Badguy', 33);
    agentFortySeven = new Passenger('Agent 47', 57);
    jeanGrey = new Passenger('Jean Grey', 18);
    chunLi = new Passenger('Chun Li', 36);

  });

  test('the bus stop should have a name', () => {
    expect(morningsideRoad.name).toBe('Morningside Road');
  });

  test('the bus stop can have people added to its queue', () => {
    morningsideRoad.addPass(chunLi);
    expect(morningsideRoad.queue.length).toBe(1);
  });

  test('the bus stop can decant all passengers', () => {
    morningsideRoad.addPass(chunLi);
    morningsideRoad.addPass(solBadguy);
    morningsideRoad.decantPass();
    expect(morningsideRoad.queue.length).toBe(0);
  });

  test('people can wait at a stop and get on a bus', () => {
    morningsideRoad.addPass(chunLi);
    morningsideRoad.addPass(solBadguy);
    numberFiveBus.pickUpFromStop(morningsideRoad);
    expect(morningsideRoad.queue.length).toBe(0);
    expect(numberFiveBus.checkPassengers()).toBe(2);
  });
})
