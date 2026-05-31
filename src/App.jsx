
import { Header } from './Components/layouts/Header/Header'
import { Footer } from './Components/layouts/Footer/Footer'
import { portfolioContent } from './data/portfolioContent'

export const App = () => {
  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    ...portfolioContent.sections.map((section) => ({
      href: `#${section.id}`,
      label: section.title,
    })),
  ]

  return (
    <div className="grain min-h-screen flex flex-col bg-neutral-950 text-neutral-200 overflow-x-hidden">
      <Header brand={portfolioContent.brand} links={navLinks} />
      <main className="flex-1 flex flex-col items-center w-full overflow-hidden">

        {/* Hero — Bitácora digital */}
        <section id="inicio" className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-violet-950/20 pointer-events-none" />
          <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="animate-fade-in-up flex-shrink-0 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden ring-2 ring-violet-500/40 ring-offset-4 ring-offset-neutral-950 shadow-lg shadow-violet-900/20">
              <img
                src={portfolioContent.hero.profileImage}
                alt={portfolioContent.hero.profileAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="animate-fade-in-up animate-delay-100 text-sm uppercase tracking-[0.3em] text-violet-400 mb-4">{portfolioContent.hero.subtitle}</p>
              <h2 className="animate-fade-in-up animate-delay-200 font-display text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight mb-6 text-white leading-tight">
                {portfolioContent.hero.name}
              </h2>
              <div className="animate-fade-in-up animate-delay-300 w-20 h-px bg-gradient-to-r from-blue-500 to-violet-500 mb-6 md:mx-0 mx-auto" />
              <p className="animate-fade-in-up animate-delay-300 text-lg text-neutral-400 max-w-xl leading-relaxed mb-8">
                {portfolioContent.hero.description}
              </p>
              <div className="animate-fade-in-up animate-delay-400 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href={portfolioContent.hero.primaryCta.href} className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium text-sm tracking-wide hover:from-blue-500 hover:to-violet-500 transition-all duration-300 shadow-lg shadow-blue-900/30">
                  {portfolioContent.hero.primaryCta.label}
                </a>
                <a href={portfolioContent.hero.secondaryCta.href} className="px-8 py-3 rounded-lg border border-neutral-600 text-neutral-300 font-medium text-sm tracking-wide hover:border-violet-500 hover:text-violet-400 transition-all duration-300">
                  {portfolioContent.hero.secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
        </section>

        {portfolioContent.sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={`relative w-full min-h-screen flex flex-col items-center px-6 sm:px-8 py-24 border-t border-blue-900/20 overflow-hidden ${index % 2 === 0 ? 'bg-neutral-900/50' : ''}`}
          >
            <div className={`absolute top-0 ${index % 2 === 0 ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'} w-72 h-72 ${index % 2 === 0 ? 'bg-blue-600/5' : 'bg-violet-600/5'} rounded-full blur-3xl -translate-y-1/2 pointer-events-none`} />
            <h2 className={`font-display text-4xl font-semibold tracking-tight mb-4 bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-400 to-violet-400' : 'from-violet-400 to-blue-400'} bg-clip-text text-transparent`}>
              {section.title}
            </h2>
            <div className={`w-12 h-px bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-600 to-violet-600' : 'from-violet-600 to-blue-600'} mb-12`} />
            <div className="max-w-5xl w-full">
              <p className="text-neutral-400 text-lg leading-relaxed mb-10">{section.description}</p>

              {section.id === 'habilidades' && section.groups ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.groups.map((group) => (
                    <article
                      key={group.title}
                      className="rounded-2xl border border-neutral-700/70 bg-neutral-900/70 p-6 shadow-lg shadow-black/20"
                    >
                      <h3 className="text-xl font-semibold text-white mb-4">{group.title}</h3>
                      <ul className="flex flex-wrap gap-3">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="px-3 py-1.5 rounded-full border border-violet-500/40 bg-violet-500/10 text-sm text-neutral-200"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              ) : null}

              {section.id === 'experiencia' && section.entries ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {section.entries.map((entry) => (
                    <article
                      key={`${entry.role}-${entry.period}`}
                      className="rounded-2xl border border-blue-900/40 bg-neutral-900/70 p-6 shadow-lg shadow-black/20"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-violet-400 mb-2">{entry.period}</p>
                      <h3 className="text-xl font-semibold text-white mb-2">{entry.role}</h3>
                      <p className="text-neutral-300 mb-3">{entry.institution}</p>
                      <p className="inline-block px-3 py-1 text-xs rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-300 mb-4">
                        {entry.status}
                      </p>
                      <ul className="space-y-2">
                        {entry.details.map((detail) => (
                          <li key={detail} className="text-neutral-400 leading-relaxed">
                            - {detail}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              ) : null}

              {section.id === 'estudios' && section.entries ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {section.entries.map((entry) => (
                    <article
                      key={`${entry.role}-${entry.period}`}
                      className="rounded-2xl border border-violet-900/40 bg-neutral-900/70 p-6 shadow-lg shadow-black/20"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-2">{entry.period}</p>
                      <h3 className="text-xl font-semibold text-white mb-2">{entry.role}</h3>
                      <p className="text-neutral-300 mb-3">{entry.institution}</p>
                      <p className="inline-block px-3 py-1 text-xs rounded-full border border-violet-500/40 bg-violet-500/10 text-violet-300 mb-4">
                        {entry.status}
                      </p>
                      <ul className="space-y-2">
                        {entry.details.map((detail) => (
                          <li key={detail} className="text-neutral-400 leading-relaxed">
                            - {detail}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        ))}

      </main>
      <Footer ownerName={portfolioContent.footerName} social={portfolioContent.social} />
    </div>
  )
}
