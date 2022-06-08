const Park = function (name,price) {
    this.name = name
    this.price = price
    this.dinosaurs = []
  }

Park.prototype.addDinosaur = function (dinosaur){
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function (dinosaur){
    const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(indexOfDinosaur,1);
}

Park.prototype.findMostPopularDinosaur = function(){

    let mostPopularDinosaur = null;

    for (let dinosaur of this.dinosaurs){
        if (mostPopularDinosaur) {
            if (mostPopularDinosaur.guestsAttractedPerDay < dinosaur.guestsAttractedPerDay) {
                mostPopularDinosaur = dinosaur;
            }
        } else {
            mostPopularDinosaur = dinosaur;
        }
    };

    return mostPopularDinosaur;
}

Park.prototype.findAllDinosaursBySpecies = function(species) {
    const filteredDinosaurs = [];

    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {
            filteredDinosaurs.push(dinosaur)
        }
    };

    return filteredDinosaurs;
}

Park.prototype.getTotalVisitorsPerDay = function() {
    let totalVisitorsPerDay = 0; 

    for (let dinosaur of this.dinosaurs) {
        totalVisitorsPerDay += dinosaur.guestsAttractedPerDay;
    }

    return totalVisitorsPerDay;
}

Park.prototype.getTotalVisitorsPerYear = function() {
    return this.getTotalVisitorsPerDay() * 365;
}

Park.prototype.getTotalRevenuePerYear = function() {
    return this.getTotalVisitorsPerYear() * this.price;
}

module.exports = Park;