import styles from "./page.module.css";
import "./globals.css";

export const metadata = {
  title: "Cadastro de Leads",
  description: "Front-end do Cadastro de Leads",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={styles.body}>{children}</body>
    </html>
  );
}
