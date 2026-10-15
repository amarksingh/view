require('@ostro/support/helpers')
const ViewAdapter = require('./viewAdapter')
const InvalidArgumentException = require('./InvalidArgumentException')
const ErrorBag = require('@ostro/support/errorBag')
const Input = require('@ostro/support/input')
const Manager = require('@ostro/support/manager')

class ViewManager extends Manager {

    /**
     * $type property.
     * @type {any}
     */
    $type = 'view';

    /**
     * engine method.
     *
     * @param {any} name
     * @returns {any}
     */
    engine(name: any = null) {
        return this.driver(name)
    }

    /**
     * resolve method.
     *
     * @param {any} name
     * @returns {any}
     */
    resolve($name: string) {
        var config = this.getConfig($name);
        if (!config) {
            throw new InvalidArgumentException("Engine [{" + $name + "}] was not available.");
        }
        if (typeof config['options'] != 'object') {
            config['options'] = {}
        }
        config['options']['path'] = config['root']
        config['driver'] = config['driver'] || $name;
        return super.resolve($name, config)
    }


    /**
     * createTwigDriver method.
     *
     * @param {any} config
     * @returns {any}
     */
    createTwigDriver($config: Record<string, any>) {
        return this.adapt(new(require('./adapter/twig'))($config['options']), $config);
    }

    /**
     * createEjsDriver method.
     *
     * @param {any} config
     * @returns {any}
     */
    createEjsDriver($config: Record<string, any>) {
        return this.adapt(new(require('./adapter/ejs'))($config['options']), $config);
    }

    /**
     * createPugDriver method.
     *
     * @param {any} config
     * @returns {any}
     */
    createPugDriver($config: Record<string, any>) {
        return this.adapt(new(require('./adapter/pug'))($config['options']), $config);
    }

    /**
     * createNunjucksDriver method.
     *
     * @param {any} config
     * @returns {any}
     */
    createNunjucksDriver($config: Record<string, any>) {
        return this.adapt(new(require('./adapter/nunjucks'))($config['options']), $config);
    }

    /**
     * createHandlebarDriver method.
     *
     * @param {any} config
     * @returns {any}
     */
    createHandlebarDriver($config: Record<string, any>) {
        return this.adapt(new(require('./adapter/handlebar'))($config['options']), $config);
    }

    /**
     * adapt method.
     *
     * @param {any} adapter
     * @param {any} config
     * @returns {any}
     */
    adapt(adapter: any, config: Record<string, any>) {
        return new ViewAdapter(adapter, config);
    }

    /**
     * getConfig method.
     *
     * @param {any} name
     * @returns {any}
     */
    getConfig(name: string) {
        return super.getConfig(`engines.${name}`);
    }

    /**
     * getDefaultDriver method.
     *
     * @returns {any}
     */
    getDefaultDriver() {
        return this.getDefaultEngine();
    }

    /**
     * getDefaultEngine method.
     *
     * @returns {any}
     */
    getDefaultEngine() {
        return super.getConfig('default');
    }

}

module.exports = ViewManager