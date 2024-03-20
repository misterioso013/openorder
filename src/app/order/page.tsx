"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export default function OrderPage() {
  const [table, setTable] = useState("");

  const router = useRouter();
  const { toast } = useToast();

  const handleCreate = () => {
    if (!table) {
      toast({
        title: "Identificação da mesa é obrigatório",
        description: "Preencha o campo de identificação da mesa para continuar",
        action: <ToastAction altText="Fechar">Fechar</ToastAction>,
      });
      return;
    }
    toast({
      title: "Pedido criado",
      description: "Seu pedido foi criado com sucesso",
      action: <ToastAction altText="Fechar">Fechar</ToastAction>,
    });
    router.push(`/order/${table}`);
  };

  return (
    <div className="flex flex-col py-6 px-6">
      <h1 className="text-2xl font-bold text-center font-mono py-6">
        Criar pedido
      </h1>
      <div className="flex flex-row gap-2">
        <Input
          className="w-full"
          placeholder="Identificação da mesa"
          value={table}
          onChange={(e) => setTable(e.target.value)}
        />
        <Button className="w-full" onClick={() => handleCreate()}>
          Criar
        </Button>
      </div>
    </div>
  );
}
