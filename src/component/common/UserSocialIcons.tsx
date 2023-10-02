import { Link } from "react-router-dom";
import { ISocialIcon } from "../../interfaces/HeaderInterface";
import { socialIcon } from "../../utils/constant";

const UserSocialIcons = () => {
  return (
    <ul>
      {socialIcon?.map((socialIcons: ISocialIcon, index: number) => {
        return (
          <li key={index}>
            <Link to={socialIcons.link}>{socialIcons.icon}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default UserSocialIcons;
