import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-white font-heading cursor-pointer">booksy</h1>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-white text-sm hover:text-amber-200 transition-colors">Entrar / Inscrever-se</button>
          <select className="bg-transparent text-white text-sm border border-white/20 rounded px-2 py-1">
            <option value="BR">BR</option>
          </select>
          <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100 border-white">
            Listar sua empresa
          </Button>
        </div>
      </div>
    </header>
  )
}
