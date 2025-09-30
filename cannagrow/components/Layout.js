import React from 'react';
import BottomNav from './BottomNav';

export default function Layout({ children }){
  return (
    <div className="container">
      {children}
      <BottomNav />
    </div>
  );
}
