import {
    GitHubIcon,
    VideosIcon,
    NotepadIcon,
    PhotosIcon,
    TwitterIcon,
    MyPhoneIcon,
    MusicIcon,
    VSCodeIcon,
} from '../Assets/icons/startmenu'

export type PinnedApp = {
    appId?: string
    title: string
    icon: string
    action?: () => void
    isLink?: boolean
    url?: string
    pinned?: boolean
}
export const PinnedApps: PinnedApp[] = [
    {
        title: 'GitHub',
        icon: GitHubIcon,
        isLink: true,
        url: 'https://github.com/Aidakkk/kios',
    },
    {
        title: 'Twitter',
        icon: TwitterIcon,
        isLink: true,
        url: 'https://twitter.com/FundacioAidak',
    },
    {
        title: 'Notepad',
        icon: NotepadIcon,
    },
    {
        title: 'Photos',
        icon: PhotosIcon,
    },
    {
        title: 'Movies & TV',
        icon: VideosIcon,
    },
    {
        title: 'Code',
        icon: VSCodeIcon,
        appId: 'vscode',
    },
    {
        title: 'Music',
        icon: MusicIcon,
    },
    {
        title: 'Your Phone',
        icon: MyPhoneIcon,
    }
]

export const Apps = PinnedApps.reduce((acc, app) => {
    return (
        !app.appId && {
            ...acc,
            [app.appId || app.title]: {
                ...app,
            },
        }
    )
}, {})
