"use client"; // Required for interactivity in Next.js

import React from 'react';

// This is the "Main Entrance" Next.js requires to avoid errors
export default function Home() {
  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    padding: '24px',
  };

  return (
    <div style={{ backgroundColor: '#020617', minHeight: '100vh', color: 'white', padding: '40px', fontFamily: 'sans-serif' }}>
      
      {/* RESTORED HEADER */}
      <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: '800', margin: 0 }}>XandeumInsight Pro</h1>
          <p style={{ color: '#94a3b8', marginTop: '5px' }}>Institutional Validator Suite | Mainnet-Beta</p>
        </div>
        <button style={{ backgroundColor: '#6366f1', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '12px', fontWeight: '600' }}>
          Connect Terminal
        </button>
      </header>

      {/* RESTORED STATS ROW */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
        <div style={glassStyle}>
          <p style={{ color: '#94a3b8', fontSize: '12px' }}>Network Health</p>
          <h2 style={{ fontSize: '24px', color: '#22c55e' }}>Optimal</h2>
          <p style={{ fontSize: '12px' }}>100% Uptime</p>
        </div>
        <div style={glassStyle}>
          <p style={{ color: '#94a3b8', fontSize: '12px' }}>Propagation Latency</p>
          <h2 style={{ fontSize: '24px' }}>142ms</h2>
          <p style={{ fontSize: '12px', color: '#ef4444' }}>-12% vs Epoch 721</p>
        </div>
        <div style={glassStyle}>
          <p style={{ color: '#94a3b8', fontSize: '12px' }}>Active pNodes</p>
          <h2 style={{ fontSize: '24px' }}>1,204</h2>
          <p style={{ fontSize: '12px' }}>Verified Infrastructure</p>
        </div>
        <div style={glassStyle}>
          <p style={{ color: '#94a3b8', fontSize: '12px' }}>Storage Depth</p>
          <h2 style={{ fontSize: '24px' }}>4.2 PB</h2>
          <p style={{ fontSize: '12px', color: '#6366f1' }}>Scalable Layer Active</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        
        {/* RESTORED TABLE */}
        <div style={glassStyle}>
          <h3 style={{ fontSize: '18px', marginBottom: '20px' }}>Live Propagation Index</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '1px solid #1e293b', color: '#94a3b8', fontSize: '12px' }}>
                <th style={{ paddingBottom: '15px' }}>Node Identifier</th>
                <th style={{ paddingBottom: '15px' }}>Gossip Endpoint</th>
                <th style={{ paddingBottom: '15px' }}>Status</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: '14px' }}>
              <tr style={{ borderBottom: '1px solid #1e293b' }}>
                <td style={{ padding: '15px 0' }}>Xand_Validator_001</td>
                <td>192.168.1.100</td>
                <td style={{ color: '#22c55e' }}>OPERATIONAL</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #1e293b' }}>
                <td style={{ padding: '15px 0' }}>Xand_Validator_002</td>
                <td>192.168.1.101</td>
                <td style={{ color: '#22c55e' }}>OPERATIONAL</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* SPINNING TOPOLOGY NODE */}
        <div style={{ ...glassStyle, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h3 style={{ fontSize: '16px', color: '#6366f1', marginBottom: '30px' }}>Network Topology</h3>
          
          <div className="topology-spinner" style={{ 
            width: '180px', height: '180px', borderRadius: '50%', 
            border: '1px dashed rgba(99, 102, 241, 0.4)', 
            position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
            /* SPIN TRIGGER */
            animation: 'spin 12s linear infinite' 
          }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'radial-gradient(circle, #6366f1, #4338ca)', border: '2px solid #fff', boxShadow: '0 0 30px rgba(99, 102, 241, 0.6)' }}></div>
            <div style={{ position: 'absolute', top: '-8px', width: '16px', height: '16px', background: '#fff', borderRadius: '50%', boxShadow: '0 0 15px #fff', border: '2px solid #6366f1' }}></div>
          </div>
          <p style={{ marginTop: '20px', fontSize: '12px', color: '#94a3b8' }}>Global Peer Distribution</p>
        </div>
      </div>

      {/* SPINNING INSTRUCTIONS */}
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
