(function(outer) {
		
	outer.RuleEngine = function() {
	};

	
    
    outer.RuleEngine.prototype.GetNextStateOfCellGivenLiveNeighborCount = function(_state, _neighborCount) {
        
        return State.ALIVE;
        
    }
    
    
})(this);
