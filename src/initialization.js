var helpers = require('./helpers');

var initialization = {
    name: 'Opensend',
    initForwarder: function(forwarderSettings, testMode, userAttributes, userIdentities, processEvent, eventQueue, isInitialized, common, appVersion, appName, customFlags, clientId) {
        var clientScript = document.createElement('script');
        clientScript.type = 'text/javascript';
        clientScript.async = true;
        clientScript.src = 'https://cdn.aggle.net/oir/oir.min.js';
        clientScript.setAttribute('oirtyp',forwarderSettings.type);
        clientScript.setAttribute('oirid', forwarderSettings.integrationId);
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(clientScript);

        helpers.fireTraffic();
    }
};

module.exports = initialization;
