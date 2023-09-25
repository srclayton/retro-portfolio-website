import "./Bio.css";
import BioHero from "./BioHero";
import BioFooter from "./BioFooter";
import GenericHeader from "../Generics/GenericHeader";
import { FiUser } from "react-icons/fi";

function Bio() {
  return (
    <div className="bioContainer flex flex-column boxShadow border">
      <GenericHeader title="BIO.PDF" icon={() => <FiUser />} />
      <BioHero />
      <BioFooter />
    </div>
  );
}

export default Bio;
