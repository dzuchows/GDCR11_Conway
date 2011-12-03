describe("Conways Game of Life", function() {
		it("has a rule engine", function() {
			var ruleEngine = new RuleEngine();
			expect(ruleEngine).toBeDefined();
		});
        
        it("makes a dead cell with three neighbors alive", function() {
            var ruleEngine = new RuleEngine();
            
            var nextCellState = ruleEngine.GetNextStateOfCellGivenLiveNeighborCount(State.DEAD,3);
            expect(nextCellState).toBe(State.ALIVE);
        });
        
        it("makes a live cell with zero neighbors dead", function() {
            var ruleEngine = new RuleEngine();
            
            var nextCellState = ruleEngine.GetNextStateOfCellGivenLiveNeighborCount(State.ALIVE,0);
            expect(nextCellState).toBe(State.DEAD);
        
        });
        
        it("makes a live cell with two neighbors alive", function() {
            var ruleEngine = new RuleEngine();
            
            var nextCellState = ruleEngine.GetNextStateOfCellGivenLiveNeighborCount(State.ALIVE,2);
            expect(nextCellState).toBe(State.ALIVE);
        
        });
        

	
});
