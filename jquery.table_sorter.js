/**
* SimpleTableSorter v1.2.0 | (c) 2014 Christian Kehres
* 
* Diese Funktion ermöglicht das Sortieren einer Tabelle per Klick auf ein jedes erdenkliche Element
*
* Das Element muss folgende Data-Attribute besitzen:
* data-table-sorter-table="#table" // Hiermit gibt man an die ID der Tabelle an welche sortiert werden soll
* data-table-sorter-col="1" // Hier nach welcher Spalte sortiert werden soll
* data-table-sorter-order="desc" // Und hier gibt man an in welche Richtung sortiert werden soll (asc oder desc)
* 
* Beispiel
* <a href="#" data-table-sorter-table="#table" data-table-sorter-col="1" data-table-sorter-order="desc">Name</a>
*/
jQuery(function($) {
	$("[data-table-sorter-table]").on('click', function() {
		event.preventDefault();

		var sort_col = $(this).data('table-sorter-col')-1;
		var sort_order = $(this).data('table-sorter-order');

		var table_body = $($(this).data('table-sorter-table')).children('tbody');
		var table_body_rows = $('tr', table_body).get();

		table_body_rows.sort(function(a, b) {
			var A = $(a).children('td').eq(sort_col).text().toLowerCase();
			var B = $(b).children('td').eq(sort_col).text().toLowerCase();
			
			return A < B ? (sort_order == 'asc' ? -1 : 1) : (A > B ? (sort_order == 'asc' ? 1 : -1) : 0);
		});
		
		table_body.append(table_body_rows);
		
		$(this).data('table-sorter-order', sort_order == 'asc' ? 'desc' : 'asc');
	});
});