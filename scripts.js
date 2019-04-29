

function search(query){
	if (!query ) {
		return epubs
	}
	var match=new Array();
	for(key in query){
			epubs.forEach((item)=>{
				if (item[key]==query[key] || query[key] == 'All') {
					console.log(query[key])
					match.push(item)
				}
			})
	}
	return(match);
}

function append(list,template){
	$('main').html('');
	list.forEach(function(item){
		$('main').append(template(item))
	})
}

function cleanMain(){
	// $('main .card').fadeOut();
	$(' main .errorFound').remove();
}

function dinamicDisplay(list){
	cleanMain();
	list.forEach(function(item){
		$('#'+item.id).fadeIn();
	})

}


function display(query,template){
	//Handle Error
	if (search(query).length < 1) {
		cleanMain();
		$('main').prepend(notFoundTemplate())
	}else{

			append(search(query),template)


	}
}
