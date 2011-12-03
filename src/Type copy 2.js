(function(outer) {
	var defaults = { cost: 42, points: 23 };
		
	var Type = function(theCost, thePoints) {
		if (theCost) {
			this.cost = theCost;
		}
		if (thePoints) {
			this.points = thePoints;
		}
		//this.points = 23;
	};

	Type.prototype = defaults;

	Type.REGULAR = new Type(25);
	Type.CHILDRENS = new Type(19);
	Type.NEW_RELEASES = new Type(32, 39);

	outer.Type = Type;
	
})(this);
