(function(outer) {
	outer.Rental = function(_movie, _days) {
        var movie = _movie;
        var days = _days || 1;
        this.getMovie = function() {
            return movie;
        };
        this.getDays = function() {
            return days;
        };
        
	}
    
    outer.Rental.prototype.calcPoints = function() {
        
        return this.getMovie().type.points  * this.getDays();
    }
    
    outer.Rental.prototype.calcCost = function() {
        
        return this.getMovie().type.cost * this.getDays();
    }
	
})(this);
