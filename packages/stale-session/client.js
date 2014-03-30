//
// Client side activity detection for the session timeout
// - depends on jquery
//
// Meteor settings:
// - staleSessionHeartbeatInterval: interval (in ms) at which activity heartbeats are sent up to the server
// - staleSessionActivityEvents: the jquery events which are considered indicator of activity e.g. in an on() call.
//
var heartbeatInterval = Meteor.settings && Meteor.settings.public && Meteor.settings.public.staleSessionHeartbeatInterval || (1*60*1000); // 1min
var activityEvents = Meteor.settings && Meteor.settings.public && Meteor.settings.public.staleSessionActivityEvents || 'mousemove click keydown';

activityDetected = false;

//
// periodically send a heartbeat if activity has been detected within the interval
//
Meteor.setInterval(function() {
    if (Meteor.userId()) {
        Meteor.call('heartbeat', activityDetected);
        activityDetected = false;
    }
}, heartbeatInterval);

//
// detect activity and mark it as detected on any of the following events
//
Meteor.startup(function() {
    $('body').on(activityEvents, function() {
       activityDetected = true;
    });
});
