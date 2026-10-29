import { Head } from 'vite-react-ssg/single-page'
import BackgroundOrbs from './components/BackgroundOrbs'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Preloader from './components/Preloader'
import ScrollProgress from './components/ScrollProgress'
import { organizationJsonLd } from './data/seo'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import About from './sections/About'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Portfolio from './sections/Portfolio'
import Pricing from './sections/Pricing'
import Process from './sections/Process'
import Services from './sections/Services'
import TechStack from './sections/TechStack'
import Testimonials from './sections/Testimonials'

export default function App() {
  useSmoothScroll()
  return (
    <>
      <Head>
        <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>
      </Head>
      <Preloader />
      <BackgroundOrbs />
      <ScrollProgress />
      <CustomCursor />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-full focus:bg-cyan focus:px-5 focus:py-3 focus:font-semibold focus:text-void"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Pricing />
        <TechStack />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
