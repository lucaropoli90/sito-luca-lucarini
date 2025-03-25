
'use client'

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <CardHeader>
            <CardTitle>Curriculum Vitae</CardTitle>
            <CardDescription>
              Il mio curriculum vitae completo con tutte le esperienze professionali, competenze e formazione.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/documents/cv.pdf" target="_blank">
              <Button variant="default" className="w-full">
                <Download className="mr-2 h-4 w-4" /> Scarica CV
              </Button>
            </Link>
          </CardContent>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <CardHeader>
            <CardTitle>Formazione Generale Lavoratori</CardTitle>
            <CardDescription>
              Attestato per la formazione generale sulla sicurezza nei luoghi di lavoro.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/images/formazione-generale.jpg" target="_blank">
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" /> Visualizza Attestato
              </Button>
            </Link>
          </CardContent>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <CardHeader>
            <CardTitle>Formazione Specifica - Supermercati</CardTitle>
            <CardDescription>
              Attestato per la formazione specifica area vendita settore supermercati.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/images/formazione-supermercati.jpg" target="_blank">
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" /> Visualizza Attestato
              </Button>
            </Link>
          </CardContent>
        </div>
      </div>
    </div>
  )
}
