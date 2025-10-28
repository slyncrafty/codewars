/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/633701c187ca520016eec664
/* ========== ========== ========== ========== ========== ==========*/
/*
Parking Lot #1

Description:
Your job is to incrementally develop a fully robotized parking lot management system.

In this first step, we just want to manage a row of adjacent parking spots.

    All parking spots have a width of 1 meter.
    We allow motorbikes, regular cars and vans to park. Motorbikes occupy exactly 1 spot, regular cars take 2 adjacent spots, and vans need 3 (also adjacent) spots.
    All vehicles have a unique license number.
    The arrival/departure dock is at one end of the row. In order to save both time and power consumption, vehicles are always parked as close as possible to the dock.
    Once a vehicle is parked, the system does not move it.

You will get the following helper classes : Bike, Car, and Van. All constructors only take the license plate as argument...

const b=new Bike('AB-123') const c=new Car('CD-456') const v=new Van('EF-789')

... which can be accessed using the license attribute ...

console.log(v.license); > 'EF-789'

Your jobis to implement a ParkingLot class, with one constructor and two methods.

    new ParkingLot(size), which creates a ParkingLot with size spots, all initially empty.
    park(vehicle), which returns true if the vehicle was parked successfully, false otherwise.
    retrieve(license), which returns true if the vehicle was retrieved successfully, false otherwise.

*/

// Solution
class ParkingLot {
	constructor(size) {
		this.size = size;
		this.spots = Array(size).fill(null);
	}

	park(vehicle) {
		let neededSpot = 0;
		if (vehicle instanceof Bike) neededSpot = 1;
		else if (vehicle instanceof Car) neededSpot = 2;
		else if (vehicle instanceof Van) neededSpot = 3;

		for (let i = 0; i <= this.size - neededSpot; i++) {
			if (this.spots.slice(i, i + neededSpot).every((e) => e === null)) {
				for (let j = i; j < i + neededSpot; j++) {
					this.spots[j] = vehicle.license;
				}
				return true;
			}
		}
		return false;
	}

	retrieve(license) {
		let found = false;
		for (let i = 0; i < this.size; i++) {
			if (this.spots[i] === license) {
				this.spots[i] = null;
				found = true;
			}
		}
		return found;
	}
}

// Test Codes
class Bike {
	constructor(l) {
		this.license = l;
	}
}
class Car {
	constructor(l) {
		this.license = l;
	}
}
class Van {
	constructor(l) {
		this.license = l;
	}
}

const p = new ParkingLot(6);
const bikes = ['B1', 'B2', 'B3', 'B4', 'B5', 'B6'];

const equal = (a, b) => {
	if (a === b) console.log('Correct');
	else console.log('Incorrect', a, b);
};

// 'successfully park 6 bikes'
bikes.map((b) => equal(p.park(new Bike(b)), true));

//'attempt to park one more bike (full park)'
equal(p.park(new Bike('B7')), false);

//'attemtpt to retrieve bike which is not parked'
equal(p.retrieve('B7'), false);

//'retrieve all parked bikes'
bikes.map((b) => equal(p.retrieve(b), true));
