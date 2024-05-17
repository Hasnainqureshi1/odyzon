import "./globals.css";

export const metadata = {
  title: "Odyzon",
  description: "Odyzon Artist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body>{children}</body>
    </html>
  );
}
