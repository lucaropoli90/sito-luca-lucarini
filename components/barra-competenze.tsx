import type React from "react"
interface BarraCompetenzeProps {
  nome: string
  percentuale: number
}

export function BarraCompetenze({ nome, percentuale }: BarraCompetenzeProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{nome}</span>
        <span className="text-sm font-medium counter" data-target={percentuale}>
          0%
        </span>
      </div>
      <div className="h-1 w-full rounded-full bg-secondary">
        <div
          className="h-1 rounded-full bg-primary animate-skill-fill"
          style={{ width: "0%", "--target-width": `${percentuale}%` } as React.CSSProperties}
        ></div>
      </div>
    </div>
  )
}

