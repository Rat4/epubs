getNavbar(['All','Animation','Scripting','Drawing'],'Category','primaryColor');

if (isObjEmpty(getUrlParams())) {
//si no hay query en la url
	var list=epubs;

}
else{
	var params=getUrlParams();

	if (!params.filter) {
		// busqueda por la barra de navegacion
		var list=searchArr({category: params.category});

	}
	else{//si s buscado desde la barra buscadora
		var query={};
		query[params.filter]=params.search;
		var list=searchArr(query)
	}
}

if (list.length < 1) {
// handle error.. not found
	$('main').html(notFoundTemplate())
}else{
	// solo renderizar si se encontro algo
	// render de cartillas gestionado por paginacion
	var pagination=new Pagination(8,list);

	pagination.init(
		(list)=>{
			displayList(list,cardTemplate)
		}
		,()=>{
			clean('main')
		}
	);
}

// search form

$('header .site').append(searchboxTemplate())

new Search([{name:'filter',tag:'select'},{name:'search',tag:'input'}])
