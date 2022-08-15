import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/katmart93" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
}
