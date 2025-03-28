
"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Download, ExternalLink, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function Home() {
  const [theme, setTheme] = useState("light")

  // Dark mode automatica basata sul sistema
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setTheme(prefersDark ? "dark" : "light")
  }, [])

  return (
    <main className="flex flex-col items-center justify-center px-4 py-8 md:px-6 lg:px-8">
      <section className="mb-12 text-center">
        <Image src="/images/profilo.png" alt="Foto profilo" width={120} height={120} className="mx-auto rounded-full" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">Luca Lucarini</h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">Addetto vendita / Visual merchandiser</p>
      </section>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Curriculum Vitae</CardTitle>
            <CardDescription>
              Il mio curriculum vitae completo con tutte le esperienze professionali, competenze e formazione.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <a href="/documents/cv.pdf" target="_blank">
              <Button variant="default" className="w-full">
                <Download className="mr-2 h-4 w-4" /> Scarica CV
              </Button>
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Attestato Formazione Generale</CardTitle>
            <CardDescription>Visualizza attestato formazione generale</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visualizza Attestato
                </Button>
              </DialogTrigger>
              <DialogContent>
                <Image src="/images/formazione-generale.jpg" alt="Attestato Formazione Generale" width={600} height={800} />
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Attestato Formazione Supermercati</CardTitle>
            <CardDescription>Visualizza attestato formazione supermercati</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visualizza Attestato
                </Button>
              </DialogTrigger>
              <DialogContent>
                <Image src="/images/formazione-supermercati.jpg" alt="Attestato Supermercati" width={600} height={800} />
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              <Languages className="mr-2 inline h-5 w-5" />
              Lingua Inglese
            </CardTitle>
            <CardDescription>
              Buona conoscenza della lingua inglese scritta e parlata.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Progetti / Portfolio</CardTitle>
            <CardDescription>Galleria interattiva di esperienze e progetti.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Image src="/images/logo-lidl.png" alt="Lidl" width={120} height={120} className="mx-auto" />
            <Image src="/images/logo-trony.png" alt="Trony" width={120} height={120} className="mx-auto" />
          </CardContent>
        </Card>
      </div>

      <section className="mt-12 w-full max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Contattami</CardTitle>
            <CardDescription>Compila il modulo per inviarmi un messaggio.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action="https://formspree.io/f/manedoop" method="POST" className="grid gap-4">
              <div>
                <Label htmlFor="name">Nome</Label>
                <Input name="name" id="name" placeholder="Il tuo nome" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="La tua email" required />
              </div>
              <div>
                <Label htmlFor="subject">Oggetto</Label>
                <Input name="subject" id="subject" placeholder="Oggetto del tuo messaggio" required />
              </div>
              <div>
                <Label htmlFor="message">Messaggio</Label>
                <Textarea name="message" id="message" placeholder="Il tuo messaggio" rows={5} required />
              </div>
              <Button type="submit" className="w-full">Invia Messaggio</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
