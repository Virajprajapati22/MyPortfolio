import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Viraj Prajapati | ML Engineer | Software Engineer",
  description: "Portfolio built with Next.js and Tailwind CSS",
  icons: {
    icon: "/favicon.svg", // Path to your favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-sans text-themeDark w-full h-42 overflow-y-scroll no-scrollbar">
        {children}
      </body>
    </html>
  );
}
