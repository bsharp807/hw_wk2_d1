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

  test('passenger has a name', () => {
    expect(solBadguy.name).toBe('Sol Badguy');
  });

  test('passenger has an age', () =>{
    expect(agentFortySeven.age).toBe(57);
  });

})
