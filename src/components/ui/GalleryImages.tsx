import picture1 from "../../assets/gallery/Picture1.png";
import picture2 from "../../assets/gallery/Picture2.png";
import picture3 from "../../assets/gallery/Picture3.png";
import picture4 from "../../assets/gallery/Picture4.png";
import picture5 from "../../assets/gallery/Picture5.png";
import picture6 from "../../assets/gallery/Picture6.png";
import picture7 from "../../assets/gallery/Picture7.png";
import picture8 from "../../assets/gallery/Picture8.png";
import picture9 from "../../assets/gallery/Picture9.png";
import picture10 from "../../assets/gallery/Picture10.png";

const GalleryImages = () => {
  return (
    <div className="flex col-span-12 items-center relative">
      <div className="col-span-3">
        <img className=" ml-auto" src={picture1} alt="" />
        <img src={picture2} alt="" />
      </div>
      <div className="col-span-3">
        <img src={picture3} alt="" />
        <img src={picture4} alt="" />
        <img src={picture5} alt="" />
      </div>
      <div className="col-span-3">
        <img src={picture6} alt="" />
        <img src={picture7} alt="" />
        <img src={picture8} alt="" />
      </div>
      <div className="col-span-3">
        <img src={picture9} alt="" />
        <img src={picture10} alt="" />
      </div>
    </div>
  );
};

export default GalleryImages;
