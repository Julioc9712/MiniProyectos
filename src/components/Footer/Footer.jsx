import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer navbar-dark bg-dark">
      <div className="contenedor-icon-footer">
        <a
          href="https://www.linkedin.com/in/julio-cesar-mesa-ruíz-490438282/"
          target="_blank"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/Julioc9712" target="_blank">
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://wa.me/+5352990719?text=Buenas%20le%20contacto%20a%20traves%20del%20PortafolioReact"
          target="__blanck"
        >
          <i className="bi bi-whatsapp"></i>
        </a>
        <a href="https://twitter.com/juliocmr97" target="_blank">
          <i className="bi bi-twitter"></i>
        </a>
      </div>
      <div className="gmail-footer">
        <a href="/Contacto" className="gmail">
          juliocmr97@gmail.com
        </a>
      </div>
      <div className="logo-whatapp">
        <a
          href="https://wa.me/+5352990719?text=Buenas%20le%20contacto%20a%20traves%20del%20PortafolioReact"
          target="__blanck"
        >
          <img src="/image/whatsapp.svg" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
