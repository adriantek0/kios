import { useStore } from 'nanostores/preact'
import { useRef } from 'preact/hooks'
import useClickOutside from '../../Hooks/useClickOutside'
import {
    hideWidgets,
    ShowWidgetStore,
    toggleWidgets,
} from '../../Store/widgets'
import { SearchBar } from '../StartMenu/SearchBar'
import { WidgetClock } from './Clock'
import { WidgetsContaner } from './Widgets'
import styles from './Widgets.module.css'

export const Widgets = () => {
    const showWidgets = useStore(ShowWidgetStore)
    const WidgetsRef = useRef<HTMLDivElement>()

    useClickOutside(WidgetsRef, () => {
        WidgetsRef.current.classList.add(styles.hide)
        setTimeout(() => {
            WidgetsRef.current.classList.remove(styles.hide)
            hideWidgets()
        }, 150)
    })

    const UserImage = () => (
        <div className={styles.userImage}>
            <img src='https://file.coffee/u/_xa00VvklqEnOl.png' />
        </div>
    )
    return showWidgets ? (
        <div ref={WidgetsRef} class={styles.container}>
            <WidgetClock />
            <UserImage />
            <SearchBar
                placeholder='Type here to search the web'
                className={styles.searchBar}
            />
            <WidgetsContaner />
        </div>
    ) : null
}
