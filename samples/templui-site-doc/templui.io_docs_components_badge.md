---
url: "https://templui.io/docs/components/badge"
title: "Badge - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Badge

Badge component is used to display a small amount of information in a visual style.

[Source](https://github.com/templui/templui/tree/main/internal/components/badge) Tailwind

PreviewCode

Badge

```
package showcase

import "github.com/templui/templui/internal/components/badge"

templ BadgeDefault() {
	@badge.Badge() {
		Badge
	}
}

```

## Installation

```
templui add badge
```

## Examples

Primary

PreviewCode

Badge

```
package showcase

import "github.com/templui/templui/internal/components/badge"

templ BadgeDefault() {
	@badge.Badge() {
		Badge
	}
}

```

Secondary

PreviewCode

Secondary

```
package showcase

import "github.com/templui/templui/internal/components/badge"

templ BadgeSecondary() {
	@badge.Badge(badge.Props{
		Variant: badge.VariantSecondary,
	}) {
		Secondary
	}
}

```

Outline

PreviewCode

Outline

```
package showcase

import "github.com/templui/templui/internal/components/badge"

templ BadgeOutline() {
	@badge.Badge(badge.Props{
		Variant: badge.VariantOutline,
	}) {
		Outline
	}
}

```

Destructive

PreviewCode

Destructive

```
package showcase

import "github.com/templui/templui/internal/components/badge"

templ BadgeDestructive() {
	@badge.Badge(badge.Props{
		Variant: badge.VariantDestructive,
	}) {
		Destructive
	}
}

```

With Icon

PreviewCode

With Icon

```
package showcase

import (
	"github.com/templui/templui/internal/components/badge"
	"github.com/templui/templui/internal/components/icon"
)

templ BadgeWithIcon() {
	@badge.Badge(badge.Props{
		Class: "flex gap-2 items-center",
	}) {
		// Default icon size in @badge is 16x16
		// Use Class: "size-6" for larger icons
		@icon.Rocket()
		With Icon
	}
}

```

## API Reference

Required parameter

Hover for description

### Badge

Badge component for displaying small pieces of information.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the badge element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the badge. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the badge element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Variant<br>```<br>Visual style variant. Options: 'default', 'secondary', 'destructive', 'outline'. | ```text-muted-foreground<br>Variant<br>``` | ```text-muted-foreground<br>default<br>``` |