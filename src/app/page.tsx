import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Bem-vindo ao Open Order
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Seu gerenciador de pedidos para bares e restaurantes
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link href="/dashboard">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                  Começar
                </Button>
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Saiba mais
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Funcionalidades
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Aprimore sua forma de atender
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Nosso sistema foi projetado para simplificar seus pedidos e
                  melhorar a experiência do cliente. Aqui estão alguns dos
                  principais recursos.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Pedidos pelo celular</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Permita que seus clientes façam pedidos diretamente de seus
                  dispositivos móveis, reduzindo o tempo de espera e melhorando
                  a eficiência.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Reservas de mesa</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Permita que os clientes reservem mesas com antecedência,
                  garantindo uma experiência gastronômica tranquila e melhor
                  gerenciamento da mesa.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Personalização do Menu</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Atualize e personalize facilmente seu menu diretamente do
                  sistema, mantendo suas ofertas atualizadas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contate-nos
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Entre em contato com nossa equipe.
              </p>
            </div>
            <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height="70"
                  src="/placeholder.svg"
                  width="140"
                />
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height="70"
                  src="/placeholder.svg"
                  width="140"
                />
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height="70"
                  src="/placeholder.svg"
                  width="140"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
