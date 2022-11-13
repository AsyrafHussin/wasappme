import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <>
      <section className="bg-white dark:bg-primary-700">
        <div className="grid h-screen max-h-screen overflow-hidden max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              wasapp.me
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Start chatting without need to save the contact number
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=me.wasapp.wasappme"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-500 hover:bg-white hover:text-gray-900 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Download App
            </a>
            <Link
              href="/privacy-policy"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-white dark:hover:bg-primary-500 dark:focus:ring-gray-800"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="hidden lg:col-span-5 lg:flex">
            <img src="/ezchat.png" className="object-cover" alt="mockup" />
          </div>
        </div>
      </section>
    </>
  );
}
