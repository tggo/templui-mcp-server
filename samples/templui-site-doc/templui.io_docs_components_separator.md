---
url: "https://templui.io/docs/components/separator"
title: "Separator - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Separator

Visual divider that separates content with an optional label.

[Source](https://github.com/templui/templui/tree/main/internal/components/separator) Tailwind

PreviewCode

Top

Bottom

```
package showcase

import "github.com/templui/templui/internal/components/separator"

templ SeparatorDefault() {
	<div class="flex flex-col gap-4 items-center w-full max-w-md">
		<p>Top</p>
		@separator.Separator()
		<p>Bottom</p>
	</div>
}

```

## Installation

```
templui add separator
```

## Examples

Vertical

PreviewCode

Left

Right

```
package showcase

import "github.com/templui/templui/internal/components/separator"

templ SeparatorVertical() {
	<div class="w-full max-w-md">
		<div class="flex h-24 items-center">
			<div class="w-1/2 text-center">Left</div>
			@separator.Separator(separator.Props{
				Orientation: separator.OrientationVertical,
				Class:       "mx-4",
			})
			<div class="w-1/2 text-center">Right</div>
		</div>
	</div>
}

```

With Label

PreviewCode

OR

OR

```
package showcase

import "github.com/templui/templui/internal/components/separator"

templ SeparatorLabel() {
	<div class="flex flex-col gap-16 w-full max-w-md items-center">
		@separator.Separator(separator.Props{
			Class: "w-full",
		}) {
			OR
		}
		@separator.Separator(separator.Props{
			Class:       "h-24",
			Orientation: separator.OrientationVertical,
		}) {
			OR
		}
	</div>
}

```

Decorated

PreviewCode

DASHED

DOTTED

```
package showcase

import "github.com/templui/templui/internal/components/separator"

templ SeparatorDecorated() {
	<div class="flex flex-col gap-16 w-full max-w-md">
		@separator.Separator(separator.Props{
			Decoration: separator.DecorationDashed,
		}) {
			DASHED
		}
		@separator.Separator(separator.Props{
			Decoration: separator.DecorationDotted,
		}) {
			DOTTED
		}
	</div>
}

```

## API Reference

Required parameter

Hover for description

### Separator

Visual divider component for separating content sections with optional labeling.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the separator element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the separator. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the separator element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Orientation<br>```<br>Orientation of the separator. Options: 'horizontal', 'vertical'. | ```text-muted-foreground<br>Orientation<br>``` | ```text-muted-foreground<br>horizontal<br>``` |
| ```<br>Decoration<br>```<br>Decoration style for the separator. Options: 'none', 'dashed', 'dotted'. | ```text-muted-foreground<br>Decoration<br>``` | ```text-muted-foreground<br>none<br>``` |