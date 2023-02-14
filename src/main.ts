import JovoWebClientVue, { JovoWebClientVueConfig } from '@jovotech/client-web-vue2';
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use<JovoWebClientVueConfig>(JovoWebClientVue, {
  endpointUrl: process.env.VUE_APP_CLIENT_ENDPOINT_URL || 'http://localhost:3000/webhook',
  config: {
    locale: 'de',
    input: {
      audioRecorder: {
        startDetection: {
          enabled: false,
        },
        silenceDetection: {
          enabled: false,
        },
      },
      speechRecognizer: {
        lang: 'de',
        startDetection: {
          enabled: false,
        },
        silenceDetection: {
          enabled: false,
        },
      },
    },
    output: {
      speechSynthesizer: {
        enabled: true,
        language: 'de',
      },
      reprompts: {
        enabled: false,
      },
    },
    store: {
      shouldPersistSession: false,
    },
  },
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
