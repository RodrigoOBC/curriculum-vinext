export interface NavItem {
  name: string
  href: string
}

export interface NavSection {
  title: string
  items: NavItem[]
}

export const navigation: NavSection[] = [
  {
    title: "Foundation",
    items: [
      { name: "Design Tokens", href: "/styleguide" },
    ]
  },
  {
    title: "Components",
    items: [
      { name: "profile-image", href: "/styleguide/components/profile-image" },
      { name: "navegation-menu", href: "/styleguide/components/navegation-menu" },
      { name: "article-cards", href: "/styleguide/components/article-cards" },
      { name: "repository-github-card", href: "/styleguide/components/repository-github-card" },
      { name: "timeline", href: "/styleguide/components/timeline" },
      { name: "tags-skills", href: "/styleguide/components/tags-skills" },
      { name: "icons", href: "/styleguide/components/resume-icon-abaut-icon-portifolio-icon-blog-icon-contact-icon" },
    ]
  }
]
