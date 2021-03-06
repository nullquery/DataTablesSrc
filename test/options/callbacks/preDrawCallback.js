describe( "preDrawCallback option", function() {
	dt.libs( {
		js:  [ 'jquery', 'datatables' ],
		css: [ 'datatables' ]
	} );

	describe("Check the defaults", function () {
		dt.html( 'basic' );
		it("Default should not be true", function () {
			$('#example').dataTable();
			expect($.fn.dataTable.defaults.fnPreDrawCallback).not.toBe(true);
			//$.fn.DataTable.defaults
		});
		dt.html( 'basic' );
		it("One argument passed", function () {
			test = -1;
			$('#example').dataTable( {
				"preDrawCallback": function() {
					test = arguments.length;

				}
			});
			expect(test == 1).toBe(true);
		});
		dt.html( 'basic' );
		it("That one argument is the settings object", function () {
			$('#example').dataTable( {
				"preDrawCallback": function (settings){
					test = settings;
				}
			});
			expect($('#example').DataTable().settings()[0] == test).toBe(true);
		});
		dt.html( 'basic' );
		it("preDrawCallback called once on first draw", function () {
			test = 0;
			$('#example').dataTable( {
				"preDrawCallback": function(){
					test++;
				}
			});
			expect(test == 1).toBe(true);
		});
		it("preDrawCallback called once each draw thereafter as well", function () {
			$('#example_next').click();
			$('#example_next').click();
			$('#example_next').click();
			expect(test == 4).toBe(true);
		});
		dt.html( 'basic' );
		it("Able to cancel draw", function () {
			test = 0;
			$('#example').dataTable( {
				"preDrawCallback": function( settings ) {
					return false;
				},
				"drawCallback": function(){
					test++;
				}
			} );
			expect(test === 0).toBe(true);
		});
	
	});

});
