import file_explorer from '../Assets/icons/taskbar/file_explorer.png'
import {
    MSEdgeIcon,
    MSStoreIcon,
    VSCodeIcon,
} from '../Assets/icons/startmenu'
import { ControlPanel, RecycleBin, ThisPC } from '../Assets/icons/Desktop'
import { Apps } from './startMenu.config'
import { VsCodeApp } from '../Apps'

export type App = {
    [key: string]: {
        title: string
        isActive: boolean
        icon: string
        pinned?: boolean
        Component?: any
        height?: number
        width?: number
    }
}

export const AppsConfig: App = {
    browser: {
        title: 'Aidak Browser',
        isActive: false,
        icon: MSEdgeIcon,
        pinned: true,
    },
    'file-explorer': {
        title: 'File Explorer',
        isActive: false,
        icon: file_explorer,
        pinned: true,
    },
    software: {
        title: 'kiOS Software',
        isActive: false,
        icon: MSStoreIcon,
        pinned: true,
    },
    'this-pc': {
        title: 'Computer',
        isActive: false,
        icon: ThisPC,
    },
    'recycle-bin': {
        title: 'Garbage',
        isActive: false,
        icon: RecycleBin,
    },
    'control-panel': {
        title: 'Control Panel',
        isActive: false,
        icon: ControlPanel,
    },
    vscode: {
        title: 'Visual Studio Code',
        isActive: false,
        icon: VSCodeIcon,
        Component: VsCodeApp,
        height: 500,
        width: 800,
    },
    ...Apps,
} as const
