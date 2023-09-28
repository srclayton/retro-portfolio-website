import {
  AiOutlineCloseSquare,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import "./Loading.css";
import GenericHeader from "../Generics/GenericHeader";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { BiErrorAlt } from "react-icons/bi";
interface ILoadingProps {
  type: boolean | null;
  onClose: () => void;
}

function Loading(props: ILoadingProps) {
  const { type, onClose } = props;
  const icons = [
    {
      type: true,
      icon: IoCheckmarkDoneCircleSharp,
      iconJsx: <IoCheckmarkDoneCircleSharp className="loadingIcon" />,
      message: "Enviado com sucesso!",
    },
    {
      type: false,
      icon: BiErrorAlt,
      iconJsx: <BiErrorAlt className="loadingIcon" />,
      message: "Erro ao enviar!",
    },
    {
      type: null,
      icon: AiOutlineLoading3Quarters,
      iconJsx: (
        <AiOutlineLoading3Quarters className="loadingAnimation loadingIcon" />
      ),
      message: "Carregando",
    },
  ];
  const state = icons.find((icon) => icon.type === type);

  return (
    <div className="border boxShadow loadingContainer">
      <GenericHeader
        title="Loading"
        onClose={onClose}
        icon={AiOutlineCloseSquare}
      />
      <div className="loadingBody flex flex-column center gap-3">
        {state?.iconJsx}
        <h2>{state?.message}</h2>
      </div>
    </div>
  );
}
export default Loading;
