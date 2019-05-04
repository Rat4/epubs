const root='animationepubs';
// search a epub object with a query
function searchArr(query){
	if (!query ) {
		return epubs
	}
	var match=new Array();
	for(key in query){
			epubs.forEach((item)=>{
				if (item[key]==query[key] || query[key] == 'All') {

					match.push(item)
				}
			})
	}
	return(match);
}

// display a array of items on .content container with a specified template
function displayList(list,template){
	list.forEach((item)=>{
		$('main').append(template(item))
	})
}
