import taskmanager from '../Assets/icons/taskbar/taskmanager.png'
import widget from '../Assets/icons/taskbar/Widgets.png'

import { toggleWidgets } from '../Store/widgets'

export interface icon {
    name: string
    url: string
    action?: () => any
}
export const ICONS: icon[] = [
    {
        name: 'Task Manager',
        url: taskmanager,
    },
    {
        name: 'Widgets',
        url: widget,
        action: toggleWidgets,
    },
]
