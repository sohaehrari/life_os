import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css"
export default function RootLayout({children}){
return(
  <html lang="en">
  
  <body>
    <div>
      <Navbar/>
<main>
  {children}
</main>
<Footer/>
    </div>
  </body>
  </html>
)
}