import { ControlPanel, RecycleBin, ThisPC } from '../Assets/icons/Desktop'
import { VSCodeIcon } from '../Assets/icons/startmenu'

export interface Item {
    name: string
    action?: () => void
    icon: string
    appId: string
    context_menu_id?: string
}
export const DesktopItems: Item[] = [
    {
        name: 'Computer',
        icon: ThisPC,
        appId: 'this-pc',
        context_menu_id: 'this-pc-ctx-menu',
    },
    {
        name: 'Garbage',
        icon: RecycleBin,
        appId: 'recycle-bin',
        context_menu_id: 'recycle-bin-ctx-menu',
    }
]
