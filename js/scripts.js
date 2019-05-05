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
		$('#pagination ul li')[0].className='current';

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
		for (var i = 0; i < this.pages; i++) {
			html+=`<li> <a href="#"> ${i+1} </a> </li>`
		}

		html+='</ul>';
		return html;
	}

	getList(page){
		var pageList=new Array();
		for(var i= (page-1)*this.perPage; i < page*this.perPage; i++){
			pageList.push(this.toPaginate[i])

		}
		return pageList;
	}
}
