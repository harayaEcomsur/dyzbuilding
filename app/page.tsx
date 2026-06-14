import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <>
      <nav>
        <a className="nav-logo" href="#inicio">
          <Image src="/logo.png" alt="D&Z Building" width={650} height={300} priority style={{ height: 44, width: 'auto' }} />
        </a>
        <ul className="nav-links">
          <li><a href="#servicios">Especialidades</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <a className="nav-cta" href="#contacto">Solicitar Cotización</a>
      </nav>

      {/* HERO */}
      <section id="inicio" className="hero">
        <div className="hero-glow" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="eyebrow">20 años · Climatización · Refrigeración · Todo Chile</div>
          <h1>20 años liderando<br />la <em>ingeniería<br />climática</em> en Chile</h1>
          <p>Expertos en sistemas VRF/VRV, refrigeración comercial, eficiencia energética HVAC y proyectos llave en mano para industria y comercio.</p>
          <div className="actions">
            <a className="btn-p" href="#servicios">Nuestras especialidades</a>
            <a className="btn-o" href="#contacto">Solicitar cotización</a>
          </div>
        </div>
      </section>

      {/* MARCAS */}
      <div className="brands">
        <span className="brands-label">Marcas oficiales</span>
        <div className="brands-list">
          <span className="brand-name">LG</span>
          <span className="brand-name">Samsung</span>
          <span className="brand-name">Gree</span>
        </div>
      </div>

      {/* ESPECIALIDADES */}
      <section className="sec" id="servicios">
        <div className="sec-eyebrow">Especialidades técnicas</div>
        <div className="sec-title">Lo que hacemos</div>
        <div className="svc-grid">

          <div className="svc">
            <svg className="svc-icon" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
              <rect x="2" y="8" width="14" height="9" rx=".5"/><rect x="20" y="8" width="14" height="9" rx=".5"/>
              <line x1="2" y1="12" x2="16" y2="12"/><line x1="20" y1="12" x2="34" y2="12"/>
              <line x1="9" y1="17" x2="9" y2="22"/><line x1="27" y1="17" x2="27" y2="22"/>
              <rect x="5" y="22" width="8" height="8" rx=".5"/><rect x="23" y="22" width="8" height="8" rx=".5"/>
              <line x1="13" y1="26" x2="23" y2="26"/>
            </svg>
            <h3>Climatización Comercial / VRF</h3>
            <p>Sistemas multi-split, VRF y fan-coils para oficinas, hoteles, locales y centros comerciales.</p>
          </div>

          <div className="svc">
            <svg className="svc-icon" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
              <rect x="3" y="6" width="30" height="22" rx=".5"/>
              <line x1="3" y1="14" x2="33" y2="14"/>
              <line x1="10" y1="6" x2="10" y2="14"/><line x1="18" y1="6" x2="18" y2="14"/><line x1="26" y1="6" x2="26" y2="14"/>
              <line x1="7" y1="20" x2="7" y2="22"/><line x1="14" y1="20" x2="14" y2="22"/><line x1="21" y1="20" x2="21" y2="22"/><line x1="28" y1="20" x2="28" y2="22"/>
              <line x1="3" y1="28" x2="33" y2="28"/>
            </svg>
            <h3>Refrigeración Comercial</h3>
            <p>Vitrinas, góndolas y equipos de frío para supermercados, carnicerías y gastronomía.</p>
          </div>

          <div className="svc">
            <svg className="svc-icon" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
              <circle cx="18" cy="18" r="8"/><circle cx="18" cy="18" r="2.5"/>
              <path d="M18 4v5M18 27v5M4 18h5M27 18h5"/>
              <path d="M8.5 8.5l3.5 3.5M24 24l3.5 3.5M27.5 8.5L24 12M12 24l-3.5 3.5"/>
            </svg>
            <h3>Ventilación y Extracción</h3>
            <p>Sistemas VMC, extractores industriales y renovación de aire para ambientes exigentes.</p>
          </div>

          <div className="svc">
            <svg className="svc-icon" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
              <path d="M6 28 C8 22 14 18 18 18 C22 18 24 14 22 10"/>
              <path d="M22 10 L26 14 M22 10 L18 14"/>
              <circle cx="28" cy="10" r="3"/>
              <path d="M10 32 L14 26 L18 29 L24 20"/>
            </svg>
            <h3>Mantenimiento Preventivo</h3>
            <p>Planes de mantenimiento periódico, diagnóstico y garantía de rendimiento para toda la instalación.</p>
          </div>

          <div className="svc">
            <svg className="svc-icon" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
              <rect x="5" y="5" width="18" height="26" rx=".5"/>
              <line x1="9" y1="12" x2="19" y2="12"/><line x1="9" y1="17" x2="19" y2="17"/><line x1="9" y1="22" x2="15" y2="22"/>
              <circle cx="26" cy="26" r="6"/>
              <path d="M23 26 L25 28 L29 23"/>
            </svg>
            <h3>Proyectos Llave en Mano</h3>
            <p>Diseño, suministro, instalación y puesta en marcha. Un solo interlocutor de inicio a fin.</p>
          </div>

          <div className="svc">
            <svg className="svc-icon" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
              <path d="M4 32 L12 20 L20 25 L28 10 L34 14"/>
              <circle cx="12" cy="20" r="2" fill="currentColor" stroke="none"/>
              <circle cx="20" cy="25" r="2" fill="currentColor" stroke="none"/>
              <circle cx="28" cy="10" r="2" fill="currentColor" stroke="none"/>
              <line x1="4" y1="32" x2="34" y2="32"/>
            </svg>
            <h3>Análisis Operacional VRV/VRF</h3>
            <p>Auditoría de sistemas instalados, lectura de datos y optimización del rendimiento real.</p>
          </div>

          <div className="svc">
            <svg className="svc-icon" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
              <path d="M18 4 L21 13 L30 13 L23 19 L26 28 L18 22 L10 28 L13 19 L6 13 L15 13 Z"/>
            </svg>
            <h3>Eficiencia Energética HVAC</h3>
            <p>Diagnóstico de consumo, selección de equipos A+++ y certificación de eficiencia energética.</p>
          </div>

          <div className="svc">
            <svg className="svc-icon" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
              <rect x="3" y="4" width="30" height="22" rx=".5"/>
              <line x1="10" y1="4" x2="10" y2="26"/><line x1="18" y1="4" x2="18" y2="26"/>
              <line x1="3" y1="12" x2="33" y2="12"/><line x1="3" y1="20" x2="33" y2="20"/>
              <line x1="8" y1="30" x2="28" y2="30"/>
              <line x1="18" y1="26" x2="18" y2="30"/>
            </svg>
            <h3>Asesoría de Ingeniería</h3>
            <p>Ingeniería de detalle, especificaciones técnicas y soporte para arquitectos y constructoras.</p>
          </div>

        </div>
      </section>

      {/* NOSOTROS */}
      <section className="sec" id="nosotros">
        <div className="nosotros-wrap">
          <div className="nt">
            <div className="sec-eyebrow">Quiénes somos</div>
            <div className="sec-title">Dos décadas de<br />excelencia climática</div>
            <p>D&Z Building es una empresa especializada en soluciones integrales de climatización, refrigeración y ambientación climática para proyectos comerciales e industriales en todo Chile.</p>
            <p>Con 20 años de trayectoria, combinamos ingeniería de precisión con un profundo conocimiento del mercado nacional, ofreciendo desde asesoría técnica hasta proyectos llave en mano con los sistemas VRF/VRV más avanzados del mercado.</p>
          </div>
          <div className="stats">
            <div className="stat"><div className="stat-n">20</div><div className="stat-l">años de experiencia</div></div>
            <div className="stat"><div className="stat-n">CL</div><div className="stat-l">Cobertura nacional</div></div>
            <div className="stat"><div className="stat-n">3</div><div className="stat-l">Marcas oficiales</div></div>
            <div className="stat"><div className="stat-n">24/7</div><div className="stat-l">Soporte técnico</div></div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="sec" id="contacto">
        <div className="sec-eyebrow">Hablemos</div>
        <div className="sec-title">Solicitar Cotización</div>
        <div className="contact-grid">
          <div className="ci-block">
            <h4>Contacto directo</h4>
            <div className="ci">
              <svg className="ci-ico" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <path d="M7.5 1C5.6 1 4 2.6 4 4.5c0 3 3.5 8.5 3.5 8.5S11 7.5 11 4.5C11 2.6 9.4 1 7.5 1z"/>
                <circle cx="7.5" cy="4.5" r="1.5"/>
              </svg>
              <div className="ci-txt"><strong>Ubicación</strong>Chile</div>
            </div>
            <div className="ci">
              <svg className="ci-ico" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <path d="M1.5 1.5h2l1 2-1.5 1.5a8.5 8.5 0 003.5 3.5L8 7l2 1v2a1 1 0 01-1 1A11 11 0 01.5 2.5a1 1 0 011-1z"/>
              </svg>
              <div className="ci-txt"><strong>Teléfono</strong>Por definir</div>
            </div>
            <div className="ci">
              <svg className="ci-ico" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <rect x="1" y="2.5" width="13" height="10" rx="1"/>
                <path d="M1 3.5l6.5 4.5 6.5-4.5"/>
              </svg>
              <div className="ci-txt"><strong>Email</strong>contacto@dyzbuilding.cl</div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer>
        <div className="f-logo">
          <Image src="/logo.png" alt="D&Z Building" width={650} height={300} style={{ height: 32, width: 'auto' }} />
        </div>
        <ul className="f-links">
          <li><a href="#servicios">Especialidades</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <div className="f-copy">© 2026 D&Z Building. Todos los derechos reservados.</div>
      </footer>
    </>
  )
}
