import Gatekeeper from 'ember-cli-gatekeeper';

export default Gatekeeper.User.AuthenticatedRoute.extend ({
    model () {
    let currentUser = this.get ('currentUser');
    alert(currentUser.get('username'));
    return this.get ('store').findRecord ('user', currentUser.get('email'));
  },

  setupController(controller, model) {
    controller.set('user', model);
    this.store.findAll('project').then(function (projects) {
      controller.set('projects', projects);
    });
  }
});



