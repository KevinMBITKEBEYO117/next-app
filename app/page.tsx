import Image from 'next/image'
import Link from 'next/link'
import ProductsCard from './components/ProductsCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
 const session = await getServerSession(authOptions)
  return (
   <main>
    
    {/* <h1 className='text-black'> Hello {session?.user?.name} </h1>
    <Link href="/users">Users</Link>
    <ProductsCard/> */}

    
    </main>
   
  )
}
