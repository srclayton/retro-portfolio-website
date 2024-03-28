import { FaFreeCodeCamp } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";
import { GiDatabase } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import "./Certifications.css";
import { SiUdemy } from "react-icons/si";
function Certifications() {
  const certification = [
    {
      company: "FreeCodeCamp",
      logo: <FaFreeCodeCamp className="certificationLogo" size={50} />,
      title: "Back End Development and Apis",
      date: "mar de 2024",
      credential: "fcc89a6c3c7-a47e-4ff5-a068-06f2b2fbb62c",
      link: "https://www.freecodecamp.org/certification/fcc89a6c3c7-a47e-4ff5-a068-06f2b2fbb62c/back-end-development-and-apis",
    },
    {
      company: "Udemy",
      logo: <SiUdemy className="certificationLogo" size={50} />,
      title: "Web API ASP.NET Core Essencial (.NET 8)",
      date: "mar de 2024",
      credential: "UC-45ab5bfa-2cd4-4e09-87c2-3445a50d0684",
      link: "https://www.udemy.com/certificate/UC-45ab5bfa-2cd4-4e09-87c2-3445a50d0684/",
    },
    {
      company: "Rocketseat",
      logo: <MdRocketLaunch className="certificationLogo" size={50} />,
      title: "NLW Expert trilha de Java",
      date: "fev de 2024",
      credential: "305b9f27-60d5-4a0b-a4b5-62f543637e00",
      link: "https://app.rocketseat.com.br/certificates/305b9f27-60d5-4a0b-a4b5-62f543637e00",
    },
    {
      company: "Rocketseat",
      logo: <MdRocketLaunch className="certificationLogo" size={50} />,
      title: "NLW Expert trilha de React",
      date: "fev de 2024",
      credential: "d4e3ee46-ec89-40b5-b901-3da65231e107",
      link: "https://app.rocketseat.com.br/certificates/d4e3ee46-ec89-40b5-b901-3da65231e107",
    },
    {
      company: "Fundação Estudar",
      logo: <GiDatabase className="certificationLogo" size={50} />,
      title: "CC50: Introdução à Ciência da Computação - Harvard no Brasil",
      date: "mar de 2024",
    },
    {
      company: "EBAC - Escola Britânica de Artes Criativas e Tecnologia",
      logo: <ImBooks className="certificationLogo" size={50} />,
      title: "Workshop Jornada Fullstack",
      date: "jun de 2023",
      credential: "64580-67428-88905-92006",
      link: "https://lms.ebaconline.com.br/certs/validate/64580-67428-88905-92006?_cio_id=b9fd063990c401c1f369",
    },
    {
      company: "Rocketseat",
      logo: <MdRocketLaunch className="certificationLogo" size={50} />,
      title: " Discover's path Especializar",
      date: "mai de 2023",
      credential: "4dcbf2a9-6d51-4a91-ac3d-2fe522d09793",
      link: "https://app.rocketseat.com.br/certificates/4dcbf2a9-6d51-4a91-ac3d-2fe522d09793",
    },
    {
      company: "Rocketseat",
      logo: <MdRocketLaunch className="certificationLogo" size={50} />,
      title: "Discover's path Fundamentar",
      date: "mai de 2023",
      credential: "bec602a1-0653-424e-9e55-ed91b53ab63f",
      link: "https://app.rocketseat.com.br/certificates/bec602a1-0653-424e-9e55-ed91b53ab63f",
    },
    {
      company: "Rocketseat",
      logo: <MdRocketLaunch className="certificationLogo" size={50} />,
      title: "Discover's path Conectar",
      date: "mai de 2023",
      credential: "d014d9e0-fb78-4e0c-b771-5ee8ccdaf2cf",
      link: "https://app.rocketseat.com.br/certificates/d014d9e0-fb78-4e0c-b771-5ee8ccdaf2cf",
    },
  ];
  return (
    <div className="certification flex flex-column gap-4">
      {certification.map((certification, index) => (
        <div className="flex gap-3" key={index}>
          <div className="certificationLeft flex center">
            {certification.logo}
          </div>
          <div className="right flex-1">
            <h4>{certification.title}</h4>
            <small>{certification.company}</small>
            <p>
              <small>Verificação emitida em {certification.date}</small>
            </p>
            <a href={certification.link} target="_blank">
              <small>Código da credencial {certification.credential}</small>
            </a>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Certifications;
