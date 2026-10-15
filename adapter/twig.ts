const twig = require('twig')
class Twig {
    /**
     * constructor method.
     *
     * @param {any} options
     * @returns {any}
     */
    constructor(options: Record<string, any> = {}) {
        this.$options = options;
        this.$options.base = options.path;
        twig.cache(this.$options['cache'])

    }
    /**
     * render method.
     *
     * @param {any} string
     * @param {any} data
     * @param {any} cb
     * @returns {any}
     */
    render(string: any, data: Record<string, any> = {}, cb: any) {
        twig.twig({ data: string, ...this.$options }).renderAsync(data).then(function(res) {
            cb(res)
        }, cb)
    }

}
module.exports = Twig