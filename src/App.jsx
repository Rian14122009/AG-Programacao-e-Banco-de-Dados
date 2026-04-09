import './App.css'
import logo from './assets/Firebase_Logo.png'
import imagemFirebase from './assets/explicacao_firebase.png'

export default function App () {

  return (
    <main>
      <header>
        <img className='logo' src={logo} alt="Firebase Logo" />
      </header>

      <nav></nav>

      <section>
        <article className='card'>
          <h3>O que é?</h3>
          <p className='destaque'>
            O Firebase é uma plataforma de desenvolvimento de aplicativos criada pelo Google que oferece uma variedade de serviços de backend prontos para uso. Com ele, desenvolvedores podem criar, gerenciar e escalar aplicações web e móveis de forma mais rápida e eficiente, sem precisar se preocupar tanto com a infraestrutura.

Além disso, o Firebase disponibiliza ferramentas como banco de dados em tempo real, autenticação de usuários, armazenamento em nuvem, hospedagem e análise de dados. Esses recursos ajudam a melhorar o desempenho dos aplicativos, facilitar a integração entre serviços e proporcionar uma melhor experiência para os usuários finais.
          </p>
        </article>

        <article className='card'>
          <h3>Como funciona?</h3>
          <p>O Firebase funciona como uma plataforma de backend que conecta diretamente o aplicativo do desenvolvedor aos serviços fornecidos pelo Google. Em vez de criar um servidor do zero, o app se comunica com o Firebase por meio de APIs, enviando e recebendo dados em tempo real.

Por exemplo, quando um usuário faz login, o serviço de autenticação do Firebase valida as informações e libera o acesso. Já os dados do aplicativo podem ser armazenados em bancos de dados na nuvem, que são atualizados automaticamente para todos os usuários conectados. Além disso, o Firebase gerencia tarefas como notificações, armazenamento de arquivos e monitoramento do desempenho, permitindo que o desenvolvedor foque mais na lógica e na experiência do aplicativo.</p>
        </article>

        <article className='card'>
          <img src={imagemFirebase} alt="Explicação Firebase" />
          <p>
            O Firebase conecta seu app direto à nuvem, permitindo banco de dados,
            autenticação e armazenamento em tempo real sem servidor próprio.
          </p>
        </article>

        <article className='card'>
          <h3>Onde é usado?</h3>
          <p>O Firebase é usado no desenvolvimento de aplicativos web e móveis, sendo bastante popular entre desenvolvedores. Ele é aplicado em apps para Android e iOS, além de sistemas que funcionam diretamente no navegador.</p>
        </article>

        <article className='card'>
          <h3>Para que serve?</h3>
          <p>O Firebase serve para facilitar o desenvolvimento de aplicativos, oferecendo serviços prontos de backend. Com ele, é possível gerenciar banco de dados, autenticar usuários, armazenar arquivos e enviar notificações sem precisar criar toda a estrutura do zero.</p>
        </article>
      </section>

      <footer>
        <span>Rian Ferreira, Cisterna,  Matheus Rodrigues,Matheus Oliveira</span>
        <a href="https://firebase.google.com/?hl=pt-br" target="_blank" rel="noopener noreferrer">
          Acessar Firebase
        </a>
      </footer>
    </main>
  )
}