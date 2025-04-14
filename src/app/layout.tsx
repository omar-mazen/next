import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className=" bg-primary-background text-text-color dark">
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
