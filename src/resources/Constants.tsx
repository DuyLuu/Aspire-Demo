import { default as Images } from './images'

export const CardSettingsListInfo = [{
    title: 'Top-up account',
    sub: 'Deposit money to your account to use with card',
    haveSwitch: false,
    icon: Images.Topup,
},
{
    title: 'Weekly spending limit',
    sub: 'Your weekly spending limit is S$ 5,000',
    haveSwitch: true,
    icon: Images.SpendingLimit,
},
{
    title: 'Freeze card',
    sub: 'Your debit card is currently active',
    haveSwitch: true,
    icon: Images.FreezeCard,
},
{
    title: 'Get a new card',
    sub: 'This deactivates your current debit card',
    haveSwitch: false,
    icon: Images.NewCard,
},
{
    title: 'Deactivated cards',
    sub: 'Your previously deactivated cards',
    haveSwitch: false,
    icon: Images.DeactivatedCard,
}]