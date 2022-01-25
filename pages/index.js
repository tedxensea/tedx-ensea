import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello <Link href="/events/2022"><a>world!</a></Link>
    </h1>
  )
}
