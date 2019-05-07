const root='epubs';
$('.tohome').attr('href','/'+root);
// search a epub object with a query
function searchArr(query){
	if (!query ) {
		return epubs
	}
	var match=new Array();
	for(key in query){
			epubs.forEach((item)=>{
				var pat=new RegExp('.*'+query[key].toLowerCase().replace('+',' ')+'.*','g');
				if (item[key].toLowerCase().match(pat) || query[key] == 'All') {

					match.push(item)
				}
			})
	}
	return(match);
}

// display a array of items on .content container with a specified template
function displayList(list,template){
	list.forEach((item)=>{
		if (item) {
			$('main').append(template(item))
		}
	})
}


function clean(container){
	$(container).html('');
}

function isObjEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

class Pagination {
	constructor(perPage,list) {
		this.hover='current';
		this.pages=1;
		this.perPage=perPage;
		this.toPaginate=list;


		this.getPages();
		$('#pagination').append(this.getHtml());
	}

	init(renderFunction,onChange){
		renderFunction(this.getList(1))
		if (this.pages>1) {
			$('#pagination ul li')[0].className='current';
		}


		$('#pagination ul li').on('click',(e)=>{
			$('#pagination ul li').removeClass('current');
			e.currentTarget.className='current';
			onChange();
			renderFunction(this.getList($('#pagination .current').text()));
		})

	}
	getPages(){
		this.pages=Math.round(this.toPaginate.length/this.perPage);
		return this.pages
	}

	getHtml(){
		var html='<ul>';
		if (this.pages > 1) {
			for (var i = 0; i < this.pages; i++) {
				html+=`<li> <a href="#"> ${i+1} </a> </li>`
			}

			html+='</ul>';
			return html;
		}

	}

	getList(page){
		var pageList=new Array();
		for(var i= (page-1)*this.perPage; i < page*this.perPage; i++){
			pageList.push(this.toPaginate[i])

		}
		return pageList;
	}
}

class Search {
	constructor(inputs) {
		this.container='.site';
		this.submit='.site #search-submit';
		this.inputs=inputs

		this.handleSubmit();
	}

	handleSubmit(){
		$(this.submit).on('click',(e)=>{
			this.getValues(this.inputs);
			this.href(this.params);

		})
	}

	getValues(inputs){
		this.params={};
		inputs.forEach((input)=>{

			this.params[input.name]=$(this.container +' '+ input.tag +'[name='+ input.name +']').val().replace(' ','+')
		})
	}


	href(params){
		var href='?'

		if(params.search==""){
			params.search='All'
		}

		for(var key in params){
			href+=`${key}=${params[key]}&`
		}
		window.location.href=href.slice(0,-1)
	}

}
