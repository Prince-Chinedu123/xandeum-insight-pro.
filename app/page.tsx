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
  minHeight: '350px',
  position: 'relative',
  overflow: 'hidden'
}}>
  <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '30px', color: '#6366f1' }}>Live Network Topology</h3>
  
  {/* The Spinner with Inline Animation */}
  <div style={{ 
    width: '180px', 
    height: '180px', 
    borderRadius: '50%', 
    border: '1px dashed rgba(99, 102, 241, 0.4)', 
    position: 'relative', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    /* Inline Animation Trigger */
    animation: 'spin 10s linear infinite'
  }}>
    {/* Central Xandeum Core */}
    <div style={{ 
      width: '60px', 
      height: '60px', 
      borderRadius: '50%', 
      background: 'radial-gradient(circle, #6366f1, #4338ca)', 
      border: '2px solid #fff', 
      boxShadow: '0 0 30px rgba(99, 102, 241, 0.6)',
      zIndex: 2
    }}></div>
    
    {/* Orbiting Satellite Node */}
    <div style={{ 
      position: 'absolute', 
      top: '-8px', 
      width: '16px', 
      height: '16px', 
      background: '#fff', 
      borderRadius: '50%', 
      boxShadow: '0 0 15px #fff',
      border: '2px solid #6366f1'
    }}></div>
  </div>

  <p style={{ marginTop: '30px', fontSize: '12px', color: '#94a3b8', textAlign: 'center', lineHeight: '1.6' }}>
    Global Peer Distribution<br/>
    <span style={{ color: '#22c55e', fontWeight: 'bold' }}>● LIVE ROTATION ACTIVE</span>
  </p>

  {/* IMPORTANT: Paste this exact block at the bottom of the page.tsx file before the final '}' */}
  <style>{`
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `}</style>
</div>
