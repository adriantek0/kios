import styles from './Desktop.module.css'
import { lazy, Suspense } from 'preact/compat'
import { useEffect, useRef } from 'preact/hooks'
import { TaskBar } from '../../Components/Taskbar/'
import StartUpSound from '../../Assets/startup.mp3'
import { WindowArea } from '../../Components/WindowArea'
import { DesktopItems } from '../../Components/DesktopItems'
import { defaultContextMenuConfig } from '../../Configs/ContextMenus/default.config'

const ContextMenu = lazy(() =>
    import('../../Components/ContextMenu').then(({ ContextMenu }) => ({
        default: ContextMenu,
    }))
)

const Startmenu = lazy(() =>
    import('../../Components/StartMenu').then(({ Startmenu }) => ({
        default: Startmenu,
    }))
)
const Widgets = lazy(() =>
    import('../../Components/Widgets').then(({ Widgets }) => ({
        default: Widgets,
    }))
)
const NotificationPanel = lazy(() =>
    import('../../Components/Taskbar/ActionCenter/NotificationPanel').then(
        ({ NotificationPanel }) => ({
            default: NotificationPanel,
        })
    )
)

interface Props {}

export const Desktop = (props: Props) => {
    const ContainerRef = useRef<HTMLDivElement>()

    return (
        <div class={styles.container} ref={ContainerRef}>
            <DesktopItems />
            <WindowArea />
            <Suspense fallback={<span></span>}>
                <ContextMenu
                    items={defaultContextMenuConfig}
                    containerRef={ContainerRef}
                />
                <Widgets />
                <Startmenu />
                <NotificationPanel />
            </Suspense>
            <TaskBar />
            <audio
                hidden
                autoPlay={import.meta.env.PROD}
                src={StartUpSound}
            ></audio>
        </div>
    )
}
