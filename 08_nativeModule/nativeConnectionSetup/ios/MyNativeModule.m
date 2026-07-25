//
//  MyNativeModule.m
//  nativeConnectionSetup
//
//  Created by Chaitanya on 30/03/26.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>


@interface RCT_EXTERN_MODULE(MyNativeModule, NSObject)
RCT_EXTERN_METHOD(showMessage: (NSString *) message)
RCT_EXTERN_METHOD(openNewScreen)
RCT_EXTERN_METHOD(requiresMainQueueSetup)

@end


