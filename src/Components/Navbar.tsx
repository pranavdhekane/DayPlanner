import { useRef } from "react"

export default function Navbar() {
    const menu = useRef<HTMLElement>(null);

    const toggleMenu = () => {
        if(menu.current){
            menu.current.classList.toggle('hidden')
        }
    }

    return (
        <nav className="text-4xl py-4 flex justify-around bg-yellow-300 text-lime-500 relative">
            DailyPlanner
            <button className="font-bold" onClick={toggleMenu}>
                ?
            </button>
            <menu ref={menu} className="bg-amber-500 fixed top-0 right-0 h-screen w-[70vw] hidden">
                
                <button className="font-bold" onClick={toggleMenu}>
                ?
                </button>
            </menu>
        </nav>
    )
}