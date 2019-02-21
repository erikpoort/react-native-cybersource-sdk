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

    private final Application _application;

    RNSalesforceDMPModule(ReactApplicationContext reactContext, Application application) {
        super(reactContext);

        this._application = application;
    }

    @Override
    public String getName() {
        return CYBERSOURCE_SDK;
    }
}
