import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Музей В.П. Сукачёва</title>
        <meta name="description" content="Иркутский художественный музей" />
      </Head>
      <main className="p-6">
        <h1 className="text-4xl font-bold">Добро пожаловать в музей!</h1>
      </main>
    </>
  )
}
