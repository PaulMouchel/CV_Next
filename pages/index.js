import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Paul Mouchel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1>Portfolio à venir</h1>
        <h1 className="text-6xl font-bold">
          Voir mon{' '}
          <Link href='/cv'>
            <a className="text-darkGreen">
              CV
            </a>
          </Link>
        </h1>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://github.com/PaulMouchel"
          target="_blank"
          rel="noopener noreferrer"
        >
          Créé par Paul Mouchel
        </a>
      </footer>
    </div>
  )
}
