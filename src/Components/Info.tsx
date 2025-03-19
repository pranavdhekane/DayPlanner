
const Info = () => {
  return (
    <div>
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">Day Planner</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
        <ul className="list-inside list-disc text-gray-700 space-y-2">
          <li><strong>Daily Activity Storage:</strong> Store all the activities and tasks you need to accomplish throughout the day. No more forgotten to-dos!</li>
          <li><strong>Auto Data Deletion:</strong> At midnight, all data gets automatically erased, ensuring you can start fresh every day without holding onto past tasks.</li>
          <li><strong>Instant Email Summary:</strong> With just one click, you can receive an email that includes all the activities you've planned for the day. Stay informed, even on the go!</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tech Stack</h2>
        <p className="text-gray-700 mb-4">The app has been built using cutting-edge technologies to provide a smooth and modern user experience.</p>
        <ul className="list-inside list-disc text-gray-700 space-y-2">
          <li><strong>Frontend:</strong> 
            <ul className="ml-4 list-inside list-disc text-gray-600">
              <li>React</li>
              <li>TypeScript</li>
              <li>Vite</li>
              <li>Tailwind CSS</li>
            </ul>
          </li>
          <li><strong>Local Storage:</strong> All the data is saved on your browser’s local storage, so your tasks and activities are always available locally. There is no need for a backend—keeping things fast, private, and simple.</li>
          <li><strong>Email Integration:</strong> Using a third-party email API, the app allows you to send a summary email of your activities with a single button click, so you never miss a detail of your day.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Libraries & Tools Used</h2>
        <ul className="list-inside list-disc text-gray-700 space-y-2">
          <li><strong>Shadcn Charts:</strong> Beautiful charts to visualize your data and activity trends.</li>
          <li><strong>FontAwesome & Ludica React Icons:</strong> To enhance the user experience with rich, customizable icons.</li>
          <li><strong>ChatGPT:</strong> Integrated for conversational support and providing additional insights or assistance.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Design Philosophy</h2>
        <p className="text-gray-700">
          The primary focus while building <strong>Day Planner</strong> was on the frontend. I wanted to create an intuitive, easy-to-use interface with a sleek, minimalistic design, allowing users to focus solely on their tasks without distractions.
        </p>
        <p className="text-gray-700">
          By using Tailwind CSS, I ensured that the design is both responsive and lightweight, providing an excellent user experience across all devices. Whether you're on the go or working from your desktop, Day Planner is here to streamline your daily planning and make productivity feel effortless.
        </p>
      </section>

      <section className="text-center">
        <p className="text-gray-700">Let me know if you need any more details or if there's anything specific you'd like to see in the app!</p>
      </section>

      </div>
    </div>
  );
};


export default Info;