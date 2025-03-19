import me from "@/assets/me.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {
    return (
        <section className="flex flex-col items-center justify-center h-full p-6 text-center gap-6">
            <div className="w-3/4 max-w-sm">
                <img src={me} alt="Pranav Dhekane" className="rounded-3xl border-4 border-zinc-700" />
            </div>

            <div className="max-w-lg">
                <h1 className="text-3xl font-bold">Hey, I'm Pranav! 👋</h1>
                <p className="text-gray-700 mt-3 text-lg">
                    I love building things with code—whether it's solving tricky DSA problems or crafting smooth, interactive UIs.
                    Always learning, always experimenting, and always looking for ways to improve. 🚀
                </p>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-3">Let's Connect! 🌍</h2>
                <ul className="flex gap-6 text-xl font-medium justify-center">
                    <li>
                        <a
                            href="https://github.com/pranavdhekane"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700 transition-colors"
                        >
                            <FontAwesomeIcon icon={faSquareGithub} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://linkedin.com/in/pranavdhekane"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700 transition-colors"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/pranavdhekane"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700 transition-colors"
                        >
                            <FontAwesomeIcon icon={faXTwitter} />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default AboutMe;
