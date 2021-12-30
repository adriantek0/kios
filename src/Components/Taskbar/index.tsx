import { useStore } from 'nanostores/preact'
import { ICONS } from '../../Configs/Taskbar.config'
import { ThemeStore, toggleTheme } from '../../Store/darkMode'
import styles from './taskbar.module.css'
import { TaskBarButton } from './TaskbarButton'
import startMenu from '../../Assets/icons/taskbar/kios.png'
import search_icon from '../../Assets/icons/taskbar/search.png'
import dark_mode_icon from '../../Assets/icons/taskbar/dark_mode.png'
import light_mode_icon from '../../Assets/icons/taskbar/light_mode.png'
import { AppsConfig } from '../../Configs/apps.config'
import { ActionCenter } from './ActionCenter'
import { OpenApps } from '../../Store/activeWindow'
import { toggleStartMenu } from '../../Store/startMenu'

interface Props { }

export const TaskBar = (props: Props) => {
    const theme = useStore(ThemeStore)
    const OpenedApps = useStore(OpenApps)

    return (
        <div className={styles.container}>
            <div className={styles.inner_container}>
                <div className={styles.icons}>
                    <TaskBarButton
                        url={startMenu}
                        name='Start menu'
                        action={toggleStartMenu}
                    />
                    <TaskBarButton
                        url={
                            search_icon
                        }
                        name='Search'
                        action={toggleStartMenu}
                    />
                    {ICONS.map((icon, index) => (
                        <TaskBarButton {...icon} key={index} />
                    ))}
                    {Object.keys(OpenedApps).map((appid) => {
                        let config = OpenedApps[appid]
                        return (
                            config &&
                            (config.pinned || config.isActive) && (
                                <TaskBarButton
                                    name={config.title}
                                    url={config.icon}
                                    appId={appid}
                                />
                            )
                        )
                    })}
                    <TaskBarButton
                        url={
                            theme === 'dark' ? light_mode_icon : dark_mode_icon
                        }
                        name='Dark mode Toggle'
                        action={toggleTheme}
                    />
                </div>
                <ActionCenter />
            </div>
        </div>
    )
}
