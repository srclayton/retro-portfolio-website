import "./VsCode.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

function VsCode() {
  const htmlCode = `
import React from "react";
import "./About.css";
function About() {
  return(
    <section id="about">
      <h1> Olá, me chamo Clayton</h1>
      <p>
        Um estudante de Sistemas de Informação na Universidade Tecnológica Federal do Paraná (UTFPR).
        Durante minha jornada acadêmica, adquiri conhecimentos em uma variedade de tecnologias.
      </p>
      <h2> Algumas das tecnologias que estou familiarizado: </h2>
      <ul>
        <li> C/C++ </li>
        <li> Java </li>
        <li> Javascript / Typescript </li>
        <li> Node </li>
        <li> ReactJS </li>
        <li> Fastify </li>
        <li> MongoDB </li>
        <li> MSSQL </li>
        <li> .NET </li>
      </ul>
      <h2> Para mais informações, acesse meu <a href="https://github.com/srclayton">Github</a> </h2>
    </section>
    <section id="projects">
      <h2> Projetos </h2>
      <ul>
        <li> 
          <h3> 
            <a href="https://www.linkedin.com/in/srclayton/details/projects/"> 
              Rastreio de encomendas - Telegram Bot
            </a> 
          </h3>
          <p> Um bot no Telegram utilizando Python. </p>
          <p> O propósito principal era permitir que os usuários rastreassem seus objetos.</p> 
        </li>
        <li> 
          <h3> 
            <a href="https://www.linkedin.com/in/srclayton/details/projects/"> 
              Fake Data API
            </a> 
          </h3>
          <p> A API de Dados Falsos. </p>
          <p> é ideal para projetos que precisam de dados fictícios para testes, desenvolvimento.</p> 
        </li>
        <li> 
          <h3> 
            <a href="https://www.linkedin.com/in/srclayton/details/projects/"> 
              Portfólio - Retrô OS
            </a> 
          </h3>
          <p> um portfólio pessoal com uma estética inspirada em um sistema operacional retrô.</p>
          <p> Você encontrará uma coleção dos meus projetos e minha bagagem de conhecimentos. </p> 
        </li>
      </ul>
    </section>
  );
}

export default About;
  `;
  const customStyle = {
    background: "none", // Remove o background
    padding: 0, // Opcional: remove o espaçamento interno
    fontSize: "10px", // Opcional: aumenta o tamanho da fonte
  };
  return (
    <div className="vsContainer">
      <div className="windowBar flex center">
        About.tsx - Portifólio - Visual Studio Code
      </div>
      <div className="vsContent">
        <SyntaxHighlighter
          language="javascript"
          style={vs2015}
          customStyle={customStyle}
          showLineNumbers={true}
          // wrapLines={true}
          // showInlineLineNumbers={true}
        >
          {htmlCode}
        </SyntaxHighlighter>

        {/* <div className="left vsContainer">
          <VscCode className="vsIcon" />
        </div>
        <div className="right">
          <SyntaxHighlighter
            language="javascript"
            style={dark}
            customStyle={customStyle}
          >
            {htmlCode}
          </SyntaxHighlighter>
        </div> */}
      </div>
    </div>
  );
}

export default VsCode;
