"use client";

import React from 'react';

export default function Home() {
  const xandBlue = '#0ea5e9'; 
  const xandDeep = '#020617';

  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '24px',
    padding: '24px',
  };

  return (
    <div style={{ backgroundColor: xandDeep, minHeight: '100vh', color: 'white', padding: '40px', fontFamily: 'Inter, sans-serif' }}>
      
      {/* 1. NEW: EPOCH PROGRESS BAR (Top level) */}
      <div style={{ marginBottom: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '8px', fontWeight: 'bold' }}>
          <span>EPOCH 892 PROGRESS</span>
          <span style={{ color: xandBlue }}>72.4%</span>
        </div>
        <div style={{ width: '100%', height: '6px', background: '#1e293b', borderRadius: '10px', overflow: 'hidden' }}>
          <div style={{ width: '72.4%', height: '100%', background: `linear-gradient(90deg, ${xandBlue}, #a855f7)`, boxShadow: `0 0 10px ${xandBlue}` }}></div>
        </div>
      </div>

      <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: '800', letterSpacing: '-1.5px', margin: 0, background: `linear-gradient(to right, ${xandBlue}, #a855f7)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            XandeumInsight Pro
          </h1>
          <p style={{ color: '#94a3b8', marginTop: '5px' }}>Institutional Validator Suite | Mainnet-Beta</p>
        </div>
        <button style={{ backgroundColor: xandBlue, color: 'white', border: 'none', padding: '12px 24px', borderRadius: '12px', fontWeight: '700', cursor: 'pointer' }}>
          Connect Terminal
        </button>
      </header>

      {/* STATS ROW (Now including STOINC) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
        <div style={glassStyle}>
          <p style={{ color: '#64748b', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Network Status</p>
          <h2 style={{ fontSize: '28px', color: '#22c55e', margin: '10px 0' }}>Online</h2>
          <p style={{ fontSize: '12px', color: '#475569' }}>Health: 100%</p>
        </div>
        <div style={glassStyle}>
          <p style={{ color: '#64748b', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>STOINC (Est. Yield)</p>
          <h2 style={{ fontSize: '28px', color: xandBlue, margin: '10px 0' }}>14,200 <span style={{fontSize: '14px'}}>XAND</span></h2>
          <p style={{ fontSize: '12px', color: '#475569' }}>Storage Rewards Active</p>
        </div>
        <div style={glassStyle}>
          <p style={{ color: '#64748b', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Validator APY</p>
          <h2 style={{ fontSize: '28px', margin: '10px 0' }}>6.31%</h2>
          <p style={{ fontSize: '12px', color: '#475569' }}>MEV Inclusive</p>
        </div>
        <div style={glassStyle}>
          <p style={{ color: '#64748b', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Storage Depth</p>
          <h2 style={{ fontSize: '28px', margin: '10px 0' }}>4.2 PB</h2>
          <p style={{ fontSize: '12px', color: xandBlue }}>Exabyte Ready</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        {/* TABLE SECTION */}
        <div style={glassStyle}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px' }}>Live Node Propagation</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '1px solid #1e293b', color: '#475569', fontSize: '11px' }}>
                <th style={{ paddingBottom: '15px' }}>Identifier</th>
                <th style={{ paddingBottom: '15px' }}>Gossip</th>
                <th style={{ paddingBottom: '15px' }}>Uptime</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: '14px', color: '#cbd5e1' }}>
              <tr style={{ borderBottom: '1px solid #0f172a' }}>
                <td style={{ padding: '18px 0' }}>Xand_Global_Alpha</td>
                <td style={{ fontFamily: 'monospace' }}>192.168.1.101</td>
                <td style={{ color: '#22c55e' }}>99.98%</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #0f172a' }}>
                <td style={{ padding: '18px 0' }}>Xand_Global_Beta</td>
                <td style={{ fontFamily: 'monospace' }}>192.168.1.102</td>
                <td style={{ color: '#22c55e' }}>99.95%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* SPINNING TOPOLOGY */}
        <div style={{ ...glassStyle, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '30px', color: xandBlue }}>Global Topology</h3>
          <div className="topology-spinner" style={{ 
            width: '180px', height: '180px', borderRadius: '50%', border: '1px dashed rgba(14, 165, 233, 0.3)', 
            position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: 'spin 15s linear infinite' 
          }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: `radial-gradient(circle, ${xandBlue}, #0369a1)`, border: '2px solid #fff', boxShadow: `0 0 30px ${xandBlue}66` }}></div>
            <div style={{ position: 'absolute', top: '-8px', width: '16px', height: '16px', background: '#fff', borderRadius: '50%', boxShadow: '0 0 15px #fff', border: `2px solid ${xandBlue}` }}></div>
          </div>
          <p style={{ marginTop: '30px', fontSize: '11px', color: '#64748b', fontWeight: '600' }}>MONITORING PEER GOSSIP</p>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
