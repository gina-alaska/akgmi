CONFIG = {
	restUrl: 'http://akgmi-rest.zap.gina.alaska.edu',
	text: {
		search_form: {
			title: 'Advanced Search',
			search_button: 'Search',
			advanced_button: 'Advanced',
			reset_button: 'Clear',
			keyword_default: 'Enter search here',
			agency: 'Agency',
			years: 'Year(s)',
			quadrangles: 'Quadrangle(s)',
			scale: 'Scale',
			statewide: 'Include statewide records?'
		}
	},
	getText: function(path) {
		var items = path.split(/\./);
		var text = this.text;
		Ext.each(items, function(name) {
			if(text[name]) { text = text[name]; }
			else { text = null; }
		}, this);
		
		if(!text) { text = 'Unknown path ' + path; }
		return text;
	}
};