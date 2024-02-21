"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const PartialPaymentSchema = z.object({
  partialValue: z.coerce.number().min(1, {
    message: "O Valor mínimo deve ser de 1 real",
  }),
});

export function PartialPayment() {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const form = useForm<z.infer<typeof PartialPaymentSchema>>({
    resolver: zodResolver(PartialPaymentSchema),
    defaultValues: {
      partialValue: 0,
    },
  });

  function onSubmit(values: z.infer<typeof PartialPaymentSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger className="w-full bg-yellow-700 text-white p-3 rounded-lg">
        Pagamento Parcial
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Pagamento parcial da conta</DialogTitle>
          <DialogDescription>
            Esse valor será subtráido do valor final da conta.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-row gap-3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
              <FormField
                control={form.control}
                name="partialValue"
                render={({ field }) => (
                  <FormItem className="my-4">
                    <FormLabel>Valor parcial</FormLabel>
                    <FormControl>
                      <Input placeholder="Valor" {...field} type="number" />
                    </FormControl>
                    <FormDescription>
                      Valor que será pago parcialmente
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={buttonDisabled}>
                Salvar
              </Button>
            </form>
          </Form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
