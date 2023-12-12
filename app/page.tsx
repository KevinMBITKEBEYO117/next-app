'use client'

import Image from 'next/image'
import Link from 'next/link'
import ProductsCard from './components/ProductsCard'

export default function Home() {
  return (
   <main>
    
    <h1>Hello world</h1>
    <Link href="/users">Users</Link>
    <ProductsCard/>
    </main>
   
  )
}
