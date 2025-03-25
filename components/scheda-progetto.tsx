import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SchedaProgettoProps {
  titolo: string
  descrizione: string
  tag: string[]
  urlImmagine: string
  urlProgetto?: string
}

export function SchedaProgetto({ titolo, descrizione, tag, urlImmagine, urlProgetto = "#" }: SchedaProgettoProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={urlImmagine || "/placeholder.svg"}
          alt={titolo}
          width={300}
          height={200}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="space-y-1">
            <h3 className="font-semibold tracking-tight text-xl">{titolo}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{descrizione}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tag.map((t) => (
              <Badge key={t} variant="secondary">
                {t}
              </Badge>
            ))}
          </div>
          <div className="pt-2">
            <Link
              href={urlProgetto}
              className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300"
            >
              Visualizza Progetto <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

