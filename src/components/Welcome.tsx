
import { useSelector } from "react-redux";
import {
    selectCurrentToken,
    selectCurrentUser,
} from "../redux/services/authSlice";

const Welcome = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  const welcome = user ? `Welcome ${user}` : "Welcome";
  const tokenAbbr = `${token.slice(0, 9)}...`;

  const content = (
    <section className="welcome">
      <h1>{welcome}</h1>
      <p>Token: {tokenAbbr}</p>
      <p></p>
    </section>
  );
  return content;
};

export default Welcome;