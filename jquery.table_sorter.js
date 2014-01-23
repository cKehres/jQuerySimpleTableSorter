/**
* SimpleTableSorter v1.0.1 | (c) 2014 webtischlerei
* 
* Diese Funktion ermöglicht das Sortieren einer Tabelle per Klick auf einen Link / Button / etc
*
* Der Link / Button / etc muss folgende Eigenschaften haben:
* data-table-sorter-table="#table" // Hiermit gibt man an die ID der Tabelle an welche sortiert werden soll
* data-table-sorter-col="1" // Hier nach welcher Spalte sortiert werden soll
* data-table-sorter-order="desc" // Und hier gibt man an in welche Richtung sortiert werden soll (asc oder desc)
* 
* Beispiel
* <a href="#" data-table-sorter-table="#table" data-table-sorter-col="1" data-table-sorter-order="desc">Name</a>
*/
jQuery(function($) {
	$("[data-table-sorter-table]").click(function(e) {
		e.preventDefault();

		var table = $(this).data('table-sorter-table');
		var col = $(this).data('table-sorter-col');
		var order = $(this).data('table-sorter-order');

		var rows = $(table + ' tbody  tr').get();

		rows.sort(function(a, b) {
			var A = $(a).children('td').eq(col-1).text().toUpperCase();
			var B = $(b).children('td').eq(col-1).text().toUpperCase();
			
			return A < B ? (order == 'asc' ? -1 : 1) : (A > B ? (order == 'asc' ? 1 : -1) : 0);
		});
		
		$.each(rows, function(index, row) {
			$(table).children('tbody').append(row);
		});

		$(this).data('table-sorter-order', order == 'asc' ? 'desc' : 'asc');
	});
});