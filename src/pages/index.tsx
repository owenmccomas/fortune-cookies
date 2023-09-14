import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const fortuneHandler = api.fortune.getFortune.useMutation();

  const getFourtune = async () => {
    await fortuneHandler.mutateAsync();
    console.log(fortuneHandler.data);
  };

  return (
    <>
      <Head>
        <title>Fortune Cookies</title>
        <meta name="description" content="Have a fortune cookie at every meal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex min-h-screen flex-col items-center justify-center bg-paper">
        <button
          className="transform rounded-full bg-yellow-500 px-4 py-2 font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-yellow-400"
          onClick={getFourtune}
        >
          Receive Fortune
        </button>
        {fortuneHandler.data && (
          <h3 className="mt-4 text-center text-xl text-yellow-700 mx-5">
            {fortuneHandler.data}
          </h3>
        )}

        {fortuneHandler.isLoading && (
          <h3 className="mt-4 text-center text-xl text-yellow-700">
            loading...
          </h3>
        )}
      </main>
    </>
  );
}
