describe("rental", function() {
    var movie1;
    var rental;

    describe("1 days rental with regular movie", function() {
        beforeEach(function() {
            movie1 = new Movie();
            rental = new Rental(movie1);
        });

        it("has a movie", function() {
            expect(rental.getMovie()).toBeDefined();
        });
        it("has days rented", function() {
            expect(rental.getDays()).toBeDefined();
        });
        it("has days rented default of 1", function() {
            expect(rental.getDays()).toBe(1);
        });
        it("has points for a one-day regular type", function() {
            var points = rental.calcPoints();
            expect(points).toBe(23);
        });
        it("has cost for a one-day regular type", function() {
            var cost = rental.calcCost();
            expect(cost).toBe(25);
        });
    });

    describe("45 day rental regular type", function() {
        beforeEach(function() {
            movie1 = new Movie(Type.REGULAR);
            rental = new Rental(movie1, 45);
        });
        it("has days rented be passed value", function() {
            expect(rental.getDays()).toBe(45);
        });
        it("has points for a 45 day regular type", function() {
            var points = rental.calcPoints();
            expect(points).toBe(23*45);
        });
        it("has cost for a 45 day regular type", function() {
            var cost = rental.calcCost();
            expect(cost).toBe(25*45);
        });
    });
    
    
    
     describe("1 days rental with new releases movie", function() {
        beforeEach(function() {
            movie1 = new Movie(Type.NEW_RELEASES);
            rental = new Rental(movie1);
        });
        
        it("has points for a 1 day new releases type", function() {
            var points = rental.calcPoints();
            expect(points).toBe(39);
            
        });
        it("has cost for a 1 day new release type", function() {
            var cost = rental.calcCost();
            expect(cost).toBe(32);
        });

    });
    
    
     describe("45 days rental with new releases movie", function() {
        beforeEach(function() {
            movie1 = new Movie(Type.NEW_RELEASES);
            rental = new Rental(movie1,45);
        });
        
        it("has points for a 45 day new releases type", function() {
            var points = rental.calcPoints();
            expect(points).toBe(39*45);
            
        });
        
        it("has cost for a 45 day new release type", function() {
            var cost = rental.calcCost();
            expect(cost).toBe(32 * 45);
        });
        
    });


    describe("1 days rental with childrens movie", function() {
        beforeEach(function() {
            movie1 = new Movie(Type.CHILDRENS);
            rental = new Rental(movie1);
        });
        
        it("has points for a 1 day childrens type", function() {
            var points = rental.calcPoints();
            expect(points).toBe(23);
            
        });
        
    });
    
    describe("45 days rental with childrens movie", function() {
        beforeEach(function() {
            movie1 = new Movie(Type.CHILDRENS);
            rental = new Rental(movie1, 45);
        });
        
        it("has points for a 1 day childrens type", function() {
            var points = rental.calcPoints();
            expect(points).toBe(23*45);
            
        });
        
    });

    
});
