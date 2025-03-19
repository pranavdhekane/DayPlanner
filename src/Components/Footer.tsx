import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="grid p-10 place-items-center gap-5 bg-zinc-800 text-white">

            <div>
                <div className="flex gap-5 text-xl [&>a:hover]:text-gray-600">
                    <a href="#">
                        <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faSquareGithub} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </div>
            <div>
                <p>Copyright © {new Date().getFullYear()} - pranavdhekane</p>
            </div>
        </footer>
    )
}

export default Footer