document.getElementById('addYears').addEventListener('click', function() {
	let birthDay = document.getElementById('years').value;
	let date = moment(birthDay, 'DD-MM-YYYY', true).add(20, 'years');
	let day = date.get('day');
	let result = document.getElementById('result');
	switch(day) {
		case 0: 
			result.innerHTML = 'in 20 years it will be monday';
			break;
		case 1: 
			result.innerHTML = 'in 20 years it will be tuesady';
			break;
		case 2: 
			result.innerHTML = 'in 20 years it will be wednesday';
			break;
		case 3: 
			result.innerHTML = 'in 20 years it will be thursday';
			break;
		case 4: 
			result.innerHTML = 'in 20 years it will be friday';
			break;
		case 5: 
			result.innerHTML = 'in 20 years it will be saturday';
			break;
		case 6: 
			result.innerHTML = 'in 20 years it will be sunday';
			break;
	}
}, false);