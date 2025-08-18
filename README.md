# Drext

Drupal + Next.js

## How to install

  - `npx create-next-app -e https://github.com/cooldrupal/drext`
  - `cd [APP DIRECTORY]`
  - `cp .env.example .env.local` and set variables
  - Install and enable drupal Drext module
  - Configure params/* files
  - `npm run dev`

## Functions

  - getBlocks()
    Get blocks list by current page and blocks regions.
  - getMenus()
    Get menus list by current page.
  - getBreadcrumb()
    Get breadcrumb by current page.
  - getRedirect()
    Get redirect by current page.
  - getMetatag()
    Get metatags for current page.
  - getJson()
    Get JSON:API data by path.

## Resources

  Author: Serhii Klietsov - https://www.linkedin.com/in/serhii-klietsov-a125909a
