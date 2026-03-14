"use client"

import { Mail, Phone } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "info@arcnaples.com",
    href: "mailto:info@arcnaples.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(239) 555-1234",
    href: "tel:+12395551234",
  },
]

export function ContactPopover({ children }: { children: React.ReactNode }) {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="end"
        sideOffset={30}
        className="z-40 w-96 p-0 rounded-lg border border-border/60 bg-popover/95 backdrop-blur-xl shadow-xl"
      >
        <div className="px-4 pt-4 pb-2">
          <p className="text-sm font-semibold text-foreground">Get in touch</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Questions about Arc? We can walk your team through a live demo.
          </p>
        </div>

        <div className="h-px bg-border/60 mx-4" />

        <div className="p-2">
          {contactMethods.map((method) => {
            const inner = (
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors duration-150 hover:bg-muted/60 group cursor-pointer">
                <method.icon className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors duration-150" />
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-medium leading-none mb-1">
                    {method.label}
                  </p>
                  <p className="text-sm text-foreground truncate">
                    {method.value}
                  </p>
                </div>
              </div>
            )

            if (method.href) {
              return (
                <a key={method.label} href={method.href} className="block">
                  {inner}
                </a>
              )
            }
            return <div key={method.label}>{inner}</div>
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}
