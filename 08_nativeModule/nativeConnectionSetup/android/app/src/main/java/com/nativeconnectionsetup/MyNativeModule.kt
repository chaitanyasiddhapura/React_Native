package com.nativeconnectionsetup

import android.content.Intent
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class MyNativeModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "MyNativeModule"
    }

    @ReactMethod
    fun showMessage(message: String) {
        println(message)
    }

    @ReactMethod
    fun openNewScreen() {
        val intent = Intent(reactApplicationContext, NewScreenActivity::class.java)
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK) // Required when starting from ReactContext
        reactApplicationContext.startActivity(intent)
    }
}