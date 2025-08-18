---
url: "https://templui.io/docs/components/icon"
title: "Icon - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Icon

A wrapper for [Lucide Icons](https://lucide.dev/) with optional settings for size, color, fill, stroke, and custom classes. Browse available icons in the Lucide library to see what you can use.

[Source](https://github.com/templui/templui/tree/main/internal/components/icon) Tailwind

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/icon"

templ IconDefault() {
	@icon.User()
}

```

## Installation

CLIManual

```
templui add icon
```

1. Copy and paste the following code into your project: (icon.go)





```
package icon

import (
   	"context"
   	"fmt"
   	"io"
   	"sync"

   	"github.com/a-h/templ"
)

// iconContents caches the fully generated SVG strings for icons that have been used,
// keyed by a composite key of name and props to handle different stylings.
var (
   	iconContents = make(map[string]string)
   	iconMutex    sync.RWMutex
)

// Props defines the properties that can be set for an icon.
type Props struct {
   	Size        int
   	Color       string
   	Fill        string
   	Stroke      string
   	StrokeWidth string // Stroke Width of Icon, Usage: "2.5"
   	Class       string
}

// Icon returns a function that generates a templ.Component for the specified icon name.
func Icon(name string) func(...Props) templ.Component {
   	return func(props ...Props) templ.Component {
   		var p Props
   		if len(props) > 0 {
   			p = props[0]
   		}

   		// Create a unique key for the cache based on icon name and all relevant props.
   		// This ensures different stylings of the same icon are cached separately.
   		cacheKey := fmt.Sprintf("%s|s:%d|c:%s|f:%s|sk:%s|sw:%s|cl:%s",
   			name, p.Size, p.Color, p.Fill, p.Stroke, p.StrokeWidth, p.Class)

   		return templ.ComponentFunc(func(ctx context.Context, w io.Writer) (err error) {
   			iconMutex.RLock()
   			svg, cached := iconContents[cacheKey]
   			iconMutex.RUnlock()

   			if cached {
   				_, err = w.Write([]byte(svg))
   				return err
   			}

   			// Not cached, generate it
   			// The actual generation now happens once and is cached.
   			generatedSvg, err := generateSVG(name, p) // p (Props) is passed to generateSVG
   			if err != nil {
   				// Provide more context in the error message
   				return fmt.Errorf("failed to generate svg for icon '%s' with props %+v: %w", name, p, err)
   			}

   			iconMutex.Lock()
   			iconContents[cacheKey] = generatedSvg
   			iconMutex.Unlock()

   			_, err = w.Write([]byte(generatedSvg))
   			return err
   		})
   	}
}

// generateSVG creates an SVG string for the specified icon with the given properties.
// This function is called when an icon-prop combination is not yet in the cache.
func generateSVG(name string, props Props) (string, error) {
   	// Get the raw, inner SVG content for the icon name from our internal data map.
   	content, err := getIconContent(name) // This now reads from internalSvgData
   	if err != nil {
   		return "", err // Error from getIconContent already includes icon name
   	}

   	size := props.Size
   	if size <= 0 {
   		size = 24 // Default size
   	}

   	fill := props.Fill
   	if fill == "" {
   		fill = "none" // Default fill
   	}

   	stroke := props.Stroke
   	if stroke == "" {
   		stroke = props.Color // Fallback to Color if Stroke is not set
   	}
   	if stroke == "" {
   		stroke = "currentColor" // Default stroke color
   	}

   	strokeWidth := props.StrokeWidth
   	if strokeWidth == "" {
   		strokeWidth = "2" // Default stroke width
   	}

   	// Construct the final SVG string.
   	// The data-lucide attribute helps identify these as Lucide icons if needed.
   	return fmt.Sprintf("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"%d\" height=\"%d\" viewBox=\"0 0 24 24\" fill=\"%s\" stroke=\"%s\" stroke-width=\"%s\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"%s\" data-lucide=\"icon\">%s</svg>",
   		size, size, fill, stroke, strokeWidth, props.Class, content), nil
}

// getIconContent retrieves the raw inner SVG content for a given icon name.
// It reads from the pre-generated internalSvgData map from icon_data.go.
func getIconContent(name string) (string, error) {
   	content, exists := internalSvgData[name]
   	if !exists {
   		return "", fmt.Errorf("icon '%s' not found in internalSvgData map", name)
   	}
   	return content, nil
}

```

2. Copy and paste the following code into your project: (icon\_defs.go)

Error reading file: icon/icon\_defs.go: open icon/icon\_defs.go: file does not exist

3. Copy and paste the following code into your project: (icon\_data.go)

Error reading file: icon/icon\_data.go: open icon/icon\_data.go: file does not exist

4. Update the import paths to match your project setup.


## Examples

Colored

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/icon"

templ IconColored() {
	@icon.Heart(icon.Props{Size: 24, Color: "red"})
}

```

Filled

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/icon"

templ IconFilled() {
	@icon.Triangle(icon.Props{Size: 24, Fill: "orange", Stroke: "orange"})
}

```

Sizes

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/icon"

templ IconSizes() {
	<div class="flex flex-wrap gap-2">
		@icon.House()
		@icon.House(icon.Props{Size: 32})
		@icon.House(icon.Props{Size: 48})
	</div>
}

```

## API Reference

Required parameter

Hover for description

### Icon

Wrapper component for Lucide Icons with customizable size, color, fill, and stroke properties.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>Name<br>```<br>The name of the Lucide icon to display (e.g., 'heart', 'user', 'star'). | ```text-muted-foreground<br>IconName<br>``` | - |
| ```<br>ID<br>```<br>Unique identifier for the icon element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the icon. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the icon element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Size<br>```<br>Size of the icon in pixels. | ```text-muted-foreground<br>int<br>``` | ```text-muted-foreground<br>24<br>``` |
| ```<br>Color<br>```<br>Color of the icon (CSS color value). | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>currentColor<br>``` |
| ```<br>Fill<br>```<br>Fill color of the icon (CSS color value or 'none'). | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>none<br>``` |
| ```<br>StrokeWidth<br>```<br>Width of the icon's stroke. | ```text-muted-foreground<br>float64<br>``` | ```text-muted-foreground<br>2<br>``` |