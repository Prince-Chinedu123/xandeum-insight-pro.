import React from 'react';

export default function Home() {
  const accent = '#6366f1'; 
  const background = '#020617'; 
  
  const glassStyle = {
    background: 'rgba(15, 23, 42, 0.7)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '20px',
    padding: '24px',
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: background, color: '#f8fafc', padding: '40px', fontFamily: 'system-ui, sans-serif' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ width: '42px', height: '42px', background: `linear-gradient(135deg, ${accent}, #a855f7)`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', color: '#fff' }}>X</div>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', margin: 0, letterSpacing: '-0.5px' }}>Xandeum<span style={{ color: accent }}>Insight</span> Pro</h1>
            <p style={{ fontSize: '11px', opacity: 0.5, margin: 0, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Institutional Validator Suite</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px 20px', borderRadius: '12px', fontSize: '13px', border: '1px solid rgba(255,255,255,0.1)' }}>Network: Mainnet-Beta</div>
          <button style={{ background: accent, color: '#fff', border: 'none', padding: '12px 28px', borderRadius: '12px', fontWeight: '600', cursor: 'pointer' }}>Connect Terminal</button>
        </div>
      </div>

      {/* Grid Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '40px' }}>
        {[
          { label: 'Network Health', value: 'Optimal', sub: '100% Uptime', color: '#22c55e' },
          { label: 'Propagation Latency', value: '142ms', sub: '-12% vs Epoch 721', color: '#6366f1' },
          { label: 'Active pNodes', value: '1,204', sub: 'Verified Infrastructure', color: '#6366f1' },
          { label: 'Storage Depth', value: '4.2 PB', sub: 'Scalable Layer Active', color: '#22c55e' }
        ].map((s, i) => (
          <div key={i} style={glassStyle}>
            <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '10px', fontWeight: '500' }}>{s.label}</div>
            <div style={{ fontSize: '28px', fontWeight: '800', marginBottom: '6px' }}>{s.value}</div>
            <div style={{ fontSize: '11px', color: s.color, fontWeight: '600' }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Main Analysis Area */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        <div style={glassStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '700' }}>Live Propagation Index</h2>
            <span style={{ fontSize: '12px', color: accent }}>Real-time Update Active</span>
          </div>
          <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ color: '#64748b', fontSize: '11px', borderBottom: '1px solid rgba(255,255,255,0.08)', textTransform: 'uppercase' }}>
                <th style={{ paddingBottom: '16px' }}>Node Identifier</th>
                <th style={{ paddingBottom: '16px' }}>Gossip Endpoint</th>
                <th style={{ paddingBottom: '16px' }}>Status</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: '14px' }}>
              {[1, 2, 3].map((_, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                  <td style={{ padding: '20px 0', fontWeight: '600' }}>Xand_Validator_00{i+1}</td>
                  <td style={{ color: '#94a3b8', fontFamily: 'monospace' }}>192.168.1.{100 + i}</td>
                  <td><span style={{ color: '#22c55e', background: 'rgba(34, 197, 94, 0.1)', padding: '4px 10px', borderRadius: '6px', fontSize: '10px', fontWeight: '700' }}>OPERATIONAL</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ ...glassStyle, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '30px' }}>Network Topology</h3>
          <div style={{ width: '160px', height: '160px', borderRadius: '50%', border: `1px dashed ${accent}`, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: `radial-gradient(circle, ${accent}33, transparent)`, border: `1px solid ${accent}` }}></div>
             <div style={{ position: 'absolute', top: '10px', width: '8px', height: '8px', background: '#fff', borderRadius: '50%', boxShadow: '0 0 10px #fff' }}></div>
          </div>
          <p style={{ marginTop: '30px', fontSize: '12px', color: '#94a3b8', textAlign: 'center' }}>Global Peer Distribution<br/>Map Active</p>
        </div>
      </div>
    </main>
  );
}
