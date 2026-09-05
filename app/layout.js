export const metadata = {
  title: 'Página de testes',
  description: 'Página mínima para validar o ambiente Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}