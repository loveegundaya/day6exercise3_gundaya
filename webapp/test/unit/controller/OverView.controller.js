/*global QUnit*/

sap.ui.define([
	"zbtp/day6exercise3_gundaya/controller/OverView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("OverView Controller");

	QUnit.test("I should test the OverView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
