"use client"

import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProfileImage, type ProfileImageProps } from "@/components/profile-image"

const importSnippet = String.raw`import { ProfileImage } from "@/components/profile-image"`

const usageSnippet = String.raw`<ProfileImage
  name="Rodrigo Cabral"
  src="https://github.com/shadcn.png"
  alt="Rodrigo Cabral"
  status="online"
/>
`

const props = [
  ["ProfileImage", "name", "string", "required", "Used to generate fallback initials and accessible labels"],
  ["ProfileImage", "src", "string", "-", "Optional profile image URL"],
  ["ProfileImage", "alt", "string", "name", "Accessible image label"],
  ["ProfileImage", "size", '"sm" | "default" | "lg" | "xl"', '"default"', "Avatar size"],
  ["ProfileImage", "status", '"online" | "away" | "busy" | "offline"', '"offline"', "Optional presence badge"],
  ["ProfileImage", "fallback", "string", "auto initials", "Override the generated initials"],
  ["ProfileImage", "className", "string", "-", "Outer avatar styling"],
  ["ProfileImage", "imageClassName", "string", "-", "Image element styling"],
  ["ProfileImage", "badgeClassName", "string", "-", "Presence badge styling"],
] as const

const profiles: ProfileImageProps[] = [
  {
    name: "Rodrigo Cabral",
    src: "https://github.com/shadcn.png",
    alt: "Rodrigo Cabral",
    status: "online",
  },
  {
    name: "Camila Souza",
    fallback: "CS",
    status: "away",
  },
  {
    name: "Marcos Lima",
    src: "https://github.com/evilrabbit.png",
    alt: "Marcos Lima",
    status: "busy",
  },
  {
    name: "Ana Pereira",
    fallback: "AP",
  },
]

const sizes: Array<NonNullable<ProfileImageProps["size"]>> = ["sm", "default", "lg", "xl"]
const statuses: Array<NonNullable<ProfileImageProps["status"]>> = ["online", "away", "busy", "offline"]

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm leading-6">
      <code>{children}</code>
    </pre>
  )
}

export default function ProfileImagePage() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode((value) => !value)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className="mx-auto max-w-7xl space-y-10 p-8">
      <section className="space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <Badge variant="secondary">Profile</Badge>
            <h1 className="text-4xl font-bold tracking-tight">Profile Image</h1>
            <p className="max-w-2xl text-muted-foreground">
              Avatar wrapper built on shadcn/ui for profile photos, fallback initials, and presence states.
            </p>
          </div>

          <Button variant="outline" onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>Live demo</CardTitle>
            <CardDescription>Sizes, image states, and fallback initials side by side.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Sizes</p>
              <div className="flex flex-wrap items-end gap-6">
                {sizes.map((size) => (
                  <div key={size} className="flex flex-col items-center gap-2 text-center">
                    <ProfileImage
                      name="Rodrigo Cabral"
                      src="https://github.com/shadcn.png"
                      status="online"
                      size={size}
                    />
                    <span className="text-xs text-muted-foreground">{size}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Status</p>
              <div className="flex flex-wrap gap-4">
                {statuses.map((status) => (
                  <div key={status} className="flex flex-col items-center gap-2">
                    <ProfileImage
                      name={status === "offline" ? "Ana Pereira" : "Rodrigo Cabral"}
                      src={status === "offline" ? undefined : "https://github.com/shadcn.png"}
                      fallback={status === "offline" ? "AP" : undefined}
                      status={status}
                    />
                    <span className="text-xs text-muted-foreground capitalize">{status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Fallbacks</p>
              <div className="flex flex-wrap gap-4">
                {profiles.map((profile) => (
                  <div key={profile.name} className="flex flex-col items-center gap-2 text-center">
                    <ProfileImage {...profile} />
                    <span className="text-xs text-muted-foreground">{profile.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notes</CardTitle>
            <CardDescription>Accessible profile identity with a compact footprint.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>The component uses shadcn avatar primitives, so image loading and fallback handling stay consistent.</p>
            <p>Presence states are optional and only render when the profile is not offline.</p>
            <p>Fallback initials are derived from the person name, which keeps empty states useful without extra props.</p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Import</CardTitle>
            <CardDescription>Use the wrapper from the shared components folder.</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock>{importSnippet}</CodeBlock>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Basic usage</CardTitle>
            <CardDescription>Small profile image with image, alt text, and status.</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock>{usageSnippet}</CodeBlock>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Props</CardTitle>
            <CardDescription>Documented API for the wrapper component.</CardDescription>
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

        <Card>
          <CardHeader>
            <CardTitle>Accessibility</CardTitle>
            <CardDescription>Readable fallback and explicit image labels.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>The `name` prop always provides meaningful fallback text, even when an image is missing.</p>
            <p>Use `alt` when the image is informative; otherwise the fallback initials still keep the identity visible.</p>
            <p>Presence badges are decorative unless you expose the status in surrounding copy.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
