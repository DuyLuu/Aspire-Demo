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

@end
