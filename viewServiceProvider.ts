const ServiceProvider = require('@ostro/support/serviceProvider');
const ViewManager = require('./viewManager')
class ViewServiceProvider extends ServiceProvider {

    /**
     * register method.
     *
     * @returns {any}
     */
    register() {
        this.$app.singleton('view', function(app) {
            return new ViewManager(app)
        })
    }
    /**
     * boot method.
     *
     * @returns {any}
     */
    boot() {}

}
module.exports = ViewServiceProvider