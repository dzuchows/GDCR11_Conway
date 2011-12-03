(function(outer) {
		
	outer.RuleEngine = function() {
	};

	
    
    outer.RuleEngine.prototype.GetNextStateOfCellGivenLiveNeighborCount = function(_state, _neighborCount) {
        
        if ( _neighborCount != 3 && _neighborCount != 2)
            return State.DEAD;
        else
            return State.ALIVE;
        
    }
    
    
})(this);
