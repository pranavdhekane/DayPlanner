import { useRef } from "react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Mail, ListChecks, XCircle, Menu, Plus, X, Info, Home } from "lucide-react";
import { Link } from 'react-router-dom';

interface NavbarProps {
    scrollToHero: () => void;
    scrollToAllTasks: () => void;
    scrollToTasksDone: () => void;
    scrollToAddTask: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
    scrollToHero,
    scrollToAllTasks,
    scrollToTasksDone,
    scrollToAddTask,
}) => {
    const [isWide, setIsWide] = useState<boolean>(false);

    const nav = useRef<HTMLElement>(null);
    const toggleNav = () => {
        if (nav.current) {
            const currentWidth = nav.current.classList.contains("md:w-[5vw]");
            if (currentWidth) {
                nav.current.classList.add("md:w-[18vw]");
                nav.current.classList.remove("md:w-[5vw]");
                setIsWide(true);
            } else {
                nav.current.classList.add("md:w-[5vw]");
                nav.current.classList.remove("md:w-[18vw]");
                setIsWide(false);
            }
        }
    };

    const btnStyle = `
        bg-amber-100 text-black hover:bg-amber-500 h-9 md:h-12 w-9 ${isWide ? 'md:w-[10rem]' : 'md:w-12'} hover:text-white
    `;

    return (
        <nav
            className={`
            h-[4rem] w-full flex justify-center items-center gap-3 fixed bottom-0 z-30
            md:w-[5vw] md:min-w-fit md:h-screen bg-amber-300 duration-300 ease-in-out p-5 md:static
            md:grid md:grid-cols-1 md:content-evenly
            md:[&>div]:grid md:[&>div]:place-items-center
            `}
            ref={nav}
        >
            <div className="hidden">
                <Button
                    onClick={toggleNav}
                    className={`hidden md:flex` + btnStyle}
                >
                    {isWide ? <X /> : <Menu  />}
                </Button>
            </div>
            <div className="flex justify-center items-center gap-3">
                <Link to="/">
                    <Button onClick={scrollToHero} className={btnStyle} title="Home">
                        {isWide ? 'Home' : <Home />}
                    </Button>
                </Link>
                <Link to="/about">
                    <Button className={btnStyle} title="Get Info">
                        {isWide ? 'Get Info' : <Info />}
                    </Button>
                </Link>
            </div>
            <div className="flex justify-center items-center gap-3">
                <Button onClick={scrollToAllTasks} className={btnStyle} title="Remaining Tasks">
                    {isWide ? 'Remaining Tasks' : <XCircle />}
                </Button>
                <Button onClick={scrollToTasksDone} className={btnStyle} title="Completed Tasks">
                    {isWide ? 'Completed Tasks' : <ListChecks />}
                </Button>
                <Button className={btnStyle} title="Get Email">
                    {isWide ? 'Get Email' : <Mail />}
                </Button>
                <Button onClick={scrollToAddTask} className={btnStyle}>
                    <Plus />
                </Button>
            </div>
        </nav>
    );
}


export default Navbar;