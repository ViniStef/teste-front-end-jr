import style from "./style.module.scss";

export const ContactSession = () => {
  return (
    <section className={style.contact__session}>
      <div>
        <p>Sobre nós</p>
        <a href="">CONHEÇA</a>
        <a href="">COMO COMPRAR</a>
        <a href="">INDICAÇÃO E DESCONTO</a>

        <div>
          <a href="">
            <img src="" alt="" />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
        </div>
      </div>
      <div>
        <p>INFORMAÇÕES ÚTEIS</p>
        <a href="#">FALE CONOSCO</a>
        <a href="#">DÚVIDAS</a>
        <a href="#">PRAZOS DE ENTREGA</a>
        <a href="#">FORMAS DE PAGAMENTO</a>
        <a href="#">POLÍTICA DE PRIVACIDADE</a>
        <a href="#">TROCAS E DEVOLUÇÕES</a>
      </div>
      <div>
        <p>FORMAS DE PAGAMENTO</p>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
};
