import { useNavigate } from "react-router-dom";

export const ContactUs = () => {
  const Navigate = useNavigate();

  const backToHomePage = () => {
    Navigate("/");
  };

  return (
    <div>
      <div>This is Contact Us Page</div>{" "}
      <button onClick={backToHomePage}>Back to Home Page</button>
    </div>
  );
};
