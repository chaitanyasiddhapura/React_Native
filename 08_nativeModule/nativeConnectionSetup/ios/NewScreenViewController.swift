//
//  NewScreenViewController.swift
//  nativeConnectionSetup
//
//  Created by Chaitanya on 30/03/26.
//

import UIKit

class NewScreenViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

        view.backgroundColor = .white

        let label = UILabel()
        label.text = "Welcome to the New Screen!"
        label.font = UIFont.systemFont(ofSize: 24)
        label.textColor = .black
        label.textAlignment = .center
        label.translatesAutoresizingMaskIntoConstraints = false

        view.addSubview(label)

        NSLayoutConstraint.activate([
            label.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            label.centerYAnchor.constraint(equalTo: view.centerYAnchor)
        ])
    }
}
