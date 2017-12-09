import Gatekeeper from 'ember-cli-gatekeeper';

export default Gatekeeper.User.AuthenticatedRoute.extend ({
  model() {
    let currentUser = this.get('currentUser');
    return this.get('store').query("conversation", {id: currentUser.get('email')});
  },

  setupController(controller, model) {
    controller.set('conversations', model);
    controller.set('recipientUsers', []);

    let i;
    for (i = 0; i < controller.get('conversations').content.length; i++) {
      if (controller.get('conversations').objectAtContent(i).get('participants')[1] !== this.get('currentUser').get('email')) {
        controller.get('conversations').objectAtContent(i)['otherUser'] = (this.get ('store').findRecord ('user', controller.get('conversations').objectAtContent(i).get('participants')[1]));
      } else {
        controller.get('conversations').objectAtContent(i)['otherUser'] = (this.get ('store').findRecord ('user', controller.get('conversations').objectAtContent(i).get('participants')[0]));
      }
    }
  }
});
