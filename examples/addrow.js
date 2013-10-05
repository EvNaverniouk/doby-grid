define([], function() {
	return [function () {

		// Generate Data
		var data = []
		for (var i = 0; i < 10; i++) {
			data.push({
				id: 'fancy_id_' + i,
				data: {
					id: 'fancy_id_' + i,
					name: "Bob Robert Jr. " + i
				}
			});
		}

		return {
			addRow: true,
			columns: [{
				id: "id",
				name: "ID",
				field: "id",
				sortable: true
			}, {
				id: "name",
				name: "Name",
				field: "name",
				minWidth: 100,
				sortable: true
			}, {
				editable: false,
				id: "action",
				name: "Action",
				field: "action",
				focusable: false,
				formatter: function () {
					return '<button class="add">Add Another Row</button><button class="remove">Remove This Row</button>'
				},
				selectable: false,
				width: 300
			}],
			editable: true,
			data: data
		}
	}, function (grid) {
		grid.on('click', function(event, args) {
			event.stopPropagation()

			if ($(event.target).hasClass('add')) {
				i++
				grid.add({data: {id: 'fancy_id_' + i, name: "Bob Robert Jr. " + i}})
			} else if ($(event.target).hasClass('remove')) {
				grid.remove(args.item.id)
			}
		})
	}]
})