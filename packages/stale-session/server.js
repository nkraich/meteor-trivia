//
// Server side activity detection for the session timeout
//
// Meteor settings:
// - staleSessionInactivityTimeout: the amount of time (in ms) after which, if no activity is noticed, a session will be considered stale
// - staleSessionPurgeInterval: interval (in ms) at which stale sessions are purged i.e. found and forcibly logged out
//
var staleSessionPurgeInterval = Meteor.settings && Meteor.settings.public && Meteor.settings.public.staleSessionPurgeInterval || (1*60*1000); // 1min
var awayTimeout = Meteor.settings && Meteor.settings.public && Meteor.settings.public.staleSessionInactivityTimeout || (1*60*1000); // 2mins
var quitTimeout = Meteor.settings && Meteor.settings.public && Meteor.settings.public.staleSessionInactivityTimeout || (10*60*1000); // 10mins

//
// provide a user activity heartbeat method which stamps the user record with a timestamp of the last
// received activity heartbeat.
//
Meteor.methods({
    heartbeat: function(activityDetected) {
        if (!this.userId) { return; }
        var user = Meteor.users.findOne(this.userId);
        if (user) {
            Meteor.users.update(user._id, {$set: {heartbeat: new Date(), away: false}});
        }
    }
});


//
// periodically purge any stale sessions, removing their login tokens and clearing out the stale heartbeat.
//
Meteor.setInterval(function() {
    var now = new Date();
    var awayTimestamp = new Date(now-awayTimeout);
    var quitTimestamp = new Date(now-quitTimeout);

    // Remove anything with an expired heartbeat.
    Meteor.users.update({heartbeat: {$lt: quitTimestamp}},
                        {$set: {'services.resume.loginTokens': []},
                         $unset: {heartbeat:1},
                         $unset: {username:1}},
                        {multi: true});

    // Set away status if semi-expired.
    Meteor.users.update({heartbeat: {$lt: awayTimestamp}},
                        {$set: {away: true}},
                        {multi: true});

    // Remove anything without a heartbeat at all.
    Meteor.users.update({heartbeat: {$exists: false}},
                        {$set: {'services.resume.loginTokens': []},
                         $unset: {username:1}},
                        {multi: true});

}, staleSessionPurgeInterval);
