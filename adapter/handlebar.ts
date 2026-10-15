const handlebars = require('handlebars')
class Handlebar {
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
    render(content, data = {},cb) {
        cb(handlebars.compile(content)(data))
    }

}
module.exports = Handlebar