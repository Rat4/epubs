const root='animationepubs'
$('body').append(`
	<script type="text/javascript" src="epubs.js"></script>

	<script type="text/javascript" src="templates.js"></script>

	<script type="text/javascript" src="getAllUrlParams.js"></script>

	<script type="text/javascript" src="scripts.js"></script>
	`)

	$(document).ready(()=>{
		getHeader(getNavbar(
			['All','Animation','Drawing','Scripting'],
			'category',
			'primaryColor')
		);


	})
