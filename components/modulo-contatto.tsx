"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  nome: z.string().min(2, {
    message: "Il nome deve contenere almeno 2 caratteri.",
  }),
  email: z.string().email({
    message: "Inserisci un indirizzo email valido.",
  }),
  oggetto: z.string().min(5, {
    message: "L'oggetto deve contenere almeno 5 caratteri.",
  }),
  messaggio: z.string().min(10, {
    message: "Il messaggio deve contenere almeno 10 caratteri.",
  }),
})

export function ModuloContatto() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      oggetto: "",
      messaggio: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Questo verrebbe sostituito con una chiamata API reale in un'applicazione reale
    setTimeout(() => {
      console.log(values)
      toast({
        title: "Messaggio inviato!",
        description: "Grazie per il tuo messaggio. Ti risponderò al più presto.",
      })
      form.reset()
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Il tuo nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="La tua email" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="oggetto"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Oggetto</FormLabel>
              <FormControl>
                <Input placeholder="Oggetto del tuo messaggio" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="messaggio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Messaggio</FormLabel>
              <FormControl>
                <Textarea placeholder="Il tuo messaggio" className="min-h-[120px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Invio in corso..." : "Invia Messaggio"}
        </Button>
      </form>
    </Form>
  )
}

