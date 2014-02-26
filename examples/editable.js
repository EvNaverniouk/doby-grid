/*global define */

define(['faker'], function (Faker) {
	"use strict";

	return [function () {

		// Generate Data
		var data = [];
		for (var i = 0; i < 10000; i++) {
			data.push({
				id: i,
				data: {
					id: i,
					name: Faker.Name.findName(),
					age: "100 years",
					city: Faker.Address.city(),
					country: Faker.Address.ukCountry()
				}
			});
		}

		return {
			autoColumnWidth: true,
			autoEdit: true,
			columns: [{
				id: "id",
				editable: false,
				name: "ID",
				field: "id",
				sortable: true,
				removable: true
			}, {
				id: "name",
				name: "Name",
				field: "name",
				minWidth: 100,
				sortable: true,
				removable: true
			}, {
				id: "age",
				name: "Age",
				field: "age",
				sortable: true,
				removable: true
			}, {
				id: "city",
				name: "City",
				field: "city",
				sortable: true,
				visible: false,
				removable: true
			}, {
				id: "country",
				name: "Country",
				field: "country",
				sortable: true,
				removable: true
			}],
			data: data,
			//editor: editor,
			editable: true,
			quickFilter: true
		};
	}];
});