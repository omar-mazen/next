import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" className="h-full">
      <body className={``}>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
