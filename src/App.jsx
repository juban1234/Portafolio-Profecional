
import { Header } from './Components/layouts/Header/Header'
import { Footer } from './Components/layouts/Footer/Footer'

export const App = () => {
  return (
    <div className="grain min-h-screen flex flex-col bg-neutral-950 text-neutral-200 overflow-x-hidden">
      <Header />
      <main className="flex-1 flex flex-col items-center w-full overflow-hidden">

        {/* Hero — Bitácora digital */}
        <section id="inicio" className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-violet-950/20 pointer-events-none" />
          <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="animate-fade-in-up flex-shrink-0 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden ring-2 ring-violet-500/40 ring-offset-4 ring-offset-neutral-950 shadow-lg shadow-violet-900/20">
              <img
                src="https://res.cloudinary.com/dv6ixjbso/image/upload/v1775861759/foto_de_perfil_t6oeh6.jpg"
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="animate-fade-in-up animate-delay-100 text-sm uppercase tracking-[0.3em] text-violet-400 mb-4">{/* Subtítulo corto, ej: Desarrollador Frontend */}</p>
              <h2 className="animate-fade-in-up animate-delay-200 font-display text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight mb-6 text-white leading-tight">
                Juan esteban grajales mesa
              </h2>
              <div className="animate-fade-in-up animate-delay-300 w-20 h-px bg-gradient-to-r from-blue-500 to-violet-500 mb-6 md:mx-0 mx-auto" />
              <p className="animate-fade-in-up animate-delay-300 text-lg text-neutral-400 max-w-xl leading-relaxed mb-8">
                {/* Tu propuesta de valor en 1-2 líneas */}
              </p>
              <div className="animate-fade-in-up animate-delay-400 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#habilidades" className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium text-sm tracking-wide hover:from-blue-500 hover:to-violet-500 transition-all duration-300 shadow-lg shadow-blue-900/30">
                  Ver habilidades
                </a>
                <a href="#experiencia" className="px-8 py-3 rounded-lg border border-neutral-600 text-neutral-300 font-medium text-sm tracking-wide hover:border-violet-500 hover:text-violet-400 transition-all duration-300">
                  Experiencia
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Habilidades */}
        <section id="habilidades" className="relative w-full min-h-screen flex flex-col items-center px-6 sm:px-8 py-24 border-t border-blue-900/20 bg-neutral-900/50 overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <h2 className="font-display text-4xl font-semibold tracking-tight mb-4 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Habilidades</h2>
          <div className="w-12 h-px bg-gradient-to-r from-blue-600 to-violet-600 mb-12" />
          <div className="max-w-5xl w-full">
            {/* Agrega tus habilidades aquí */}
          </div>
        </section>

        {/* Experiencia */}
        <section id="experiencia" className="relative w-full min-h-screen flex flex-col items-center px-6 sm:px-8 py-24 border-t border-violet-900/20 overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-violet-600/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <h2 className="font-display text-4xl font-semibold tracking-tight mb-4 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Experiencia Profesional</h2>
          <div className="w-12 h-px bg-gradient-to-r from-violet-600 to-blue-600 mb-12" />
          <div className="max-w-5xl w-full">
            {/* Agrega tu experiencia aquí */}
          </div>
        </section>

        {/* Estudios */}
        <section id="estudios" className="relative w-full min-h-screen flex flex-col items-center px-6 sm:px-8 py-24 border-t border-blue-900/20 bg-neutral-900/50 overflow-hidden">
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />
          <h2 className="font-display text-4xl font-semibold tracking-tight mb-4 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Estudios</h2>
          <div className="w-12 h-px bg-gradient-to-r from-blue-600 to-violet-600 mb-12" />
          <div className="max-w-5xl w-full">
            {/* Agrega tus estudios aquí */}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
