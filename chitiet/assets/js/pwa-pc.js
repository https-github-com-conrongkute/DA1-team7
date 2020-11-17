if ('serviceWorker' in navigator) {   
    navigator.serviceWorker.register('/OneSignalSDKWorker.js?ver=14.33.21.07.2020', {scope: ''}).then(function (reg) {
        if (reg.installing) {
            console.log('Service worker OneSignal installing');
        } else if (reg.waiting) {
            console.log('Service worker OneSignal installed');
        } else if (reg.active) {
            console.log('Service worker OneSignal active');
        }
    }).catch(function (error) {
        // registration failed
        console.log('Service worker OneSignal Registration failed with ' + error);
    });
}