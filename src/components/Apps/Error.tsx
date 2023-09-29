import { BiErrorAlt } from "react-icons/bi";
import GenericHeader from "../Generics/GenericHeader";
import "./Error.css";
function Error() {
  return (
    <div className="ErrorContainer">
      <GenericHeader icon={BiErrorAlt} title="EACCES" />
      <div className="border ErrorContainer">
        <h1>EACCES </h1>
        <p>Acesso negado: Você não tem permissão para abrir este arquivo.</p>
      </div>
    </div>
  );
}

export default Error;
