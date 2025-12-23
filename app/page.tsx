{/* Network Topology Container */}
<div style={{ 
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '24px',
  padding: '24px',
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  justifyContent: 'center', 
  minHeight: '350px' 
}}>
  <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '30px', color: '#6366f1' }}>Live Network Topology</h3>
  
  {/* The Spinning Container */}
  <div className="topology-spinner" style={{ 
    width: '180px', 
    height: '180px', 
    borderRadius: '50%', 
    border: '1px dashed rgba(99, 102, 241, 0.4)', 
    position: 'relative', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center'
  }}>
    <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'radial-gradient(circle, #6366f1, #4338ca)', border: '2px solid #fff', boxShadow: '0 0 30px rgba(99, 102, 241, 0.6)' }}></div>
    <div style={{ position: 'absolute', top: '-8px', width: '16px', height: '16px', background: '#fff', borderRadius: '50%', boxShadow: '0 0 15px #fff', border: '2px solid #6366f1' }}></div>
  </div>

  <p style={{ marginTop: '30px', fontSize: '12px', color: '#94a3b8', textAlign: 'center' }}>
    Global Peer Distribution<br/>
    <span style={{ color: '#22c55e', fontWeight: 'bold' }}>● LIVE ROTATION ACTIVE</span>
  </p>

  {/* KEY FIX: Injecting the Keyframes into the Browser */}
  <style>{`
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .topology-spinner {
      animation: spin 12s linear infinite;
    }
  `}</style>
</div>
