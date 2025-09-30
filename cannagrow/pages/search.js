import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';

export default function Search(){
  const [q, setQ] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const stored = JSON.parse(sessionStorage.getItem('mockPosts') || '[]');
    const names = Array.from(new Set(stored.map(p=> p.authorName)));
    setUsers(names);
  },[]);

  return (
    <Layout>
      <h2>Buscar usuarios</h2>
      <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Buscar..." style={{width:'100%',padding:8,borderRadius:8}} />
      <div style={{marginTop:12}}>
        {users.filter(u=> u.toLowerCase().includes(q.toLowerCase())).map(u=> <div key={u} className="card">{u}</div>)}
      </div>
    </Layout>
  )
}
