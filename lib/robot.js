'use strict';

const Robot = (function createRobot() {
  // implement your solution here!
  	//let bearing = null
  	return class Robot{
  		constructor(bearing, coordinates){
  			this.bearing = bearing
  			this.coordinates = [coordinates]
  		}

  		orient(direction){
  			switch(direction){
  				case 'north': 
	  				this.bearing = 'north';
	  				break;
	  			case 'south':
	  				this.bearing = 'south';
	  				break;
	  			case 'west':
	  				this.bearing = 'west';
	  				break;
	  			case 'east':
	  				this.bearing = 'east';
	  				break;
	  			default:
	  				throw new Error('Invalid Robot Bearing');
  			}
  		}

  		turnRight(){
  			let directions = {north: 'east', east: 'south', west: 'north', south: 'west'};
  			for (let direction in directions){
  				if (this.bearing === direction){
  					return this.bearing = directions[direction];
  				}
  			}
  			return this.bearing 
  		}

  		turnLeft(){
  			let directions = {north: 'west', east: 'north', south: 'east', west: 'south'};
  			for (let direction in directions){
  				if (this.bearing === direction){
  					return this.bearing = directions[direction];
  				}
  			}
  			return this.bearing 
  		}
  		
  		at(x, y){
  			this.coordinates = [x, y]
  		}

  		advance(){
		  	switch(this.bearing){
  				case 'north': 
	  				this.coordinates[1] += 1;
	  				break;
	  			case 'south':
	  				this.coordinates[1] -= 1;
	  				break;
	  			case 'west':
	  				this.coordinates[0] -= 1;
	  				break;
	  			case 'east':
	  				this.coordinates[0] += 1;
	  				break;
	  			default:
	  				return this.coordinates
	  			}
  		}

  		instructions(string){
  			let array = []
  			let inputArray = string.split('')
  			let converter = {L: 'turnLeft', R: 'turnRight', A: 'advance'}
  			for (let i = 0; i < inputArray.length; i++){
  				array.push(converter[inputArray[i]])
  			}
  			return array

  		}

  		evaluate(string){
  			let moves = this.instructions(string)
  			for (let i = 0; i < moves.length; i++){
  				// executeFunctionByName(moves[i], this)
  				// eval(this.instructions[i])
  				this[moves[i]]()
  			}
  		}

  		place(object){
  			this.bearing = object['direction']
  			this.coordinates[0] = object['x']
  			this.coordinates[1] = object['y']
  		}




  }
})()
