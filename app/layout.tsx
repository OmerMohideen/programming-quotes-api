import "../styles/globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" style={{ scrollBehavior: "smooth" }}>
      <head />
      <body>
        <Navbar />
        {children}
        <hr/>
        <Footer />
      </body>
    </html>
  );
}
