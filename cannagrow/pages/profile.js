import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

export default function Profile(){
  const [myPosts, setMyPosts] = useState([]);

  useEffect(()=>{
    const stored = JSON.parse(sessionStorage.getItem('mockPosts') || '[]');
    setMyPosts(stored.filter(p=> p.authorId === 'user-local' || p.authorName === 'Tú'));
  },[]);

  return (
    <Layout>
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <div style={{width:80,height:80,borderRadius:999,overflow:'hidden'}}>
          <img src="https://picsum.photos/seed/me/80/80" alt="Tu avatar" style={{width:'100%',height:'100%'}}/>
        </div>
        <div>
          <h3>Tú</h3>
          <p style={{color:'#94a3b8'}}>Cultivador — Local</p>
        </div>
      </div>

      <h4 style={{marginTop:16}}>Mis publicaciones</h4>
      <div style={{display:'grid',gap:12}}>
        {myPosts.length === 0 ? <div className="card">No hay publicaciones aún.</div> : myPosts.map(m=> <div key={m.id} className="card"><img src={m.imageUrl} style={{width:'100%',borderRadius:8}}/></div>)}
      </div>
    </Layout>
  )
}
