getNavbar(['All','Animation','Scripting','Drawing'],'Category','primaryColor');


const detail=searchArr({id:getUrlParams().id});

displayList(detail,detailTemplate);
