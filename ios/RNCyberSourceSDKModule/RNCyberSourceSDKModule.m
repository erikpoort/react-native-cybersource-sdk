//
//  RNCyberSourceSDKModule.m
//  RNCyberSourceSDKModule
//
//  Created by Erik Poort on 21/02/2019.
//  Copyright (c) 2019 Erik Poort. All rights reserved.
//

#import "RNCyberSourceSDKModule.h"
#import <TrustDefender/TrustDefender.h>

static NSString *const kRejectCode = @"CyberSourceSDKModule";

@implementation RNCyberSourceSDKModule {
    THMTrustDefender *_defender;
}

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(
    configure:(NSString *)orgId
    serverURL:(NSString *)serverURL
    resolver:(RCTPromiseResolveBlock)resolve
    rejecter:(RCTPromiseRejectBlock)reject
) {
    if (_defender) {
        reject(kRejectCode, @"CyberSource SDK is already initialised", nil);
        return;
    }
    
    _defender = [THMTrustDefender sharedInstance];
    
    @try {
        [_defender configure:@{
            THMOrgID: orgId,
            THMFingerprintServer: serverURL,
        }];
    } @catch (NSException *exception) {
        reject(kRejectCode, @"Invalid parameters", nil);
        return;
    }
    
    resolve(@YES);
}

@end
