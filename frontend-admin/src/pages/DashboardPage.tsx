import { useEffect } from "react"
import { useOutletContext } from "react-router"
export function DashboardPage(){
    const {setTitle} = useOutletContext<{setTitle: (title: string) => void}>();
    useEffect(() => {
        setTitle("Dashboard")
    }, [setTitle])
    return (
        <div>
            
        </div>
    )
}