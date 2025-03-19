import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllTasks from "./Components/AllTasks";
import UseEmailHandler from "@/Components/UserEmailHandler";
import Navbar from './Components/Navbar';
import SeeResult from "./Components/SeeResult";
import Hero from "./Components/Hero";
import TasksDone from "./Components/TasksDone";
import { TaskProvider } from "./Components/TaskManager";
import AddTask from "./Components/AddTask";
import Info from "./Components/Info";
import Footer from './Components/Footer';

const App = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const allTasksRef = useRef<HTMLDivElement | null>(null);
  const tasksDoneRef = useRef<HTMLDivElement | null>(null);
  const addTaskRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement | null>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollBarStyle = `
    [&::-webkit-scrollbar]:w-2
    [&::-webkit-scrollbar-track]:rounded-full
    [&::-webkit-scrollbar-track]:bg-gray-100
    [&::-webkit-scrollbar-thumb]:rounded-full
    [&::-webkit-scrollbar-thumb]:bg-gray-300
    dark:[&::-webkit-scrollbar-track]:bg-neutral-700
    dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
  `;

  return (
    <Router>
      <TaskProvider>
        <div className="md:flex md:h-screen md:overflow-hidden md:justify-between">
          {/* Navbar with links to routes */}
          <Navbar
            scrollToHero={() => scrollToSection(heroRef)}
            scrollToAllTasks={() => scrollToSection(allTasksRef)}
            scrollToTasksDone={() => scrollToSection(tasksDoneRef)}
            scrollToAddTask={() => scrollToSection(addTaskRef)}
          />

          {/* Main Content Area */}
          <div
            className={`
              w-full h-auto md:overflow-y-auto`+ scrollBarStyle}
          >
            {/* Routes for the main content */}
            <Routes>
              {/* Route for the main page */}
              <Route path="/" element={
                <>
                  <div ref={heroRef} id='hero'><Hero /></div>
                  <div ref={allTasksRef}><AllTasks /></div>
                  <div ref={tasksDoneRef}><TasksDone /></div>
                  <div ref={addTaskRef} id='addTask'><AddTask /></div>
                  <div className='hidden md:block'><Footer /></div>
                </>
              } />

              {/* Route for About section */}
              <Route path="/about" element={<Info />} />
            </Routes>
          </div>

          {/* Sidebar Section */}
          <div
            className={`
              h-auto mb-[4rem] bg-yellow-200 flex flex-col-reverse
              md:w-[50vw] md:h-screen md:overflow-y-scroll md:flex-col
            `+ scrollBarStyle}
          >
            <Routes>
              <Route path='/' element={
                <>
                  <div className='md:hidden block'><Footer /></div>
                  <UseEmailHandler />
                  <SeeResult />
                </>
              }/>
              <Route path='/about' element={
                <></>
              }/>
            </Routes>
          </div>
        </div>
      </TaskProvider>
    </Router>
  );
};

export default App;
