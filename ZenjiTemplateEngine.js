(function($) {
    $.fn.ZenjiTemplate = function(dataSource){
        var template = $.trim(this.html());
        var loopedTemplatedText = '';
        dataSource.forEach(function (elem) {
            var loopedTemplate = template;
            for(propertyName in elem){
                loopedTemplate = loopedTemplate.replace(new RegExp('_{'+propertyName+'}_','g'), elem[propertyName]);
            }
            loopedTemplatedText += loopedTemplate;
        });
        return $(loopedTemplatedText);
    };
})(jQuery);
