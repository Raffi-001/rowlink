$.fn.rowClick = function($href) {
	var href = '';
	var href = this.find($href).attr('href');
	var a = this;
	var handler = function() {
		window.location = href;
	};
	this.css('cursor', 'pointer');

	this.ajaxStart(function() {
			a.unbind('click');
			this.ajaxStop(function() {
				});
			a.bind('click', handler);
			});

	a.click(function() {
			if(href != '') {
			window.location = href;
			}
			});
};
