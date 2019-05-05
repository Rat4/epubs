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
		var filter=params.filter;
		var list=searchArr({ filter : params.search})

	}
}

// render de cartillas gestionado por paginacion
var pagination=new Pagination(3,list);

pagination.init(
	(list)=>{
		displayList(list,cardTemplate)
	}
	,()=>{
		clean('main')
	}
);
