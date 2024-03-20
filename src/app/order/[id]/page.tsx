"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertDialog } from "@/components/ui/alert-dialog";
import { Toast } from "@/components/ui/toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PartialPayment } from "@/components/PartialPayment";

export default function OrderPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  return (
    <div className="flex flex-col py-6 px-6">
      <header className="flex flex-row items-center justify-between py-6">
        <Button onClick={() => router.back()}>Voltar</Button>
        <h1 className="text-2xl font-bold ml-4">Mesa #{params.id}</h1>
      </header>
      <main>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col">
            <h2 className="font-mono text-center text-2xl">Produtos</h2>
            <div className="relative text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </span>
              <Input
                type="search"
                name="q"
                className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 outline-none focus:bg-gray-800 focus:text-gray-900"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Card>
              <CardContent className="flex flex-col gap-3">
                <CardHeader className="text-center">
                  <CardTitle>Produtos</CardTitle>
                  <CardDescription>Lista de produtos pedidos</CardDescription>
                </CardHeader>
                <div className="flex flex-row justify-between">
                  <div className="text-lg">
                    Produto 1 <Badge>5x</Badge>
                  </div>
                  <p className="text-lg">R$ 0,00</p>
                  <div className="flex gap-2">
                    <Button className="bg-green-600">+</Button>
                    <Button className="bg-red-800">-</Button>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="text-lg">
                    Produto 1 <Badge>5x</Badge>
                  </div>
                  <p className="text-lg">R$ 0,00</p>
                  <div className="flex gap-2">
                    <Button className="bg-green-600">+</Button>
                    <Button className="bg-red-800">-</Button>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="text-lg">
                    Produto 1 <Badge>5x</Badge>
                  </div>
                  <p className="text-lg">R$ 0,00</p>
                  <div className="flex gap-2">
                    <Button className="bg-green-600">+</Button>
                    <Button className="bg-red-800">-</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col">
                <CardHeader>
                  <CardTitle className="font-mono text-center text-2xl">
                    Detalhes
                  </CardTitle>
                </CardHeader>
                <div className="flex flex-row justify-between">
                  <p className="text-lg">Total</p>
                  <p className="text-lg">R$ 0,00</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-lg">Desconto</p>
                  <p className="text-lg">R$ 0,00</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-lg">Taxa de entrega</p>
                  <p className="text-lg">R$ 0,00</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-lg">Total a pagar</p>
                  <p className="text-lg">R$ 0,00</p>
                </div>
                <div className="flex flex-col gap-3 my-4">
                  <PartialPayment></PartialPayment>

                  <Dialog>
                    <DialogTrigger className="w-full bg-green-800 text-white p-3 rounded-lg">
                      Finalizar pedido
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Deseja finalizar essa mesa?</DialogTitle>
                        <DialogDescription>
                          Ao finalizar o pedido, os itens da lista serão
                          marcados como pago.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
