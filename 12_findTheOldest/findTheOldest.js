const findTheOldest = function(array) {

    const d = new Date();
    let currentYear = d.getFullYear();

    let liveAges = [];
    array.forEach(function(element) {
        if (!('yearOfDeath' in element)) {
            liveAges.push(currentYear - element.yearOfBirth);
        } else {
            liveAges.push(element.yearOfDeath - element.yearOfBirth);
        }
    });
    
    const olderAge = Math.max.apply(null, liveAges);
    const indexOlderAge = liveAges.indexOf(olderAge);
    return array[indexOlderAge];
};
// Do not edit below this line
module.exports = findTheOldest;
