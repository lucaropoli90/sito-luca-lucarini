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

              <div className="space-y-8 fade-in delay-1">
                <SchedaEsperienza
                  titolo="Assistant Store Manager"
                  azienda="Lidl Italia"
                  periodo="04/2024 - 04/2025"
                  logoUrl="/images/logo-lidl.png"
                  descrizione={[
                    "Gestione del personale, definendo i turni e organizzando le attività di formazione per gli Addetti Vendite",
                    "Verifica dei prezzi e dell'assortimento dei prodotti esposti",
                    "Cura dell'aspetto del Punto Vendita (pulizia e ordine)",
                    "Garanzia del rispetto delle normative di legge sulla sicurezza del personale e quelle alimentari (HACCP)",
                    "Assistenza al cliente",
                    "Sostituzione del Capo Filiale | Store manager in sua assenza",
                  ]}
                />

                <SchedaEsperienza
                  titolo="Responsabile chiave del punto vendita"
                  azienda="Trony DML SPA"
                  periodo="04/2015 - 03/2024"
                  logoUrl="/images/logo-trony.png"
                  descrizione={[
                    "Responsabilità nel gestire il personale",
                    "Formazione del personale nei punti vendita",
                    "Valutazione e feedback sul progresso qualitativo",
                  ]}
                />

                <SchedaEsperienza
                  titolo="Responsabile reparto"
                  azienda="Trony DML SPA"
                  periodo="11/2014 - 04/2015"
                  logoUrl="/images/logo-trony.png"
                  descrizione={[
                    "Responsabilità nel seguire l'andamento qualitativo del reparto",
                    "Implementazione di tecniche di cross selling e upselling",
                    "Gestione dell'allestimento del reparto",
                  ]}
                />

                <SchedaEsperienza
                  titolo="Formazione reparto Informatica"
                  azienda="Trony DML SPA"
                  periodo="04/2014 - 10/2014"
                  logoUrl="/images/logo-trony.png"
                  descrizione={[
                    "Percorso formativo della gestione del reparto Informatica",
                    "Apprendimento di tecniche di vendita",
                    "Assistenza al cliente",
                    "Gestione di problematiche",
                  ]}
                />

                <SchedaEsperienza
                  titolo="Forze Armate"
                  azienda="Stato Italiano"
                  periodo="04/2009 - 04/2010"
                  descrizione={["Addestramento", "Pattugliamento"]}
                  luogo="Chieti, Italia"
                />
              </div>

              <div className="space-y-6 fade-in delay-2 mt-16">
                <div className="text-center space-y-4 mb-8">
                  <div className="flex items-center justify-center">
                    <div className="relative h-10 w-10 mr-3">
                      <Image src="/images/logo-trony.png" alt="Trony DML logo" fill className="object-contain" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">Supporto Aperture Punti Vendita Trony DML</h3>
                  </div>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Ho contribuito all'apertura e all'avviamento di numerosi punti vendita Trony in diverse città
                    italiane, coordinando le attività di reparto e formando il personale.
                  </p>
                </div>

                <Card className="apple-card p-6 border-2 border-primary/10">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="space-y-1">
                        <h4 className="font-semibold text-lg">Pesaro</h4>
                        <p className="text-sm text-muted-foreground">30/06/2016 - 17/07/2016</p>
                        <p className="text-xs text-muted-foreground">Piazza Stefanini 10</p>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-lg">Teramo</h4>
                        <p className="text-sm text-muted-foreground">27/03/2017 - 09/04/2017</p>
                        <p className="text-xs text-muted-foreground">Via Pietro De Santi 1/3 San Nicolò a Tordino</p>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-lg">Vicenza</h4>
                        <p className="text-sm text-muted-foreground">10/07/2017 - 23/07/2017</p>
                        <p className="text-xs text-muted-foreground">Via Brescia 31 Torri di Quartesolo</p>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-lg">Bologna</h4>
                        <p className="text-sm text-muted-foreground">13/11/2017 - 26/11/2017</p>
                        <p className="text-xs text-muted-foreground">Via dell'industria 14 Zona Roveri</p>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-lg">Rimini</h4>
                        <p className="text-sm text-muted-foreground">08/05/2018 - 20/05/2018</p>
                        <p className="text-xs text-muted-foreground">Via Consolare Rimini-RSM 15</p>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-lg">Conegliano</h4>
                        <p className="text-sm text-muted-foreground">26/11/2018 - 16/12/2018</p>
                        <p className="text-xs text-muted-foreground">Via S. Giuseppe 23</p>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-lg">Città di Castello</h4>
                        <p className="text-sm text-muted-foreground">14/03/2019 - 31/03/2019</p>
                        <p className="text-xs text-muted-foreground">Viale Rodolfo Morandi 4a</p>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-lg">Reggio Emilia</h4>
                        <p className="text-sm text-muted-foreground">24/09/2019 - 20/10/2019</p>
                        <p className="text-xs text-muted-foreground">Via Fratelli Cervi 84</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
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
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Altre Attività</h2>
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
              <li>Premio “Leadership in Store Management” – Lidl Italia (2023)</li>
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
    </div>
  </div>
</section>

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

