import { useEffect, useRef, useState } from 'react'
import {
  goalOptions,
  interestOptions,
  methodSteps,
  modalities,
  studio,
} from './data/studio'

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M16 4a11.5 11.5 0 0 0-9.9 17.35L4.5 27.5l6.3-1.65A11.5 11.5 0 1 0 16 4Zm0 20.9c-1.76 0-3.48-.5-4.96-1.43l-.35-.22-3.74.98.99-3.64-.23-.37a9.4 9.4 0 1 1 8.29 4.68Zm5.16-7.03c-.28-.14-1.67-.82-1.93-.92-.26-.1-.45-.14-.64.14-.19.28-.73.92-.9 1.1-.16.2-.33.22-.6.08-.29-.14-1.2-.44-2.28-1.4a8.63 8.63 0 0 1-1.58-1.96c-.16-.28-.02-.43.12-.57.13-.12.28-.33.42-.5.14-.16.19-.28.28-.47.1-.19.05-.35-.02-.5-.07-.13-.64-1.53-.87-2.1-.23-.55-.46-.48-.64-.49h-.54c-.19 0-.5.07-.76.35-.25.28-.98.96-.98 2.34s1 2.71 1.15 2.9c.14.18 1.98 3.02 4.8 4.24.67.29 1.2.46 1.6.59.68.21 1.3.18 1.78.11.55-.08 1.67-.68 1.9-1.34.24-.66.24-1.23.17-1.34-.07-.12-.26-.19-.54-.33Z" />
  </svg>
)

function BrandMark({ light = false }) {
  return (
    <a className={`brand ${light ? 'brand--light' : ''}`} href="#top" aria-label="Studio CFCM — início">
      <span className="brand__signal" aria-hidden="true"><i /><i /></span>
      <span><strong>STUDIO</strong><b>CFCM</b></span>
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const links = [
    ['Método', '#metodo'],
    ['Modalidades', '#modalidades'],
    ['Estrutura', '#estrutura'],
    ['Resultados', '#resultados'],
    ['Contato', '#contato'],
  ]

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  return (
    <header className="site-header">
      <div className="header-inner">
        <BrandMark light />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span />
        </button>
        <nav id="primary-navigation" className={open ? 'nav is-open' : 'nav'} aria-label="Navegação principal">
          <div className="nav__links">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
          </div>
          <a className="button button--small" href={studio.whatsappUrl} target="_blank" rel="noreferrer">
            Agende sua aula <ArrowIcon />
          </a>
        </nav>
      </div>
    </header>
  )
}

function SectionHeading({ eyebrow, title, copy, dark = false }) {
  return (
    <div className={`section-heading ${dark ? 'section-heading--dark' : ''}`} data-reveal>
      <span className="eyebrow"><i />{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__image" role="img" aria-label="Atleta empurrando trenó de carga em treino acompanhado no Studio CFCM" />
      <div className="hero__texture" aria-hidden="true" />
      <div className="container hero__content">
        <p className="hero__location"><span /> Studio de treinamento · Floramar</p>
        <h1 id="hero-title">Aqui a máquina<br />é <em>você.</em></h1>
        <p className="hero__lead">Treinos exclusivos, acompanhamento próximo e direção para você evoluir por inteiro.</p>
        <div className="hero__actions">
          <a className="button" href={studio.whatsappUrl} target="_blank" rel="noreferrer">
            Agende sua aula experimental <ArrowIcon />
          </a>
          <a className="text-link" href="#metodo">Conheça o método <ArrowIcon /></a>
        </div>
      </div>
      <div className="hero__rail" aria-label="Diferenciais do Studio CFCM">
        <div><strong>01</strong><span>Treino com<br />direção</span></div>
        <div><strong>02</strong><span>Acompanhamento<br />próximo</span></div>
        <div><strong>03</strong><span>Comunidade<br />que sustenta</span></div>
      </div>
      <span className="hero__sideword" aria-hidden="true">MOVIMENTO • DIREÇÃO • CONSTÂNCIA</span>
    </section>
  )
}

function Method() {
  return (
    <section className="section method" id="metodo">
      <div className="container">
        <div className="method__intro">
          <SectionHeading
            eyebrow="Método CFCM"
            title={<>Treinar mais não basta.<br /><em>É preciso direção.</em></>}
          />
          <p className="method__statement" data-reveal>
            No CFCM, a proposta é fazer o treino conversar com o seu momento. Atenção à execução, progressão coerente e presença de verdade em cada etapa.
          </p>
        </div>
        <div className="method__grid">
          {methodSteps.map((step) => (
            <article className="method-card" key={step.number} data-reveal>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="proposal-note" data-reveal>
          <strong>Proposta inicial:</strong> etapas sujeitas à validação e ajuste conforme a metodologia oficial do Studio CFCM.
        </p>
      </div>
    </section>
  )
}

function Modalities() {
  return (
    <section className="section modalities" id="modalidades">
      <div className="container">
        <div className="modalities__top">
          <SectionHeading
            dark
            eyebrow="Modalidades"
            title={<>Diferentes caminhos.<br /><em>Uma só direção.</em></>}
            copy="Uma prévia de como os treinos podem ser organizados. A grade, frequência e os planos oficiais serão publicados após confirmação do Studio."
          />
          <span className="illustrative-badge">Conteúdo ilustrativo</span>
        </div>
        <div className="modalities__grid">
          {modalities.map((item) => (
            <article className="modality-card" key={item.index} data-reveal>
              <div className="modality-card__top">
                <span>{item.index}</span>
                <span className="modality-card__arrow"><ArrowIcon /></span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul>
                {item.focus.map((focus) => <li key={focus}>{focus}</li>)}
              </ul>
              <p className="price-line">Planos e frequência: <strong>sob consulta</strong></p>
              <a href={studio.whatsappUrl} target="_blank" rel="noreferrer">Quero saber mais <ArrowIcon /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="experience" id="estrutura">
      <div className="experience__image-wrap" data-reveal>
        <img
          src="/images/experiencia-studio-cfcm.webp"
          alt="Grupo em sessão de treinamento funcional com orientação próxima"
          width="1792"
          height="1024"
          loading="lazy"
        />
        <span>Imagem editorial gerada para ambientação</span>
      </div>
      <div className="experience__copy">
        <SectionHeading
          dark
          eyebrow="A experiência"
          title={<>Um lugar para<br /><em>treinar presente.</em></>}
        />
        <p data-reveal>Ambiente acolhedor não significa treino sem exigência. Aqui, estrutura, equipamentos e orientação existem para você se concentrar no que importa: executar bem e seguir em frente.</p>
        <div className="experience__points" data-reveal>
          <div><strong>Ambiente</strong><span>Energia de treino, sem intimidação.</span></div>
          <div><strong>Orientação</strong><span>Atenção à técnica e ao seu ritmo.</span></div>
          <div><strong>Comunidade</strong><span>Gente que compartilha constância.</span></div>
          <div><strong>Floramar</strong><span>Perto da sua rotina, em BH.</span></div>
        </div>
      </div>
    </section>
  )
}

function Results() {
  return (
    <section className="section results" id="resultados">
      <div className="container">
        <div className="results__heading">
          <SectionHeading
            eyebrow="Resultados e histórias"
            title={<>Evolução real tem<br /><em>contexto.</em></>}
            copy="Este espaço será dedicado a relatos autorizados de alunos — com ponto de partida, processo e conquistas contadas sem exagero."
          />
          <a className="text-link text-link--dark" href={studio.whatsappUrl} target="_blank" rel="noreferrer">Comece sua história <ArrowIcon /></a>
        </div>
        <div className="story-placeholder" data-reveal>
          <div className="story-placeholder__mark" aria-hidden="true">“</div>
          <div>
            <span className="illustrative-badge illustrative-badge--light">Área preparada para conteúdo real</span>
            <h3>As próximas histórias serão contadas por quem vive o treino.</h3>
            <p>Depoimentos, nomes, fotos e métricas só serão publicados após validação e autorização dos alunos.</p>
          </div>
          <div className="story-placeholder__numbers" aria-hidden="true">
            <span>PROCESSO</span><i /><span>CONSISTÊNCIA</span><i /><span>EVOLUÇÃO</span>
          </div>
        </div>
        <p className="results__disclaimer">Resultados variam conforme histórico, individualidade, frequência, recuperação e adesão de cada pessoa.</p>
      </div>
    </section>
  )
}

function Location() {
  return (
    <section className="location" aria-labelledby="location-title">
      <div className="location__visual" aria-hidden="true">
        <span className="location__avenue">AV. SARAMENHA</span>
        <span className="location__pin"><i />705</span>
        <span className="location__cross">FLORAMAR · BH</span>
      </div>
      <div className="location__copy" data-reveal>
        <span className="eyebrow"><i />Onde treinar</span>
        <h2 id="location-title">No Floramar.<br /><em>Na sua rota.</em></h2>
        <address>
          <strong>{studio.address}</strong>
          <span>{studio.city}</span>
          <span>{studio.postalCode}</span>
        </address>
        <a className="button button--dark" href={studio.mapUrl} target="_blank" rel="noreferrer">
          Abrir localização no mapa <ArrowIcon />
        </a>
      </div>
    </section>
  )
}

function ContactForm() {
  const initialData = { name: '', phone: '', goal: '', interest: '', time: '' }
  const [form, setForm] = useState(initialData)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const successRef = useRef(null)

  useEffect(() => {
    if (!sent) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    requestAnimationFrame(() => {
      successRef.current?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'center' })
    })
  }, [sent])

  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 11)
    if (digits.length <= 2) return digits ? `(${digits}` : ''
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  }

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const normalizePhone = (event) => {
    const value = formatPhone(event.currentTarget.value)
    event.currentTarget.value = value
    setForm((current) => ({ ...current, phone: value }))
  }

  const submit = (event) => {
    event.preventDefault()
    const submitted = Object.fromEntries(new FormData(event.currentTarget).entries())
    submitted.phone = formatPhone(submitted.phone || '')
    const nextErrors = {}
    if (submitted.name.trim().length < 2) nextErrors.name = 'Digite seu nome para continuarmos.'
    if (submitted.phone.replace(/\D/g, '').length < 10) nextErrors.phone = 'Informe um telefone com DDD.'
    if (!submitted.goal) nextErrors.goal = 'Selecione seu objetivo principal.'
    if (!submitted.interest) nextErrors.interest = 'Selecione uma opção de interesse.'
    if (!submitted.time.trim()) nextErrors.time = 'Conte qual é o melhor horário.'
    setForm(submitted)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) setSent(true)
  }

  if (sent) {
    const firstName = form.name.trim().split(' ')[0]
    return (
      <div className="form-success" ref={successRef} role="status" aria-live="polite">
        <span className="form-success__check">✓</span>
        <p className="eyebrow"><i />Dados preenchidos</p>
        <h3>{firstName}, seu próximo treino pode começar aqui.</h3>
        <p>Registramos sua preferência por <strong>{form.goal.toLowerCase()}</strong> nesta demonstração. Para falar com a equipe agora e confirmar sua aula experimental, continue pelo WhatsApp.</p>
        <a className="button" href={studio.whatsappUrl} target="_blank" rel="noreferrer">
          Continuar pelo WhatsApp <WhatsAppIcon />
        </a>
        <button type="button" className="reset-form" onClick={() => { setForm(initialData); setSent(false) }}>
          Corrigir meus dados
        </button>
        <small>Este formulário ainda não envia seus dados. A conversa é iniciada somente ao abrir o WhatsApp.</small>
      </div>
    )
  }

  const fieldError = (name) => errors[name] ? <span className="field-error" id={`${name}-error`}>{errors[name]}</span> : null

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="field field--wide">
        <label htmlFor="name">Seu nome</label>
        <input id="name" name="name" autoComplete="name" value={form.name} onChange={updateField} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} placeholder="Como podemos chamar você?" />
        {fieldError('name')}
      </div>
      <div className="field">
        <label htmlFor="phone">Telefone ou WhatsApp</label>
        <input id="phone" name="phone" type="text" inputMode="tel" autoComplete="tel" defaultValue="" onBlur={normalizePhone} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'phone-error' : undefined} placeholder="(31) 99999-9999" />
        {fieldError('phone')}
      </div>
      <div className="field">
        <label htmlFor="time">Melhor horário para contato</label>
        <input id="time" name="time" value={form.time} onChange={updateField} aria-invalid={Boolean(errors.time)} aria-describedby={errors.time ? 'time-error' : undefined} placeholder="Ex.: após as 18h" />
        {fieldError('time')}
      </div>
      <div className="field">
        <label htmlFor="goal">Objetivo principal</label>
        <select id="goal" name="goal" value={form.goal} onChange={updateField} aria-invalid={Boolean(errors.goal)} aria-describedby={errors.goal ? 'goal-error' : undefined}>
          <option value="">Selecione uma opção</option>
          {goalOptions.map((option) => <option key={option}>{option}</option>)}
        </select>
        {fieldError('goal')}
      </div>
      <div className="field">
        <label htmlFor="interest">Modalidade de interesse</label>
        <select id="interest" name="interest" value={form.interest} onChange={updateField} aria-invalid={Boolean(errors.interest)} aria-describedby={errors.interest ? 'interest-error' : undefined}>
          <option value="">Selecione uma opção</option>
          {interestOptions.map((option) => <option key={option}>{option}</option>)}
        </select>
        {fieldError('interest')}
      </div>
      <p className="form-note field--wide">Envio demonstrativo: sem backend ou CRM conectado. Após preencher, você poderá continuar diretamente pelo WhatsApp.</p>
      <button className="button field--wide" type="submit">Quero agendar minha aula <ArrowIcon /></button>
    </form>
  )
}

function Contact() {
  return (
    <section className="section contact" id="contato">
      <div className="container contact__grid">
        <div className="contact__copy">
          <SectionHeading
            dark
            eyebrow="Aula experimental"
            title={<>Seu treino começa<br /><em>com uma conversa.</em></>}
            copy="Conte um pouco sobre o que você busca. A partir daí, o Studio CFCM orienta o próximo passo."
          />
          <div className="contact__direct" data-reveal>
            <span>Prefere ir direto ao ponto?</span>
            <a href={studio.whatsappUrl} target="_blank" rel="noreferrer"><WhatsAppIcon /> {studio.phoneDisplay}</a>
          </div>
        </div>
        <div data-reveal><ContactForm /></div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__main">
        <div>
          <BrandMark light />
          <p>Treino com direção.<br />Evolução com presença.</p>
        </div>
        <div className="footer__column">
          <span>Visite</span>
          <address>{studio.address}<br />{studio.city}<br />{studio.postalCode}</address>
        </div>
        <div className="footer__column">
          <span>Converse</span>
          <a href={studio.whatsappUrl} target="_blank" rel="noreferrer">{studio.phoneDisplay}</a>
          <a href={studio.instagramUrl} target="_blank" rel="noreferrer">{studio.instagram}</a>
        </div>
        <a className="back-top" href="#top" aria-label="Voltar ao topo"><ArrowIcon /></a>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Studio CFCM. Todos os direitos reservados.</span>
        <span>Floramar · Belo Horizonte</span>
      </div>
    </footer>
  )
}

function App() {
  const observerRef = useRef(null)

  useEffect(() => {
    document.documentElement.classList.add('motion-ready')
    const elements = document.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }
    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observerRef.current?.unobserve(entry.target)
        }
      }),
      { threshold: 0.12 },
    )
    elements.forEach((element) => observerRef.current.observe(element))
    return () => observerRef.current?.disconnect()
  }, [])

  useEffect(() => {
    const contactSection = document.getElementById('contato')
    if (!contactSection || !('IntersectionObserver' in window)) return
    const contactObserver = new IntersectionObserver(
      ([entry]) => document.body.classList.toggle('contact-in-view', entry.isIntersecting),
      { threshold: 0.08 },
    )
    contactObserver.observe(contactSection)
    return () => {
      contactObserver.disconnect()
      document.body.classList.remove('contact-in-view')
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#main-content">Ir para o conteúdo</a>
      <Header />
      <main id="main-content">
        <Hero />
        <Method />
        <Modalities />
        <Experience />
        <Results />
        <Location />
        <Contact />
      </main>
      <Footer />
      <a className="floating-whatsapp" href={studio.whatsappUrl} target="_blank" rel="noreferrer" aria-label="Agendar aula experimental pelo WhatsApp">
        <WhatsAppIcon />
        <span>Agendar aula</span>
      </a>
    </>
  )
}

export default App
