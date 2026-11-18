import { useEffect } from "react"
import { useOutletContext } from "react-router"
export function ProductsPage(){
    const {setTitle} = useOutletContext<{setTitle: (title: string) => void}>();
    useEffect(() => {
        setTitle("Productos")
    }, [setTitle])
    return (
        <div>
            
        </div>
    )
}