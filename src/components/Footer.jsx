import { FaDiscord, FaTwitter, FaYoutube,  } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

const socialLinks = [
  { href: "https://discord.com/channels/@me/838737571353460747", icon: <FaDiscord /> },
  { href: "https://x.com/biswarup_mahato", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://www.linkedin.com/in/biswarupmahato/", icon: <IoLogoLinkedin />},
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Biswarup 2025. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;