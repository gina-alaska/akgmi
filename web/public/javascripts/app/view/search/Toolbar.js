Ext.define('AKGMI.view.search.Toolbar', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.search_toolbar',
	layout: {
		type: 'hbox',
		align: 'stretch'
	},
	height: 38,
	cls: 'search',
	items: [{ 
		xtype: 'textfield',
		name: 'keyword',
		plugins: [
			Ext.create('Ext.ux.DefaultText', { 
				text: CONFIG.get('search_form.keyword_default') 
			})
		],
		flex: 1
	}, {
		xtype: 'button', scale: 'medium',
		text: CONFIG.get('search_form.search_button'),
		action: 'search'
	}, {
		margin: '0 0 0 5',
		xtype: 'button', scale: 'medium',
		enableToggle: true,
		text: CONFIG.get('search_form.advanced_button'),
		action: 'toggleAdvanced'
	}]
});