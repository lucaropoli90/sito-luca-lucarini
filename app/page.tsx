
// ⬆️ Parti del file rimaste invariate...

// 🔁 IMPORT per il Modal
import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

// ⚙️ Hook per il tema automatico (da inserire nel componente Home)
useEffect(() => {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
}, [])

// 📄 Modal per attestati (da usare dove c’è il pulsante Visualizza Attestato)
<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline" className="w-full">
      <Download className="mr-2 h-4 w-4" /> Visualizza Attestato
    </Button>
  </DialogTrigger>
  <DialogContent className="p-0 max-w-3xl bg-transparent border-none shadow-none">
    <img src="/images/formazione-supermercati.jpg" alt="Attestato Supermercati" className="rounded-lg shadow-lg w-full h-auto" />
  </DialogContent>
</Dialog>

// 📄 Sezione Lingua Inglese (da inserire nella sezione competenze linguistiche)
<BarraCompetenze nome="Lingua Inglese (A2 - in corso di miglioramento)" percentuale={50} />

// 💼 Sezione Portfolio
<section id="portfolio" className="apple-section bg-secondary/50">
  <div className="container px-4 md:px-6">
    <div className="max-w-4xl mx-auto space-y-12 text-center">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Portfolio</h2>
      <p className="text-xl text-muted-foreground">Una selezione dei miei progetti ed esperienze visive</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        <Card className="hover:scale-105 transition-transform duration-300 ease-in-out">
          <CardContent className="p-0">
            <img src="/images/formazione-supermercati.jpg" alt="Attestato" className="rounded-t-lg" />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold">Formazione Supermercati</h3>
              <p className="text-muted-foreground text-sm">Corso completato con verifica finale</p>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:scale-105 transition-transform duration-300 ease-in-out">
          <CardContent className="p-0">
            <img src="/images/formazione-generale.jpg" alt="Formazione Generale" className="rounded-t-lg" />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold">Formazione Generale</h3>
              <p className="text-muted-foreground text-sm">Attestato sulla sicurezza dei lavoratori</p>
            </div>
          </CardContent>
        </Card>
        <!-- Altri progetti o immagini -->
      </div>
    </div>
  </div>
</section>
