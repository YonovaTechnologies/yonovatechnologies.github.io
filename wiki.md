# Yonova Technologies Website - Technical Wiki

This document provides a comprehensive overview of the Yonova Technologies website application, including workflow, data flow, architecture, and technology stack.

## Architecture Diagram

The application is a purely front-end, single-page application (SPA). There is no active backend or database, and all content delivery happens directly from static files hosted on GitHub Pages.

```mermaid
graph TD
    Client[User / Browser] -->|HTTP GET / HTTPS| GHPages(GitHub Pages Hosting)
    GHPages -->|Serves static assets| HTML[index.html]
    HTML --> JS[Generated JS Bundle]
    HTML --> CSS[Compiled CSS Bundle]
    JS --> React(React SPA App)
    React --> Router(React Router DOM)
    Router --> Pages[/Pages: Home, About, Contact, Services/]
    React --> FMotion(Framer Motion for Animations)
```

## Data Flow Diagram

Since the application does not communicate with off-site APIs or databases, the data flow primarily focuses on static state and component prop drilling.

```mermaid
graph TD
    App[App.tsx]
    App --> Header[Header Component]
    App --> RouteContent[Active Route Component]
    App --> Footer[Footer Component]
    
    RouteContent --> Home[Home]
    RouteContent --> About[About]
    RouteContent --> Services[Services]
    RouteContent --> Contact[Contact]
    RouteContent --> PrivacyPolicy[PrivacyPolicy]
    
    Home --> HomeSections[Hero, Services Preview, About Preview, CTA]
    About --> AboutSections[Intro/Who We Are, Core Values, CTA]
    Services --> ServiceSections[Detailed Services List, Key Capabilities, CTA]
```

**Note**: State management is handled primarily with local React hooks (`useState`, `useEffect`). Any data shown on the pages (e.g., Services list, Team Member info) is either hardcoded inside the components or defined as static TypeScript objects locally within those files. For this specific agency/portfolio-style site, static structured data completely suffices.

## Workflow & Development Process 

### 1. Technology Stack
* **Framework:** React 19 Function Components
* **Build Tool:** Vite 
* **Language:** TypeScript
* **Styling:** Vanilla CSS
* **Animations:** Framer Motion
* **Icons:** Lucide React
* **Routing:** React Router DOM v7

### 2. Development Workflow

1. **Install dependencies:** `npm install`
2. **Local Development Server:** `npm run dev` kicks off Vite's dev server which includes hot module replacement (HMR).
3. **Adding New Pages:** 
   - Create a `.tsx` file in `src/pages/`.
   - Add the specific route to `<Routes>` within `src/App.tsx`.
   - Update navigation links in `src/components/Header.tsx`.
   - Update any necessary CSS in `<Page>.css`.

### 3. Deployment Workflow

The deployment relies comprehensively on the `gh-pages` branch deployment strategy.

```mermaid
sequenceDiagram
    participant Dev as Developer
    participant Git as Local Git Branch
    participant Vite as Vite Builder
    participant GHPages as GitHub Pages Branch
    
    Dev->>Git: Commit new changes to 'development'
    Dev->>Vite: run 'npm run deploy'
    Vite->>Vite: npm run build (tsc && vite build)
    Vite->>Vite: Bundles code to /dist folder
    Vite->>GHPages: Uses gh-pages library to push /dist contents
    GHPages-->>Dev: Live on <username>.github.io
```

* **Build Phase (`npm run build`):** Validates TypeScript mappings using `tsc -b` and bundles out minified generic HTML, CSS, and JS packages into the `./dist` folder.
* **Publish Phase (`npm run deploy`):** A pre-deploy step inherently invokes build. Following a successful build, the `./dist` payload is committed directly to the `gh-pages` branch via the `gh-pages` NPM package. This process bypasses the main source tree entirely and places the built source in the appropriate branch automatically configured for hosting.

## Routing Schema
* `/` - **Home**: Overview of the agency and core hook.
* `/about` - **About**: Details agency structure, history, and people.
* `/services` - **Services**: Highlights what the agency builds and offers.
* `/contact` - **Contact**: Basic layout for get-in-touch interactions.
* `/privacy-policy` - **Privacy Policy**: Required business compliance details.

## Component Diagram

```mermaid
graph TD
    %% Base Node
    Components((Yonova Components))

    %% Home Page Hierarchies
    Components --> Home[Home.tsx]
    
    subgraph Home Component Hierarchy
        Home --> Hero[Hero Section]
        Home --> HireUs[Hire Us For Section]
        Home --> AboutPreview[About Preview Section]
        Home --> HomeCTA[CTA Section]
        
        HireUs --> SGrid[6 Service Preview Cards]
        AboutPreview --> MissionVision[Mission & Vision Text]
        AboutPreview --> FloatBadges[Floating Detail Badges]
    end

    %% About Page Hierarchies
    Components --> About[About.tsx]

    subgraph About Component Hierarchy
        About --> Intro[Intro / Who We Are Section]
        About --> CoreValues[Core Values Section]
        About --> AboutCTA[CTA Section]

        Intro --> ExpBadges[Experience & GCP Badges in Image]
        CoreValues --> ValueCards[4 Value Cards]
        
        ValueCards -.-> V1[Commitment]
        ValueCards -.-> V2[Honesty]
        ValueCards -.-> V3[Care]
        ValueCards -.-> V4[Learning]
    end

    %% Services Page Hierarchies
    Components --> Services[Services.tsx]

    subgraph Services Component Hierarchy
        Services --> DetailsSection[Detailed Services List]
        Services --> ServicesCTA[CTA Section]

        DetailsSection --> ServiceItems[6 Comprehensive Services]
        
        ServiceItems -.-> SE1[Data Engineering]
        ServiceItems -.-> SE2[Data Warehousing]
        ServiceItems -.-> SE3[DataOps]
        ServiceItems -.-> SE4[MLOps]
        ServiceItems -.-> SE5[Agentic AI]
        ServiceItems -.-> SE6[Cloud Solution Architecture]
        
        ServiceItems --> Caps[Key Capabilities Checklist]
    end
    
    %% Style modifications for a cleaner look
    classDef page fill:#1c4792,stroke:#0f2b5a,stroke-width:2px,color:#fff;
    class Home,About,Services page;
```

