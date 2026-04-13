import type { Metadata } from 'next'
import Link from 'next/link'
import '../styles/globals.css'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Vishal — Business Analysis & Investment Thinking',
    template: '%s | Vishal',
  },
  description: 'I break down business problems and investment decisions using data, strategy, and financial analysis.',
  openGraph: {
    title: 'Vishal — Business Analysis & Investment Thinking',
    description: 'I break down business problems and investment decisions using data, strategy, and financial analysis.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'light';
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
