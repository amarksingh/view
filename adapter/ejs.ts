const ejs = require('ejs')
class EJS {
    /**
     * constructor method.
     *
     * @param {any} options
     * @returns {any}
     */
    constructor(options = {}) {
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
    render(content, data = {}, cb) {
        cb(ejs.render(content, data, this.$options))
    }

}
module.exports = EJS