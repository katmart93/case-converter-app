import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/katmart93" target="_blank">
        <FontAwesomeIcon icon={faGithub} className="github-icon" />
      </a>
      <div className="copyright">
        <small>&copy; katmart93</small>
      </div>
    </div>
  );
}
