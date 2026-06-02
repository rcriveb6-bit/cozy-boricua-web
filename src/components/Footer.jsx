import { links } from '../data/links'
import logoCoqui from '../assets/logo-coqui-creative.png'

const footerLinks = ['Política de privacidad', 'Términos de uso', 'Envíos', 'FAQ']

export default function Footer() {
  return (
    <footer className="bg-surface-container text-primary font-body-md text-body-md rounded-t-lg">
      <div className="bg-surface-container-low">
        <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-16 py-12 gap-4 max-w-container-max mx-auto w-full">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-headline-md text-headline-md text-secondary">Cozy Boricua</span>
            <p className="text-on-surface-variant max-w-[300px] text-center md:text-left text-body-md">
              El libro de colorear kawaii de Puerto Rico.
            </p>
            <a href="https://coquicreativepr.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm underline">
              <img src={logoCoqui} alt="Coquí Creative" className="w-8 h-8" />
              Por Coquí Creative
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map(label => (
              <a key={label} href="#" className="text-on-surface-variant hover:text-primary transition-colors no-underline text-body-md">
                {label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href={links.amazon}
            target="_blank"
            rel="noopener noreferrer"
            className="sticker-lift bg-primary text-on-primary px-6 py-3 rounded-full font-label-lg text-label-lg inline-flex items-center gap-2 no-underline"
          >
            <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
            Comprar — {links.price}
          </a>

        </div>

        <div className="border-t border-outline-variant/30 py-6 text-center px-5">
          <div className="flex items-center justify-center gap-2 mb-2">
            <img src={logoCoqui} alt="Coquí Creative" className="w-6 h-6" />
            <span className="font-headline-md text-headline-md text-secondary">Coquí Creative</span>
          </div>
          <p className="text-on-surface-variant text-body-md">
            © {new Date().getFullYear()} Coquí Creative. Hecho con amor desde Puerto Rico 🇵🇷
          </p>
          <p className="text-on-surface-variant text-sm mt-1">
            {links.hashtag}
          </p>
        </div>
      </div>
    </footer>
  )
}
