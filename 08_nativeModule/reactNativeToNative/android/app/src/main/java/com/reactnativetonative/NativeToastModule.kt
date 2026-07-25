package com.nativetoast

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import android.widget.Toast

class NativeToastModule(private val reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "NativeToast"

    @ReactMethod
    fun showToast(message: String) {
        // Ensure UI work happens on main thread
        reactContext.currentActivity?.runOnUiThread {
            Toast.makeText(reactContext, message, Toast.LENGTH_SHORT).show()
        }
    }
}