
define(['jquery', 'underscore', 'backbone', 'stickit', 'paginator'], function($, _, Backbone, stickit, paginator){

    var DocView = Backbone.View.extend({
        binds: {
            '[data-doc] [data-field]': {
                observe: '*'
                onGet: function($el, attr, model){
                    var field = $el.data('field');
                    return model.get(field);
                }
            }
        }
    });

/* ToDo: instead of binding, building all block views with their models on render */
    var PageView = Backbone.View.extend({
        binds: {
            '[data-doc]': {
                observe: 'docs',
                update: function($el, attr, model){
                    var docName = $el.data('doc');
                    var doc = attr[docName];
                    var view = this.docViews[doc].render(attr);
                }
            }
        }
        render: function(opts){
            $('[data-doc]').each(function(index, $el){
                $()
            });
        }
    });
    
});
