export default function AfterAddTask() {
    return (
        <div className="bg-white p-10 text-xl font-semibold">
            <div className="bg-yellow-100 p-4 rounded-md shadow-md border-l-4 border-yellow-500">
                <p className="text-gray-700 text-lg italic">"What gets measured, gets managed." – Peter Drucker</p>
            </div>
            <br />  
                <p className="text-gray-900 text-lg mt-2">
                    View your <span className="font-bold">remaining</span> and <span className="font-bold">completed</span> tasks above. The <span className="font-bold">progress bar</span> shows how much you have completed, and the <span className="font-bold">pie chart</span> helps visualize task categories and their count for better tracking.
                </p>

        </div>
    )
}