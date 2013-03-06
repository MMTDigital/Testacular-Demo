var rio = (function(){
	"use strict";

	//var model, view, controller;

	function init(){
		this.model = new Model();
		this.view = new View();
		this.controller = new Controller();
	};

	return {
		init : init,
		model : null,
		view : null,
		controller : null
	}
})();