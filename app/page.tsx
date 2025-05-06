import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Linkedin, Mail, MapPin, Phone, ChevronDown, FileText, Award, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ModuloContatto } from "@/components/modulo-contatto"
import { BarraCompetenze } from "@/components/barra-competenze"
import { SchedaEsperienza } from "@/components/scheda-esperienza"
import { ThemeToggle } from "@/components/theme-toggle"
// Aggiungo il componente CounterScript per animare i contatori delle percentuali
import { CounterScript } from "@/components/counter-script"

export const metadata: Metadata = {
  title: "Luca Lucarini",
  description: "Portfolio professionale e sito personale di Luca Lucarini",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="fixed top-0 z-40 w-full backdrop-blur-md bg-background/80 border-b border-border/40">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-medium">
            Luca Lucarini
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#chi-sono"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Chi Sono
            </Link>
            <Link
              href="#competenze"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Competenze
            </Link>
            <Link
              href="#esperienze"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Esperienze
            </Link>
            <Link
              href="#formazione"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Formazione
            </Link>
            <Link
              href="#documenti"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Documenti
            </Link>
            <Link
              href="#contatti"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contatti
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button asChild className="apple-button hidden md:inline-flex">
              <Link href="#contatti">Contattami</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        <section className="apple-section bg-background">
          <div className="container px-4 md:px-6 flex flex-col items-center">
            <div className="max-w-5xl mx-auto text-center space-y-8 fade-in">
              <div className="relative w-40 h-40 md:w-60 md:h-60 mx-auto mb-8">
                <Image
                  src="/images/profilo.png"
                  alt="Luca Lucarini"
                  fill
                  priority
                  className="profile-image rounded-full"
                />
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">Luca Lucarini</h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Assistant Store Manager con esperienza nella gestione retail e nella grande distribuzione
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild className="apple-button">
                  <Link href="#contatti">
                    Contattami <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="apple-button-secondary">
                  <Link href="#documenti">Visualizza CV</Link>
                </Button>
              </div>
              <div className="pt-12">
                <Link
                  href="#chi-sono"
                  className="inline-flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="text-sm">Scopri di più</span>
                  <ChevronDown className="h-6 w-6 animate-bounce mt-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="chi-sono" className="apple-section bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="space-y-4 text-center fade-in">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Chi Sono</h2>
                <p className="text-xl text-muted-foreground">
                  Professionista con oltre 10 anni di esperienza nella gestione retail
                </p>
              </div>

              <div className="space-y-6 fade-in delay-1">
                <p className="text-lg leading-relaxed">
                  La mia carriera nel mondo del retail è iniziata con un percorso di oltre dieci anni presso Trony DML SPA, dove ho costruito le fondamenta della mia professionalità. Ho seguito ogni fase operativa, crescendo fino a diventare responsabile chiave del punto vendita: un ruolo che mi ha insegnato cosa significa guidare un team, formare nuove risorse e lavorare per obiettivi concreti.
                </p>
                <p className="text-lg leading-relaxed">
                  Negli anni più recenti ho ricoperto il ruolo di Assistant Store Manager presso Lidl Italia, dove ho avuto modo di affinare ulteriormente le mie capacità organizzative e gestionali. Mi sono occupato della gestione del personale, della pianificazione dei turni e del rispetto degli standard aziendali, imparando a muovermi con precisione anche in contesti dinamici e strutturati.

                </p>
                <p className="text-lg leading-relaxed">
                  Mi definisco una persona determinata, responsabile e curiosa. Amo tutto ciò che unisce organizzazione, analisi e visione strategica, e affronto ogni sfida con entusiasmo. Credo che ogni esperienza professionale sia parte di un viaggio in continua evoluzione, e la mia è una storia fatta di passione, crescita e obiettivi raggiunti con impegno.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in delay-2">
                <div className="flex flex-col items-center text-center space-y-2 p-6">
                  <Mail className="h-8 w-8 mb-2 text-primary" />
                  <h3 className="text-lg font-medium">Email</h3>
                  <p className="text-muted-foreground">luca_lucarini@hotmail.it</p>
                </div>
                <div className="flex flex-col items-center text-center space-y-2 p-6">
                  <Phone className="h-8 w-8 mb-2 text-primary" />
                  <h3 className="text-lg font-medium">Telefono</h3>
                  <p className="text-muted-foreground">+39 347 312 9220</p>
                </div>
                <div className="flex flex-col items-center text-center space-y-2 p-6">
                  <MapPin className="h-8 w-8 mb-2 text-primary" />
                  <h3 className="text-lg font-medium">Indirizzo</h3>
                  <p className="text-muted-foreground">Frazione Sappanico 168, Ancona</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="competenze" className="apple-section bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="space-y-4 text-center fade-in">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Competenze</h2>
                <p className="text-xl text-muted-foreground">Le mie competenze tecniche e professionali</p>
              </div>

              <div className="fade-in delay-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Competenze Tecniche</h3>
                    <div className="space-y-6">
                      <BarraCompetenze nome="Microsoft Office (Word, PowerPoint, Excel)" percentuale={90} />
                      <BarraCompetenze nome="Autocad" percentuale={85} />
                      <BarraCompetenze nome="Gestione del personale" percentuale={95} />
                      <BarraCompetenze nome="Tecniche di vendita" percentuale={95} />
                      <BarraCompetenze nome="Gestione del punto vendita" percentuale={90} />
                      <BarraCompetenze nome="Formazione del personale" percentuale={85} />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Competenze Linguistiche</h3>
                    <div className="space-y-6">
                      <BarraCompetenze nome="Italiano (Madrelingua)" percentuale={100} />
                      <BarraCompetenze nome="Inglese (A2)" percentuale={40} />
                      <BarraCompetenze nome="Spagnolo (A2)" percentuale={40} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 fade-in delay-2">
                <h3 className="text-2xl font-semibold">Competenze Trasversali</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="apple-card">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-medium mb-2">Comunicazione</h4>
                      <p className="text-muted-foreground">
                        Comunicazione chiara e precisa, con capacità di relazionarsi efficacemente con clienti e
                        colleghi.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="apple-card">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-medium mb-2">Organizzazione</h4>
                      <p className="text-muted-foreground">
                        Capacità di organizzare autonomamente il lavoro, definendo priorità anche in situazioni di
                        stress.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="apple-card">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-medium mb-2">Leadership</h4>
                      <p className="text-muted-foreground">
                        Gestione del personale, analisi di CV e conduzione di colloqui di lavoro.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="esperienze" className="apple-section bg-secondary/50">
  <div className="container px-4 md:px-6">
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="space-y-4 text-center fade-in">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Esperienze Lavorative</h2>
        <p className="text-xl text-muted-foreground">Il mio percorso professionale</p>
      </div>

      <ol className="relative border-l border-primary fade-in delay-1">
        <li className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white ring-8 ring-background">
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"><path d="M6 2a1 1 0 0 0-1 1v14l7-5 7 5V3a1 1 0 0 0-1-1H6z"/></svg>
          </span>
          <h3 className="text-lg font-semibold text-primary">Assistant Store Manager – Lidl Italia</h3>
          <time className="block mb-2 text-sm font-normal text-muted-foreground">04/2024 - 04/2025</time>
          <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
            <li>Gestione del personale, turni e formazione</li>
            <li>Controllo esposizione e prezzi</li>
            <li>Gestione punto vendita e sicurezza HACCP</li>
            <li>Supporto alla direzione in assenza del manager</li>
          </ul>
        </li>

        <li className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white ring-8 ring-background">
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"><path d="M6 2a1 1 0 0 0-1 1v14l7-5 7 5V3a1 1 0 0 0-1-1H6z"/></svg>
          </span>
          <h3 className="text-lg font-semibold text-primary">Responsabile Punto Vendita – Trony DML SPA</h3>
          <time className="block mb-2 text-sm font-normal text-muted-foreground">04/2015 - 03/2024</time>
          <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
            <li>Gestione team e formazione del personale</li>
            <li>Ottimizzazione dei reparti</li>
            <li>Supervisione vendite e obiettivi</li>
          </ul>
        </li>

        <li className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white ring-8 ring-background">
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"><path d="M6 2a1 1 0 0 0-1 1v14l7-5 7 5V3a1 1 0 0 0-1-1H6z"/></svg>
          </span>
          <h3 className="text-lg font-semibold text-primary">Responsabile Reparto – Trony DML SPA</h3>
          <time className="block mb-2 text-sm font-normal text-muted-foreground">11/2014 - 04/2015</time>
          <p className="text-muted-foreground text-sm">
            Gestione visual, upselling e strategia di reparto.
          </p>
        </li>

        <li className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white ring-8 ring-background">
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"><path d="M6 2a1 1 0 0 0-1 1v14l7-5 7 5V3a1 1 0 0 0-1-1H6z"/></svg>
          </span>
          <h3 className="text-lg font-semibold text-primary">Formazione Reparto Informatica – Trony DML SPA</h3>
          <time className="block mb-2 text-sm font-normal text-muted-foreground">04/2014 - 10/2014</time>
          <p className="text-muted-foreground text-sm">
            Addestramento pratico e tecniche di vendita su prodotti tecnologici.
          </p>
        </li>

        <li className="ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white ring-8 ring-background">
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"><path d="M6 2a1 1 0 0 0-1 1v14l7-5 7 5V3a1 1 0 0 0-1-1H6z"/></svg>
          </span>
          <h3 className="text-lg font-semibold text-primary">Forze Armate – Stato Italiano</h3>
          <time className="block mb-2 text-sm font-normal text-muted-foreground">04/2009 - 04/2010</time>
          <p className="text-muted-foreground text-sm">
            Addestramento, pattugliamenti e operatività di base.
          </p>
        </li>
      </ol>
    </div>
  </div>
</section>

        <section id="formazione" className="apple-section bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="space-y-4 text-center fade-in">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Formazione</h2>
                <p className="text-xl text-muted-foreground">Il mio percorso formativo</p>
              </div>

              <div className="space-y-6 fade-in delay-1">
                <Card className="apple-card">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <h3 className="text-2xl font-semibold">Tecnico dei Sistemi Energetici</h3>
                        <span className="text-muted-foreground">2005 - 2011</span>
                      </div>
                      <p className="text-lg">Istituto di Istruzione Superiore "Podesti – Calzecchi Onesti", Ancona</p>
                      <div className="space-y-2">
                        <p className="text-muted-foreground">Indirizzo di studi: Meccanica, Informatica, Autocad</p>
                        <p className="text-muted-foreground">Votazione: 70/100</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="apple-card">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <h3 className="text-2xl font-semibold">Attestato Autocad</h3>
                        <span className="text-muted-foreground">2005 - 2011</span>
                      </div>
                      <p className="text-lg">Istituto di Istruzione Superiore "Podesti – Calzecchi Onesti", Ancona</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="documenti" className="apple-section bg-secondary/50">
  <div className="container px-4 md:px-6">
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="space-y-4 text-center fade-in">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Documenti e Attestati</h2>
        <p className="text-xl text-muted-foreground">Curriculum Vitae e certificazioni professionali</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 fade-in delay-1">
        <Card className="apple-card h-full flex flex-col justify-between">
          <CardContent className="p-8 flex flex-col h-full">
            <div className="flex items-center mb-6">
              <FileText className="h-10 w-10 mr-4 text-primary" />
              <h3 className="text-2xl font-semibold">Curriculum Vitae</h3>
            </div>
            <p className="text-muted-foreground mb-8 flex-grow">
              Il mio curriculum vitae completo con tutte le esperienze professionali, competenze e formazione.
            </p>
            <Link href="/documents/cv.pdf" target="_blank">
              <Button className="apple-button w-full mt-auto">
                <Download className="mr-2 h-4 w-4" /> Scarica CV
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="apple-card h-full flex flex-col justify-between">
          <CardContent className="p-8 flex flex-col h-full">
            <div className="flex items-center mb-4">
              <Award className="h-8 w-8 mr-3 text-primary" />
              <h3 className="text-xl font-semibold">Formazione Specifica - Supermercati</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Attestato con verifica finale per la formazione specifica nel settore supermercati - area vendita.
            </p>
            <div className="text-sm text-muted-foreground mb-4">
              <p>Rilasciato da: ADECCO FORMAZIONE s.r.l.</p>
              <p>Data: 03-04-2024</p>
            </div>
            <Link href="/images/formazione-supermercati.jpg" target="_blank">
              <Button variant="outline" className="w-full mt-auto">
                <Download className="mr-2 h-4 w-4" /> Visualizza Attestato
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="apple-card h-full flex flex-col justify-between">
          <CardContent className="p-8 flex flex-col h-full">
            <div className="flex items-center mb-4">
              <Award className="h-8 w-8 mr-3 text-primary" />
              <h3 className="text-xl font-semibold">Formazione Generale Lavoratori</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Attestato di formazione generale con verifica finale delle conoscenze acquisite.
            </p>
            <div className="text-sm text-muted-foreground mb-4">
              <p>Rilasciato da: ADECCO FORMAZIONE s.r.l.</p>
              <p>Data: 03-04-2024</p>
            </div>
            <Link href="/images/formazione-generale.jpg" target="_blank">
              <Button variant="outline" className="w-full mt-auto">
                <Download className="mr-2 h-4 w-4" /> Visualizza Attestato
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="apple-card h-full flex flex-col justify-between">
          <CardContent className="p-8 flex flex-col h-full">
            <div className="flex items-center mb-4">
              <Award className="h-8 w-8 mr-3 text-primary" />
              <h3 className="text-xl font-semibold">Formazione HACCP</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Attestato per la sicurezza alimentare secondo normativa HACCP, necessario per lavorare nel settore GDO.
            </p>
            <div className="text-sm text-muted-foreground mb-4">
              <p>Rilasciato da: Ente formativo non specificato</p>
              <p>Data: non indicata</p>
            </div>
            <Link href="/documents/haccp.pdf" target="_blank">
              <Button variant="outline" className="w-full mt-auto">
                <Download className="mr-2 h-4 w-4" /> Visualizza Attestato
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="apple-card h-full flex flex-col justify-between">
          <CardContent className="p-8 flex flex-col h-full">
            <div className="flex items-center mb-4">
              <Award className="h-8 w-8 mr-3 text-primary" />
              <h3 className="text-xl font-semibold">Primo Soccorso (Gruppo B e C)</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Formazione obbligatoria con esercitazioni pratiche e test finale per addetto al primo soccorso.
            </p>
            <div className="text-sm text-muted-foreground mb-4">
              <p>Rilasciato da: Ecol Studio S.p.A.</p>
              <p>Data: 03/07/2024 – 04/07/2024</p>
            </div>
            <Link href="/documents/primo-soccorso.pdf" target="_blank">
              <Button variant="outline" className="w-full mt-auto">
                <Download className="mr-2 h-4 w-4" /> Visualizza Attestato
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="apple-card h-full flex flex-col justify-between">
          <CardContent className="p-8 flex flex-col h-full">
            <div className="flex items-center mb-4">
              <Award className="h-8 w-8 mr-3 text-primary" />
              <h3 className="text-xl font-semibold">Prevenzione Incendi – Livello 2</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Corso antincendio per attività a medio rischio, con test teorico e prova pratica superata.
            </p>
            <div className="text-sm text-muted-foreground mb-4">
              <p>Rilasciato da: MSn Sicurezza sul Lavoro (E.BI.GEN)</p>
              <p>Data: 09/05/2024</p>
            </div>
            <Link href="/documents/prevenzione-incendi.pdf" target="_blank">
              <Button variant="outline" className="w-full mt-auto">
                <Download className="mr-2 h-4 w-4" /> Visualizza Attestato
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</section>

        <section id="altro" className="apple-section bg-background">
  <div className="container px-4 md:px-6">
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="space-y-4 text-center fade-in">
        <div className="flex flex-col items-center space-y-2">
  <svg className="w-10 h-10 text-primary animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L14.25 12 9.75 7"></path>
  </svg>
  <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Altre Attività</h2>
</div>
        <p className="text-xl text-muted-foreground">Ulteriori esperienze, passioni e riconoscimenti</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-in delay-1">
        <Card className="apple-card">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-2xl font-semibold">Appartenenza a Gruppi e Associazioni</h3>
            <p className="text-muted-foreground">
              Vice Presidente dell’Associazione Culturale "Young Artists Promotion", impegnata nell’organizzazione di corsi, concorsi, borse di studio ed eventi in ambito artistico.
            </p>
          </CardContent>
        </Card>

        <Card className="apple-card">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-2xl font-semibold">Premi e Riconoscimenti</h3>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Premio “Eccellenza Operativa” – Trony DML SPA (2018)</li>
              <li>Riconoscimento interno per performance di team – Trony (2019)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="apple-card">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-2xl font-semibold">Esperienza di Volontariato</h3>
            <p className="text-muted-foreground">
              Supporto volontario in eventi locali e attività logistiche presso manifestazioni artistiche e culturali promosse dall’associazione "Young Artists Promotion".
            </p>
          </CardContent>
        </Card>

        <Card className="apple-card">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-2xl font-semibold">Progetto Personale</h3>
            <p className="text-muted-foreground">
              Ho sviluppato un sistema Excel avanzato per la gestione dei turni e delle pause settimanali, utilizzato internamente per ottimizzare l’equilibrio del carico di lavoro nel punto vendita.
            </p>
          </CardContent>
        </Card>

        <Card className="apple-card">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-2xl font-semibold">Interessi Personali</h3>
            <p className="text-muted-foreground">
              Appassionato di camminate in natura e fotografia paesaggistica. In costante aggiornamento su tematiche legate al team management e al benessere organizzativo.
            </p>
          </CardContent>
        </Card>
      </div>
    
<div className="text-center pt-8">
  <Link href="#contatti">
    <Button className="apple-button">
      Vuoi saperne di più? Contattami
    </Button>
  </Link>
</div>

</div></div></section>

        <section id="contatti" className="apple-section bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="space-y-4 text-center fade-in">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Contattami</h2>
                <p className="text-xl text-muted-foreground">
                  Hai un'opportunità lavorativa o vuoi discutere di una collaborazione?
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 fade-in delay-1">
                <Card className="apple-card">
                  <CardContent className="p-8">
                    
<form action="https://formspree.io/f/manedoop" method="POST" className="space-y-4">
  <div>
    <label htmlFor="name" className="block text-sm font-medium">Nome</label>
    <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded-md" />
  </div>
  <div>
    <label htmlFor="email" className="block text-sm font-medium">Email</label>
    <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded-md" />
  </div>
  <div>
    <label htmlFor="message" className="block text-sm font-medium">Messaggio</label>
    <textarea id="message" name="message" rows="4" required className="w-full px-3 py-2 border rounded-md"></textarea>
  </div>
  <button type="submit" className="apple-button w-full">Invia</button>
</form>

                  </CardContent>
                </Card>
                <div className="space-y-8">
                  <Card className="apple-card">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-semibold mb-6">Informazioni di Contatto</h3>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Mail className="mr-3 h-5 w-5 text-primary" />
                          <span>luca_lucarini@hotmail.it</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="mr-3 h-5 w-5 text-primary" />
                          <span>+39 347 312 9220</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-3 h-5 w-5 text-primary" />
                          <span>Frazione Sappanico 168, Ancona 60131</span>
                        </div>
                      </div>
                      <div className="pt-8">
                        <h4 className="font-medium mb-4">Seguimi su:</h4>
                        <div className="flex space-x-4">
                          <Link
                            href="https://www.linkedin.com/in/lucalucarini90/"
                            target="_blank"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      
<Link href="https://wa.me/393473129220" passHref>
  <a className="fixed bottom-4 right-4 z-50 block md:hidden bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.67-1.611-.916-2.206-.242-.579-.487-.501-.67-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.123-.272-.198-.57-.347z"/>
    </svg>
  </a>
</Link>

</main>

      <footer className="border-t border-border/40 py-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Luca Lucarini. Tutti i diritti riservati.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/lucalucarini90/"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground max-w-md">
              Autorizzo il trattamento dei miei dati personali ai sensi del Decreto Legislativo 30 giugno 2003, n. 196
              "Codice in materia di protezione dei dati personali".
            </p>
          </div>
        </div>
      </footer>
      <CounterScript />
    </div>
  )
}

