import { motion } from "framer-motion";
import { BsChevronUp } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="Footer">
      <ul>
        <li>Owen Kim</li>
        <li>owen.sykim@gmail.com</li>
        <li>+1)7788823579</li>
      </ul>

      <p>
        This web is used for personal portfolio purposes, not commercial
        purposes.
      </p>
      <ul>
        <motion.button
          className=""
          onClick={() =>
            document
              .getElementById("HOME")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <BsChevronUp />
          Back to top
        </motion.button>
      </ul>

      <ul>© 2024 Owen Kim</ul>
      <ul>
        <a href="https://www.linkedin.com/in/seongyeong-owen-kim-8a06651b8/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/legowen">
          <FaGithub />
        </a>
      </ul>
    </div>
  );
};

export default Footer;
