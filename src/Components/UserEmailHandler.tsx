import { useState, useEffect } from "react";

// Function to get the end of the day timestamp
const getEndOfDayTimestamp = () => {
    const now = new Date();
    now.setHours(24, 59, 59, 999); // Set expiry to 11:59:59 PM
    return now.getTime();
};

const UserEmailHandler = () => {
    // Store user's email permanently
    const [email, setEmail] = useState(() => localStorage.getItem("userEmail") || "");

    useEffect(() => {
        if (email) {
            localStorage.setItem("userEmail", email); // Store email in localStorage permanently
        }
    }, [email]);

    useEffect(() => {
        // Check if it's time to send the email
        const storedExpiry = localStorage.getItem("emailExpiry");
        const expiryTime = storedExpiry ? parseInt(storedExpiry) : getEndOfDayTimestamp();

        if (Date.now() > expiryTime) {
            sendDailyEmail();
            localStorage.setItem("emailExpiry", getEndOfDayTimestamp().toString());
        }
    }, []);

    // Function to send a daily summary email (for now, it logs to console)
    const sendDailyEmail = () => {
        if (email) {
            console.log(`📩 Sending daily summary email to: ${email}`);
            // TODO: Integrate an actual email-sending API like SendGrid or Nodemailer here
        } else {
            console.log("❌ No email found, skipping daily summary email.");
        }
    };

    return (
        <div className="flex bg-black min-h-[30vh] text-white flex-col justify-center items-center gap-4 text-center">
            <h2 className="text-3xl font-semibold">Get Notified About your day, at the end of the day</h2>

            {/* Email Input */}
            <div className="mb-4">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border px-4 py-2 rounded text-center min-w-full w-sm text-gray-500 border-white"
                    placeholder="Enter your email"
                />
            </div>
        </div>
    );
};

export default UserEmailHandler;
