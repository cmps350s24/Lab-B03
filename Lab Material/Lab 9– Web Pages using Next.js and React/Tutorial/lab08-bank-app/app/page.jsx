import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Accounts from '@/app/accounts/Accounts'


export default async function Home() {

  // we will get the data
  // const accounts = 
  return (
    <>
      <Accounts />
    </>
  )
}
