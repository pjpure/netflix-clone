import { useEffect, useState } from 'react'

export const useGetElementFromPoint = (x: number, y: number) => {

    const [element, setElement] = useState<Element | null>(null);

    useEffect(() => {
        function updateElement() {
            setElement(document.elementFromPoint(x, y));
        }

        window.addEventListener('scroll', updateElement)
        updateElement()

        return () => window.removeEventListener('scroll', updateElement)
    }, [x, y])

    return element
}