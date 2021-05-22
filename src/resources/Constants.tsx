import { default as Images } from './images'
import * as Enums from './Enums'

export const CardSettingsListInfo = [{
    type: Enums.CardActionType.TOP_UP_ACCOUNT,
    title: 'Top-up account',
    sub: 'Deposit money to your account to use with card',
    haveSwitch: false,
    icon: Images.Topup
},
{
    type: Enums.CardActionType.SPENDING_LIMIT,
    title: 'Weekly spending limit',
    sub: 'Your weekly spending limit is S$ 5,000',
    haveSwitch: true,
    icon: Images.SpendingLimit
},
{
    type: Enums.CardActionType.FREEZE,
    title: 'Freeze card',
    sub: 'Your debit card is currently active',
    haveSwitch: true,
    icon: Images.FreezeCard
},
{
    type: Enums.CardActionType.NEW_CARD,
    title: 'Get a new card',
    sub: 'This deactivates your current debit card',
    haveSwitch: false,
    icon: Images.NewCard
},
{
    type: Enums.CardActionType.DEACTIVATED,
    title: 'Deactivated cards',
    sub: 'Your previously deactivated cards',
    haveSwitch: false,
    icon: Images.DeactivatedCard
}]

export const ListSpendingLimit = [
    '5,000',
    '10,000',
    '20,000'
]
