import { TbWorldWww } from "react-icons/tb";
import "./Description.css";
import { BsGithub } from "react-icons/bs";
import { Fragment } from "react";
interface IDescriptionProps {
  title: string;
  text: string;
  urlTitle: string;
  url: string;
  urlProducao?: string | null;
}
function Description(props: IDescriptionProps) {
  const { title, text, urlTitle, url, urlProducao } = props;
  const formattedText = text.split("\n").map((line, index) => (
    <Fragment key={index}>
      {line}
      <br />
    </Fragment>
  ));
  return (
    <>
      <div className="descriptionContainer">
        <h1 className="descriptionTitle"> {title} </h1>
        <p className="descriptionText"> {formattedText} </p>
      </div>
      <div className="descriptionFooter flex flex-column center gap-1">
        <div className="flex center gap-1">
          {<BsGithub />}
          <a href={url} target="_blank">
            <span>srclayton/{urlTitle}</span>
          </a>
          <div />
        </div>
        {urlProducao && (
          <div className="flex center gap-1">
            {<TbWorldWww />}
            <a href={urlProducao} target="_blank">
              <span>{urlProducao}</span>
            </a>
            <div />
          </div>
        )}
      </div>
    </>
  );
}

export default Description;
