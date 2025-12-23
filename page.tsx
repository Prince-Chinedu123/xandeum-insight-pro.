import React from 'react';

export default function Home() {
  const accent = '#6366f1'; // Indigo Neon
  const background = '#020617'; // Midnight Slate
  
  const glassStyle = {
    background: 'rgba(15, 23, 42, 0.7)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '20px',
    padding: '24px',
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: background, color: '#f8fafc', padding: '40px', fontFamily: 'Inter, sans-serif' }}>
      <style>{`
        @keyframes pulse-soft { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .shimmer { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent); background-size: 200% 100%; animation: shimmer 3s infinite; }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
      `}</style>

      {/* Modern Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ width: '40px', height: '40px', background: `linear-gradient(135deg, ${accent}, #a855f7)`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', color: '#fff' }}>X</div>
          <div>
            <h1 style={{ fontSize: '22px', fontWeight: '800', margin: 0 }}>Xandeum<span style={{ color: accent }}>Insight</span></h1>
            <p style={{ fontSize: '11px', opacity: 0.5, margin: 0, letterSpacing: '1px' }}>INSTITUTIONAL ANALYTICS</p>
          </div>
        </div>
        <button style={{ background: accent, color: '#fff', border: 'none', padding: '12px 28px', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(99, 102, 241, 0.3)' }}>
          Connect Wallet
        </button>
      </div>

      {/* Summary Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '40px' }}>
        {[
          { label: 'Network Health', value: 'Optimal', sub: '100% Uptime' },
          { label: 'Active pNodes', value: '3', sub: 'Verified' },
          { label: 'Storage Layer', value: 'v0.8.1', sub: 'Stable' },
          { label: 'Current Epoch', value: '722', sub: 'Active' }
        ].map((s, i) => (
          <div key={i} style={glassStyle}>
            <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '8px' }}>{s.label}</div>
            <div style={{ fontSize: '28px', fontWeight: '800', marginBottom: '4px' }}>{s.value}</div>
            <div style={{ fontSize: '11px', color: '#22c55e' }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Main Analysis Section */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        <div style={glassStyle}>
          <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px' }}>Propagation Index</h2>
          <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ color: '#64748b', fontSize: '12px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <th style={{ paddingBottom: '16px' }}>VALIDATOR</th>
                <th style={{ paddingBottom: '16px' }}>ENDPOINT</th>
                <th style={{ paddingBottom: '16px' }}>STATUS</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: '14px' }}>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                <td style={{ padding: '20px 0', fontWeight: '600' }}>Xand_Node_Alpha</td>
                <td style={{ color: '#94a3b8' }}>142.250.190.46</td>
                <td><span style={{ color: '#22c55e', background: 'rgba(34, 197, 94, 0.1)', padding: '4px 10px', borderRadius: '6px', fontSize: '11px' }}>ACTIVE</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ ...glassStyle, textAlign: 'center' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '40px' }}>Network Topology</h3>
          <div style={{ width: '120px', height: '120px', borderRadius: '50%', border: `2px solid ${accent}`, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 30px rgba(99, 102, 241, 0.2)` }}>
             <div style={{ width: '10px', height: '10px', background: '#fff', borderRadius: '50%', boxShadow: '0 0 15px #fff', animation: 'pulse-soft 2s infinite' }}></div>
          </div>
          <p style={{ marginTop: '30px', fontSize: '12px', color: '#94a3b8' }}>Real-time Peer Mapping Enabled</p>
        </div>
      </div>
    </main>
  );
}