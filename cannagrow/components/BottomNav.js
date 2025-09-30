'use client';
import React from 'react';
import Link from 'next/link';
import { Home, Calendar, BookOpen, Search, PlusCircle, User } from 'lucide-react';

export default function BottomNav({ active='home' }){
  return (
    <nav className="bottom-nav" aria-label="Navegación principal">
      <Link href="/"><a className="icon-btn"><Home/></a></Link>
      <Link href="/calendar"><a className="icon-btn"><Calendar/></a></Link>
      <Link href="/library"><a className="icon-btn"><BookOpen/></a></Link>
      <Link href="/search"><a className="icon-btn"><Search/></a></Link>
      <Link href="/upload"><a className="icon-btn"><PlusCircle/></a></Link>
      <Link href="/profile"><a className="icon-btn"><User/></a></Link>
    </nav>
  );
}
