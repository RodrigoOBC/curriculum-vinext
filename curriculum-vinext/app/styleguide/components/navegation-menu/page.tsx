"use client"

import { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const basicUsage = String.raw`import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"`

const exampleUsage = String.raw`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="/products">All products</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`

const props = [
  ["NavigationMenu", "align", '"start" | "center" | "end"', '"start"', "Align the popup relative to the trigger"],
  ["NavigationMenuTrigger", "children", "ReactNode", "required", "Trigger label"],
  ["NavigationMenuLink", "href", "string", "required", "Link target rendered by the primitive"],
  ["NavigationMenuLink", "children", "ReactNode", "required", "Link label or content"],
] as const

const menuItems = [
  {
    title: "Overview",
    href: "/styleguide",
    description: "Return to the main design tokens view.",
  },
  {
    title: "Buttons",
    href: "/styleguide#components",
    description: "Review adjacent shadcn controls used in the styleguide.",
  },
  {
    title: "Alerts",
    href: "/styleguide#components",
    description: "See how this system handles feedback states.",
  },
]

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm leading-6">
      <code>{children}</code>
    </pre>
  )
}

function ListItem({
  href,
  title,
  children,
}: {
  href: string
  title: string
  children: React.ReactNode
}) {
  return (
    <li>
      <NavigationMenuLink href={href} className="block space-y-1">
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </NavigationMenuLink>
    </li>
  )
}

export default function NavegationMenuPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [align, setAlign] = useState<"start" | "center" | "end">("start")

  const toggleDarkMode = () => {
    setDarkMode((value) => !value)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10">
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <Badge variant="secondary">Navigation</Badge>
            <h1 className="text-4xl font-bold tracking-tight">Navegation Menu</h1>
            <p className="max-w-2xl text-muted-foreground">
              Shadcn UI navigation menu for grouped links, hover/focus disclosure, and keyboard-friendly site navigation.
            </p>
          </div>
          <Button variant="outline" onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button variant={align === "start" ? "default" : "outline"} onClick={() => setAlign("start")}>
            Align start
          </Button>
          <Button variant={align === "center" ? "default" : "outline"} onClick={() => setAlign("center")}>
            Align center
          </Button>
          <Button variant={align === "end" ? "default" : "outline"} onClick={() => setAlign("end")}>
            Align end
          </Button>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <Card>
          <CardHeader>
            <CardTitle>Live demo</CardTitle>
            <CardDescription>Use hover, focus, or keyboard navigation to open the menu.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <NavigationMenu align={align} className="w-full max-w-none justify-start">
              <NavigationMenuList className="justify-start gap-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-2 sm:w-[380px]">
                      <ListItem href="#" title="Catalog">
                        Browse product categories, filters, and featured collections.
                      </ListItem>
                      <ListItem href="#" title="Pricing">
                        See plan details and choose the right fit for your team.
                      </ListItem>
                      <ListItem href="#" title="Integrations">
                        Connect the menu to your app sections or docs pages.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-2 sm:w-[420px] sm:grid-cols-2">
                      {menuItems.map((item) => (
                        <ListItem key={item.title} href={item.href} title={item.title}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/styleguide" className={cn(navigationMenuTriggerStyle(), "rounded-lg") }>
                    Styleguide
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="rounded-lg border bg-muted/30 p-4 text-sm text-muted-foreground">
              This menu uses the shadcn primitive directly, so it inherits the design tokens from globals.css.
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notes</CardTitle>
            <CardDescription>Behavior and accessibility details.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>Supports arrow-key navigation, Enter/Space activation, and focus management from the underlying Radix primitive.</p>
            <p>Use <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">NavigationMenuLink</code> for link targets and keep the trigger content separate.</p>
            <p>The trigger alignment can be adjusted for different header widths and content density.</p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Import</CardTitle>
            <CardDescription>Base shadcn import statement.</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock>{basicUsage}</CodeBlock>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Basic usage</CardTitle>
            <CardDescription>Common navigation setup with nested content.</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock>{exampleUsage}</CodeBlock>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Props</CardTitle>
            <CardDescription>Documented controls used in this project.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-muted-foreground">
                    <th className="py-2 pr-4 font-medium">Component</th>
                    <th className="py-2 pr-4 font-medium">Prop</th>
                    <th className="py-2 pr-4 font-medium">Type</th>
                    <th className="py-2 pr-4 font-medium">Default</th>
                    <th className="py-2 font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {props.map(([component, prop, type, defaultValue, notes]) => (
                    <tr key={`${component}-${prop}`} className="border-b last:border-0 align-top">
                      <td className="py-3 pr-4 font-medium">{component}</td>
                      <td className="py-3 pr-4">{prop}</td>
                      <td className="py-3 pr-4 font-mono text-xs">{type}</td>
                      <td className="py-3 pr-4 font-mono text-xs">{defaultValue}</td>
                      <td className="py-3">{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
