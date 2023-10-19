var helpers = {
    fireTraffic: function() {
        if (window.mParticle && window.mParticle.Identity) {
            var currentUser = window.mParticle.Identity.getCurrentUser();
            if (currentUser) {
                var userIdentities = currentUser.getUserIdentities();
                if (currentUser.getMPID() && userIdentities && ! userIdentities.email) {
                    var oir = window._oirtrk || [];
                    window._oirtrk = oir;
                    window._oirtrk.push(['track', 'on-site', {MPID: currentUser.getMPID()}]);
                }
            }
        }
    },
};

module.exports = helpers;
