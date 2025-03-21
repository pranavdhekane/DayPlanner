import { useState } from "react";
import emailjs from "emailjs-com";
import { useTaskManager } from "./TaskManager";
interface TaskData {
    Task: string;
    Time: string;
    Type: string;
}

const UserEmailHandler = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const { completedTasks, tasks } = useTaskManager();

    const tasksDone =
    completedTasks.length > 0
        ? completedTasks.map((ob: TaskData, i:number) => `${i+1}) ${ob.Task} - ${ob.Time}`).join("\n")
        : "No completed tasks available.";

const pendingTasks =
    tasks.length > 0
        ? tasks.map((ob: TaskData, i:number) => `${i+1}) ${ob.Task} - ${ob.Time}`).join("\n")
        : "No pending tasks available.";


    const sendDailyEmail = () => {
        if (email) {
            const todayDate = new Date().toLocaleDateString(); 

            const templateParams = {
                user_email: email,
                user_name: email,
                date: todayDate,
                completed_tasks: tasksDone,
                pending_tasks: pendingTasks,
            };

            console.log(templateParams)

            emailjs
                .send("service_azlcwg5", "template_019f9vs", templateParams, "l0PJ7OlEpTriYQldn")
                .then(
                    (response) => {
                        console.log("SUCCESS!", response);
                        setMessage("📩 Your daily summary has been sent to your email!");
                    },
                    (error) => {
                        console.log("FAILED...", error);
                        setMessage("❌ Failed to send the email. Please try again later.");
                    }
                );
        } else {
            console.log("❌ No email found.");
            setMessage("❌ No email found.");
        }
    };

    return (
        <div className="p-5 pt-0 md:pt-5 md:pb-0">
            <div className="flex bg-black text-white flex-col justify-center items-center gap-3 text-center p-6 rounded-2xl">
                <h2 className="text-md font-semibold">Get Your Activity at your mail</h2>

                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border px-4 py-2 rounded text-center text-gray-200 border-white text-sm w-full max-w-[80%]"
                        placeholder="Enter your email"
                    />
                </div>

                <button
                    onClick={sendDailyEmail}
                    className="mt-2 bg-blue-500 hover:bg-blue-600 transition duration-200 text-white py-2 px-6 rounded-lg"
                    >
                    📩 Send Summary via Email
                </button>
            {message && <p className="">{message}</p>}
            </div>
        </div>
    );
};

export default UserEmailHandler;
