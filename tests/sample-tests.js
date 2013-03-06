describe('sample rio tests', function(){
	beforeEach(function(){
		$("body").append("<h1>Hello world</h1>");
	});

	it('checks to see if the code is compiled', function(){
		// expect(rio).toBeDefined();
		// rio.init();
		// // console.log(rio.model);
		// expect(rio.model).toBeDefined();
		// expect(rio.model).not.toBe(null);
		// expect(rio.view).toBeDefined();
		// expect(rio.controller).toBeDefined();

		// $('h1').text("test");

		expect($('h1').text()).toBe("test");
	});
});
