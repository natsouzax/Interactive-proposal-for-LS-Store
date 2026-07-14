import { ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { footerLinkGroups } from "@/constants/footer";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <Container className="py-14 sm:py-16">
        <div className="mb-12 grid grid-cols-1 gap-8 min-[420px]:grid-cols-2 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-gray-900">
              LS Store
            </span>
            <p className="mt-3 max-w-[220px] text-xs leading-relaxed text-gray-400">
              A plataforma inteligente que transforma a experiência de compra da
              sua loja.
            </p>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-900">
                {group.title}
              </p>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-gray-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-900">
              Contato
            </p>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-gray-400">
                  contato@lsstore.com.br
                </span>
              </li>
              <li>
                <span className="text-sm text-gray-400">WhatsApp</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 md:flex-row">
          <p className="text-xs text-gray-400">
            © 2026 LS Store. Todos os direitos reservados.
          </p>

          <a
            href="#"
            className="group flex min-h-11 items-center gap-2 rounded-full px-3 text-xs text-gray-500 transition-colors hover:text-gray-900"
            aria-label="Voltar ao topo da página"
          >
            Voltar ao topo
            <ArrowUp
              size={12}
              className="transition-transform group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </Container>
    </footer>
  );
}
