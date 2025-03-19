import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faClock, faTasks } from "@fortawesome/free-solid-svg-icons";

const Info = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10">
      <h1 className="text-3xl font-bold text-center mb-6">Day Planner</h1>

      <p className="text-lg text-gray-700 text-center">
        Ever feel like your day just slips away without getting things done? <b>Day Planner</b> is here to help!  
        It’s a simple, no-fuss way to organize your daily tasks and stay on top of everything.
      </p>

      <div className="mt-8 space-y-6">
        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faTasks} className="text-blue-500 text-2xl" />
          <p className="text-lg">
            <b>Effortless Task Management</b> – Jot down everything you need to do for the day, all in one place.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faClock} className="text-green-500 text-2xl" />
          <p className="text-lg">
            <b>Auto-Clear at Midnight</b> – Every day is a fresh start! Tasks are cleared at midnight automatically.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faEnvelope} className="text-red-500 text-2xl" />
          <p className="text-lg">
            <b>One-Click Email Summary</b> – Receive a summary of your planned activities straight to your inbox.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">🛠 Tech Stack</h2>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
          <li><b>Frontend:</b> React + TypeScript + Vite + Tailwind CSS</li>
          <li><b>Local Storage:</b> Saves tasks locally—no backend needed.</li>
          <li><b>Email Integration:</b> Uses a third-party API for email summaries.</li>
          <li><b>Shadcn Charts:</b> Displays activity trends visually.</li>
          <li><b>FontAwesome & Lucide Icons:</b> Enhances the user experience.</li>
          <li><b>ChatGPT Assistance:</b> Helped in refining ideas and troubleshooting during development.</li>
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">🎯 Why I Built This</h2>
        <p className="text-lg text-gray-700">
          I wanted <b>Day Planner</b> to be simple, fast, and distraction-free—a tool that helps you stay productive  
          without overcomplicating things. The clean, minimal design ensures that you can focus on what really matters:  
          getting things done.
        </p>
      </div>

    </div>
  );
};

export default Info;
