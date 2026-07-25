package com.nativeconnectionsetup

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import android.widget.TextView

class NewScreenActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val textView = TextView(this)
        textView.text = "Welcome to the New Screen!"
        textView.textSize = 24f
        textView.setPadding(50, 200, 50, 50)

        setContentView(textView)
    }
}