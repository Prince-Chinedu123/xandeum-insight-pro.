"use client"; // This tells Next.js this is an interactive page

import React from 'react';

// This is the "Main Entrance" Next.js looks for
export default function ProDashboard() {
  return (
    <div style={{ backgroundColor: '#020617', minHeight: '100vh', padding: '40px', color: 'white', fontFamily: 'sans-serif' }}>
      
      {/* 1. Header Section */}
      <div style={{ marginBottom: '40px', borderLeft: '4px solid #6366f1', paddingLeft: '20px' }}>
        <h1 style={{ fontSize: '32px', margin: 0 }}>XandeumInsight Pro</h1>
        <p style={{ color: '#94a3b8', margin: '5px 0' }}>Institutional Validator Suite | Mainnet-Beta</p>
      </div>

      {/* 2. Content Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        
        {/* Left Side: Table Area */}
        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '24px', padding: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>Live Propagation Index</h2>
          <div style={{ borderTop: '1px solid #1e293b', paddingTop: '10px' }}>
             <p>Node: Xand_Validator_001 | Status: <span style={{ color: '#22c55e' }}>OPERATIONAL</span></p>
             <p>Node: Xand_Validator_002 | Status: <span style={{ color: '#22c55e' }}>OPERATIONAL</span></p>
          </div>
        </div>

        {/* Right Side: THE SPINNING TOPOLOGY */}
        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '24px', padding: '24px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h3 style={{ fontSize: '16px', color: '#6366f1', marginBottom: '30px' }}>Network Topology</h3>
          
          {/* THE SPINNER */}
          <div className="topology-spinner" style={{ 
            width: '160px', height: '160px', borderRadius: '50%', border: '1px dashed #6366f166',
            position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#6366f1', boxShadow: '0 0 20px #6366f1' }}></div>
            <div style={{ position: 'absolute', top: '-8px', width: '16px', height: '16px', background: '#fff', borderRadius: '50%', boxShadow: '0 0 10px #fff' }}></div>
          </div>
          
          <p style={{ marginTop: '20px', fontSize: '12px', color: '#22c55e' }}>● ACTIVE ROTATION</p>
        </div>

      </div>

      {/* 3. The Animation Logic */}
      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .topology-spinner {
          animation: spin 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
