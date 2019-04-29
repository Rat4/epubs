function getNavbar(arr,query,classes){
	var html=`<ul class='${classes}'>`;
	for (var i = 0; i < arr.length; i++) {

			html+=`<li><a href='/${root}?${query}=${arr[i]}'>${arr[i]}</li>
			`
	}
	html+='</ul>'
	return html;
}


function getHeader(navbar){

	const temp=`
		<header>
			<div class="info primaryColor">
				<span class=" icon-079 "></span>
				<a href="/animationepubs">Animation Epubs</a>
			</div>

			<div class="banner">

			</div>

			<div class="mobile-menu">
				<span class=" icon-316 " style="display:none;"></span>
			</div>
				${navbar}
		</header>
	`

	$('body').prepend(temp);
}

function cardTemplate(obj){
	return(`
		<a href='detail.html?id=${obj.id}'>
			<div class='card' id='${obj.id}'>
				<img src='https://drive.google.com/uc?export=view&id=${obj.imgId}' alt='${obj.name}-portada'>
				<p class='name'>${obj.name}</p>
				<p class='author'>${obj.author}</p>

				<p class='lang'>${obj.lang}</p>
				<a href='https://drive.google.com/uc?export=export&id=${obj.id}'>
					<button>Download</button>
				</a>

			<div>
		</a>
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
