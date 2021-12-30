import { RefObject } from 'preact'
import { useEffect, useCallback, useState } from 'preact/hooks'

export const useContextMenu = <T extends HTMLElement>(
    outerRef: RefObject<T>,
    contextMenuRef: RefObject<T>
) => {
    const [xPos, setXPos] = useState('0px')
    const [yPos, setYPos] = useState('0px')
    const [transformOrigin, setTransformOrigin] = useState({
        x: 'top',
        y: 'left',
    })

    const [targetEleId, setTargetEleId] = useState('')

    const [isMenuVisible, setIsMenuVisible] = useState(false)

    const handleContextMenu = useCallback((event: MouseEvent) => {
        event.preventDefault()

        if (!outerRef.current?.contains(event.target as HTMLElement))
            return setIsMenuVisible(false)

        let x = event.pageX
        let y = event.pageY

        let transformOrigin_x = 'top'
        let transformOrigin_y = 'left'

        if (window.innerWidth - x < 220) {
            x -= 220
            transformOrigin_y = 'right'
        }

        if (window.innerHeight - y < 300) {
            y -= 250
            transformOrigin_x = 'bottom'
        }

        setXPos(`${x}px`)
        setYPos(`${y}px`)
        setTransformOrigin({
            x: transformOrigin_x,
            y: transformOrigin_y,
        })

        setTargetEleId((event.target as HTMLElement).id)
        setIsMenuVisible(true)

        return
    }, [])

    const handleClick = () => setIsMenuVisible(false)

    useEffect(() => {
        document.addEventListener('click', handleClick)
        document.addEventListener('contextmenu', handleContextMenu)

        return () => {
            document.removeEventListener('click', handleClick)
            document.removeEventListener('contextmenu', handleContextMenu)
        }
    }, [])

    return {
        xPos,
        yPos,
        isMenuVisible,
        setIsMenuVisible,
        transformOrigin,
        targetEleId,
    }
}
