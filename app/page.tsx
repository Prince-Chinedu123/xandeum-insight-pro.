/* Replace your Topology Circle with this 'Orbital' Version */
<div style={{ 
  width: '180px', 
  height: '180px', 
  borderRadius: '50%', 
  border: '1px dashed rgba(99, 102, 241, 0.3)', 
  position: 'relative', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center',
  animation: 'spin 20s linear infinite' // This makes the whole ring rotate
}}>
  {/* Central Core */}
  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'radial-gradient(circle, #6366f1, transparent)', border: '1px solid #6366f1', boxShadow: '0 0 20px #6366f155' }}></div>
  
  {/* Orbiting Satellite Node */}
  <div style={{ 
    position: 'absolute', 
    top: '-5px', 
    width: '12px', 
    height: '12px', 
    background: '#fff', 
    borderRadius: '50%', 
    boxShadow: '0 0 10px #fff' 
  }}></div>

  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes spin { 100% { transform: rotate(360deg); } }
  `}} />
</div>
