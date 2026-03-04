import React from 'react'

export default function Gallery({ items = [], link }) {
  return (
    <section className="gallery" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', padding: '1rem' }}>
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
              <img src={item.image} alt={item.title} style={{ width: '100%', borderRadius: '4px', marginBottom: '0.5rem' }} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {link && <a href={link} target="_blank" rel="noopener noreferrer">Ver mais</a>}
            </div>
          ))
        ) : (
          <p style={{ color: '#999', gridColumn: '1 / -1' }}>Nenhum item encontrado.</p>
        )}
      </div>
    </section>
  );
}

