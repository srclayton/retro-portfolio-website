import "./Projects.css";
import Apps from "../Apps/Apps";
import Description from "./Description";
import { TbApi } from "react-icons/tb";
import { BiSolidBot } from "react-icons/bi";

function Projects() {
  const projectsCollection = [
    {
      name: "Fake Data API",
      icon: <TbApi className="appImageIcon" />,
      description: `A API de Dados Falsos é ideal para projetos que precisam de dados fictícios para testes, desenvolvimento, prototipagem ou qualquer cenário onde a utilização de informações reais não é desejável. 
      
      Ela permite que desenvolvedores obtenham acesso rápido a um conjunto diversificado de dados simulados, economizando tempo e recursos durante o desenvolvimento de diferentes aplicações.

      Importante ressaltar que a API não deve ser utilizada em produção ou em ambientes reais, pois os dados fornecidos são meramente fictícios e não têm nenhuma relação com informações reais. 
      
      Sua principal função é agilizar o processo de desenvolvimento e testes, garantindo a confidencialidade e segurança dos dados dos usuários finais.
      `,
      urlTitle: "fake_data_api",
      url: "https://github.com/srclayton/fake_data_api",
      urlProducao: "https://srocha.vercel.app",
    },
    {
      name: "Rastreio de encomendas",
      icon: <BiSolidBot className="appImageIcon" />,
      description: `Neste projeto, criamos um bot no Telegram utilizando Python, Flask e python-telegram-bot. O propósito principal era permitir que os usuários rastreassem seus objetos postados nos Correios de forma simples e rápida.
      
      Para garantir a disponibilidade e desempenho, hospedamos o bot na Amazon Web Services (AWS) usando uma instância EC2.
      
      A interação com o bot era amigável, os usuários enviavam os códigos de rastreamento e recebiam em resposta as informações atualizadas sobre o status de suas encomendas diretamente no Telegram.
      
      A automatização do bot foi realizada através do Task Scheduler, uma ferramenta do sistema operacional Windows que permitiu agendar e executar tarefas específicas.
      
      Com uma média diária de 150 usuários ativos, o bot demonstrou ser uma solução confiável e funcional para os usuários acompanharem suas encomendas. A combinação eficaz de tecnologias e serviços garantiu a disponibilidade e o desempenho necessários para atender às demandas dos usuários.`,
      urlTitle: "rastreio",
      url: "https://github.com/srclayton/rastreio",
    },
  ];
  return (
    <>
      {projectsCollection.map((project) => (
        <Apps
          key={project.name}
          name={project.name}
          icon={() => project.icon}
          hero={
            <Description
              title={project.name}
              text={project.description}
              urlTitle={project.urlTitle}
              url={project.url}
              urlProducao={project.urlProducao ? project.urlProducao : null}
            />
          }
        />
      ))}
    </>
  );
}

export default Projects;
