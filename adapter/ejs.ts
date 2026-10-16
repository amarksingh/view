import ejs from 'ejs'
class EJS {
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
        cb(ejs.render(content, data, this.$options))
    }

}
export default EJS;