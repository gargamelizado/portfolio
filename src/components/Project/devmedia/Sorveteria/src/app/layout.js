import './globals.css';
import Topo from '@/componentes/Topo';
import Rodape from '@/componentes/Rodape';

export const metadata = {
  title: "Sorveteria - Gelateria",
  description: "Projeto construido em React.js (Router App) do curso da DevMedia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Topo />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
