<p align="center">
  <a href="https://cara.lekoarts.de">
    <img alt="LekoArts" src="https://img.lekoarts.de/gatsby/gatsby-site-illustration.png" />
  </a>
</p>
<h1 align="center">
  Nick Hudack's Personal Website
</h1>

<align="center">
  My personal website, <a href="https://nickhudack.com">nickhudack.com</a>, built with <a href="https://www.gatsbyjs.org">Gatsby</a> and hosted on <a href="https://www.netlify.com">Netlify</a>
</p>

## 🛠 Features

- Theme UI-based theming
- react-spring parallax effect
- CSS Animations on Shapes

## 📷 Screenshots

<p align="center">
  <a href="https://cara.lekoarts.de">
    <img alt="LekoArts" src="https://img.lekoarts.de/gatsby/gatsby-site-illustration.png" />
  </a>
</p>

## ✏️ Changing content

The content of this project is defined in four `.mdx` files inside the theme's `sections` folder. You can override the files `intro.mdx`, `projects.mdx`, `about.mdx` and `contact.mdx`. This starter has overridden the `intro.mdx` file as an example. Place the other files in the same `src/@lekoarts/gatsby-theme-cara/sections/` folder.

You have to use the `<ProjectCard />` component inside `projects.mdx` to display the cards. Example:

```md
## Projects

<ProjectCard title="Freiheit" link="https://www.behance.net/gallery/58937147/Freiheit" bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)">
This project is my entry to Adobe's #ChallengeYourPerspective contest.
</ProjectCard>
```
