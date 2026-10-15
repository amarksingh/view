const pug = require('pug')
class PUG {
    /**
     * constructor method.
     *
     * @param {any} options
     * @returns {any}
     */
    constructor(options: Record<string, any> = {}) {
        this.$options = options
    }
    /**
     * render method.
     *
     * @param {any} content
     * @param {any} data
     * @param {any} cb
     * @returns {any}
     */
    render(content: any, data: Record<string, any> = {}, cb: any) {
        cb(pug.compile(content, this.$options)(data))
    }

}
module.exports = PUG