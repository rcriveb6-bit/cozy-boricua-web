import { links } from '../data/links'

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary/80">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-xl text-on-primary">{links.brandName}</h3>
            <p className="text-on-primary/60 text-sm leading-relaxed max-w-xs">
              {links.seriesName} Series. Hecho con amor desde Puerto Rico. 🇵🇷
            </p>
            <div className="flex gap-3 pt-2">
              <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-on-primary no-underline" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href={links.tiktok} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-on-primary no-underline" aria-label="TikTok">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
              <a href={links.pinterest} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-on-primary no-underline" aria-label="Pinterest">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          {/* Book links */}
          <div>
            <h4 className="font-display text-sm text-on-primary tracking-widest uppercase mb-4">Libro</h4>
            <ul className="space-y-3">
              <li><a href={links.amazonClean} target="_blank" rel="noopener noreferrer" className="text-on-primary/60 hover:text-on-primary text-sm transition-colors no-underline">Comprar en Amazon</a></li>
              <li><a href="#gallery" className="text-on-primary/60 hover:text-on-primary text-sm transition-colors no-underline">Ver páginas</a></li>
              <li><a href="#about" className="text-on-primary/60 hover:text-on-primary text-sm transition-colors no-underline">Sobre el libro</a></li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h4 className="font-display text-sm text-on-primary tracking-widest uppercase mb-4">Social</h4>
            <ul className="space-y-3">
              <li><a href={links.instagram} target="_blank" rel="noopener noreferrer" className="text-on-primary/60 hover:text-on-primary text-sm transition-colors no-underline">Instagram</a></li>
              <li><a href={links.tiktok} target="_blank" rel="noopener noreferrer" className="text-on-primary/60 hover:text-on-primary text-sm transition-colors no-underline">TikTok</a></li>
              <li><a href={links.pinterest} target="_blank" rel="noopener noreferrer" className="text-on-primary/60 hover:text-on-primary text-sm transition-colors no-underline">Pinterest</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-on-primary/40 text-xs">
          <p>© 2026 {links.brandName}. Hecho con amor desde Puerto Rico 🇵🇷</p>
          <div className="flex gap-4">
            <span className="tracking-widest uppercase">{links.seriesName} Series</span>
            <span>•</span>
            <span>{links.hashtag}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
