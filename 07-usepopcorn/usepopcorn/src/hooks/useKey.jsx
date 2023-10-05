import { useEffect } from "react"

export function useKey(callback, key) {
    useEffect(() => {
        function action(e) {
            if (e.key.toLowerCase() === key.toLowerCase()) {
                callback()
            }
        }
        document.addEventListener('keydown', action)

        return () => {
            document.removeEventListener('keydown', action)
        }
    }, [callback, key])

}