import "./Bio.css";
import BioHero from "./BioHero";
import BioFooter from "./BioFooter";
import GenericHeader from "../Generics/GenericHeader";

function Bio() {
  return (
    <div className="bioContainer flex flex-column boxShadow border">
      <GenericHeader title="BIO.PDF" />
      <BioHero />
      <BioFooter />
    </div>
  );
}

export default Bio;
