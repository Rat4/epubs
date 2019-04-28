function cardTemplate(obj){
	return(`
		<div class='card' id='${obj.id}'>
			<img src='https://drive.google.com/uc?export=view&id=${obj.imgId}' alt='${obj.name}-portada'>
			<h1>${obj.name}</h1>
			<h3>${obj.author}</h3>
			<p>${obj.description}</p>
			<p>Lenguaje:${obj.lang}</p>
			<a href='https://drive.google.com/uc?export=export&id=${obj.id}'>
				<button>Download</button>
			</a>

		<div>
	`
	)
}

function search(query){
	if (!query) {
		return epubs
	}
	var match=new Array();
	for(key in query){
			epubs.forEach((item)=>{
				if (item[key]==query[key]) {
					match.push(item)
				}
			})
	}
	return(match);
}
function append(list){
	$('main').html('');
	list.forEach(function(item){
		$('main').append(cardTemplate(item))
	})
}
function display(query){
	append(search(query));
}