import { useNavigate } from "react-router-dom";

export const Redirect = () => {
    console.log("Redirect invoked ! ")
  let navigate = useNavigate();
  function handleClick() {
    navigate("/OpenCard");
  }
  return (
    <div>
      <button onClick={handleClick}>open card</button>
    </div>
  );
};
