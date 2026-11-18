import { useEffect } from "react"
import { useOutletContext } from "react-router"
export function UsersPage(){
    const {setTitle} = useOutletContext<{setTitle: (title: string) => void}>();
    useEffect(() => {
        setTitle("Usuarios")
    }, [setTitle])
    return (
        <div>
            
        </div>
    )
}