---
url: "https://templui.io/docs/components/toggle"
title: "Toggle - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Toggle

Two-state button that can be switched on or off.

[Source](https://github.com/templui/templui/tree/main/internal/components/toggle) Tailwind

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/toggle"

templ ToggleDefault() {
	@toggle.Toggle()
}

```

## Installation

```
templui add toggle
```

## Examples

Checked

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/toggle"

templ ToggleChecked() {
	@toggle.Toggle(toggle.Props{
		Checked: true,
	})
}

```

With Label

PreviewCode

Airplane Mode

```
package showcase

import (
	"github.com/templui/templui/internal/components/label"
	"github.com/templui/templui/internal/components/toggle"
)

templ ToggleWithLabel() {
	<div class="flex items-center gap-2">
		@toggle.Toggle(toggle.Props{
			ID: "toggle-with-label",
		})
		@label.Label(label.Props{
			For: "toggle-with-label",
		}) {
			Airplane Mode
		}
	</div>
}

```

Disabled

PreviewCode

Airplane Mode

```
package showcase

import (
	"github.com/templui/templui/internal/components/label"
	"github.com/templui/templui/internal/components/toggle"
)

templ ToggleDisabled() {
	<div class="flex items-center gap-2">
		@toggle.Toggle(toggle.Props{
			ID:       "toggle-disabled",
			Disabled: true,
		})
		@label.Label(label.Props{
			For: "toggle-disabled",
		}) {
			Airplane Mode
		}
	</div>
}

```

Form

PreviewCode

Airplane Mode

Wi-Fi

Bluetooth

Manage your devices connectivity options.

Please configure your connectivity settings.

```
package showcase

import (
	"github.com/templui/templui/internal/components/form"
	"github.com/templui/templui/internal/components/toggle"
)

templ ToggleForm() {
	<div class="w-full max-w-sm">
		@form.Item() {
			@form.ItemFlex() {
				@toggle.Toggle(toggle.Props{
					ID:   "airplane-mode",
					Name: "airplane",
				})
				@form.Label(form.LabelProps{
					For: "airplane-mode",
				}) {
					Airplane Mode
				}
			}
			@form.ItemFlex() {
				@toggle.Toggle(toggle.Props{
					ID:       "wifi-mode",
					Name:     "wifi",
					Disabled: true,
				})
				@form.Label(form.LabelProps{
					For: "wifi-mode",
				}) {
					Wi-Fi
				}
			}
			@form.ItemFlex() {
				@toggle.Toggle(toggle.Props{
					ID:      "bluetooth-mode",
					Name:    "bluetooth",
					Checked: true,
				})
				@form.Label(form.LabelProps{
					For: "bluetooth-mode",
				}) {
					Bluetooth
				}
			}
			@form.Description() {
				Manage your devices connectivity options.
			}
			@form.Message(form.MessageProps{
				Variant: form.MessageVariantError,
			}) {
				Please configure your connectivity settings.
			}
		}
	</div>
}

```

## API Reference

Required parameter

Hover for description

### Toggle

Two-state button component that can be switched on or off.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the toggle element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the toggle. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the toggle element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Name<br>```<br>Name attribute for form submission. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Checked<br>```<br>Whether the toggle is initially checked. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Disabled<br>```<br>Whether the toggle is disabled and non-interactive. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |