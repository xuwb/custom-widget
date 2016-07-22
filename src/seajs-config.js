(function() {
    var config = {
        base: '/src',   // 基于调用seajs.use()的页面地址
        alias: {
            'jquery':       'build/jquery',
            'spm-jquery':   'build/jquery',
            'limit2.0':     'build/limit2.0',
            'arale-class':  'class/class',
            'arale-events': 'events/events',
            'arale-base':   'base/base',
			'arale-widget': 'widget/src/widget'
        },
        debug: true,
        chartset: 'utf-8'
    };
    seajs.config(config);

    if(typeof define === 'function') {
        define(function(require, exports, module){
            module.exports = config;
        })
    }
    return config;
})()