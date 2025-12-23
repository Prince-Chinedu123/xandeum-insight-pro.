"use client";

import React from 'react';

export default function Home() {
  const xandBlue = '#0ea5e9'; 
  const xandDeep = '#020617';

  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '24px',
    padding: '24px',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
  };

  return (
    <div style={{ backgroundColor: xandDeep, minHeight: '100vh', color: 'white', padding: '40px', fontFamily: 'Inter, system-ui, sans-serif' }}>
      
      {/* 1. EPOCH PROGRESS TRACKER (High-Value Feature) */}
      <div style={{ marginBottom: '35px', maxWidth: '1200px', margin: '0 auto 35px auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '10px', fontWeight: '800', letterSpacing: '1px', color: '#94a3b8' }}>
          <span>EPOCH 898 STATUS</span>
          <span style={{ color: xandBlue }}>74.2% TO DISTRIBUTION</span>
        </div>
        <div style={{ width: '100%', height: '10px', background: '#1e293b', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ width: '74.2%', height: '100%', background: `linear-gradient(90deg, ${xandBlue}, #a855f7)`, boxShadow: `0 0 20px ${xandBlue}88` }}></div>
        </div>
      </div>

      <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto 40px auto' }}>
        <div>
          <h1 style={{ fontSize: '36px', fontWeight: '900', letterSpacing: '-1.5px', margin: 0, background: `linear-gradient(to right, ${xandBlue}, #818cf8)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            XandeumInsight Pro
          </h1>
          <p style={{ color: '#64748b', marginTop: '5px', fontSize: '14px', fontWeight: '500' }}>Scalable Storage Infrastructure | Mainnet-Beta v1.4.2</p>
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{ textAlign: 'right', marginRight: '15px' }}>
            <p style={{ margin: 0, fontSize: '10px', color: '#64748b', fontWeight: 'bold' }}>NETWORK LOAD</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#22c55e', fontWeight: '700' }}>342 TPS</p>
          </div>
          <button style={{ backgroundColor: xandBlue, color: 'white', border: 'none', padding: '12px 28px', borderRadius: '14px', fontWeight: '800', cursor: 'pointer', fontSize: '14px' }}>
            Terminal Access
          </button>
        </div>
      </header>

      {/* CORE METRICS GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px', maxWidth: '1200px', margin: '0 auto 40px auto' }}>
        <div style={glassStyle}>
          <p style={{ color: '#64748b', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>vNode Health</p>
          <h2 style={{ fontSize: '28px', color: '#22c55e', margin: '10px 0', fontWeight: '800' }}>99.9%</h2>
          <p style={{ fontSize: '12px', color: '#475569' }}>Consensus Active</p>
        </div>
        <div style={glassStyle}>
          <p style={{ color: '#64748b', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase' }}>STOINC (Rewards)</p>
          <h2 style={{ fontSize: '28px', color: xandBlue, margin: '10px 0', fontWeight: '800' }}>12.4K <span style={{fontSize: '14px', verticalAlign: 'middle'}}>XAND</span></h2>
          <p style={{ fontSize: '12px', color: '#475569' }}>Storage Fee Accrual</p>
        </div>
        <div style={glassStyle}>
          <p style={{ color: '#64748b', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase' }}>pNode Mesh</p>
          <h2 style={{ fontSize: '28px', margin: '10px 0', fontWeight: '800' }}>1,204</h2>
          <p style={{ fontSize: '12px', color: '#475569' }}>Provider Density</p>
        </div>
        <div style={glassStyle}>
          <p style={{ color: '#64748b', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase' }}>Storage Depth</p>
          <h2 style={{ fontSize: '28px', margin: '10px 0', fontWeight: '800' }}>4.2 PB</h2>
          <p style={{ fontSize: '12px', color: xandBlue }}>Exabyte Ready</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1.2fr', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* NODE REGISTRY */}
        <div style={glassStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '800' }}>Provider Node Registry</h3>
            <span style={{ fontSize: '12px', color: xandBlue, background: `${xandBlue}22`, padding: '4px 12px', borderRadius: '20px', fontWeight: '700' }}>● LIVE GOSSIP</span>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '1px solid #1e293b', color: '#475569', fontSize: '11px', textTransform: 'uppercase', fontWeight: '800' }}>
                <th style={{ paddingBottom: '15px' }}>pNode ID</th>
                <th style={{ paddingBottom: '15px' }}>RPC Endpoint</th>
                <th style={{ paddingBottom: '15px' }}>Liveness</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: '14px', color: '#cbd5e1' }}>
              {[1, 2, 3].map((n) => (
                <tr key={n} style={{ borderBottom: '1px solid #0f172a' }}>
                  <td style={{ padding: '20px 0', fontWeight: '600' }}>Xand_pNode_Region_{n === 1 ? 'US' : n === 2 ? 'EU' : 'ASIA'}</td>
                  <td style={{ fontFamily: 'monospace', color: '#94a3b8' }}>142.251.3{n}.1{n}4</td>
                  <td style={{ color: '#22c55e', fontWeight: '700' }}>VERIFIED</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* TOPOLOGY VISUALIZER */}
        <div style={{ ...glassStyle, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '400px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '40px', color: xandBlue, letterSpacing: '1px', textTransform: 'uppercase' }}>Network Topology</h3>
          
          <div className="topology-spinner" style={{ 
            width: '200px', height: '200px', borderRadius: '50%', 
            border: '2px dashed rgba(14, 165, 233, 0.25)', 
            position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: 'spin 20s linear infinite' 
          }}>
            {/* Core Validator Node */}
            <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: `radial-gradient(circle at 30% 30%, ${xandBlue}, #0369a1)`, border: '2px solid rgba(255,255,255,0.8)', boxShadow: `0 0 40px ${xandBlue}88` }}></div>
            
            {/* pNode Satellite */}
            <div style={{ position: 'absolute', top: '-10px', width: '20px', height: '20px', background: '#fff', borderRadius: '50%', boxShadow: '0 0 20px #fff', border: `3px solid ${xandBlue}` }}></div>
            
            {/* Secondary pNode Satellite */}
            <div style={{ position: 'absolute', bottom: '20px', right: '-5px', width: '12px', height: '12px', background: '#a855f7', borderRadius: '50%', boxShadow: '0 0 15px #a855f7', border: '2px solid #fff' }}></div>
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <p style={{ margin: 0, fontSize: '11px', color: '#64748b', fontWeight: '700', letterSpacing: '1.5px' }}>GOSSIP MESH VISUALIZER</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#22c55e', fontWeight: 'bold' }}>LATENCY: 142ms (OPTIONAL)</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
