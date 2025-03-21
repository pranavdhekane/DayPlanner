import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="grid p-10 place-items-left gap-5 bg-zinc-800 text-white">
            <div className='text-4xl font-semibold font-stretch-ultra-expanded'>
                Thanks For Visiting!!
            </div>
            <hr className='border-2 text-white w-full'/>
            <div>
                <div className="flex gap-5 text-xl [&>a:hover]:text-gray-600">
                    <a href="https://twitter.com/pranavdhekane">
                        <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                    <a href="https://github.com/pranavdhekane">
                        <FontAwesomeIcon icon={faSquareGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/pranav-dhekane-293047292">
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