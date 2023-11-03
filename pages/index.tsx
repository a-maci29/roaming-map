import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Map from '../components/Map'
import 'bootstrap/dist/css/bootstrap.css'
import Navigation from '../components/site/Navigation'

type ConnectionStatus = {
  isConnected: boolean
}

export const getServerSideProps: GetServerSideProps<
  ConnectionStatus
> = async () => {
  try {
    await clientPromise

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}


export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="">
      <Head>
        <title>Roaming</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation/>

        {isConnected ? (
          <h2 className="subtitle">Connected to Mongo</h2>
        ) : (
          <h2 className="subtitle">
            You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
            for instructions.
          </h2>
        )}


      </main>
      <Map />
      <footer>

      </footer>

 
    </div>
  )
}
