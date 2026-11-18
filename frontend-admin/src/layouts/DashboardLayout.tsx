import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Outlet } from "react-router"
import { useState} from "react"
export function DashboardLayout(){
    const [title, setTitle] = useState("")
    return (
        <SidebarProvider defaultOpen={false}>
            <AppSidebar />
            <main className="w-full">
                <header className="w-full bg-sky-950 h-16 p-4">
                    <div className="h-full flex items-center justify-between">
                        <h1 className="text-white text-2xl font-bold">{title}</h1>
                    </div>
                </header>
                <Outlet context={{ title, setTitle }}/>
            </main>
        </SidebarProvider>
    )
}