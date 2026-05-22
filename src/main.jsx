import React from 'react';
import { createRoot } from 'react-dom/client';
import { Hammer, Wrench, Zap, Droplets, Paintbrush, PackageCheck, MapPin, MessageCircle } from 'lucide-react';
import './styles.css';

const categories = [
  { icon: Hammer, title: 'Herramientas', text: 'Manuales, eléctricas y accesorios para profesionales y hogar.' },
  { icon: Wrench, title: 'Ferretería', text: 'Bulonería, fijaciones, herrajes, cerraduras y consumibles.' },
  { icon: Zap, title: 'Electricidad', text: 'Cables, térmicas, iluminación, fichas y canalización.' },
  { icon: Droplets, title: 'Plomería', text: 'Grifería, caños, conexiones, bombas y sanitarios.' },
  { icon: Paintbrush, title: 'Pintura', text: 'Pinturas, rodillos, pinceles, lijas y preparación de superficies.' },
  { icon: PackageCheck, title: 'Pedidos', text: 'Atención rápida, stock organizado y compra simple.' }
];

function App() {
  return (
    <main>
      <nav className="nav">
        <img src="/assets/helmat-isotipo.png" alt="Isotipo HELMAT" className="navIso" />
        <a href="#contacto">Contacto</a>
      </nav>

      <section className="hero">
        <div className="glow glowOne" />
        <div className="glow glowTwo" />
        <div className="heroContent">
          <img src="/assets/helmat-logo.png" alt="HELMAT.store" className="logo" />
          <p className="eyebrow">Ferretería moderna · atención ágil · soluciones reales</p>
          <h1>Todo para construir, reparar y mejorar.</h1>
          <p className="lead">
            HELMAT.store nace para ordenar la experiencia ferretera: productos claros, categorías simples y atención directa. Sin vueltas, sin pasillos eternos, sin “me fijo y te aviso” versión arqueología.
          </p>
          <div className="actions">
            <a className="primary" href="https://wa.me/5491112345678" target="_blank" rel="noreferrer">
              <MessageCircle size={20} /> Consultar por WhatsApp
            </a>
            <a className="secondary" href="#categorias">Ver categorías</a>
          </div>
        </div>
      </section>

      <section id="categorias" className="section">
        <div className="sectionTitle">
          <span>Catálogo inicial</span>
          <h2>Categorías principales</h2>
        </div>
        <div className="grid">
          {categories.map(({ icon: Icon, title, text }) => (
            <article className="card" key={title}>
              <Icon size={30} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="banner">
        <img src="/assets/helmat-isotipo.png" alt="HELMAT isotipo" />
        <div>
          <h2>Una marca preparada para tienda física, online y módulos de venta.</h2>
          <p>La estética amarillo sobre negro transmite fuerza, orden y oficio. Ideal para ferretería, construcción y equipamiento técnico.</p>
        </div>
      </section>

      <section id="contacto" className="contact">
        <div>
          <span>Próximamente</span>
          <h2>HELMAT.store</h2>
          <p><MapPin size={18} /> Argentina</p>
        </div>
        <a className="primary" href="mailto:contacto@helmat.store">contacto@helmat.store</a>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
