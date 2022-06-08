const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaurOne;
  let dinosaurTwo;
  let dinosaurThree;
  let dinosaurFour;

  //This resets the test data for each test indivdually
  beforeEach(function() {

    park = new Park('javasorus explorium', 15);
    dinosaurOne = new Dinosaur('t-rex', 'meat', 100);
    dinosaurTwo = new Dinosaur('raptor', 'meat', 50);
    dinosaurThree = new Dinosaur('raptor', 'meat', 50);
    dinosaurFour = new Dinosaur('stegosaurus', 'plant', 40);

    park.addDinosaur(dinosaurOne);
    park.addDinosaur(dinosaurTwo);
    park.addDinosaur(dinosaurThree);
    park.addDinosaur(dinosaurFour);
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'javasorus explorium');
  }); 


  it('should have a ticket price',function(){
    const actual = park.price;
    assert.strictEqual(actual,15);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 4);
  });

  it('should be able to add a dinosaur to its collection', function(){
    let newDinosaur = new Dinosaur('brachiosaurus', 'plant', 100);
    park.addDinosaur(newDinosaur);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 5);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dinosaurFour);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 3);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.findMostPopularDinosaur();
    assert.strictEqual(actual, dinosaurOne);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    const actual = park.findAllDinosaursBySpecies('raptor').length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    const actual = park.getTotalVisitorsPerDay();
    assert.strictEqual(actual, 240); // adding all the 4 main attractions numbers together
  });

  it('should be able to calculate the total number of visitors per year', function(){
    const actual = park.getTotalVisitorsPerYear();
    assert.strictEqual(actual, 87600); // 240 x 365
  });

  it('should be able to calculate total revenue for one year', function(){
    const actual = park.getTotalRevenuePerYear();
    assert.strictEqual(actual, 1314000);// 87600 x price per ticket 15
  });

});
