/**
 * Galeria genérica por props (items com image, title, description). Não usada na home atual.
 */
import React from 'react'
import './Gallery.css'

export default function Gallery({ items = [], link }) {
  return (
    <section className="gallery">
      <div className="gallery-grid">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="gallery-item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  referrerPolicy="strict-origin-when-cross-origin"
                >
                  Ver mais
                </a>
              )}
            </div>
          ))
        ) : (
          <p className="gallery-empty">Nenhum item encontrado.</p>
        )}
      </div>
    </section>
  );
}
