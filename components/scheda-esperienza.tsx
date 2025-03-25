import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface SchedaEsperienzaProps {
  titolo: string
  azienda: string
  periodo: string
  descrizione: string[]
  luogo?: string
  logoUrl?: string
}

export function SchedaEsperienza({ titolo, azienda, periodo, descrizione, luogo, logoUrl }: SchedaEsperienzaProps) {
  return (
    <Card className="apple-card">
      <CardContent className="p-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                {logoUrl && (
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={logoUrl || "/placeholder.svg"}
                      alt={`${azienda} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <h3 className="text-2xl font-semibold">{titolo}</h3>
              </div>
              <span className="text-muted-foreground">{periodo}</span>
            </div>
            <p className="text-lg">
              {azienda} {luogo && `• ${luogo}`}
            </p>
          </div>
          <ul className="space-y-2 list-disc pl-5">
            {descrizione.map((item, index) => (
              <li key={index} className="text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

