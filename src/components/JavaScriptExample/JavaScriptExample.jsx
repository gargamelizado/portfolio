import { useMemo, useState } from 'react';

const tarefasIniciais = [
  { id: 1, titulo: 'Levantamento de requisitos', horas: 3, status: 'Concluida' },
  { id: 2, titulo: 'Protótipo no Figma', horas: 2, status: 'Em andamento' },
  { id: 3, titulo: 'Integração da API', horas: 4, status: 'Pendente' },
];

const pageStyle = {
  minHeight: 'calc(100vh - 100px)',
  display: 'grid',
  placeItems: 'center',
  padding: '2rem 1rem',
  background:
    'radial-gradient(circle at top right, #bae6fd 0%, #e0f2fe 36%, #f8fafc 100%)',
};

const cardStyle = {
  width: '100%',
  maxWidth: '760px',
  borderRadius: '16px',
  border: '1px solid #cbd5e1',
  backgroundColor: '#ffffff',
  boxShadow: '0 14px 30px -20px rgba(2, 6, 23, 0.4)',
  padding: '1.5rem',
};

const buttonBase = {
  border: '1px solid #cbd5e1',
  borderRadius: '999px',
  padding: '0.35rem 0.8rem',
  fontWeight: 600,
  cursor: 'pointer',
  background: 'white',
};

function calcularTotalHoras(tarefas) {
  return tarefas.reduce((acumulador, tarefa) => acumulador + tarefa.horas, 0);
}

export default function JavaScriptExample() {
  const [tarefas, setTarefas] = useState(tarefasIniciais);
  const [filtro, setFiltro] = useState('Todas');

  const tarefasFiltradas = useMemo(() => {
    if (filtro === 'Todas') {
      return tarefas;
    }
    return tarefas.filter((tarefa) => tarefa.status === filtro);
  }, [filtro, tarefas]);

  const totalHoras = useMemo(() => calcularTotalHoras(tarefasFiltradas), [tarefasFiltradas]);

  const marcarConcluida = (id) => {
    setTarefas((estadoAtual) =>
      estadoAtual.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, status: 'Concluida' } : tarefa
      )
    );
  };

  return (
    <main style={pageStyle}>
      <section style={cardStyle}>
        <h1 style={{ margin: 0, color: '#0f172a' }}>Exemplo de Aplicação em JavaScript</h1>
        <p style={{ color: '#334155', marginTop: '0.5rem' }}>
          Esta tela demonstra gerenciamento de estado e filtros de tarefas com React.
        </p>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          {['Todas', 'Pendente', 'Em andamento', 'Concluida'].map((item) => {
            const ativo = item === filtro;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setFiltro(item)}
                style={{
                  ...buttonBase,
                  borderColor: ativo ? '#0284c7' : '#cbd5e1',
                  backgroundColor: ativo ? '#e0f2fe' : '#ffffff',
                  color: '#0f172a',
                }}
              >
                {item}
              </button>
            );
          })}
        </div>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {tarefasFiltradas.map((tarefa) => (
            <li
              key={tarefa.id}
              style={{
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '0.85rem',
                marginBottom: '0.6rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '0.8rem',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <strong style={{ color: '#0f172a' }}>{tarefa.titulo}</strong>
                <p style={{ margin: '0.35rem 0 0', color: '#475569' }}>
                  {tarefa.horas}h • {tarefa.status}
                </p>
              </div>

              {tarefa.status !== 'Concluida' && (
                <button
                  type="button"
                  onClick={() => marcarConcluida(tarefa.id)}
                  style={{ ...buttonBase, borderColor: '#059669', color: '#065f46' }}
                >
                  Marcar como concluída
                </button>
              )}
            </li>
          ))}
        </ul>

        <p style={{ marginBottom: 0, color: '#0f172a', fontWeight: 600 }}>
          Total de horas visíveis: {totalHoras}h
        </p>
      </section>
    </main>
  );
}
