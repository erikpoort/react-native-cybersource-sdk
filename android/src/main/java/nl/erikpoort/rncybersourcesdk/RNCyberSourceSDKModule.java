package nl.erikpoort.rncybersourcesdk;

import android.app.Application;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.Promise;

import com.threatmetrix.TrustDefender.Config;
import com.threatmetrix.TrustDefender.EndNotifier;
import com.threatmetrix.TrustDefender.ProfilingOptions;
import com.threatmetrix.TrustDefender.Profile;
import com.threatmetrix.TrustDefender.TrustDefender;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by erik on 21/02/2019.
 * Erik Poort 2019
 */

class RNCyberSourceSDKModule extends ReactContextBaseJavaModule {
    private static final String CYBERSOURCE_SDK = "RNCyberSourceSDKModule";

    private final Application _application;
    private TrustDefender _defender = null;

    RNCyberSourceSDKModule(ReactApplicationContext reactContext, Application application) {
        super(reactContext);
        _application = application;
    }

    @Override
    public String getName() {
        return CYBERSOURCE_SDK;
    }

    @ReactMethod
    public void configure(final String orgId, final String serverURL, final Promise promise) {
        if (_defender != null) {
            promise.reject(CYBERSOURCE_SDK, "CyberSource SDK is already initialised");
            return;
        }

        _defender = TrustDefender.getInstance();

        try {
            Config config = new Config()
                    .setOrgId(orgId)
                    .setFPServer(serverURL)
                    .setContext(_application);
            _defender.init(config);
        } catch (IllegalArgumentException exception) {
            promise.reject(CYBERSOURCE_SDK, "Invalid parameters");
        }

        promise.resolve(true);
    }

    @ReactMethod
    public void profileRequest(final ReadableArray attributes, final Promise promise) {
        if (_defender == null) {
            promise.reject(CYBERSOURCE_SDK, "CyberSource SDK is not yet initialised");
            return;
        }

        List<String> list = new ArrayList<String>();

        int leni = attributes.size();
        for (int i = 0; i < leni; ++i) {
            String value = attributes.getString(i);
            if (value != null) {
                list.add(value);
            }
        }

        ProfilingOptions options = new ProfilingOptions();//.setCustomAttributes(list);
        TrustDefender.getInstance().doProfileRequest(options, new CompletionNotifier(promise));
    }

    private class CompletionNotifier implements EndNotifier {
        private final Promise _promise;

        CompletionNotifier(Promise promise) {
            super();
            _promise = promise;
        }

        @Override
        public void complete(Profile.Result result) {
            _promise.resolve(result.getStatus());
        }
    }
}

