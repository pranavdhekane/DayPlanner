import { useRef } from "react";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Navbar() {
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

    return (
        <nav
            className={`
            h-[4rem] w-full flex justify-center items-center gap-3 fixed bottom-0 z-30
            md:w-[5vw] md:min-w-fit md:h-screen bg-amber-300 duration-300 ease-in-out p-5 md:static
            md:grid md:grid-cols-1 md:items-stretch
            [&>div]:flex [&>div]:justify-around [&>div]:gap-3
            md:[&>div]:grid md:[&>div]:items-center
            [&>div>Button]:bg-amber-100 [&>div>Button]:text-black [&>div>Button:hover]:bg-amber-500 
            [&>div>Button]:w-10 md:[&>div>Button]:${isWide ? "w-[10rem]" : "w-12"} [&>div>Button]:h-10 md:[&>div>Button]:h-12 [&>div>Button]:relative
      `}
            ref={nav}
        >
            <div>
                <Button
                    onClick={toggleNav}
                    className={`hidden md:flex`}
                >
                    <span
                        className={`absolute transition-opacity duration-0 ease-in-out ${isWide ? "opacity-0" : "opacity-100"}`}
                    >
                        E
                    </span>
                    <span
                        className={`absolute transition-opacity duration-0 ease-in-out ${isWide ? "opacity-100" : "opacity-0"}`}
                    >
                        Expand
                    </span>
                </Button>
            </div>
            <div>
                <Button >
                    <span
                        className={`absolute transition-opacity duration-0 ease-in-out ${isWide ? "opacity-0" : "opacity-100"}`}
                    >
                        R
                    </span>
                    <span
                        className={`absolute transition-opacity duration-0 ease-in-out ${isWide ? "opacity-100" : "opacity-0"}`}
                    >
                        Remaining Tasks
                    </span>
                </Button>
                <Button >
                    <span
                        className={`absolute transition-opacity duration-0 ease-in-out ${isWide ? "opacity-0" : "opacity-100"}`}
                    >
                        C
                    </span>
                    <span
                        className={`absolute transition-opacity duration-0 ease-in-out ${isWide ? "opacity-100" : "opacity-0"}`}
                    >
                        Completed Tasks
                    </span>
                </Button>
                <Button >
                    <span
                        className={`absolute transition-opacity duration-0 ease-in-out ${isWide ? "opacity-0" : "opacity-100"}`}
                    >
                        E
                    </span>
                    <span
                        className={`absolute transition-opacity duration-0 ease-in-out ${isWide ? "opacity-100" : "opacity-0"}`}
                    >
                        Get Email
                    </span>
                </Button>

            </div>
            <div>
                <Button >
                    <span
                        className={`absolute transition-opacity duration-0 ease-in-out ${isWide ? "opacity-0" : "opacity-100"}`}
                    >
                        +
                    </span>
                    <span
                        className={`absolute transition-opacity duration-0 ease-in-out ${isWide ? "opacity-100" : "opacity-0"}`}
                    >
                        Add Task
                    </span>
                </Button>
            </div>
        </nav>
    );
}
