---
url: "https://templui.io/docs/components/popover"
title: "Popover - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Popover

Displays rich content in a floating layer. Powered by [Floating UI](https://floating-ui.com/).

[Source](https://github.com/templui/templui/tree/main/internal/components/popover) Tailwind Javascript

PreviewCode

Open Popover

### Dimensions

Set the dimensions for the layer.

Width

Height

```
package showcase

import (
	"github.com/templui/templui/internal/components/button"
	"github.com/templui/templui/internal/components/input"
	"github.com/templui/templui/internal/components/label"
	"github.com/templui/templui/internal/components/popover"
	"github.com/templui/templui/internal/utils"
)

templ PopoverDefault() {
	@popover.Trigger(popover.TriggerProps{
		For: "default-popover",
	}) {
		@button.Button(button.Props{
			Variant: button.VariantOutline,
		}) {
			Open Popover
		}
	}
	@popover.Content(popover.ContentProps{
		ID: "default-popover",
	}) {
		@PopoverContent()
	}
}

templ PopoverContent() {
	{{ var id = utils.RandomID() }}
	<div class="p-4 space-y-4">
		<div>
			<h3 class="text-lg font-semibold">Dimensions</h3>
			<p>Set the dimensions for the layer.</p>
		</div>
		<div class="flex flex-col gap-2 max-w-fit">
			<div class="flex items-center gap-2">
				@label.Label(label.Props{
					For:   "width" + id,
					Class: "w-24",
				}) {
					Width
				}
				@input.Input(input.Props{
					ID:          "width" + id,
					Placeholder: "Width",
					Value:       "100%",
					Class:       "flex-1",
				})
			</div>
			<div class="flex items-center gap-2">
				@label.Label(label.Props{
					For:   "height" + id,
					Class: "w-24",
				}) {
					Height
				}
				@input.Input(input.Props{
					ID:          "height" + id,
					Placeholder: "Height",
					Value:       "100%",
					Class:       "flex-1",
				})
			</div>
		</div>
	</div>
}

```

## Installation

1. Install the component





```
templui add popover
```

2. Add the JavaScript to your layout





```
@popover.Script()

```





Call this template in your base layout file (e.g., in the <head> section).


## Examples

Trigger & Closing

PreviewCode

Hover

### Dimensions

Set the dimensions for the layer.

Width

Height

Click

### Dimensions

Set the dimensions for the layer.

Width

Height

No ClickAway

### Dimensions

Set the dimensions for the layer.

Width

Height

No ClickAway-ESC

### Dimensions

Set the dimensions for the layer.

Width

Height

```
package showcase

import (
	"github.com/templui/templui/internal/components/button"
	"github.com/templui/templui/internal/components/popover"
)

templ PopoverTriggers() {
	<div class="flex gap-2 flex-wrap">
		@popover.Trigger(popover.TriggerProps{
			For:         "hover-popover",
			TriggerType: popover.TriggerTypeHover,
		}) {
			@button.Button(button.Props{Variant: button.VariantOutline}) {
				Hover
			}
		}
		@popover.Content(popover.ContentProps{
			ID:            "hover-popover",
			HoverDelay:    300,
			HoverOutDelay: 500,
		}) {
			@PopoverContent()
		}
		@popover.Trigger(popover.TriggerProps{
			For: "click-popover",
		}) {
			@button.Button(button.Props{Variant: button.VariantOutline}) {
				Click
			}
		}
		@popover.Content(popover.ContentProps{
			ID: "click-popover",
		}) {
			@PopoverContent()
		}
		@popover.Trigger(popover.TriggerProps{
			For: "no-clickaway-popover",
		}) {
			@button.Button(button.Props{Variant: button.VariantOutline}) {
				No ClickAway
			}
		}
		@popover.Content(popover.ContentProps{
			ID:               "no-clickaway-popover",
			DisableClickAway: true,
		}) {
			@PopoverContent()
		}
		@popover.Trigger(popover.TriggerProps{
			For: "no-clickaway-esc",
		}) {
			@button.Button(button.Props{Variant: button.VariantOutline}) {
				No ClickAway-ESC
			}
		}
		@popover.Content(popover.ContentProps{
			ID:               "no-clickaway-esc",
			DisableClickAway: true,
			DisableESC:       true,
		}) {
			@PopoverContent()
		}
	</div>
}

```

Positions

PreviewCode

Top Start

### Dimensions

Set the dimensions for the layer.

Width

Height

Top

### Dimensions

Set the dimensions for the layer.

Width

Height

Top End

### Dimensions

Set the dimensions for the layer.

Width

Height

Right Start

### Dimensions

Set the dimensions for the layer.

Width

Height

Right

### Dimensions

Set the dimensions for the layer.

Width

Height

Right End

### Dimensions

Set the dimensions for the layer.

Width

Height

Bottom Start

### Dimensions

Set the dimensions for the layer.

Width

Height

Bottom

### Dimensions

Set the dimensions for the layer.

Width

Height

Bottom End

### Dimensions

Set the dimensions for the layer.

Width

Height

Left Start

### Dimensions

Set the dimensions for the layer.

Width

Height

Left

### Dimensions

Set the dimensions for the layer.

Width

Height

Left End

### Dimensions

Set the dimensions for the layer.

Width

Height

```
package showcase

import (
	"github.com/templui/templui/internal/components/button"
	"github.com/templui/templui/internal/components/popover"
)

templ PopoverPositions() {
	<div class="flex flex-col w-full max-w-md">
		<div class="grid grid-cols-3 gap-2">
			@popover.Trigger(popover.TriggerProps{
				For:         "top-start-popover",
				TriggerType: popover.TriggerTypeHover,
			}) {
				@button.Button(button.Props{
					Class:   "w-full",
					Variant: button.VariantOutline,
				}) {
					Top Start
				}
			}
			@popover.Content(popover.ContentProps{
				ID:        "top-start-popover",
				Placement: popover.PlacementTopStart,
				ShowArrow: true,
			}) {
				@PopoverContent()
			}
			@popover.Trigger(popover.TriggerProps{
				For:         "top-popover",
				TriggerType: popover.TriggerTypeHover,
			}) {
				@button.Button(button.Props{
					Class:   "w-full",
					Variant: button.VariantOutline,
				}) {
					Top
				}
			}
			@popover.Content(popover.ContentProps{
				ID:        "top-popover",
				Placement: popover.PlacementTop,
				ShowArrow: true,
			}) {
				@PopoverContent()
			}
			@popover.Trigger(popover.TriggerProps{
				For:         "top-end-popover",
				TriggerType: popover.TriggerTypeHover,
			}) {
				@button.Button(button.Props{
					Class:   "w-full",
					Variant: button.VariantOutline,
				}) {
					Top End
				}
			}
			@popover.Content(popover.ContentProps{
				ID:        "top-end-popover",
				Placement: popover.PlacementTopEnd,
				ShowArrow: true,
			}) {
				@PopoverContent()
			}
			@popover.Trigger(popover.TriggerProps{
				For:         "right-start-popover",
				TriggerType: popover.TriggerTypeHover,
			}) {
				@button.Button(button.Props{
					Class:   "w-full",
					Variant: button.VariantOutline,
				}) {
					Right Start
				}
			}
			@popover.Content(popover.ContentProps{
				ID:        "right-start-popover",
				Placement: popover.PlacementRightStart,
				ShowArrow: true,
			}) {
				@PopoverContent()
			}
			@popover.Trigger(popover.TriggerProps{
				For:         "right-popover",
				TriggerType: popover.TriggerTypeHover,
			}) {
				@button.Button(button.Props{
					Class:   "w-full",
					Variant: button.VariantOutline,
				}) {
					Right
				}
			}
			@popover.Content(popover.ContentProps{
				ID:        "right-popover",
				Placement: popover.PlacementRight,
				ShowArrow: true,
			}) {
				@PopoverContent()
			}
			@popover.Trigger(popover.TriggerProps{
				For:         "right-end-popover",
				TriggerType: popover.TriggerTypeHover,
			}) {
				@button.Button(button.Props{
					Class:   "w-full",
					Variant: button.VariantOutline,
				}) {
					Right End
				}
			}
			@popover.Content(popover.ContentProps{
				ID:        "right-end-popover",
				Placement: popover.PlacementRightEnd,
				ShowArrow: true,
			}) {
				@PopoverContent()
			}
			@popover.Trigger(popover.TriggerProps{
				For:         "bottom-start-popover",
				TriggerType: popover.TriggerTypeHover,
			}) {
				@button.Button(button.Props{
					Class:   "w-full",
					Variant: button.VariantOutline,
				}) {
					Bottom Start
				}
			}
			@popover.Content(popover.ContentProps{
				ID:        "bottom-start-popover",
				Placement: popover.PlacementBottomStart,
				ShowArrow: true,
			}) {
				@PopoverContent()
			}
			@popover.Trigger(popover.TriggerProps{
				For:         "bottom-popover",
				TriggerType: popover.TriggerTypeHover,
			}) {
				@button.Button(button.Props{
					Class:   "w-full",
					Variant: button.VariantOutline,
				}) {
					Bottom
				}
			}
			@popover.Content(popover.ContentProps{
				ID:        "bottom-popover",
				Placement: popover.PlacementBottom,
				ShowArrow: true,
			}) {
				@PopoverContent()
			}
			@popover.Trigger(popover.TriggerProps{
				For:         "bottom-end-popover",
				TriggerType: popover.TriggerTypeHover,
			}) {
				@button.Button(button.Props{
					Class:   "w-full",
					Variant: button.VariantOutline,
				}) {
					Bottom End
				}
			}
			@popover.Content(popover.ContentProps{
				ID:        "bottom-end-popover",
				Placement: popover.PlacementBottomEnd,
				ShowArrow: true,
			}) {
				@PopoverContent()
			}
			@popover.Trigger(popover.TriggerProps{
				For:         "left-start-popover",
				TriggerType: popover.TriggerTypeHover,
			}) {
				@button.Button(button.Props{
					Class:   "w-full",
					Variant: button.VariantOutline,
				}) {
					Left Start
				}
			}
			@popover.Content(popover.ContentProps{
				ID:        "left-start-popover",
				Placement: popover.PlacementLeftStart,
				ShowArrow: true,
			}) {
				@PopoverContent()
			}
			@popover.Trigger(popover.TriggerProps{
				For:         "left-popover",
				TriggerType: popover.TriggerTypeHover,
			}) {
				@button.Button(button.Props{
					Class:   "w-full",
					Variant: button.VariantOutline,
				}) {
					Left
				}
			}
			@popover.Content(popover.ContentProps{
				ID:        "left-popover",
				Placement: popover.PlacementLeft,
				ShowArrow: true,
			}) {
				@PopoverContent()
			}
			@popover.Trigger(popover.TriggerProps{
				For:         "left-end-popover",
				TriggerType: popover.TriggerTypeHover,
			}) {
				@button.Button(button.Props{
					Class:   "w-full",
					Variant: button.VariantOutline,
				}) {
					Left End
				}
			}
			@popover.Content(popover.ContentProps{
				ID:        "left-end-popover",
				Placement: popover.PlacementLeftEnd,
				ShowArrow: true,
			}) {
				@PopoverContent()
			}
		</div>
	</div>
}

```

## API Reference

Required parameter

Hover for description

### Trigger

Element that triggers the popover when interacted with.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the trigger element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the trigger. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the trigger element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>For<br>```<br>ID of the popover content this trigger controls. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>TriggerType<br>```<br>How the popover is triggered. Options: 'click', 'hover'. | ```text-muted-foreground<br>TriggerType<br>``` | ```text-muted-foreground<br>click<br>``` |

### Content

Container for the popover content with positioning and behavior options.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the content element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the content. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the content element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Placement<br>```<br>Position of the popover relative to trigger. Options: 'top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'. | ```text-muted-foreground<br>Placement<br>``` | ```text-muted-foreground<br>bottom<br>``` |
| ```<br>Offset<br>```<br>Distance in pixels between the trigger and popover content. | ```text-muted-foreground<br>int<br>``` | ```text-muted-foreground<br>4 (or 8 with arrow)<br>``` |
| ```<br>DisableClickAway<br>```<br>Prevents closing the popover when clicking outside. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>DisableESC<br>```<br>Prevents closing the popover with the ESC key. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>ShowArrow<br>```<br>Whether to show an arrow pointing to the trigger element. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>HoverDelay<br>```<br>Delay in milliseconds before showing on hover (for hover triggers). | ```text-muted-foreground<br>int<br>``` | ```text-muted-foreground<br>0<br>``` |
| ```<br>HoverOutDelay<br>```<br>Delay in milliseconds before hiding on hover out (for hover triggers). | ```text-muted-foreground<br>int<br>``` | ```text-muted-foreground<br>0<br>``` |
| ```<br>MatchWidth<br>```<br>Whether the popover should match the width of the trigger element. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |