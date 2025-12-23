"use client";

import React from 'react';

export default function Home() {
  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '24px',
    padding: '24px',
  };

  // Official Xandeum Brand Colors
  const xandBlue = '#0ea5e9'; // Electric blue
  const xandDeep = '#020617'; // Midnight background

  return (
    <div style={{ backgroundColor: xandDeep, minHeight: '100vh', color: 'white', padding: '40px', fontFamily: 'Inter, sans-serif' }}>
      
      {/* CORRECTED HEADER */}
      <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: '800', letterSpacing: '-1.5px', margin: 0, background: `linear-gradient(to right, ${xandBlue}, #a855f7)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            XandeumInsight Pro
          </h1>
          <p style={{ color: '#94a3b8', marginTop: '5px' }}>Institutional Validator Suite | Network: Mainnet-Beta</p>
        </div>
        <button style={{ backgroundColor: xandBlue, color: 'white', border: 'none', padding: '12px 24px', borderRadius: '12px', fontWeight: '700', cursor: 'pointer', boxShadow: `0 0 20px ${xandBlue}44` }}>
          Connect Terminal
        </button>
      </header>

      {/* STATS ROW */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
        {[
          { label: 'Network Health', val: 'Optimal', sub: '100% Uptime', color: '#22c55e' },
          { label: 'Propagation Latency', val: '142ms', sub: '-12% vs Epoch 721', color: '#fff' },
          { label: 'Active pNodes', val: '1,204', sub: 'Verified Infrastructure', color: '#fff' },
          { label: 'Storage Depth', val: '4.2 PB', sub: 'Scalable Layer Active', color: xandBlue },
        ].map((stat, i) => (
          <div key={i} style={glassStyle}>
            <p style={{ color: '#64748b', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</p>
            <h2 style={{ fontSize: '28px', color: stat.color, margin: '10px 0' }}>{stat.val}</h2>
            <p style={{ fontSize: '12px', color: '#475569' }}>{stat.sub}</p>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        
        {/* TABLE SECTION */}
        <div style={glassStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700' }}>Live Propagation Index</h3>
            <span style={{ fontSize: '12px', color: xandBlue, fontWeight: '600' }}>● Real-time Feed</span>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '1px solid #1e293b', color: '#475569', fontSize: '11px', textTransform: 'uppercase' }}>
                <th style={{ paddingBottom: '15px' }}>Node Identifier</th>
                <th style={{ paddingBottom: '15px' }}>Gossip Endpoint</th>
                <th style={{ paddingBottom: '15px' }}>Status</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: '14px', color: '#cbd5e1' }}>
              {[1, 2, 3].map((n) => (
                <tr key={n} style={{ borderBottom: '1px solid #0f172a' }}>
                  <td style={{ padding: '18px 0' }}>Xand_Validator_00{n}</td>
                  <td style={{ fontFamily: 'monospace' }}>192.168.1.10{n}</td>
                  <td style={{ color: '#22c55e', fontWeight: '600' }}>OPERATIONAL</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SPINNING TOPOLOGY (Corrected Colors) */}
        <div style={{ ...glassStyle, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '30px', color: xandBlue }}>Network Topology</h3>
          
          <div className="topology-spinner" style={{ 
            width: '180px', height: '180px', borderRadius: '50%', 
            border: '1px dashed rgba(14, 165, 233, 0.3)', 
            position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: 'spin 15s linear infinite' 
          }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: `radial-gradient(circle, ${xandBlue}, #0369a1)`, border: '2px solid #fff', boxShadow: `0 0 30px ${xandBlue}66` }}></div>
            <div style={{ position: 'absolute', top: '-8px', width: '16px', height: '16px', background: '#fff', borderRadius: '50%', boxShadow: '0 0 15px #fff', border: `2px solid ${xandBlue}` }}></div>
          </div>

          <p style={{ marginTop: '30px', fontSize: '11px', color: '#64748b', textAlign: 'center', fontWeight: '600' }}>
            GLOBAL PEER DISTRIBUTION<br/>
            <span style={{ color: '#22c55e' }}>ACTIVE MONITORING</span>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
