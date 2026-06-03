import { links } from '../data/links'

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest border-t border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full py-16 px-4 md:px-6 max-w-[1200px] mx-auto gap-12">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <a href="#" className="font-headline-md text-headline-md text-primary italic no-underline">
            Coquí Creative
          </a>
          <p className="text-body-md text-on-surface-variant max-w-sm">
            © {new Date().getFullYear()} Coquí Creative. Hecho con amor desde Puerto Rico 🇵🇷
          </p>
          <div className="flex gap-4 mt-2">
            <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-all" aria-label="Instagram">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a href={`mailto:${links.email || 'hola@coquicreativepr.com'}`} className="text-on-surface-variant hover:text-primary transition-all" aria-label="Email">
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-12 md:gap-24">
          <div className="flex flex-col gap-3">
            <p className="text-label-md font-label-md text-primary uppercase tracking-widest mb-2">Libro</p>
            <a href={links.amazon} target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-all no-underline">Comprar en Amazon</a>
            <a href="#gallery" className="text-on-surface-variant hover:text-primary transition-all no-underline">Ver páginas</a>
            <a href="#personajes" className="text-on-surface-variant hover:text-primary transition-all no-underline">Personajes</a>
            <a href="#about" className="text-on-surface-variant hover:text-primary transition-all no-underline">Sobre el libro</a>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-label-md font-label-md text-primary uppercase tracking-widest mb-2">Social</p>
            <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-all no-underline">Instagram</a>
            <a href={links.tiktok} target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-all no-underline">TikTok</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-all no-underline">Pinterest</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-all no-underline">Política de privacidad</a>
          </div>
        </div>

      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 pb-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-on-surface-variant opacity-60 gap-2">
        <p>Boriken Coloring Series · {links.hashtag}</p>
        <p>Made in Puerto Rico 🇵🇷</p>
      </div>
    </footer>
  )
}
