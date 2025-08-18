[✨ templUI Pro is live](https://pro.templui.io/)

# How To Use

Learn how to integrate templUI into your projects using the official CLI.

## Requirements

Before using templUI, ensure you have these tools installed:

### 1\. Go (1.24.4 or later)

[Visit Go website](https://golang.org/)

Check your Go version:

```
go version
```

For installation instructions, visit [golang.org/dl](https://golang.org/dl)

### 2\. templ (v0.3.924 or later)

[Visit templ documentation](https://templ.guide/)

Install the templ CLI:

```
go install github.com/a-h/templ/cmd/templ@latest
```

### 3\. Tailwind CSS Standalone CLI (v4.0.5 or later)

[Visit Tailwind CSS website](https://tailwindcss.com/)

Install the standalone CLI based on your operating system:

Homebrew (macOS):

```
brew install tailwindcss
```

macOS (Apple Silicon):

```
curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-arm64
chmod +x tailwindcss-macos-arm64
sudo mv tailwindcss-macos-arm64 /usr/local/bin/tailwindcss
```

macOS (Intel):

```
curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-x64
chmod +x tailwindcss-macos-x64
sudo mv tailwindcss-macos-x64 /usr/local/bin/tailwindcss
```

Linux (x64):

```
curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64
chmod +x tailwindcss-linux-x64
sudo mv tailwindcss-linux-x64 /usr/local/bin/tailwindcss
```

Windows (x64):

```
# On Windows (x64i
# Download from: https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-windows-x64.exe
# Add to your PATH as 'tailwindcss'
```

## Base Configuration

templUI provides pre-configured styles and themes. You will need these files in your project:

### 1\. CSS Configuration file + Base Styles

Create assets/css/input.css with our base styles:

```
@import 'tailwindcss';

@custom-variant dark (&:where(.dark, .dark *));

@theme inline {
  --breakpoint-3xl: 1600px;
  --breakpoint-4xl: 2000px;
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-surface: var(--surface);
  --color-surface-foreground: var(--surface-foreground);
  --color-code: var(--code);
  --color-code-foreground: var(--code-foreground);
  --color-code-highlight: var(--code-highlight);
  --color-code-number: var(--code-number);
  --color-selection: var(--selection);
  --color-selection-foreground: var(--selection-foreground);
}

/* Default theme - Neutral gray */
:root {
  --radius: 0.65rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
  --selection: oklch(0.145 0 0);
  --selection-foreground: oklch(1 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
  --selection: oklch(0.922 0 0);
  --selection-foreground: oklch(0.205 0 0);
}

@layer base {
  * {
    @apply border-border;
  }
  ::selection {
    @apply bg-selection text-selection-foreground;
  }

  body {
    @apply bg-background text-foreground;
    font-feature-settings:
      "rlig" 1,
      "calt" 1;
  }
}
```

For custom themes and additional styles, check our [themes documentation](https://templui.io/docs/themes).

## Development Tools

Here is our recommended development setup for Go and templ projects, adapted from official documentation and community best practices:

- Hot reloading for Go, Templ, and Tailwind
- Convenient development commands via Make
- Automated file watching and rebuilding

The Makefile configuration is based on the [templ documentation](https://templ.guide/) and adapted for our use case. While there are many ways to set up your development environment, this configuration provides a solid starting point.

### 1\. Air (Live Reload for Go)

Install Air for automatic Go server rebuilds:

```
go install github.com/air-verse/air@latest
```

### 2\. Development Makefile

Create a Makefile in your project root:

```
# Run templ generation in watch mode
templ:
    templ generate --watch --proxy="http://localhost:8090" --open-browser=false

# Run air for Go hot reload
server:
    air \
    --build.cmd "go build -o tmp/bin/main ./main.go" \
    --build.bin "tmp/bin/main" \
    --build.delay "100" \
    --build.exclude_dir "node_modules" \
    --build.include_ext "go" \
    --build.stop_on_error "false" \
    --misc.clean_on_exit true

# Watch Tailwind CSS changes
tailwind:
    tailwindcss -i ./assets/css/input.css -o ./assets/css/output.css --watch

# Start development server with all watchers
dev:
    make -j3 tailwind templ server
```

Note about ports:

- In this example configuration, the Go application runs on port 8090
- templs development server will be available at http://localhost:7331
- Adjust the --proxy flag in the templ command if your app uses a different port

### 3\. Start Development Server

Start all development tools with a single command:

```
make dev
```

This will:

- Watch and compile templ files
- Start the Go server with hot reload via Air
- Watch and compile Tailwind CSS changes

Or run services individually:

- make templ - Watch templ files only
- make server - Run Go server only
- make tailwind - Watch Tailwind CSS only

## Installation (CLI)

The recommended way to use templUI components is via the official CLI tool.

### 1\. Install the templUI CLI

Install the latest version using \`go install\`:

```
go install github.com/templui/templui/cmd/templui@latest
```

Verify the installation:

```
templui -v
```

### 2\. Initialize templUI in Your Project

Navigate to your projects root directory and run:

```
templui init
```

You will be prompted to set directories for components and utils, your Go module name, a directory for JavaScript files, and optionally a public path for serving JS files.

You can specify a specific version (tag, branch, commit):

```
templui init@v0.1.0 # Example: Initialize using version v0.1.0
```

### 3\. Add Components

Use the \`add\` command to install specific components and their dependencies into your configured directories.

```
templui add button card
```

To install all available components:

```
templui add "*"
```

To install components from a specific version (tag, branch, commit):

```
templui add@main button # Install button from the main branch
```

The CLI automatically handles dependencies defined in the manifest and adjusts import paths within the copied \`.templ\` files to match your projects module path.

#### 📝 JavaScript Components

For components that require JavaScript (like modals, dropdowns, etc.), the CLI automatically:

- Downloads the components JavaScript file
- Adds a `Script()` template to the component

You must include the Script() template in your layout:

```
@modal.Script()  // Include in your base layout
```

Each component manages its own JavaScript - no global bundle needed!

### 4\. List Available Components

To see a list of all components and utils available in the manifest (for the default or a specific version):

```
templui list
templui list@v0.1.0
```

### 5\. Upgrade CLI

Keep your templUI CLI up to date with the latest features and improvements:

```
templui upgrade                  # Upgrade to latest version
templui upgrade@v0.84.0          # Upgrade to specific version
```

The upgrade command uses \`go install\` to update the CLI tool to the specified version.

### 6\. Copy & Paste

Alternatively, instead of using our CLI, you can copy any component directly from the docs or the GitHub repository and paste it into your project. Just make sure to manually include any required dependencies and adjust import paths accordingly.

### 7\. Quickstart Template

For a completely new project with everything pre-configured, use our [templUI Quickstart](https://github.com/templui/templui-quickstart) template.

## Framework Integration

templUI is framework-agnostic and works with any JavaScript framework or library. Components need to be re-initialized after dynamic content changes.

### HTMX

For HTMX-powered applications, add this script to initialize components after content swaps:

```
<script>
  // Re-initialize templUI components after HTMX swaps
  document.body.addEventListener("htmx:afterSwap", (e) => {
    if (window.templUI) {
      Object.values(window.templUI).forEach(comp => {
        comp.init?.(e.detail.elt);
      });
    }
  });

  // Re-initialize components after out-of-band swaps
  document.body.addEventListener("htmx:oobAfterSwap", (e) => {
    if (window.templUI) {
      Object.values(window.templUI).forEach(comp => {
        comp.init?.(e.detail.target);
      });
    }
  });
</script>
```

### Datastar

For Datastar applications, use SSE events to re-initialize components:

```
<!-- Event-based approach -->
<body data-on-datastar-fetch="initComponents(evt)">
  <!-- ... -->
</body>

<script>
  window.initComponents = function(evt) {
    // Re-initialize components after finished event
    if (evt.detail?.type === 'finished') {
      // setTimeout is required because Datastar's 'finished' event
      // fires before DOM updates are complete
      setTimeout(() => {
        if (window.templUI) {
          Object.values(window.templUI).forEach(comp => {
            comp.init?.();
          });
        }
      }, 100);
    }
  }
</script>
```

## Advanced Configuration

### Configuration File (.templui.json)

After running `templui init`, a configuration file is created in your project root. Here is what each field does:

```
{
  "componentsDir": "components",
  "utilsDir": "utils",
  "moduleName": "your-app/module",
  "jsDir": "assets/js",
  "jsPublicPath": "/assets/js"
}
```

#### `componentsDir`

Directory where templ components will be installed (relative to project root)

#### `utilsDir`

Directory where utility Go files will be installed

#### `moduleName`

Your Go module name (used for import path adjustment)

#### `jsDir`

Directory where JavaScript files are saved on disk

#### `jsPublicPath` optional

Public URL path where JavaScript files are served by your web server

Examples:

- `"/assets/js"` → files served at yoursite.com/assets/js/
- `"/app/static/js"` → files served at yoursite.com/app/static/js/
- `"/static"` → files served at yoursite.com/static/

If not set, defaults to `"/" + jsDir`

### JavaScript Asset Routing Examples

The `jsPublicPath` setting is useful when your web server configuration does not directly map filesystem paths to URL paths.

#### Standard Setup (Default)

Files stored in `assets/js/` served at `/assets/js/`

```
// Go server setup
mux.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("./assets"))))

// .templui.json
{
  "jsDir": "assets/js",
  "jsPublicPath": "/assets/js"  // or omit for automatic fallback
}
```

#### App with URL Prefix

App running under `/app/` prefix

```
// Go server setup
appGroup := mux.PathPrefix("/app").Subrouter()
appGroup.Handle("/static/", http.StripPrefix("/app/static/", http.FileServer(http.Dir("./assets"))))

// .templui.json
{
  "jsDir": "assets/js",
  "jsPublicPath": "/app/static/js"
}
```

#### Custom Asset Directory

Assets served from a different path than filesystem location

```
// Go server setup
mux.Handle("/public/", http.StripPrefix("/public/", http.FileServer(http.Dir("./build"))))

// .templui.json
{
  "jsDir": "build/js",
  "jsPublicPath": "/public/js"
}
```

### External Documentation

For advanced configuration and best practices, refer to the official documentation:

- [templ](https://templ.guide/) \- Cache configuration, component patterns, etc.
- [Tailwind CSS](https://tailwindcss.com/docs) \- Custom theming, plugins, optimization