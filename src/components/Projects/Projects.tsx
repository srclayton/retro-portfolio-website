import "./Projects.css";
import { BiSolidBot } from "react-icons/bi";
import FolderApps from "../Folder/FolderApps";
import { ProjectProps } from "../Folder/Folder";
import { FaGamepad, FaReact, FaStore } from "react-icons/fa";
import Apps from "../Apps/Apps";
import { BsGithub } from "react-icons/bs";
import { SiFastify, SiSwagger } from "react-icons/si";
interface IProjectsProps {
  setFolder: (folder: string) => void;
  setState: () => void;
  setProject: (project: ProjectProps) => void;
}
function Projects(props: IProjectsProps) {
  const { setState, setFolder, setProject } = props;
  const projectsCollection: ProjectProps[] = [
    {
      name: "Encurtaí Backend",
      icon: () => <SiFastify className="appImageIcon" />,
      description: `
      Este é o backend do projeto Encurtaí, uma aplicação de encurtamento de URLs. O backend é responsável por processar as URLs enviadas pelos usuários, gerar URLs encurtadas e redirecionar os usuários para as URLs originais quando acessam as URLs encurtadas.
      
      ## Funcionalidades
      
      - Receber URLs longas para serem encurtadas.
      - Gerar URLs encurtadas.
      - Redirecionar usuários para URLs originais.
      `,
      urlTitle: "encurtai-backend",
      url: "https://github.com/srclayton/encurtai-backend",
      urlProducao: "https://encurtai.me",
    },
    {
      name: `Encurtaí
      Frontend`,
      icon: () => <FaReact color="#61dafb" className="appImageIcon" />,
      description: `
      Este é o frontend do projeto Encurtaí, uma aplicação de encurtamento de URLs. O frontend permite que os usuários interajam com a aplicação, inserindo URLs longas para serem encurtadas e recebendo URLs encurtadas como resultado. A aplicação oferece a opção de gerar URLs encurtadas aleatoriamente ou personalizadas pelo usuário.
      
      ## Funcionalidades
      
      - Enviar URLs longas para serem encurtadas.
      - Receber URLs encurtadas como resultado.
      - Opção de gerar URLs encurtadas aleatoriamente ou personalizadas.
      - Integração com backend para processamento das URLs.
      `,
      urlTitle: "encurtai-frontend",
      url: "https://github.com/srclayton/encurtai-frontend",
      urlProducao: "https://encurtai.me",
    },
    {
      name: "Fake Data API",
      icon: () => <SiSwagger color="#00ff00" className="appImageIcon" />,
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
      icon: () => <BiSolidBot color="#07f1aa" className="appImageIcon" />,
      description: `Neste projeto, criamos um bot no Telegram utilizando Python, Flask e python-telegram-bot. O propósito principal era permitir que os usuários rastreassem seus objetos postados nos Correios de forma simples e rápida.
      
      Para garantir a disponibilidade e desempenho, hospedamos o bot na Amazon Web Services (AWS) usando uma instância EC2.
      
      A interação com o bot era amigável, os usuários enviavam os códigos de rastreamento e recebiam em resposta as informações atualizadas sobre o status de suas encomendas diretamente no Telegram.
      
      A automatização do bot foi realizada através do Task Scheduler, uma ferramenta do sistema operacional Windows que permitiu agendar e executar tarefas específicas.
      
      Com uma média diária de 150 usuários ativos, o bot demonstrou ser uma solução confiável e funcional para os usuários acompanharem suas encomendas. A combinação eficaz de tecnologias e serviços garantiu a disponibilidade e o desempenho necessários para atender às demandas dos usuários.`,
      urlTitle: "rastreio",
      url: "https://github.com/srclayton/rastreio",
    },
    {
      name: "Quack Fire",
      icon: () => <FaGamepad color="#7f7f7f" className="appImageIcon" />,
      description: `Quack-fire e um jogo de agilidade e concentracao, que exige dos jogadores um comprometimento com a atencao. 

      Composto por tres fases, quack-fire e disputado por dois jogadores que tem como objetivo atingir o maior numero de patos dentro do cenario de cada fase. O jogo possui diferentes tipos de patos, sendo que cada especie possui uma pontuacao diferente e velocidades diferentes. Os jogadores podem jogar as tres fases disponiveis e, no final de cada uma delas, e possivel conferir o ranking para ver quem ganhou a fase. Todas as fases tem duracao de 65 segundos. 
      
      As pontuacoes que cada pato atingido oferece ao jogador sao divididas pela dificuldade em atingi-los. Alem de poder atingir os patos, os jogadores podem tambem atingir o menino que carrega um balao e que aparecera em um unico momento de cada fase. A diferenca e que, quando atingido, esse menino faz com que os jogadores percam pontos, igual ao pato do tipo fedido quando atingido. Alem disso, o menino nao desaparece quando atingido, possibilitando que os jogadores o acertem mais vezes durante a fase e, consequentemente, percam mais pontos. Para tornar o desafio ainda mais divertido, o tempo que os patos sao mostrados durante as fases varia tambem. Assim, conforme vamos avancando de fase, menor as probabilidades de aparecer um pato mais raro, pois seu tempo de aparicao e menor.`,
      urlTitle: "quack-fire",
      url: "https://github.com/srclayton/quack-fire",
    },
    {
      name: "Jogo da memória",
      icon: () => <FaGamepad color="#7f7f7f" className="appImageIcon" />,
      description: `Jogo da memória é um jogo de cartas simples e divertido para todas as idades. O objetivo é combinar pares de cartas idênticas com o menor número de tentativas possível.`,
      urlTitle: "jogo-da-memoria-2019",
      url: "https://github.com/srclayton/jogo-da-memoria-2019",
      urlProducao: "https://srclayton.github.io/jogo-da-memoria-2019/",
    },
    {
      name: "Kimi Store",
      icon: () => <FaStore color="#ec9c46" className="appImageIcon" />,
      description: `Kimi Store é um protótipo de loja virtual de moda e acessórios desenvolvido com tecnologias web, incluindo HTML, CSS, Materialize e JavaScript. Este projeto visa demonstrar uma interface responsiva e agradável aos usuários, permitindo que eles naveguem por uma seleção de produtos de moda. O uso de Materialize facilita a criação de um layout moderno e amigável.`,
      urlTitle: "kimi-store",
      url: "https://github.com/srclayton/kimi-store",
      urlProducao: "https://srclayton.github.io/Kimi-Store/",
    },
  ];

  const handlerClick = (project: ProjectProps) => {
    setProject(project);
    setFolder(project.urlTitle);
  };
  return (
    <>
      {projectsCollection.map((project) => (
        // <Apps
        //   key={project.name}
        //   name={project.name}
        //   icon={
        //     isFolder
        //       ? () => (
        //           <IoFolderOpenSharp color="#007ACC" className="appImageIcon" />
        //         )
        //       : () => project.icon
        //   }
        //   hero={
        //     <Description
        //       title={project.name}
        //       text={project.description}
        //       urlTitle={project.urlTitle}
        //       url={project.url}
        //       urlProducao={project.urlProducao ? project.urlProducao : null}
        //     />
        //   }
        // />
        <div
          key={project.name}
          onClick={() =>
            handlerClick({
              name: project.name,
              description: project.description,
              urlTitle: project.urlTitle,
              url: project.url,
              urlProducao: project.urlProducao ? project.urlProducao : null,
              icon: project.icon,
            })
          }
        >
          <FolderApps
            setState={setState}
            name={project.name}
            icon={project.icon}
          />
        </div>
      ))}
      <a
        href="https://github.com/srclayton"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Apps
          name={"Todos os Projetos"}
          icon={() => <BsGithub className="appImageIcon" />}
          hero={<></>}
          isHref={true}
        />
      </a>
    </>
  );
}

export default Projects;
