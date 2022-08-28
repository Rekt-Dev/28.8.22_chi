//import { BrowserRouter as useNavigate } from "react-router-dom";

export const OpenCard = (props:any) => {
  //let navigate = useNavigate();

  /* const clickCard = () => {
    console.log(`clickCard activ8d`);
  };
 */
  return (
    <div>
      <img
        alt="beautiful"
        src={`https://www.artic.edu/iiif/2/${props.item.image_id}/full/843,/0/default.jpg`}
      />
    </div>
  );
};
