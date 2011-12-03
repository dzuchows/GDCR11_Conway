describe("type", function() {
	it("has a cost", function() {
		var type = new Type();
		expect(type.cost).toBeDefined();
	});
	it("has points", function() {
		var type = new Type();
		expect(type.points).toBeDefined();
	});
	it("regular exists", function() {
		expect(Type.REGULAR).toBeDefined();
	});
	it("regular costs 25", function() {
		var regularType = Type.REGULAR;
		expect(regularType.cost).toBe(25);
	});
	it("childrens exists", function() {
		expect(Type.CHILDRENS).toBeDefined();
	});
	it("childrens costs 19", function() {
		var childrensType = Type.CHILDRENS;
		expect(childrensType.cost).toBe(19);
	});
	it("new releases exists", function() {
		expect(Type.NEW_RELEASES).toBeDefined();
	});
	it("new releases costs 32", function() {
		var newReleaseType = Type.NEW_RELEASES;
		expect(newReleaseType.cost).toBe(32);
	});
	it("new releases provide 39 points",function() {
		var newReleaseType = Type.NEW_RELEASES;
		expect(newReleaseType.points).toBe(39);
	});
});
