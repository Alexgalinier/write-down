(function () {
    'use strict';

    angular
        .module('wrtd.commom')
        .service('PubSubService', PubSubService);

    function PubSubService() {
        var topics = [];

        return {
            publish: publish,
            subscribe: subscribe,
            unsubscribe: unsubscribe
        };

        /* ---------------------
         * Public Functions
         * --------------------- */

        function publish(topicName, data) {
            _.forEach(topics, function(topicObj) {
                if (topicObj.name === topicName) {
                    _.forEach(topicObj.callbacks, function (callback, key) {
                        callback(data);
                    })
                }
            });
        }

        function subscribe(topicName, callback) {
            var token = null;

            _.forEach(topics, function(topicObj) {
                if (topicObj.name === topicName && token === null) {
                    topicObj.callbacks.push(callback);
                    token = topicObj.callbacks.length - 1;
                }
            });

            if (token === null) {
                token = 0;
                topics.push({
                    name: topicName,
                    callbacks: [callback]
                });
            }

            return token;
        }

        function unsubscribe(topicName, token) {
            _.forEach(topics, function(topicObj) {
                if (topicObj.name === topicName) {
                    topicObj.callbacks.splice(token, 1);
                }
            });
        }

        /* ---------------------
         * Private Functions
         * --------------------- */

        // ...
    }
})();
