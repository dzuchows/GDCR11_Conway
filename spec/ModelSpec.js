describe("movies", function() {
	describe("regular movies", function() {
		it("have type", function() {
			var movie = new Movie();
			expect(movie.type).toBeDefined();
		});
    });
	
});
