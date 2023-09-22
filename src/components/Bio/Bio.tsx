import "./Bio.css";
import BioHeader from "./BioHeader";
import BioHero from "./BioHero";
import BioFooter from "./BioFooter";

function Bio() {
  return (
    <div className="bioContainer boxShadow border">
      <BioHeader />
      <BioHero />
      <BioFooter />
    </div>
  );
}

export default Bio;
