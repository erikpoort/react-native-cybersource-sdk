package nl.erikpoort.rncybersourcesdk;

import android.app.Application;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

/**
 * Created by erik on 21/02/2019.
 * Erik Poort 2019
 */

class RNCyberSourceSDKModule extends ReactContextBaseJavaModule {
    private static final String CYBERSOURCE_SDK = "RNCyberSourceSDKModule";

    RNCyberSourceSDKModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return CYBERSOURCE_SDK;
    }
}
