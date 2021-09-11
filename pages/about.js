import Head from 'next/head'

const about = () => {
    return (
        <div className="flex flex-col justify-center bg-gray-900 my-auto">
        <Head>
            <title>Paul Mouchel</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div className="text-white">En construction</div>
            {/* <div className="text-white">Hobbies et passion</div>
            <div className="text-white">Voyage</div>
            <div className="text-white">Pourquoi la réunion ?</div> */}
        </main>

        </div>
    )
  }

export default about