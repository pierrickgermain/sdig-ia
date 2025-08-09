# SDIG Aides Optiques – Site web

Ce dépôt contient le code source du site vitrine de **SDIG Aides Optiques**, fabricant artisanal de loupes TTL et d’éclairages LED pour dentistes, chirurgiens et métiers de précision.

## Stack technique

- **Next.js 14** avec l’App Router et **TypeScript**
- **Tailwind CSS** pour le design et un thème sur mesure (bordeaux, anthracite, blanc)
- **Framer Motion** pour des micro‑animations discrètes
- Données centralisées dans `src/data` (produits, métiers, témoignages, FAQ…)

## Structure du projet

- `src/app` : pages et layout avec le router App
  - `page.tsx` : page d’accueil
  - `metiers/*` : pages métiers (dentiste, chirurgien, précision)
  - `catalogue` : catalogue avec filtres dynamiques et pages produit (`[slug]`)
  - `a-propos` : page à propos avec timeline, équipe et valeurs
  - `contact` : page de contact et formulaire
- `src/components` : composants réutilisables (Header, Footer, Hero, Cartes, Timeline, Formulaire…)
- `src/data` : données structurées (produits, métiers, témoignages, FAQ, timeline, équipe)
- `public/images` : visuels et illustrations utilisés sur le site

## Installation et développement

Après avoir cloné le dépôt :

```bash
npm install
npm run dev
```

Le site sera disponible sur `http://localhost:3000`.

## Déploiement

Pour générer une version de production prête à être déployée sur Vercel ou un autre hébergeur :

```bash
npm run build
npm start
```

## Ajouter un produit

Les produits sont définis dans `src/data/products.ts`. Pour ajouter un produit :

1. Créez une nouvelle entrée en renseignant un `slug` unique, un `name`, une `category`, les caractéristiques techniques (grossissement, type, poids…) et une description.
2. Ajoutez une image correspondante dans `public/images` et renseignez son chemin dans la propriété `image`.
3. Mettez à jour les tableaux `recommended` de `src/data/metiers.ts` si le produit concerne un métier particulier.

## Accessibilité et SEO

Le site respecte les bonnes pratiques : contraste de couleurs conforme AA, navigation clavier, attributs `alt` détaillés pour les images, métadonnées `<head>`, balises Open Graph, Schema org (organisation et produits) et génération automatique d’URLs conviviales. Un emplacement est prévu pour l’insertion d’un script d’analyse (désactivé par défaut).

## Limitations

Ce dépôt contient le code source et la structure du site mais ne comprend pas les dépendances installées (à exécuter via `npm install`). Les images sont générées de manière abstraite pour représenter l’univers de la marque. Vous pouvez les remplacer par des photos réelles libres de droit si nécessaire.
