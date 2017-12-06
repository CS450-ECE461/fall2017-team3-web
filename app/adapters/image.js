import ApplicationAdapter from './application';
import FormDataAdapterMixin from 'ember-cli-form-data/mixins/form-data-adapter';

export default ApplicationAdapter.extend (FormDataAdapterMixin, {
    // FormDataAdapterMixin will give the image model the 'file' attribute
});
