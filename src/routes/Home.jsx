import React from 'react';
import './Style.css'; 

function Home() {
  return (
    <>
      <body>

        <div className="container">
          <div className="box box1">
            <img src="../src/assets/images/wepik-export-2023111614093401KF.jpeg" alt="Mulher com fones de ouvido" />
          </div>

          <div className="box box2">
              <button className="custom-button">
                <span>Faça seu Login</span>
              </button>
          </div>

          <div className="box box4">
            <h2>EaseSync</h2>
            <h3> Monitoramento e Terapia Mindfulness</h3>
          </div>

          <div className="box box5">
            <p>EaseSync inova ao integrar terapia mindfulness e monitoramento cardíaco, promovendo saúde mental. Personalizado para bem-estar, proporciona intervenções precoces e autonomia para uma vida equilibrada.</p>
          </div>

          <div className="box box6">
            <div className="box-item">
              <h3>O que é a solução:</h3>
              <p>EaseSync é uma plataforma inovadora que integra monitoramento fisiológico e terapia mindfulness para promover o bem-estar mental.</p>
            </div>

            <div className="box-item">
              <h3>O que ela fará:</h3>
              <p>EaseSync emitirá alertas personalizados em resposta a mudanças significativas na frequência cardíaca, indicando potenciais níveis de estresse ou ansiedade. Além disso, oferecerá sessões de terapia mindfulness guiadas para ajudar os usuários a enfrentar e superar esses desafios emocionais.</p>
            </div>

            <div className="box-item">
              <h3>Como funcionará:</h3>
              <p>EaseSync se conecta a dispositivos para monitorar a frequência cardíaca, permitindo ajustes de alerta. Em momentos de alerta, os usuários acessam sessões de terapia mindfulness com pequenos áudios ou vídeos relaxantes. Essas sessões abrangem respiração consciente, atenção ao corpo e visualizações guiadas. O progresso é registrado em gráficos, incentivando a prática regular. A integração com um assistente virtual oferece orientações adicionais sobre saúde mental.</p>
            </div>
          </div>

          <div className="box box3">
            <h3>Vantagens</h3>
            <div className="cards">
              <div className="card">
                <h3>Personalização</h3>
                <img src="../src/assets/images/homem-negro-sereno-descansando-no-parque-e-ouvir-musica.jpg" alt="Homem no parque" />
                <div className="content">
                  <h4>Acessibilidade Personalizada</h4>
                  <p>Permite aos usuários ajustar alertas, promovendo intervenção precoce e adaptação personalizada às necessidades individuais.</p>
                </div>
              </div>
              <div className="card">
                <h3>Prontidão</h3>
                <img src="../src/assets/images/linda-mulher-loira-praticando-ioga-la-fora-e-parecendo-relaxada.jpg" alt="Mulher no parque" />
                <div className="content">
                  <h4>Intervenção Imediata</h4>
                  <p>EaseSync oferece alertas e terapia mindfulness imediata, assim tendo a intervenção necessária no momento certo.</p>
                </div>
              </div>
              <div className="card">
                <h3>Saúde Mental</h3>
                <img src="../src/assets/images/mulher-relaxed-que-aprecia-o-mar.jpg" alt="Mulher na praia" />
                <div className="content">
                  <h4>Promover o Bem-Estar Mental</h4>
                  <p> As técnicas de respiração consciente e mindfulness no EaseSync reduzem o estresse, gerando calma. Concentrando a atenção no presente, alivia a ansiedade, proporcionando uma pausa para a mente, promovendo um estado mental equilibrado.</p>
                </div>
              </div>
            </div>
          </div>
        </div>



        <footer>
          <p>&copy; 2023 EaseSync. Todos os direitos reservados.</p>
        </footer>
      </body>
    </>
  );
}

export default Home;
