describe('dom manipulation - creating elements with jQuery', function(){
	// use beforeEach function to create a new DOM element to 
	beforeEach(function(){
		$("body").append("<h1>Hello world</h1>");
	});
	// clean up the dynamic DOM elements with afterEach
	afterEach(function(){
		$("body h1").remove();
	})
	// and the tests...
	it('checks to see if the code is compiled', function(){
		// test the initial DOM elements
		expect($('h1').text()).toBe("Hello world");
		// try and change the elements
		 $('h1').text("test");
		// now check the current DOM element
		expect($('h1').text()).toBe("test");
	});
});
