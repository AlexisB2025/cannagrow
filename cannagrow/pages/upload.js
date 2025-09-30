import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { v4 as uuidv4 } from 'uuid';

export default function Upload(){
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(()=>{
    return () => { if(preview) URL.revokeObjectURL(preview); }
  },[preview]);

  const handleFile = (e) => {
    const f = e.target.files && e.target.files[0];
    if(!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const handleUpload = () => {
    if(!file) return alert('Subí una foto primero');
    const stored = JSON.parse(sessionStorage.getItem('mockPosts') || '[]');
    const newPost = {
      id: uuidv4(),
      authorId: 'user-local',
      authorName: 'Tú',
      description: desc,
      imageUrl: preview,
      strain: 'NN',
      genetics: 'NN',
      cannabinoid: 'NN',
      createdAt: new Date().toISOString(),
      likes: 0,
      comments: 0
    };
    stored.unshift(newPost);
    sessionStorage.setItem('mockPosts', JSON.stringify(stored));
    alert('Publicado (mock)');
    setFile(null); setPreview(''); setDesc('');
  };

  return (
    <Layout>
      <h2>Subir foto</h2>
      <div className="card">
        <input type="file" accept="image/*" onChange={handleFile} />
        {preview && <img src={preview} className="preview-img" alt="preview" />}
        <div style={{marginTop:8}}>
          <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} style={{width:'100%',minHeight:80}} placeholder="Descripción..." />
        </div>
        <div style={{marginTop:12}}>
          <button className="icon-btn" onClick={handleUpload}>Publicar</button>
        </div>
      </div>
    </Layout>
  )
}
