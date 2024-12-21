import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'], weight: ['400', '700', '900'] })

export const metadata: Metadata = {
  title: 'AGI is Here | Artificial General Intelligence Revealed',
  description: 'Discover the truth about Artificial General Intelligence (AGI). Is it really here? Find out with our humorous take on the current state of AI technology.',
  keywords: 'AGI, Artificial General Intelligence, AI, machine learning, deep learning, neural networks, future of AI, AI humor',
  authors: [{ name: 'Ataberk', url: 'https://x.com/ataberk_trn' }],
  creator: 'Ataberk',
  publisher: 'AGI is Here',
  alternates: {
    canonical: 'https://agiishere.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#ff0000'
      }
    ]
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  )
}

