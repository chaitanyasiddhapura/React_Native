//
//  ToastMessage.swift
//  reactNativeToNative
//
//  Created by Chaitanya on 30/03/26.
//

import Foundation
import UIKit


extension UIViewController {
    
    func showToastMessage(message: String,
                          font: UIFont = .systemFont(ofSize: 12)) {
        
        let toastLabel = UILabel(frame: CGRect(
            x: self.view.frame.size.width / 2 - 75,
            y: self.view.frame.size.height - 100,
            width: 150,
            height: 35
        ))
        
        toastLabel.backgroundColor = UIColor.black.withAlphaComponent(0.6)
        toastLabel.textColor = .white
        toastLabel.font = font
        toastLabel.textAlignment = .center
        toastLabel.text = message
        toastLabel.alpha = 1.0
        toastLabel.layer.cornerRadius = 10
        toastLabel.clipsToBounds = true
        
        self.view.addSubview(toastLabel)
        
        UIView.animate(withDuration: 4.0,
                       delay: 0.1,
                       options: .curveEaseOut,
                       animations: {
            toastLabel.alpha = 0.0
        }) { _ in
            toastLabel.removeFromSuperview()
        }
    }
}


extension UIApplication {
    
    func topViewController(base: UIViewController? = nil) -> UIViewController? {
        
        let baseVC = base ?? self.connectedScenes
            .compactMap { ($0 as? UIWindowScene)?.keyWindow }
            .first?.rootViewController
        
        if let nav = baseVC as? UINavigationController {
            return topViewController(base: nav.visibleViewController)
        }
        
        if let tab = baseVC as? UITabBarController {
            return topViewController(base: tab.selectedViewController)
        }
        
        if let presented = baseVC?.presentedViewController {
            return topViewController(base: presented)
        }
        
        return baseVC
    }
}

@objc(ToastMessage)
class ToastMessage: NSObject {

    @objc
    func showToast() {
        DispatchQueue.main.async {
            if let topVC = UIApplication.shared.topViewController() {
                topVC.showToastMessage(message: "Hello from IOS!")
            }
        }
    }
}

