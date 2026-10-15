const nunjucks = require('nunjucks')
class Handlebar {
    /**
     * constructor method.
     *
     * @param {any} options
     * @returns {any}
     */
    constructor(options: Record<string, any> = {}) {
        this.default = {
            noCache: !options['cache'],
            web: {
                useCache: options['cache'],
                async: true
            }

        }
        this.default = { ...this.default,
            ...options
        }
        nunjucks.configure(this.default.path, this.default);
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
        return nunjucks.renderString(content, data, function(err, res) {
            if (err) return cb(err)
            cb(res)
        })
    }

}
module.exports = Handlebar