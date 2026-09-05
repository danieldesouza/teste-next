import './globals.css';

export const metadata = {
  title: 'Next.js Feature Matrix & Showcase',
  description: 'Apresentação moderna de recursos e componentes web do ecossistema Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}