"use client";

import React, { useState } from 'react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedNode, setExpandedNode] = useState<string | null>(null);
  
  const xandBlue = '#0ea5e9'; 
  const xandDeep = '#020617';

  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '24px',
    padding: '24px',
    transition: 'all 0.3s ease'
  };

  const nodes = [
    { id: 'Xand_Global_Alpha', score: 98, fee: '5%', status: 'ONLINE', version: '1.18.1', uptime: '99.9%', hardware: '64-Core AMD / 256GB RAM', datacenter: 'Equinix NY' },
    { id: 'Xand_Global_Beta', score: 92, fee: '8%', status: 'ONLINE', version: '1.18.0', uptime: '99.2%', hardware: '32-Core Intel / 128GB RAM', datacenter: 'Edgevana FR' },
    { id: 'Xand_Global_Gamma', score: 85, fee: '0%', status: 'ONLINE', version: '1.17.5', uptime: '98.5%', hardware: 'Custom / 64GB RAM', datacenter: 'AWS Asia' }
  ];

  return (
    <div style={{ backgroundColor: xandDeep, minHeight: '100vh', color: 'white', padding: '40px', fontFamily: 'Inter, sans-serif' }}>
      
      {/* 1. EPOCH PROGRESS TRACKER */}
      <div style={{ marginBottom: '35px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '10px', fontWeight: '800', letterSpacing: '1.5px', color: '#94a3b8' }}>
          <span>EPOCH 898 STATUS</span>
          <span style={{ color: xandBlue }}>74.2% TO DISTRIBUTION</span>
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
          <p style={{ color: '#64748b', marginTop: '5px', fontSize: '13px' }}>Institutional pNode Analytics | STOINC Layer-2</p>
        </div>
        <button style={{ backgroundColor: xandBlue, color: 'white', border: 'none', padding: '12px 24px', borderRadius: '12px', fontWeight: '700', cursor: 'pointer' }}>
          Connect Terminal
        </button>
      </header>

      {/* CORE METRICS GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
        {[
          { label: 'Network Health', val: '100%', sub: 'Operational' },
          { label: 'STOINC Yield', val: '12.4K', sub: 'XAND Earned' },
          { label: 'Global pNodes', val: '1,204', sub: 'Active Peer-Mesh' },
          { label: 'Storage Depth', val: '4.2 PB', sub: 'Exabyte Ready' }
        ].map((stat, i) => (
          <div key={i} style={glassStyle}>
            <p style={{ color: '#64748b', fontSize: '10px', fontWeight: '800', textTransform: 'uppercase' }}>{stat.label}</p>
            <h2 style={{ fontSize: '28px', color: i === 0 ? '#22c55e' : (i === 1 ? xandBlue : 'white'), margin: '10px 0' }}>{stat.val}</h2>
            <p style={{ fontSize: '11px', color: '#475569' }}>{stat.sub}</p>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1.2fr', gap: '30px' }}>
        
        {/* ENHANCED CLICKABLE TABLE SECTION */}
        <div style={glassStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700' }}>pNode Scoreboard (Stakewiz-Logic)</h3>
            <input 
              type="text" 
              placeholder="Search by Node ID..." 
              style={{ background: '#0f172a', border: '1px solid #1e293b', padding: '8px 15px', borderRadius: '8px', color: 'white', fontSize: '12px', outline: 'none' }}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div style={{ width: '100%' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '10px 0', borderBottom: '1px solid #1e293b', color: '#475569', fontSize: '11px', fontWeight: '800' }}>
              <div>pNODE IDENTIFIER</div>
              <div>WIZ SCORE</div>
              <div>COMM.</div>
              <div>STATUS</div>
            </div>

            {nodes.filter(n => n.id.toLowerCase().includes(searchTerm.toLowerCase())).map((node, i) => (
              <div key={i}>
                <div 
                  onClick={() => setExpandedNode(expandedNode === node.id ? null : node.id)}
                  style={{ 
                    display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '20px 0', 
                    borderBottom: '1px solid #0f172a', cursor: 'pointer', transition: 'background 0.2s',
                    color: expandedNode === node.id ? xandBlue : '#cbd5e1'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <div style={{ fontWeight: '600' }}>{node.id} {expandedNode === node.id ? '▾' : '▸'}</div>
                  <div style={{ color: node.score > 90 ? '#22c55e' : xandBlue, fontWeight: '700' }}>{node.score}%</div>
                  <div>{node.fee}</div>
                  <div style={{ color: '#22c55e', fontWeight: '800', fontSize: '11px' }}>{node.status}</div>
                </div>

                {/* CLICKABLE EXTRA INFO (Stakewiz-Inspired) */}
                {expandedNode === node.id && (
                  <div style={{ background: 'rgba(14, 165, 233, 0.05)', padding: '20px', borderRadius: '12px', margin: '10px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', borderLeft: `3px solid ${xandBlue}` }}>
                    <div>
                      <p style={{ color: '#64748b', fontSize: '10px', margin: 0 }}>VERSION</p>
                      <p style={{ fontSize: '14px', margin: '5px 0 0 0' }}>{node.version}</p>
                    </div>
                    <div>
                      <p style={{ color: '#64748b', fontSize: '10px', margin: 0 }}>HARDWARE</p>
                      <p style={{ fontSize: '14px', margin: '5px 0 0 0' }}>{node.hardware}</p>
                    </div>
                    <div>
                      <p style={{ color: '#64748b', fontSize: '10px', margin: 0 }}>UPTIME</p>
                      <p style={{ fontSize: '14px', color: '#22c55e', margin: '5px 0 0 0' }}>{node.uptime}</p>
                    </div>
                    <div>
                      <p style={{ color: '#64748b', fontSize: '10px', margin: 0 }}>DATA CENTER</p>
                      <p style={{ fontSize: '14px', margin: '5px 0 0 0' }}>{node.datacenter}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* TOPOLOGY VISUALIZER */}
        <div style={{ ...glassStyle, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '30px', color: xandBlue }}>Network Topology</h3>
          <div style={{ 
            width: '180px', height: '180px', borderRadius: '50%', border: '1px dashed rgba(14, 165, 233, 0.3)', 
            position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: 'spin 15s linear infinite' 
          }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: `radial-gradient(circle, ${xandBlue}, #0369a1)`, border: '2px solid #fff', boxShadow: `0 0 30px ${xandBlue}66` }}></div>
            <div style={{ position: 'absolute', top: '-8px', width: '16px', height: '16px', background: '#fff', borderRadius: '50%', boxShadow: '0 0 15px #fff', border: `2px solid ${xandBlue}` }}></div>
          </div>
          <p style={{ marginTop: '30px', fontSize: '11px', color: '#64748b', fontWeight: '800', letterSpacing: '1px' }}>PEER GOSSIP SYNC</p>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
