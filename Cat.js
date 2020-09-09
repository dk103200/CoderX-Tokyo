var Mouse = require('./Mouse');
function Cat(){
	this.stomach = [] 
}

Cat.prototype.eat = function(mouse){
	
	if (mouse instanceof Mouse){
		this.stomach.push(mouse)	
	}else{
		throw new Error ('Cat can only eat mouse!!!')
	}
}

module.exports = Cat;