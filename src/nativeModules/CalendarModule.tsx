import { NativeModules } from 'react-native'
const { CalendarModule } = NativeModules

const { DEFAULT_EVENT_NAME } = CalendarModule.getConstants()

interface CalendarInterface {
    createCalendarEvent(name: string, location: string): void;
}
console.log('=== DEFAULT_EVENT_NAME', DEFAULT_EVENT_NAME)
export default CalendarModule as CalendarInterface
