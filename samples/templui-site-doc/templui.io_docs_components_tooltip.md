---
url: "https://templui.io/docs/components/tooltip"
title: "Tooltip - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Tooltip

Small pop-up that appears on hover. Powered by [Popover](https://templui.io/docs/components/popover) with [Floating UI](https://floating-ui.com/).

[Source](https://github.com/templui/templui/tree/main/internal/components/tooltip) Tailwind Javascript

PreviewCode

Hover Me

Add to cart

```
package showcase

import (
	"github.com/templui/templui/internal/components/button"
	"github.com/templui/templui/internal/components/tooltip"
)

templ TooltipDefault() {
	@tooltip.Tooltip() {
		@tooltip.Trigger(tooltip.TriggerProps{
			For: "tooltip-default",
		}) {
			@button.Button(button.Props{
				Variant: button.VariantOutline,
			}) {
				Hover Me
			}
		}
		@tooltip.Content(tooltip.ContentProps{
			ID:            "tooltip-default",
			Position:      tooltip.PositionTop,
			HoverDelay:    500,
			HoverOutDelay: 100,
		}) {
			Add to cart
		}
	}
}

```

## Installation

1. Install the component





```
templui add tooltip
```

2. Add the JavaScript to your layout





```
@popover.Script()

```





Call this template in your base layout file (e.g., in the <head> section).


## Examples

Positions

PreviewCode

Top

Tooltip on top

Right

Tooltip on right

Bottom

Tooltip on bottom

Left

Tooltip on left

```
package showcase

import (
	"github.com/templui/templui/internal/components/button"
	"github.com/templui/templui/internal/components/tooltip"
)

templ TooltipPositions() {
	<div class="flex gap-2">
		@tooltip.Tooltip() {
			@tooltip.Trigger(tooltip.TriggerProps{
				For: "top-tooltip",
			}) {
				@button.Button(button.Props{
					Variant: button.VariantOutline,
				}) {
					Top
				}
			}
			@tooltip.Content(tooltip.ContentProps{
				ID:            "top-tooltip",
				Position:      tooltip.PositionTop,
				ShowArrow:     true,
				HoverDelay:    500,
				HoverOutDelay: 100,
			}) {
				Tooltip on top
			}
		}
		@tooltip.Tooltip() {
			@tooltip.Trigger(tooltip.TriggerProps{
				For: "right-tooltip",
			}) {
				@button.Button(button.Props{
					Variant: button.VariantOutline,
				}) {
					Right
				}
			}
			@tooltip.Content(tooltip.ContentProps{
				ID:            "right-tooltip",
				Position:      tooltip.PositionRight,
				ShowArrow:     true,
				HoverDelay:    500,
				HoverOutDelay: 100,
			}) {
				Tooltip on right
			}
		}
		@tooltip.Tooltip() {
			@tooltip.Trigger(tooltip.TriggerProps{
				For: "bottom-tooltip",
			}) {
				@button.Button(button.Props{
					Variant: button.VariantOutline,
				}) {
					Bottom
				}
			}
			@tooltip.Content(tooltip.ContentProps{
				ID:            "bottom-tooltip",
				Position:      tooltip.PositionBottom,
				ShowArrow:     true,
				HoverDelay:    500,
				HoverOutDelay: 100,
			}) {
				Tooltip on bottom
			}
		}
		@tooltip.Tooltip() {
			@tooltip.Trigger(tooltip.TriggerProps{
				For: "left-tooltip",
			}) {
				@button.Button(button.Props{
					Variant: button.VariantOutline,
				}) {
					Left
				}
			}
			@tooltip.Content(tooltip.ContentProps{
				ID:            "left-tooltip",
				Position:      tooltip.PositionLeft,
				ShowArrow:     true,
				HoverDelay:    500,
				HoverOutDelay: 100,
			}) {
				Tooltip on left
			}
		}
	</div>
}

```

## API Reference

Required parameter

Hover for description

### Tooltip

Root wrapper component for tooltip functionality.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the tooltip wrapper. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the tooltip wrapper. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the tooltip wrapper. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### Trigger

Element that triggers the tooltip on hover.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the trigger element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the trigger. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the trigger element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>For<br>```<br>ID of the tooltip content this trigger controls. | ```text-muted-foreground<br>string<br>``` | - |

### Content

Container for the tooltip content with positioning options.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the content element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the content. Default styling includes dark background. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the content element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>ShowArrow<br>```<br>Whether to show an arrow pointing to the trigger element. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Position<br>```<br>Position of the tooltip relative to trigger. Options: 'top', 'right', 'bottom', 'left'. | ```text-muted-foreground<br>Position<br>``` | ```text-muted-foreground<br>top<br>``` |
| ```<br>HoverDelay<br>```<br>Delay in milliseconds before showing the tooltip on hover. | ```text-muted-foreground<br>int<br>``` | ```text-muted-foreground<br>0<br>``` |
| ```<br>HoverOutDelay<br>```<br>Delay in milliseconds before hiding the tooltip on hover out. | ```text-muted-foreground<br>int<br>``` | ```text-muted-foreground<br>0<br>``` |