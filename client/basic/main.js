
define(['jquery', 'underscore', 'backbone', 'stickit', 'paginator'], function($, _, Backbone, stickit, paginator){

    var DocView = Backbone.View.extend({
        binds: {
            '[data-field]': {
                observe: '*',
                update: function($el, attr, model){
                    $el = $('[data-field =')
                }
            },
            '.edit[data-field]': {
                observe: '*',
                getVal: function($el, attr, model){
                    var field = $el.data('field');
                    var value = $el.html();
                    model.set(field, value);
                }
            }
        },
        initialize: function($el){
            var docName = this.docName = $el.data('doc');

            this.doc = bootstrapData[docName];
            this.model = new DocModel(null, docName);
        },
        render: function(opts){
            $('[data-field]').each(function($el, index){
                var fieldName = $el.data('field');
                var selector = '[data-field='+ fieldName +']';
                this.addBinding(null, selector, fieldName);  
            });
        }
    });

    var PageView = Backbone.View.extend({
        render: function(opts){
            $('[data-doc]').each(function(index, $el){
                var doc = new DocView($el).render();
            });
        }
    });
    
});
