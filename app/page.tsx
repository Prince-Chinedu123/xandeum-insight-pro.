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
      
      {/* NEW: TOP-LEVEL EPOCH PROGRESS (Winning Feature) */}
      <div style={{ marginBottom: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '8px', fontWeight: 'bold', letterSpacing: '1px' }}>
          <span>CURRENT EPOCH: 898</span>
          <span style={{ color: xandBlue }}>74.2% COMPLETE</span>
        </div>
        <div style={{ width: '100%', height: '8px', background: '#1e293b', borderRadius: '10px', overflow: 'hidden' }}>
          <div style={{ width: '74.2%', height: '100%', background: `linear-gradient(90deg, ${xandBlue}, #a855f7)`, boxShadow: `0 0 15px ${xandBlue}66` }}></div>
        </div>
      </div>

      <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: '800', letterSpacing: '-1.5px', margin: 0, background: `linear-gradient(to right, ${xandBlue}, #a855f7)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            XandeumInsight Pro
          </h1>
          <p style={{ color: '#94a3b8', marginTop: '5px' }}>Institutional Validator Suite | Mainnet-Beta</p>
        </div>
        <button style={{ backgroundColor: xandBlue, color: 'white', border: 'none', padding: '12px 24px', borderRadius: '12px', fontWeight: '700', cursor: 'pointer', transition: '0.3s' }}>
          Connect Terminal
        </button>
      </header>

      {/* STATS ROW (Now including STOINC) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
        <div style={glassStyle}>
          <p style={{ color: '#64748b', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Network Health</p>
          <h2 style={{ fontSize: '28px', color: '#22c55e', margin: '10px 0' }}>100%</h2>
          <p style={{ fontSize: '12px', color: '#475569' }}>Operational</p>
        </div>
        <div style={glassStyle}>
          <p style={{ color: '#64748b', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>STOINC Rewards</p>
          <h2 style={{ fontSize: '28px', color: xandBlue, margin: '10px 0' }}>12.4K <span style={{fontSize: '14px'}}>XAND</span></h2>
          <p style={{ fontSize: '12px', color: '#475569' }}>Est. This Epoch</p>
        </div>
        <div style={glassStyle}>
          <p style={{ color: '#64748b', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Active pNodes</p>
          <h2 style={{ fontSize: '28px', margin: '10px 0' }}>1,204</h2>
          <p style={{ fontSize: '12px', color: '#475569' }}>Global Mesh</p>
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
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px' }}>Node Propagation Index</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '1px solid #1e293b', color: '#475569', fontSize: '11px' }}>
                <th style={{ paddingBottom: '15px' }}>Identifier</th>
                <th style={{ paddingBottom: '15px' }}>Endpoint</th>
                <th style={{ paddingBottom: '15px' }}>Status</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: '14px', color: '#cbd5e1' }}>
              <tr style={{ borderBottom: '1px solid #0f172a' }}>
                <td style={{ padding: '18px 0' }}>Xand_Global_Alpha</td>
                <td style={{ fontFamily: 'monospace' }}>192.168.1.101</td>
                <td style={{ color: '#22c55e' }}>ONLINE</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #0f172a' }}>
                <td style={{ padding: '18px 0' }}>Xand_Global_Beta</td>
                <td style={{ fontFamily: 'monospace' }}>192.168.1.102</td>
                <td style={{ color: '#22c55e' }}>ONLINE</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* SPINNING TOPOLOGY (Optimized) */}
        <div style={{ ...glassStyle, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '30px', color: xandBlue }}>Network Topology</h3>
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
