"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center space-x-3">
          <div className="flex h-14 w-auto items-center">
            <Image src="/davnsci-logo.svg" alt="DAVnSCI Logo" width={160} height={56} className="h-14 w-auto" />
          </div>
          <span className="text-xl font-bold text-foreground">DAVnSCI.COM</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="/services" className="text-sm font-medium hover:text-primary">
            Services
          </a>
          <a href="/workflows" className="text-sm font-medium hover:text-primary">
            Workflows
          </a>
          <a href="/industries" className="text-sm font-medium hover:text-primary">
            Industries
          </a>
          <a href="/resources" className="text-sm font-medium hover:text-primary">
            Resources
          </a>
          <a href="/about" className="text-sm font-medium hover:text-primary">
            About
          </a>
          <a href="/contact" className="text-sm font-medium hover:text-primary">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center">
          <Button size="sm" asChild>
            <a href="/start">Start a project</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-4">
            <a href="/services"
            onClick={() => setIsMenuOpen(false)} 
            className="block text-sm font-medium hover:text-primary">
              Services
            </a>
            <a href="/workflows"
            onClick={() => setIsMenuOpen(false)} 
            className="block text-sm font-medium hover:text-primary">
              Workflows
            </a>
            <a href="/Industries"
            onClick={() => setIsMenuOpen(false)}
            className="block text-sm font-medium hover:text-primary">
              Industries
            </a>
            <a href="/resources"
            onClick={() => setIsMenuOpen(false)}
             className="block text-sm font-medium hover:text-...">
  Resources
</a>
            <a<a href="/About"
            onClick={() => setIsMenuOpen(false)}
            className="block text-sm font-medium hover:text-primary">
              About
            </a>
            <a href="/contact"
            onClick={() => setIsMenuOpen(false)} 
            className="block text-sm font-medium hover:text-primary">
              Contact
            </a>
            <div className="pt-4">
              <Button size="sm" className="w-full" asChild>
                <a href="/start">Start a project</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
