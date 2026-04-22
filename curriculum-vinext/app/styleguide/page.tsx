"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, Info } from "lucide-react"

export default function StyleguidePage() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold mb-2">Design System</h1>
          <p className="text-muted-foreground">
            Complete design tokens and components for the CV/Resume theme
          </p>
        </div>
        <Button onClick={toggleDarkMode} variant="outline">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>

      {/* Color Palette */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Color Palette</h2>

        {/* Primary Scale */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Primary (Cyan/Turquoise)</h3>
          <div className="grid grid-cols-10 gap-2">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight) => (
              <div key={weight} className="flex flex-col items-center">
                <div
                  className="w-full h-20 rounded-lg border shadow-sm mb-2"
                  style={{ backgroundColor: `hsl(var(--primary-${weight}))` }}
                />
                <span className="text-xs font-mono">{weight}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            CSS Variable: <code className="bg-muted px-2 py-1 rounded">--primary-[weight]</code>
          </p>
        </div>

        {/* Grey Scale */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Grey Scale</h3>
          <div className="grid grid-cols-10 gap-2">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight) => (
              <div key={weight} className="flex flex-col items-center">
                <div
                  className="w-full h-20 rounded-lg border shadow-sm mb-2"
                  style={{ backgroundColor: `hsl(var(--grey-${weight}))` }}
                />
                <span className="text-xs font-mono">{weight}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            CSS Variable: <code className="bg-muted px-2 py-1 rounded">--grey-[weight]</code>
          </p>
        </div>

        {/* Semantic Colors */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Semantic Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <div className="w-full h-20 rounded-lg bg-primary mb-2" />
                <CardTitle className="text-sm">Primary</CardTitle>
              </CardHeader>
              <CardContent>
                <code className="text-xs">--primary</code>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-full h-20 rounded-lg bg-destructive mb-2" />
                <CardTitle className="text-sm">Destructive</CardTitle>
              </CardHeader>
              <CardContent>
                <code className="text-xs">--destructive</code>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-full h-20 rounded-lg" style={{ backgroundColor: "hsl(var(--success))" }} />
                <CardTitle className="text-sm">Success</CardTitle>
              </CardHeader>
              <CardContent>
                <code className="text-xs">--success</code>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-full h-20 rounded-lg" style={{ backgroundColor: "hsl(var(--warning))" }} />
                <CardTitle className="text-sm">Warning</CardTitle>
              </CardHeader>
              <CardContent>
                <code className="text-xs">--warning</code>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-full h-20 rounded-lg" style={{ backgroundColor: "hsl(var(--info))" }} />
                <CardTitle className="text-sm">Info</CardTitle>
              </CardHeader>
              <CardContent>
                <code className="text-xs">--info</code>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-full h-20 rounded-lg bg-muted mb-2" />
                <CardTitle className="text-sm">Muted</CardTitle>
              </CardHeader>
              <CardContent>
                <code className="text-xs">--muted</code>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-full h-20 rounded-lg bg-accent mb-2" />
                <CardTitle className="text-sm">Accent</CardTitle>
              </CardHeader>
              <CardContent>
                <code className="text-xs">--accent</code>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-full h-20 rounded-lg bg-secondary mb-2" />
                <CardTitle className="text-sm">Secondary</CardTitle>
              </CardHeader>
              <CardContent>
                <code className="text-xs">--secondary</code>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Background & Foreground */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Background & Foreground</h3>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <div className="w-full h-20 rounded-lg bg-background border mb-2" />
                <CardTitle className="text-sm">Background</CardTitle>
              </CardHeader>
              <CardContent>
                <code className="text-xs">--background</code>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-full h-20 rounded-lg bg-foreground mb-2" />
                <CardTitle className="text-sm">Foreground</CardTitle>
              </CardHeader>
              <CardContent>
                <code className="text-xs">--foreground</code>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Typography</h2>
        <Card>
          <CardHeader>
            <CardTitle>Open Sans Font Family</CardTitle>
            <CardDescription>
              Modern, clean sans-serif font optimized for readability
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">Heading 1</h1>
              <code className="text-xs text-muted-foreground">text-4xl font-bold</code>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">Heading 2</h2>
              <code className="text-xs text-muted-foreground">text-3xl font-bold</code>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Heading 3</h3>
              <code className="text-xs text-muted-foreground">text-2xl font-semibold</code>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Heading 4</h4>
              <code className="text-xs text-muted-foreground">text-xl font-semibold</code>
            </div>
            <div>
              <p className="text-base mb-2">Body text - Regular weight for comfortable reading</p>
              <code className="text-xs text-muted-foreground">text-base</code>
            </div>
            <div>
              <p className="text-sm mb-2 text-muted-foreground">Small text - Used for captions and secondary information</p>
              <code className="text-xs text-muted-foreground">text-sm text-muted-foreground</code>
            </div>
            <div>
              <p className="text-xs mb-2 text-muted-foreground">Extra small text - Labels and metadata</p>
              <code className="text-xs text-muted-foreground">text-xs text-muted-foreground</code>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Border Radius */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Border Radius</h2>
        <Card>
          <CardHeader>
            <CardTitle>Radius Scale</CardTitle>
            <CardDescription>
              Default radius: <code className="bg-muted px-2 py-1 rounded">0.5rem (8px)</code>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-full h-20 bg-primary rounded-none mb-2" />
                <p className="text-sm font-medium">None</p>
                <code className="text-xs text-muted-foreground">rounded-none</code>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-primary rounded-sm mb-2" />
                <p className="text-sm font-medium">Small</p>
                <code className="text-xs text-muted-foreground">rounded-sm</code>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-primary rounded-md mb-2" />
                <p className="text-sm font-medium">Medium (Default)</p>
                <code className="text-xs text-muted-foreground">rounded-md</code>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-primary rounded-lg mb-2" />
                <p className="text-sm font-medium">Large</p>
                <code className="text-xs text-muted-foreground">rounded-lg</code>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-primary rounded-xl mb-2" />
                <p className="text-sm font-medium">Extra Large</p>
                <code className="text-xs text-muted-foreground">rounded-xl</code>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-primary rounded-2xl mb-2" />
                <p className="text-sm font-medium">2XL</p>
                <code className="text-xs text-muted-foreground">rounded-2xl</code>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-primary rounded-3xl mb-2" />
                <p className="text-sm font-medium">3XL</p>
                <code className="text-xs text-muted-foreground">rounded-3xl</code>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-primary rounded-full mb-2" />
                <p className="text-sm font-medium">Full</p>
                <code className="text-xs text-muted-foreground">rounded-full</code>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Shadows */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Shadows</h2>
        <Card>
          <CardHeader>
            <CardTitle>Shadow Scale</CardTitle>
            <CardDescription>Subtle elevation system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-full h-20 bg-card border rounded-lg shadow-sm mb-2" />
                <p className="text-sm font-medium">Small</p>
                <code className="text-xs text-muted-foreground">shadow-sm</code>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-card rounded-lg shadow mb-2" />
                <p className="text-sm font-medium">Default</p>
                <code className="text-xs text-muted-foreground">shadow</code>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-card rounded-lg shadow-md mb-2" />
                <p className="text-sm font-medium">Medium</p>
                <code className="text-xs text-muted-foreground">shadow-md</code>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-card rounded-lg shadow-lg mb-2" />
                <p className="text-sm font-medium">Large</p>
                <code className="text-xs text-muted-foreground">shadow-lg</code>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Components */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Components</h2>

        {/* Buttons */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>Button variants and sizes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-2">Variants</p>
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Sizes</p>
              <div className="flex flex-wrap items-center gap-2">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Badges */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Badges</CardTitle>
            <CardDescription>Badge variants</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Alerts */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Alerts</CardTitle>
            <CardDescription>Alert components for different contexts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Default Alert</AlertTitle>
              <AlertDescription>
                This is a default alert with informational content.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error Alert</AlertTitle>
              <AlertDescription>
                This is an error alert indicating something went wrong.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Progress */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Progress Bars</CardTitle>
            <CardDescription>Progress indicators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm mb-2">HTML/CSS - 90%</p>
              <Progress value={90} className="h-2" />
            </div>
            <div>
              <p className="text-sm mb-2">JavaScript - 75%</p>
              <Progress value={75} className="h-2" />
            </div>
            <div>
              <p className="text-sm mb-2">React - 60%</p>
              <Progress value={60} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Cards */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Cards</CardTitle>
            <CardDescription>Card component examples</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Simple Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A basic card with title and content.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">With Description</CardTitle>
                  <CardDescription>This card has a description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Card content goes here.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">With Badge</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge className="mb-2">Featured</Badge>
                  <p className="text-sm text-muted-foreground">
                    This card includes a badge.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Spacing */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Spacing</h2>
        <Card>
          <CardHeader>
            <CardTitle>Spacing Scale</CardTitle>
            <CardDescription>Consistent spacing rhythm using Tailwind utilities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[1, 2, 4, 6, 8, 12, 16, 20, 24].map((size) => (
                <div key={size} className="flex items-center gap-4">
                  <code className="text-xs w-12">{size}</code>
                  <div className="h-8 bg-primary rounded" style={{ width: `${size * 4}px` }} />
                  <span className="text-xs text-muted-foreground">{size * 4}px</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
