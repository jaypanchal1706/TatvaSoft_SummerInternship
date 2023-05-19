import { useNavigate } from "react-router-dom";

export const About = () => {
  const Navigate = useNavigate();

  const backToHomePage = () => {
    Navigate("/");
  };

  return (
    <div>
      <div>This is About Page</div>{" "}
      <button onClick={backToHomePage}>Back to Home Page</button>
    </div>
  );
};
