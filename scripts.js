function cardTemplate(obj){
	return(`
		<div class='card' id='${obj.id}'>
			<img src='https://drive.google.com/uc?export=view&id=${obj.imgId}' alt='${obj.name}-portada'>
			<p class='name'>${obj.name}</p>
			<p class='author'>${obj.author}</p>

			<p class='lang'>${obj.lang}</p>
			<a href='https://drive.google.com/uc?export=export&id=${obj.id}'>
				<button>Download</button>
			</a>

		<div>
	`
	)
}
function notFoundTemplate(){
	return(`
		<div class='errorFound'>
			<h1>Sorry</h1>
			<h2>Your epubs was not found</h2>
		</div>
		`)
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
function cleanMain(){
	$('main .card').fadeOut();
	$(' main .errorFound').remove();
}
function dinamicDisplay(list){
	cleanMain();
	list.forEach(function(item){
		$('#'+item.id).fadeIn();
	})

}
append(epubs);
function display(query){
	//Handle Error
	if (search(query).length < 1) {
		cleanMain();
		$('main').prepend(notFoundTemplate())
	}else{
		dinamicDisplay(search(query))//smoot transition on change
	}
}
