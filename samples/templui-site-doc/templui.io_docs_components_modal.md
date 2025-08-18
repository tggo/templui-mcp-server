---
url: "https://templui.io/docs/components/modal"
title: "Modal - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Modal

Dialog overlay that requires user attention or interaction.

[Source](https://github.com/templui/templui/tree/main/internal/components/modal) Tailwind Javascript

PreviewCode

Open Modal

### Are you absolutely sure?

This action cannot be undone. This will permanently delete your account and remove your data from our servers.

CancelContinue

```
package showcase

import (
	"github.com/templui/templui/internal/components/button"
	"github.com/templui/templui/internal/components/modal"
)

templ ModalDefault() {
	@modal.Trigger(modal.TriggerProps{
		For: "default-modal",
	}) {
		@button.Button(button.Props{
			Variant: button.VariantOutline,
		}) {
			Open Modal
		}
	}
	@modal.Modal(modal.Props{
		ID:    "default-modal",
		Class: "max-w-md",
	}) {
		@modal.Header() {
			Are you absolutely sure?
		}
		@modal.Body() {
			This action cannot be undone. This will permanently delete your account and remove your data from our servers.
		}
		@modal.Footer() {
			<div class="flex gap-2">
				@modal.Close(modal.CloseProps{
					For: "default-modal",
				}) {
					@button.Button() {
						Cancel
					}
				}
				@modal.Close(modal.CloseProps{
					For: "default-modal",
				}) {
					@button.Button(button.Props{
						Variant: button.VariantSecondary,
					}) {
						Continue
					}
				}
			</div>
		}
	}
}

```

## Installation

1. Install the component





```
templui add modal
```

2. Add the JavaScript to your layout





```
@modal.Script()

```





Call this template in your base layout file (e.g., in the <head> section).


## API Reference

Required parameter

Hover for description

### Trigger

Element that triggers the modal to open.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the trigger element | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the trigger | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the trigger | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |
| ```<br>Disabled<br>```<br>Whether the trigger is disabled | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>For<br>```<br>ID of the modal to trigger when clicked | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |

### Close

Element that closes the modal.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the close element | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the close element | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the close element | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |
| ```<br>For<br>```<br>ID of the modal to close (defaults to closest modal if empty) | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |

### Body

Body/content section of the modal.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the body element | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the body | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the body | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |