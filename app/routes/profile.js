import Gatekeeper from 'ember-cli-gatekeeper';

export default Gatekeeper.User.AuthenticatedRoute.extend ({
    model () {
    let currentUser = this.get ('currentUser');
    alert(currentUser.get('username'));
    //return this.get ('store').query ('account', {user: currentUser.id});
  }
});
