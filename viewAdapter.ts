const path = require('path')
const ObjectGet = require('lodash.get')
const FileNotFoundException = require('./FileNotFoundException')
const kAdapter = Symbol('adapter')
const kConfig = Symbol('config')
const kCache = Symbol('cache')
const fs = require('fs')
class ViewAdapter {
    /**
     * constructor method.
     *
     * @param {any} adapter
     * @param {any} config
     * @returns {any}
     */
    constructor($adapter, config) {
        this[kAdapter] = $adapter;
        this[kConfig] = config;
        this[kCache] = Object.create(null)
    }
    /**
     * renderFile method.
     *
     * @param {any} file
     * @param {any} data
     * @param {any} cb
     * @returns {any}
     */
    renderFile(file, data, cb) {

        this.readFile(this.applyPathPrefix(file), (err, content) => {
            if (err) return cb(err)
            try {
                this[kAdapter].render(content, data, cb)
            } catch (err) {
                cb(err)
            }
        })
    }
    /**
     * readFile method.
     *
     * @param {any} filename
     * @param {any} cb
     * @returns {any}
     */
    readFile(filename, cb) {
        if (this.getConfig('cache')) {
            if (this[kCache][filename]) {
                return cb(null, this[kCache][filename])
            }
        }
        fs.readFile(filename, 'utf-8', (err, data) => {
            if (this.getConfig('cache')) {

                this[kCache][filename] = data
            }
            cb(err, data)
        })
    }
    /**
     * getConfig method.
     *
     * @param {any} name
     * @returns {any}
     */
    getConfig(name) {
        return ObjectGet(this[kConfig], name, null)
    }

    /**
     * getRootPath method.
     *
     * @returns {any}
     */
    getRootPath() {
        return this[kConfig]['root'] || ''
    }

    /**
     * applyPathPrefix method.
     *
     * @param {any} dest
     * @returns {any}
     */
    applyPathPrefix(dest = '') {
        return this.applyExtension(path.join(this.getRootPath(), dest.replace(/\./g, '/')))
    }

    /**
     * applyExtension method.
     *
     * @param {any} path
     * @returns {any}
     */
    applyExtension(path = '') {
        return path + '.' + (this.getConfig('extension') || this.getConfig('engine'))
    }

}
module.exports = ViewAdapter