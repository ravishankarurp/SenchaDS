Ext.define('SimpleApp.view.Main', {
    extend: 'Ext.form.Panel',
    xtype: 'main',
    requires: ['Ext.form.FieldSet'],
    config: {
        url: 'contact.js',
        fullscreen:true,
        items: [
            {
                xtype: 'fieldset',
				title: 'Contact Us',

                items: [
                    {
                        xtype: 'textfield',
                        name: 'name',
                        label: 'Name'
                    },
                    {
                        xtype: 'textfield',
                        name: 'contactnumber',
                        label: 'Contact Number'
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Submit',
                ui: 'confirm',
                handler: function(){
                    this.up('main').submit();
                }
            }
        ]
    }
});