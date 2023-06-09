import "./Footer.css";
import { SiWhatsapp, SiGithub, SiLinkedin, SiMaildotru } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contact">
        <section className="contact-details">
          <h3 className="contact__title">get in touch</h3>
          <div className="contact__wa">
            <a href="wa.link/ncbili">
              <SiWhatsapp color={"green"} size={30} />
              <p className="contact__text">+52 5558058624</p>
            </a>
          </div>
          <div className="contact__email">
            <SiMaildotru size={30} color={"#3030ff"} />
            <p className="contact__text">emontesr2001@alumno.ipn.mx</p>
          </div>
        </section>

        <section className="contact-media">
          <h3 className="contact__title">social media</h3>
          <a href="https://github.com/ErickRuiz00">
            <SiGithub size={30} color={"white"} />
            <p className="contact__text">ErickRuiz00</p>
          </a>
          <a href="https://www.linkedin.com/in/erick-montes-ruiz-602924231/">
            <SiLinkedin size={30} color={"#0072b1"} />
            <p className="contact__text">Erick Montes Ruiz</p>
          </a>
        </section>
      </div>

      <hr />

      <div style={{padding: "10px 0"}}>
        <p>
          Desigen with ❤️ by <a href="https://github.com/ErickRuiz00">Erick Ruiz</a>
        </p>
        <p>2023 © All Rights Reserved</p>
      </div>
    </footer>
  );
}
