import Script from "next/script";

export default function Home() {
  return (
    <>
      <iframe
        data-tally-src="https://tally.so/r/waDMpy"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Partnership Program"
      ></iframe>
      <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
    </>
  );
}
