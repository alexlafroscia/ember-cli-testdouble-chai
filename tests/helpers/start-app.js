import Ember from 'ember';
import Application from '../../app';
import config from '../../config/environment';

const { assign } = Ember;

export default function startApp(attrs) {
  let application;
  const attributes = assign({}, config.APP, attrs);

  Ember.run(() => {
    application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
  });

  return application;
}
