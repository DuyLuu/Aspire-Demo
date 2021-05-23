//
//  RCTCalendarModule.m
//  AspireDemo
//
//  Created by Bui Duy Luu on 17/05/2021.
//

#import <Foundation/Foundation.h>
#import <React/RCTLog.h>
#import "RCTCalendarModule.h"

@implementation RCTCalendarModule

RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location)
{
 RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE();

- (dispatch_queue_t)methodQueue {
  return dispatch_get_main_queue(); // use main thread only iOS API.
}

- (NSDictionary *)constantsToExport {
  return @{@"DEFAULT_EVENT_NAME": @"Luu event"};
}

+ (BOOL)requiresMainQueueSetup {
  return YES;
}

@end
