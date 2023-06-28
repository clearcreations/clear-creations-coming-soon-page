import Head from 'next/head'

export const metadata = {
  title: 'Coming Soon | Clear Creations | Charlotte Branding Agency',
  description: 'We are a Charlotte based design agency, helping you develop brands, design websites, and create campaigns that convert. Fill out our form to schedule your consultation today.',
  robot: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
          index: true,
          follow: true,
      },
      viewport: {
          width: 'device-width',
          initialScale: 1,
          maximumScale: 1,
      },
      charset: 'UTF-8'
  }
}

export default function RootLayout({ children }, props) {
 return (
    <html lang="en">
      <Head>
      <link rel="shortcut icon" href="/assets/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
