/*
Suppose that you're working in a small town administration, 
and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. 
All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (formula: numbers of trees/park area)
2. Average age of each town's park (formula: sum of all ages/number of parks)
3. The name of the park that has no more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. 
If the size is unknown, the default is normal
All the report data should be printed to the console.
*/

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear)
        this.area = area;
        this.numTrees = numTrees
    }

    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km`);
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear)
        this.length = length
        this.size = size
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny')
        classification.set(2, 'small')
        classification.set(3, 'normal')
        classification.set(4, 'big')
        classification.set(5, 'huge')
        console.log(`${this.name}, built in ${this.buildYear}, and it is a ${classification.get(this.size)} street`)
    }
}

const allParks = [
    new Park('Schiller Park', 1932, 0.2, 215),
    new Park('Blendon Woods', 1960, 2.7, 5000),
    new Park('Olentangy Park', 1800,  1.7, 800)
]

const allStreets = [
    new Street('Rich St.', 1930, 1, 2),
    new Street('High St.', 1886, 2.7, 4),
    new Street('Main St.', 1920, 0.5, 1),
    new Street('Olentangy St.', 1910, 5, 5)
]

function calculateSum(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    return [sum, sum / arr.length]
}

function reportParks(p) {
    console.log('--------- Parks & Rec Report --------------');
    //density
    p.forEach(el => {
        el.treeDensity();
    });

    //averageAge
    const ages = p.map(el => new Date().getFullYear() - el.buildYear)
    const [totalAge, avgAge] = calculateSum(ages)
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`)

    // which park has more than 1000 trees
    const i =  p.map(el => el.numTrees).findIndex(el => el >= 1000)
    console.log(`${p[i].name} has more than 1000 trees`)
}

function reportStreets(s) {
    console.log('------------- Street Report -------------')
    //totale and avergage legnth of the towns streets
    const[totalLength, avgLength] = calculateSum(s.map(el => el.length))
    console.log(`Our ${s.length} streets has a total length of ${totalLength} km, with an average of ${avgLength} km.`)

    s.forEach(el => el.classifyStreet())
}

reportParks(allParks)
reportStreets(allStreets)




