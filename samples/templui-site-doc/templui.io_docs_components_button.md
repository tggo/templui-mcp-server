---
url: "https://templui.io/docs/components/button"
title: "Button - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Button

Interactive element that triggers actions when clicked.

[Source](https://github.com/templui/templui/tree/main/internal/components/button) Tailwind

PreviewCode

Button

```
package showcase

import "github.com/templui/templui/internal/components/button"

templ ButtonDefault() {
	@button.Button() {
		Button
	}
}

```

## Installation

```
templui add button
```

## Examples

Sizes

PreviewCode

SmallDefaultLarge

```
package showcase

import "github.com/templui/templui/internal/components/button"
import "github.com/templui/templui/internal/components/icon"

templ ButtonSizes() {
	<div class="flex flex-wrap items-center gap-4">
		@button.Button(button.Props{
			Size:    button.SizeSm,
			Variant: button.VariantSecondary,
		}) {
			Small
		}
		@button.Button(button.Props{
			Variant: button.VariantSecondary,
		}) {
			Default
		}
		@button.Button(button.Props{
			Size:    button.SizeLg,
			Variant: button.VariantSecondary,
		}) {
			Large
		}
		@button.Button(button.Props{
			Size:    button.SizeIcon,
			Variant: button.VariantSecondary,
		}) {
			// Default icon size in @button is 16x16
			// Use Class: "size-6" for larger icons
			@icon.ChevronRight()
		}
	</div>
}

```

Primary

PreviewCode

Primary

```
package showcase

import "github.com/templui/templui/internal/components/button"

templ ButtonPrimary() {
	@button.Button() {
		Primary
	}
}

```

Secondary

PreviewCode

Secondary

```
package showcase

import "github.com/templui/templui/internal/components/button"

templ ButtonSecondary() {
	@button.Button(button.Props{
		Variant: button.VariantSecondary,
	}) {
		Secondary
	}
}

```

Destructive

PreviewCode

Destructive

```
package showcase

import "github.com/templui/templui/internal/components/button"

templ ButtonDestructive() {
	@button.Button(button.Props{
		Variant: button.VariantDestructive,
	}) {
		Destructive
	}
}

```

Outline

PreviewCode

Outline

```
package showcase

import "github.com/templui/templui/internal/components/button"

templ ButtonOutline() {
	@button.Button(button.Props{
		Variant: button.VariantOutline,
	}) {
		Outline
	}
}

```

Ghost

PreviewCode

Ghost

```
package showcase

import "github.com/templui/templui/internal/components/button"

templ ButtonGhost() {
	@button.Button(button.Props{
		Variant: button.VariantGhost,
	}) {
		Ghost
	}
}

```

Link

PreviewCode

Link

```
package showcase

import "github.com/templui/templui/internal/components/button"

templ ButtonLink() {
	@button.Button(button.Props{
		Variant: button.VariantLink,
	}) {
		Link
	}
}

```

Icon

PreviewCode

```
package showcase

import (
	"github.com/templui/templui/internal/components/button"
	"github.com/templui/templui/internal/components/icon"
)

templ ButtonIcon() {
	@button.Button(button.Props{
		Size:    button.SizeIcon,
		Variant: button.VariantSecondary,
	}) {
		// Default icon size in @button is 16x16
		// Use Class: "size-6" for larger icons
		@icon.ChevronRight(icon.Props{Size: 16})
	}
}

```

With Icon

PreviewCode

Login with Email

```
package showcase

import (
	"github.com/templui/templui/internal/components/button"
	"github.com/templui/templui/internal/components/icon"
)

templ ButtonWithIcon() {
	@button.Button(button.Props{
		Class:   "flex gap-2 items-center",
		Variant: button.VariantSecondary,
	}) {
		// Default icon size in @button is 16x16
		// Use Class: "size-6" for larger icons
		@icon.Mail()
		Login with Email
	}
}

```

Loading

PreviewCode

Please wait

```
package showcase

import (
	"github.com/templui/templui/internal/components/button"
	"github.com/templui/templui/internal/components/icon"
)

templ ButtonLoading() {
	@button.Button(button.Props{
		Disabled: true,
		Class:    "flex items-center gap-2",
	}) {
		@icon.LoaderCircle(icon.Props{
			Class: "animate-spin",
		})
		Please wait
	}
}

```

## API Reference

Required parameter

Hover for description

### Button

Interactive button component with multiple variants and states.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the button element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the button. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the button element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Variant<br>```<br>Visual style variant. Options: 'default', 'destructive', 'outline', 'secondary', 'ghost', 'link'. | ```text-muted-foreground<br>Variant<br>``` | ```text-muted-foreground<br>default<br>``` |
| ```<br>Size<br>```<br>Button size. Options: 'default', 'sm', 'lg', 'icon'. | ```text-muted-foreground<br>Size<br>``` | ```text-muted-foreground<br>default<br>``` |
| ```<br>FullWidth<br>```<br>Whether the button should take full width of its container. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Href<br>```<br>URL for link buttons. When provided, renders an anchor tag instead of button. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Target<br>```<br>Target attribute for link buttons (e.g., '\_blank'). | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Disabled<br>```<br>Whether the button is disabled and non-interactive. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Type<br>```<br>HTML button type. Options: 'button', 'submit', 'reset'. | ```text-muted-foreground<br>Type<br>``` | ```text-muted-foreground<br>button<br>``` |