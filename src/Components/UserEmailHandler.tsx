import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const UserEmailHandler = () => {
    // Store user's email permanently
    const [email, setEmail] = useState(() => localStorage.getItem("userEmail") || "");
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (email) {
            localStorage.setItem("userEmail", email); // Store email in localStorage permanently
        }   
    }, [email]);

    // Function to send a daily summary email using EmailJS
    const sendDailyEmail = () => {
        if (email) {
            const templateParams = {
                user_email: email,   // User's email from localStorage
                user_summary: "Here is your daily summary. Keep up the great work!"  // Example summary
            };

            // Send email using EmailJS
            emailjs
                .send("your_service_id", "your_template_id", templateParams, "your_user_id") // Replace with your EmailJS service ID, template ID, and user ID
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
            console.log("❌ No email found, skipping daily summary email.");
            setMessage("❌ No email found, skipping daily summary email.");
        }
    };

    return (
        <div className="p-5 pt-0 md:pt-5 md:pb-0">
            <div className="flex bg-black text-white flex-col justify-center items-center gap-3 text-center p-6 rounded-2xl">
                <h2 className="text-md font-semibold">Get Notified About your day, at the end of the day</h2>

                {/* Show message */}
                {message && <p className="mt-3">{message}</p>}

                {/* Email Input */}
                <div className="">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border px-4 py-2 rounded text-center text-gray-200 border-white text-sm w max-w-[80%]"
                        placeholder="Enter your email"
                    />
                </div>

                {/* Button to send email */}
                <button
                    onClick={sendDailyEmail}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Send Summary via Email
                </button>
            </div>
        </div>
    );
};

export default UserEmailHandler;
