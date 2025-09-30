import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import { posts as initialPosts } from '../lib/data';

export default function Home(){
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    // merge session posts + initial posts
    const stored = JSON.parse(sessionStorage.getItem('mockPosts') || '[]');
    const all = stored.length ? [...stored, ...initialPosts] : initialPosts;
    // remove duplicates
    const unique = all.filter((p,i,self)=> i === self.findIndex(t => t.id === p.id));
    setPosts(unique);
  },[]);

  const handleLike = (id) => {
    setPosts(prev => prev.map(p => p.id === id ? {...p, likes: (p.likes||0)+1} : p));
  };

  return (
    <Layout>
      <header className="header">
        <h1>Cannagrow</h1>
      </header>

      <section className="story-row" aria-label="Historias">
        {Array.from({length:6}).map((_,i)=>(
          <div key={i} style={{width:80,textAlign:'center'}}>
            <div style={{width:64,height:64,borderRadius:999,overflow:'hidden',border:'3px solid #4CAF50'}}>
              <img src={`https://picsum.photos/seed/story${i}/80/80`} alt={`usuario_${i}`} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
            </div>
            <div style={{color:'#94a3b8',marginTop:8,fontSize:12,overflow:'hidden',textOverflow:'ellipsis'}}>{`usuario_${i}`}</div>
          </div>
        ))}
      </section>

      <main style={{display:'grid',gap:20,marginTop:12}}>
        {posts.map(post=> <PostCard key={post.id} post={post} onLike={handleLike} />)}
      </main>
    </Layout>
  );
}
