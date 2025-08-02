import './globals.css'

export const metadata = {
  title: 'Tony\'s Financial Calculator',
  description: 'Calculate your budget breakdown - yearly, monthly, weekly',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
