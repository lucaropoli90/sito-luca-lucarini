
import Link from "next/link";
import { Download, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <FileText className="h-8 w-8" />
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
      </Card>

      <Card>
        <CardHeader>
          <FileText className="h-8 w-8" />
          <CardTitle>Formazione Generale Lavoratori</CardTitle>
          <CardDescription>
            Attestato di partecipazione al corso di Formazione Generale per Lavoratori.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/images/formazione-generale.jpg" target="_blank">
            <Button variant="outline" className="w-full">
              <Download className="mr-2 h-4 w-4" /> Visualizza Attestato
            </Button>
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <FileText className="h-8 w-8" />
          <CardTitle>Formazione Specifica - Supermercati</CardTitle>
          <CardDescription>
            Attestato di partecipazione al corso di Formazione Specifica per il settore vendite.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/images/formazione-supermercati.jpg" target="_blank">
            <Button variant="outline" className="w-full">
              <Download className="mr-2 h-4 w-4" /> Visualizza Attestato
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
