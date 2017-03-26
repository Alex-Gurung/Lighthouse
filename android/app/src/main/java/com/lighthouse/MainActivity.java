package com.lighthouse;

import com.facebook.react.ReactActivity;
import com.tkporter.sendsms.SendSMSPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "lighthouse";
    }

    @Override
	public void onActivityResult(int requestCode, int resultCode, Intent data) {
	    //probably some other stuff here
	    SendSMSPackage.getInstance().onActivityResult(requestCode, resultCode, data);
	}
    
}
