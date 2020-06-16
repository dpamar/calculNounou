var monthNames = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'D&eacute;cembre'];
var dayNames = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

function displayMonth(year, month) {
	var startDate = new Date(year, month, 1);
	var endDate = new Date(year, month+1, 0);
	var result = '<table><tr><th colspan="7" style="width: 140px">' + monthNames[startDate.getMonth()] + '</th></tr>';
	result += '<tr>' + dayNames.map(x=>'<th>' + x[0] + '</th>').join('');
	
	var day = (startDate.getDay() + 6) % 7;
	
	var count = 0;
	for(var cell = startDate.getDate() - day; cell <= endDate.getDate() || count % 7; count++, cell++) {
		if(count %7 == 0) result += '</tr><tr>';
		result += '<td onclick="changeCellWorkload(this);" id="' + cell+'_'+startDate.getMonth()+'_'+startDate.getFullYear()+ '" style="text-align: right;">' + ((cell < 1 || cell > endDate.getDate()) ? '&nbsp;' : cell) + '</td>';
	}
	result += '</tr></table>';
	return result;
}
