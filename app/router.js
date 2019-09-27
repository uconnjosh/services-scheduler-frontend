import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('services', function() {
    this.route('service',  { path: '/:id' });
  });
  this.route('login');
  this.route('signup');
  this.route('admin', function() {
    this.route('services', function() {
      this.route('new', { path: '/'});
      this.route('service', { path: '/:id'});
    });
  });
});

export default Router;
