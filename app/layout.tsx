import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import ThemeSwitch from '@/components/theme-switch'
import Footer from '@/components/footer'
import ThemeContextProvider from '@/context/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Basab|Personal Portfolio',
  description: 'Add Metadata',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body
          className={`bg-white text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-500 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>

        <div className="bg-[#e2fbee] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#74998e]"></div>
        <div className="bg-[#d7eafb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#2a4b69]"></div>
        <ActiveSectionContextProvider>
        <Header/>
        {children}
        <Footer/>

        <Toaster position='top-right'/>
          <ThemeSwitch/>
        </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
