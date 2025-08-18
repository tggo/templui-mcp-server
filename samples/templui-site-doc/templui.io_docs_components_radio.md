---
url: "https://templui.io/docs/components/radio"
title: "Radio - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Radio

Control for selecting a single option from a list of choices.

[Source](https://github.com/templui/templui/tree/main/internal/components/radio) Tailwind

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/radio"

templ RadioDefault() {
	@radio.Radio()
}

```

## Installation

```
templui add radio
```

## Examples

Checked

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/radio"

templ RadioChecked() {
	@radio.Radio(radio.Props{
		Checked: true,
	})
}

```

With Label

PreviewCode

Label

```
package showcase

import (
	"github.com/templui/templui/internal/components/label"
	"github.com/templui/templui/internal/components/radio"
)

templ RadioWithLabel() {
	<div class="flex gap-2 items-center">
		@radio.Radio(radio.Props{
			ID: "radio-with-label",
		})
		@label.Label(label.Props{
			For: "radio-with-label",
		}) {
			Label
		}
	</div>
}

```

Disabled

PreviewCode

Disabled

```
package showcase

import (
	"github.com/templui/templui/internal/components/label"
	"github.com/templui/templui/internal/components/radio"
)

templ RadioDisabled() {
	<div class="flex gap-2 items-center">
		@radio.Radio(radio.Props{
			ID:       "radio-disabled",
			Disabled: true,
		})
		@label.Label(label.Props{
			For: "radio-disabled",
		}) {
			Disabled
		}
	</div>
}

```

Form

PreviewCode

All new products

Create a wishlist (Coming Soon)

No notifications

You can change your preferences at any time.

We will send you an email when new products are available.

```
package showcase

import (
	"github.com/templui/templui/internal/components/form"
	"github.com/templui/templui/internal/components/radio"
)

templ RadioForm() {
	<div class="w-full max-w-sm">
		@form.Item() {
			@form.ItemFlex() {
				@radio.Radio(radio.Props{
					Name:    "radio-form",
					ID:      "r1",
					Checked: true,
				})
				@form.Label(form.LabelProps{
					For: "r1",
				}) {
					All new products
				}
			}
			@form.ItemFlex() {
				@radio.Radio(radio.Props{
					Name:     "radio-form",
					ID:       "r2",
					Disabled: true,
				})
				@form.Label(form.LabelProps{
					For: "r2",
				}) {
					Create a wishlist (Coming Soon)
				}
			}
			@form.ItemFlex() {
				@radio.Radio(radio.Props{
					Name: "radio-form",
					ID:   "r3",
				})
				@form.Label(form.LabelProps{
					For: "r3",
				}) {
					No notifications
				}
			}
			@form.Description() {
				You can change your preferences at any time.
			}
			@form.Message(form.MessageProps{
				Variant: form.MessageVariantError,
			}) {
				We will send you an email when new products are available.
			}
		}
	</div>
}

```

## API Reference

Required parameter

Hover for description

### Radio

Radio button input for selecting a single option from multiple choices.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the radio input element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the radio input. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the radio input element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Name<br>```<br>Name attribute for grouping radio buttons together. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Value<br>```<br>Value attribute for the radio input element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Disabled<br>```<br>Whether the radio button is disabled and non-interactive. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Required<br>```<br>Whether the radio button is required for form submission. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Checked<br>```<br>Whether the radio button is checked. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |