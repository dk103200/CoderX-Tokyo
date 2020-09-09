function Mouse(name){
	this.name = name
	this.isDead

}
Mouse.prototype.die = function() {
	this.isDead  true	
};

Mouse.prototype.run = function(){
	console.log('Run')
}

module.exports = Mouse