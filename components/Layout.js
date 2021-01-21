import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, page }) {
  return (
    <div className="bg-blue-50 pt-5 text-center min-h-screen">
      <Head>
        <title>{page}</title>
      </Head>
      <header className="container-lg">
        <h1 className="text-5xl mb-2">CRYPTO WATCH</h1>
        <div className="inline-grid grid-cols-2 gap-x10 p-4">
          <Link href="/">
            <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
              Accueil
            </button>
          </Link>
          <Link href="/about">
            <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
              À propos
            </button>
          </Link>
        </div>
        <div>
          <Image
            src="/main.jpg"
            alt="header-pic"
            width="400"
            height="25"
            className="rounded-3xl object-cover"
          />
        </div>
      </header>
      <main className="pt-4 mx-20">{children}</main>

      <footer className="p-10">
        <Image
          src="/main.jpg"
          alt="footer-pic"
          width="1000"
          height="30"
          className="rounded-3xl object-cover"
        />
        <ul className="pt-10 pb-4 flex justify-around">
          <li>À propos</li>
          <li>Qui sommes-nous</li>
          <li>From Antho - 2020</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          aperiam explicabo beatae provident et. Nisi provident magnam sint
          iusto expedita.
        </p>
      </footer>

      <style jsx>
        {`
          p {
            color: grey;
          }
        `}
      </style>
    </div>
  );
}
