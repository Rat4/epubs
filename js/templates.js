function getNavbar(arr,query,classes){
	var html=`<ul class='${classes}'>`;
	for (var i = 0; i < arr.length; i++) {

			html+=`<li><a href='/${root}?${query}=${arr[i]}'>${arr[i]}</a></li>
			`
	}
	html+='</ul>'
	$('nav').html(html)
}



function cardTemplate(obj){
	return(`
		<div class='col-xs-12 col-sm-6 col-md-3 wraper'>
			<a href='detail.html?id=${obj.id}'>
				<div class='card' id='${obj.id}'>
					<img src='https://drive.google.com/uc?export=view&id=${obj.imgId}' alt='${obj.title}-portada'>
					<div class='card-content'>
						<p class='title f-bold'>${obj.title}</p>
						<p class='author'>${obj.author}</p>

						<p class='lang f-ligth-i'>${obj.lang}</p>
					</div>
				<div>
				<div class='hover'>
					<h1 align='center'>${obj.title}</h1>
				</div>
			</a>
		</div>
	`
	)
}

function dl_btn(id){
	return(`
		<a href='https://drive.google.com/uc?export=export&id=${id}'>
			<button>Download</button>
		</a>
		`)
}

function detailTemplate(obj){
	return(`
		<div class='detail row'>
			<div class='col-xs-6 portada'>
				<p>Category: ${obj.category}</p>
				<img src='https://drive.google.com/uc?export=view&id=${obj.imgId}' alt='${obj.title}-portada'>
				${dl_btn(obj.id)}
			</div>

			<div class='col-xs-6'>
				<h1>${obj.title}</h1>
				<p class='meta'>
					<em>Author:${obj.author}</em>
					<br/>
					<em>Lang: ${obj.lang}</em>
				</p>
				<h3>Description</h3>
				<p class='description'>${obj.description}</p>
				<button>View All</button>
			</div>

		</div>
	`)

}

function notFoundTemplate(){
	return(`
		<div class='errorFound'>
			<h1>Sorry</h1>
			<h2>Your epubs was not found</h2>
		</div>
		`)
}
