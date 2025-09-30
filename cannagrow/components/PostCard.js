import React from 'react';

export default function PostCard({ post, onLike }){
  return (
    <article className="card">
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <div style={{width:40,height:40,borderRadius:999,overflow:'hidden',background:'#ddd'}}>
          <img src={`https://picsum.photos/seed/${post.authorId}/40/40`} alt={post.authorName} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        </div>
        <div style={{flex:1}}><strong>{post.authorName}</strong></div>
        <div style={{fontSize:12,color:'#94a3b8'}}>{new Date(post.createdAt).toLocaleDateString()}</div>
      </div>
      <div style={{marginTop:12}}>
        <img src={post.imageUrl} alt={post.description} className="preview-img" />
      </div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:8}}>
        <div>
          <button className="icon-btn" onClick={()=>onLike && onLike(post.id)}>❤</button>
          <span style={{marginLeft:8}}>{post.likes||0} me gusta</span>
        </div>
        <div style={{color:'#94a3b8',fontSize:12}}>{post.cannabinoid || ''} {post.genetics||''}</div>
      </div>
      <p style={{marginTop:8}}><strong>{post.authorName}</strong> {post.description}</p>
    </article>
  );
}
