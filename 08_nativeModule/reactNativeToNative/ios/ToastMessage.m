//
//  ToastMessage.m
//  reactNativeToNative
//
//  Created by Chaitanya on 30/03/26.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

//@interface RCT_EXTERN_MODULE(ToastMessage, NSObject)
//
//RCT_EXTERN_METHOD(showToast: (RCTResponseSenderBlock)callback)
//
//@end

@interface RCT_EXTERN_MODULE(ToastMessage, NSObject)
RCT_EXTERN_METHOD(showToast)
@end
