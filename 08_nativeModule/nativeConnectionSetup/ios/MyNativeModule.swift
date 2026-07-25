//
//  MyNativeModule.swift
//  nativeConnectionSetup
//
//  Created by Chaitanya on 30/03/26.
//

import Foundation
import React
import UIKit

@objc(MyNativeModule)
class MyNativeModule: NSObject {

    @objc
    func showMessage(_ message: String) {
        print(message)
    }

    @objc
    func openNewScreen() {
        DispatchQueue.main.async {
            if let rootVC = UIApplication.shared.keyWindow?.rootViewController {
                let newVC = NewScreenViewController()
                rootVC.present(newVC, animated: true, completion: nil)
            }
        }
    }

    @objc
    static func requiresMainQueueSetup() -> Bool {
        return true
    }
}
