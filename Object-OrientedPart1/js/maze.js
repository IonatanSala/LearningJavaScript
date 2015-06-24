"use strict";

function Maze(width, height) {

	this.width = width;
	this.height = height;

	this.startX = null;
	this.startY = null;
	this.startOrientation = null;
	this.endX = null;
	this.endY = null;

	this.directions = ["north", "east", "south", "east"];
	this.spaces = [];

	var i, j;
	for(i = 1; i<= width; i++) {

		this.spaces[i] = [];
		for(j = 1; j<=height; j++) {

			this.spaces[i][j] = new MazeSpace(this.directions);
		}
	}
}

Maze.prototype.setStart = function(x, y, orientation) {

	this.startX = x;
	this.startY = y;
	this.startOrientation = orientation;
}

Maze.prototype.setEnd = function(x, y) {

	this.endX = x;
	this.endY = y;
}

Maze.prototype.setWall = function(x,y, direction) {

	if(x > 0 && x <= this.width && y > 0 &&  y <= this.height ) {
		this.spaces[x][y].setWall(direction);
		return true;
	}
	return false;
}

// Maze.prototype.isValidDirection(direction){
// 	alert('hi');
// }



	// return this.directions.indexOf(direction) !== -1;






