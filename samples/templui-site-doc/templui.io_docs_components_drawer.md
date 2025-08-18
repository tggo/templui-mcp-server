---
url: "https://templui.io/docs/components/drawer"
title: "Drawer - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Drawer

Side-anchored panel that slides in from screen edges.

[Source](https://github.com/templui/templui/tree/main/internal/components/drawer) Tailwind Javascript

PreviewCode

Open

## Account

Make changes to your account here. Click save when you are done.

CancelSave

```
package showcase

import (
	"github.com/templui/templui/internal/components/button"
	"github.com/templui/templui/internal/components/card"
	"github.com/templui/templui/internal/components/drawer"
	"github.com/templui/templui/internal/components/input"
)

templ DrawerDefault() {
	@drawer.Trigger(drawer.TriggerProps{
		For: "default-drawer",
	}) {
		@button.Button(button.Props{
			Variant: button.VariantOutline,
		}) {
			Open
		}
	}
	@drawer.Content(drawer.ContentProps{
		Position: drawer.PositionRight,
		ID:       "default-drawer",
	}) {
		@drawer.Header() {
			@drawer.Title() {
				Account
			}
			@drawer.Description() {
				Make changes to your account here. Click save when you are done.
			}
		}
		@card.Card() {
			@card.Content() {
				<div class="flex flex-col gap-4">
					@input.Input(input.Props{
						Type:        input.TypeText,
						Placeholder: "Name",
						ID:          "name",
						Value:       "John Doe",
					})
					@input.Input(input.Props{
						Type:        input.TypeText,
						Placeholder: "Username",
						ID:          "username",
						Value:       "@johndoe",
					})
				</div>
			}
		}
		@drawer.Footer() {
			@drawer.Close() {
				Cancel
			}
			@button.Button() {
				Save
			}
		}
	}
}

```

## Installation

1. Install the component





```
templui add drawer
```

2. Add the JavaScript to your layout





```
@drawer.Script()

```





Call this template in your base layout file (e.g., in the <head> section).


## Examples

Positions

PreviewCode

Top

## Top Drawer

This drawer slides in from the top of the screen.

Close

Right

## Right Drawer

This drawer slides in from the right side of the screen.

Close

Bottom

## Bottom Drawer

This drawer slides in from the bottom of the screen.

Close

Left

## Left Drawer

This drawer slides in from the left side of the screen.

Close

```
package showcase

import (
	"github.com/templui/templui/internal/components/button"
	"github.com/templui/templui/internal/components/drawer"
)

templ DrawerPositions() {
	<div class="flex flex-wrap gap-2">
		@drawer.Trigger(drawer.TriggerProps{
			For: "top-drawer",
		}) {
			@button.Button(button.Props{
				Variant: button.VariantOutline,
			}) {
				Top
			}
		}
		@drawer.Content(drawer.ContentProps{
			Position: drawer.PositionTop,
			ID:       "top-drawer",
		}) {
			@drawer.Header() {
				@drawer.Title() {
					Top Drawer
				}
			}
			<p>This drawer slides in from the top of the screen.</p>
			@drawer.Footer() {
				@drawer.Close(drawer.CloseProps{
					For: "top-drawer",
				}) {
					Close
				}
			}
		}
		@drawer.Trigger(drawer.TriggerProps{
			For: "right-drawer",
		}) {
			@button.Button(button.Props{
				Variant: button.VariantOutline,
			}) {
				Right
			}
		}
		@drawer.Content(drawer.ContentProps{
			Position: drawer.PositionRight,
			ID:       "right-drawer",
		}) {
			@drawer.Header() {
				@drawer.Title() {
					Right Drawer
				}
			}
			<p>This drawer slides in from the right side of the screen.</p>
			@drawer.Footer() {
				@drawer.Close(drawer.CloseProps{
					For: "right-drawer",
				}) {
					Close
				}
			}
		}
		@drawer.Trigger(drawer.TriggerProps{
			For: "bottom-drawer",
		}) {
			@button.Button(button.Props{
				Variant: button.VariantOutline,
			}) {
				Bottom
			}
		}
		@drawer.Content(drawer.ContentProps{
			Position: drawer.PositionBottom,
			ID:       "bottom-drawer",
		}) {
			@drawer.Header() {
				@drawer.Title() {
					Bottom Drawer
				}
			}
			<p>This drawer slides in from the bottom of the screen.</p>
			@drawer.Footer() {
				@drawer.Close(drawer.CloseProps{
					For: "bottom-drawer",
				}) {
					Close
				}
			}
		}
		@drawer.Trigger(drawer.TriggerProps{
			For: "left-drawer",
		}) {
			@button.Button(button.Props{
				Variant: button.VariantOutline,
			}) {
				Left
			}
		}
		@drawer.Content(drawer.ContentProps{
			Position: drawer.PositionLeft,
			ID:       "left-drawer",
		}) {
			@drawer.Header() {
				@drawer.Title() {
					Left Drawer
				}
			}
			<p>This drawer slides in from the left side of the screen.</p>
			@drawer.Footer() {
				@drawer.Close(drawer.CloseProps{
					For: "left-drawer",
				}) {
					Close
				}
			}
		}
	</div>
}

```

## API Reference

Required parameter

Hover for description

### Trigger

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the trigger element | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the trigger | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the trigger | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |
| ```<br>For<br>```<br>ID of the drawer to trigger when clicked | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |

### Content

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the drawer content | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>randomID<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the content container | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the content container | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |
| ```<br>Position<br>```<br>Position from which the drawer slides in | ```text-muted-foreground<br>Position<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>InitialOpen<br>```<br>Whether the drawer should be open initially | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |

### Title

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the title element | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the title | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the title | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |

### Description

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the description element | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the description | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the description | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |

### Close

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the close button | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the close button | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the close button | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |
| ```<br>For<br>```<br>ID of the drawer to close (defaults to closest drawer if empty) | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |