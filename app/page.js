'use client';

import { useState, useTransition } from 'react';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('client');
  const [likes, setLikes] = useState(42);
  const [isLiked, setIsLiked] = useState(false);
  const [serverStatus, setServerStatus] = useState({ status: 'idle', message: '' });
  const [isPending, startTransition] = useTransition();
  const [isLoadingStream, setIsLoadingStream] = useState(false);
  const [streamData, setStreamData] = useState(null);

  // Simulação de Server Action
  const handleServerAction = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const itemName = formData.get('item');
    if (!itemName) return;

    startTransition(async () => {
      setServerStatus({ status: 'loading', message: 'Executando Server Action no backend...' });
      await new Promise((res) => setTimeout(res, 650));
      setServerStatus({
        status: 'success',
        message: `Item "${itemName}" gravado com sucesso no servidor via Server Action!`,
      });
      e.target.reset();
    });
  };

  // Simulação de Streaming Suspense
  const handleStreamTest = () => {
    setIsLoadingStream(true);
    setStreamData(null);
    setTimeout(() => {
      setStreamData({
        user: 'Dev Next.js',
        metrics: { renderTime: '4.2ms', memory: '18MB', rscPayload: '1.2kb' },
        timestamp: new Date().toLocaleTimeString('pt-BR'),
      });
      setIsLoadingStream(false);
    }, 900);
  };

  return (
    <div style={{ minHeight: '100vh', padding: '0 1.5rem 4rem 1.5rem', position: 'relative' }}>
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />

      {/* Header / Top Navigation */}
      <header
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1.5rem 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #000, #1e293b)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
            }}
          >
            <span style={{ fontWeight: '900', fontSize: '1.2rem', color: '#fff' }}>▲</span>
          </div>
          <div>
            <h2 style={{ fontSize: '1.1rem', fontWeight: '700', letterSpacing: '-0.02em', color: '#fff' }}>
              Next.js <span style={{ color: 'var(--accent-cyan)' }}>Showcase</span>
            </h2>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>App Router & Recursos Web</p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.04)',
              padding: '6px 14px',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.82rem',
            }}
          >
            <span className="pulse-dot" />
            <span style={{ color: '#d1d5db' }}>Turbopack Ready</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        style={{
          maxWidth: '1000px',
          margin: '3.5rem auto 4.5rem auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div style={{ marginBottom: '1.2rem' }}>
          <span className="badge badge-glow">✨ Arquitetura Moderna e Reativa</span>
        </div>

        <h1
          className="gradient-title"
          style={{
            fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
            fontWeight: '800',
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
          }}
        >
          O Poder do Next.js em Ação
        </h1>

        <p
          style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: 'var(--text-muted)',
            maxWidth: '720px',
            margin: '0 auto 2.5rem auto',
            fontWeight: '400',
          }}
        >
          Explore componentes interativos, Server Components híbridos, Streaming com Suspense e
          Server Actions de alto desempenho — tudo renderizado com velocidade extrema.
        </p>

        {/* Quick Metrics Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            maxWidth: '850px',
            margin: '0 auto',
          }}
        >
          {[
            { value: '0 ms', label: 'Layout Shift (CLS)', icon: '⚡' },
            { value: 'React 19', label: 'Server Components Nativos', icon: '⚛️' },
            { value: 'Edge Ready', label: 'Baixa Latência Global', icon: '🌐' },
          ].map((metric, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{ padding: '1.2rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <span style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>{metric.icon}</span>
              <strong style={{ fontSize: '1.3rem', color: '#fff', fontWeight: '700' }}>{metric.value}</strong>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Main Grid: Key Features Showcase */}
      <section style={{ maxWidth: '1200px', margin: '0 auto 5rem auto', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#fff' }}>
            Recursos Essenciais da Web
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Tecnologias que tornam as aplicações Next.js rápidas, escaláveis e amigáveis para SEO.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {/* Feature 1 */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(56, 189, 248, 0.15)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.3rem',
                marginBottom: '1.2rem',
              }}
            >
              🖥️
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: '#fff' }}>
              React Server Components (RSC)
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1rem' }}>
              Renderização no servidor por padrão, reduzindo o envio de JavaScript para o navegador e acelerando o First Contentful Paint.
            </p>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.06)', padding: '4px 10px', borderRadius: '6px', color: '#93c5fd' }}>
                Zero Client JS
              </span>
              <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.06)', padding: '4px 10px', borderRadius: '6px', color: '#93c5fd' }}>
                Direct DB Access
              </span>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(168, 85, 247, 0.15)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.3rem',
                marginBottom: '1.2rem',
              }}
            >
              ⚡
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: '#fff' }}>
              Server Actions & Mutations
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1rem' }}>
              Execute funções no backend de forma direta a partir de formulários e botões, sem a necessidade de criar endpoints REST manuais.
            </p>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.06)', padding: '4px 10px', borderRadius: '6px', color: '#d8b4fe' }}>
                Type-safe
              </span>
              <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.06)', padding: '4px 10px', borderRadius: '6px', color: '#d8b4fe' }}>
                Progressive Enhancement
              </span>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.3rem',
                marginBottom: '1.2rem',
              }}
            >
              🌊
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: '#fff' }}>
              Streaming & React Suspense
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1rem' }}>
              Transmissão progressiva de partes da UI assim que ficam prontas, eliminando telas travadas enquanto os dados carregam.
            </p>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.06)', padding: '4px 10px', borderRadius: '6px', color: '#6ee7b7' }}>
                Instant Loading States
              </span>
              <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.06)', padding: '4px 10px', borderRadius: '6px', color: '#6ee7b7' }}>
                Selective Hydration
              </span>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(236, 72, 153, 0.15)',
                border: '1px solid rgba(236, 72, 153, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.3rem',
                marginBottom: '1.2rem',
              }}
            >
              🎨
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: '#fff' }}>
              Otimização de Imagens e Fontes
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1rem' }}>
              Conversão automática para formatos modernos (AVIF/WebP), dimensionamento dinâmico e auto-hosting de fontes para zero CLS.
            </p>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.06)', padding: '4px 10px', borderRadius: '6px', color: '#f472b6' }}>
                next/image
              </span>
              <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.06)', padding: '4px 10px', borderRadius: '6px', color: '#f472b6' }}>
                next/font
              </span>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(245, 158, 11, 0.15)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.3rem',
                marginBottom: '1.2rem',
              }}
            >
              🧭
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: '#fff' }}>
              App Router Avançado
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1rem' }}>
              Suporte a layouts aninhados, rotas paralelas, interceptação de rotas e rotas dinâmicas de forma intuitiva baseada em pastas.
            </p>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.06)', padding: '4px 10px', borderRadius: '6px', color: '#fcd34d' }}>
                Parallel Routes
              </span>
              <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.06)', padding: '4px 10px', borderRadius: '6px', color: '#fcd34d' }}>
                Route Handlers
              </span>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(99, 102, 241, 0.15)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.3rem',
                marginBottom: '1.2rem',
              }}
            >
              🛡️
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: '#fff' }}>
              Middleware & Edge Runtime
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1rem' }}>
              Autenticação, redirecionamentos, geolocalização e reescrita de URLs executados antes mesmo da requisição atingir a página.
            </p>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.06)', padding: '4px 10px', borderRadius: '6px', color: '#a5b4fc' }}>
                Edge Functions
              </span>
              <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.06)', padding: '4px 10px', borderRadius: '6px', color: '#a5b4fc' }}>
                Vercel Network
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Component Showcase / Playground */}
      <section
        style={{
          maxWidth: '1000px',
          margin: '0 auto 4rem auto',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div className="glass-card" style={{ padding: '2.5rem 2rem', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <span className="badge" style={{ background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent-cyan)', border: '1px solid rgba(6, 182, 212, 0.3)', marginBottom: '0.5rem' }}>
                Live Component Lab
              </span>
              <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#fff' }}>
                Experimente os Recursos em Tempo Real
              </h2>
            </div>

            {/* Tab selector */}
            <div
              style={{
                display: 'flex',
                background: 'rgba(0,0,0,0.4)',
                padding: '4px',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.06)',
                gap: '4px',
              }}
            >
              {[
                { id: 'client', label: 'Componente Cliente' },
                { id: 'action', label: 'Server Action' },
                { id: 'stream', label: 'Streaming' },
                { id: 'code', label: 'Código' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: activeTab === tab.id ? 'rgba(139, 92, 246, 0.25)' : 'transparent',
                    color: activeTab === tab.id ? '#fff' : 'var(--text-muted)',
                    border: activeTab === tab.id ? '1px solid rgba(139, 92, 246, 0.4)' : '1px solid transparent',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab 1: Client Interactive Component */}
          {activeTab === 'client' && (
            <div
              style={{
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '14px',
                padding: '2rem',
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '600' }}>
                    Reatividade & Estado Local
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    Marcado com a diretiva <code style={{ color: 'var(--accent-cyan)', background: 'rgba(0,0,0,0.5)', padding: '2px 6px', borderRadius: '4px' }}>&quot;use client&quot;</code>.
                  </p>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', background: 'rgba(16,185,129,0.1)', padding: '4px 10px', borderRadius: '9999px', border: '1px solid rgba(16,185,129,0.2)' }}>
                  Hidratação Concluída
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => {
                    setIsLiked(!isLiked);
                    setLikes(isLiked ? likes - 1 : likes + 1);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 24px',
                    borderRadius: '12px',
                    background: isLiked ? 'linear-gradient(135deg, #ec4899, #8b5cf6)' : 'rgba(255,255,255,0.08)',
                    color: '#fff',
                    border: 'none',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: isLiked ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: isLiked ? '0 10px 25px rgba(236,72,153,0.35)' : 'none',
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>{isLiked ? '❤️' : '🤍'}</span>
                  <span>{isLiked ? 'Curtido!' : 'Curtir Showcase'}</span>
                  <span style={{ background: 'rgba(0,0,0,0.2)', padding: '2px 8px', borderRadius: '6px', fontSize: '0.85rem' }}>
                    {likes}
                  </span>
                </button>

                <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                  Clique no botão para disparar uma re-renderização imediata e interativa no cliente.
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Server Action Simulation */}
          {activeTab === 'action' && (
            <div
              style={{
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '14px',
                padding: '2rem',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.3rem' }}>
                Simulação de Server Action (Zero API Endpoints)
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                Envie dados que são processados diretamente na camada do servidor via chamadas RPC nativas.
              </p>

              <form onSubmit={handleServerAction} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <input
                  name="item"
                  type="text"
                  placeholder="Digite um recurso (ex: Middleware, Turbopack)..."
                  required
                  style={{
                    flex: '1',
                    minWidth: '240px',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#fff',
                    outline: 'none',
                  }}
                />
                <button
                  type="submit"
                  disabled={isPending}
                  style={{
                    padding: '12px 24px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                    color: '#fff',
                    border: 'none',
                    fontWeight: '600',
                    cursor: isPending ? 'not-allowed' : 'pointer',
                    opacity: isPending ? 0.7 : 1,
                    transition: 'all 0.2s',
                  }}
                >
                  {isPending ? 'Enviando...' : 'Executar Action'}
                </button>
              </form>

              {serverStatus.message && (
                <div
                  style={{
                    marginTop: '1.2rem',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: serverStatus.status === 'success' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(6, 182, 212, 0.15)',
                    border: serverStatus.status === 'success' ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(6, 182, 212, 0.3)',
                    color: serverStatus.status === 'success' ? '#6ee7b7' : '#67e8f9',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span>{serverStatus.status === 'success' ? '✅' : '⏳'}</span>
                  <span>{serverStatus.message}</span>
                </div>
              )}
            </div>
          )}

          {/* Tab 3: Streaming Simulation */}
          {activeTab === 'stream' && (
            <div
              style={{
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '14px',
                padding: '2rem',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '600' }}>
                    Streaming SSR & Suspense Fallback
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    Permite renderizar a estrutura da página instantaneamente enquanto partes pesadas chegam via stream.
                  </p>
                </div>
                <button
                  onClick={handleStreamTest}
                  disabled={isLoadingStream}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.1)',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.2)',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                  }}
                >
                  {isLoadingStream ? 'Transmitindo...' : 'Disparar Stream'}
                </button>
              </div>

              {isLoadingStream ? (
                <div
                  style={{
                    padding: '2rem',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px dashed rgba(255,255,255,0.2)',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ color: 'var(--accent-purple)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>⏳</div>
                  <strong style={{ color: '#fff', display: 'block' }}>&lt;Suspense fallback=&#123;&lt;Skeleton /&gt;&#125;&gt;</strong>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Recebendo chunks de dados do servidor...</span>
                </div>
              ) : streamData ? (
                <div
                  style={{
                    padding: '1.5rem',
                    borderRadius: '10px',
                    background: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                    <span style={{ color: '#6ee7b7', fontWeight: '700' }}>Dados Transmitidos com Sucesso!</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{streamData.timestamp}</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', textAlign: 'center' }}>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '8px', borderRadius: '6px' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Render Time</span>
                      <strong style={{ color: '#fff' }}>{streamData.metrics.renderTime}</strong>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '8px', borderRadius: '6px' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Memory Overhead</span>
                      <strong style={{ color: '#fff' }}>{streamData.metrics.memory}</strong>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '8px', borderRadius: '6px' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>RSC Payload</span>
                      <strong style={{ color: '#fff' }}>{streamData.metrics.rscPayload}</strong>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    padding: '1.5rem',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    textAlign: 'center',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                  }}
                >
                  Clique em &quot;Disparar Stream&quot; para simular o carregamento progressivo assíncrono.
                </div>
              )}
            </div>
          )}

          {/* Tab 4: Code Preview */}
          {activeTab === 'code' && (
            <div
              style={{
                background: '#04060a',
                borderRadius: '14px',
                padding: '1.5rem',
                border: '1px solid rgba(255,255,255,0.08)',
                fontFamily: 'monospace',
                fontSize: '0.88rem',
                color: '#e2e8f0',
                overflowX: 'auto',
                lineHeight: 1.6,
              }}
            >
              <span style={{ color: '#94a3b8' }}>// app/page.js - Server Component & Action</span>
              <br />
              <span style={{ color: '#c084fc' }}>async function</span> <span style={{ color: '#67e8f9' }}>addItem</span>(formData) &#123;
              <br />
              &nbsp;&nbsp;<span style={{ color: '#f472b6' }}>&apos;use server&apos;</span>;
              <br />
              &nbsp;&nbsp;<span style={{ color: '#c084fc' }}>const</span> title = formData.<span style={{ color: '#67e8f9' }}>get</span>(<span style={{ color: '#a5f3fc' }}>&apos;title&apos;</span>);
              <br />
              &nbsp;&nbsp;<span style={{ color: '#c084fc' }}>await</span> db.<span style={{ color: '#67e8f9' }}>insert</span>(&#123; title &#125;);
              <br />
              &#125;
              <br />
              <br />
              <span style={{ color: '#c084fc' }}>export default function</span> <span style={{ color: '#67e8f9' }}>Page</span>() &#123;
              <br />
              &nbsp;&nbsp;<span style={{ color: '#c084fc' }}>return</span> (
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: '#38bdf8' }}>form</span> action=&#123;addItem&#125;&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: '#38bdf8' }}>input</span> name=<span style={{ color: '#a5f3fc' }}>&quot;title&quot;</span> /&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: '#38bdf8' }}>button</span> type=<span style={{ color: '#a5f3fc' }}>&quot;submit&quot;</span>&gt;Salvar&lt;/<span style={{ color: '#38bdf8' }}>button</span>&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style={{ color: '#38bdf8' }}>form</span>&gt;
              <br />
              &nbsp;&nbsp;);
              <br />
              &#125;
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          color: 'var(--text-muted)',
          fontSize: '0.85rem',
        }}
      >
        <div>
          <span>Next.js Web Showcase • Desenvolvido com App Router & React 19</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <span style={{ color: '#9ca3af' }}>Zero Config</span>
          <span>•</span>
          <span style={{ color: '#9ca3af' }}>Full-Stack Simplicity</span>
          <span>•</span>
          <span style={{ color: '#9ca3af' }}>Production Ready</span>
        </div>
      </footer>
    </div>
  );
}