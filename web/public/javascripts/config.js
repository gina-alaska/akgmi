CONFIG = {
  restUrl: 'http://akgmi-rest.zap.gina.alaska.edu',
  // restUrl: 'http://dggsmaps.dnr.state.ak.us',
	defaultLang: 'EN',
	EN: {
		search_form: {
			title: 'Advanced Search',
			search_button: 'Search',
			advanced_button: 'Advanced',
			reset_button: 'Clear',
			keyword_default: 'Enter search here',
			agency: 'Agency',
			years: 'Year(s)',
			quadrangles: 'Quadrangle(s)',
			quadrangles_default: 'Select one or more quadrangles',
			scale: 'Scale',
			scale_from_default: 'From:',
			scale_to_default: 'To:',
			statewide: 'Include statewide records?',
			scale_to:  [
        { key: 24000, display: '1:24,000'},
        { key: 63600, display: '1:63,600'},
        { key: 100000, display: '1:100,000'},
        { key: 250000, display: '1:250,000'},
        { key: 500000, display: '1:500,000'},
        { key: 3500000, display: '1:3,500,000'},
        { key: 25000000, display: '1:25,000,000'}
      ],
			scale_from: [
        { key: 1, display: '1:1' },
        { key: 24000, display: '1:24,000'},
        { key: 63600, display: '1:63,600'},
        { key: 100000, display: '1:100,000'},
        { key: 250000, display: '1:250,000'},
        { key: 500000, display: '1:500,000'},
        { key: 3500000, display: '1:3,500,000'}
      ]
		},
		results: {
			title: 'Search Results',
			maps: 'Maps',
			cd_dvd: 'CD/DVD',
			geospatial: 'Geospatial',
			reports: 'Reports',
			outside_links: 'Outside Links',
			any_type: 'Any Type'
		}
	},
	get: function(path) {
		var items = path.split(/\./);
		var text = this[this.defaultLang];
		
		Ext.each(items, function(name) {
			if(text[name]) { text = text[name]; }
			else { text = null; }
		}, this);
		
		if(!text) { text = 'Unknown path ' + path; }
		return text;
	}
};
