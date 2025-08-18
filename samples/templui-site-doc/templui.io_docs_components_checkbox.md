---
url: "https://templui.io/docs/components/checkbox"
title: "Checkbox - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Checkbox

Control that allows selecting multiple options from a list.

[Source](https://github.com/templui/templui/tree/main/internal/components/checkbox) Tailwind

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/checkbox"

templ CheckboxDefault() {
	@checkbox.Checkbox()
}

```

## Installation

```
templui add checkbox
```

## Examples

Checked

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/checkbox"

templ CheckboxChecked() {
	@checkbox.Checkbox(checkbox.Props{
		Checked: true,
	},
	)
}

```

With Label

PreviewCode

Accept terms and conditions

```
package showcase

import (
	"github.com/templui/templui/internal/components/checkbox"
	"github.com/templui/templui/internal/components/label"
)

templ CheckboxWithLabel() {
	<div class="flex items-center gap-2">
		@checkbox.Checkbox(checkbox.Props{
			ID: "checkbox-with-label",
		})
		@label.Label(label.Props{
			For: "checkbox-with-label",
		}) {
			Accept terms and conditions
		}
	</div>
}

```

Disabled

PreviewCode

Accept terms and conditions

```
package showcase

import (
	"github.com/templui/templui/internal/components/checkbox"
	"github.com/templui/templui/internal/components/label"
)

templ CheckboxDisabled() {
	<div class="flex items-center gap-2">
		@checkbox.Checkbox(checkbox.Props{
			Disabled: true,
			ID:       "checkbox-disabled",
		},
		)
		@label.Label(label.Props{
			For: "checkbox-disabled",
		}) {
			Accept terms and conditions
		}
	</div>
}

```

Custom Icon

PreviewCode

```
package showcase

import (
	"github.com/templui/templui/internal/components/checkbox"
	"github.com/templui/templui/internal/components/icon"
)

templ CheckboxCustomIcon() {
	@checkbox.Checkbox(checkbox.Props{
		Icon:    icon.Plus(icon.Props{Size: 12}),
		Checked: true,
	},
	)
}

```

Form

PreviewCode

Dessign and UX

Development (Coming Soon)

Business and Marketing

Choose all areas that interest you.

Please select at least one interest.

```
package showcase

import (
	"github.com/templui/templui/internal/components/checkbox"
	"github.com/templui/templui/internal/components/form"
)

templ CheckboxForm() {
	<div class="w-full max-w-sm">
		@form.Item() {
			@form.ItemFlex() {
				@checkbox.Checkbox(
					checkbox.Props{
						Name:    "interests",
						Value:   "design",
						ID:      "c1",
						Checked: true,
					},
				)
				@form.Label(form.LabelProps{
					For: "c1",
				}) {
					Dessign and UX
				}
			}
			@form.ItemFlex() {
				@checkbox.Checkbox(checkbox.Props{
					Name:     "interests",
					Value:    "development",
					ID:       "c2",
					Disabled: true,
				})
				@form.Label(form.LabelProps{
					For: "c2",
				}) {
					Development (Coming Soon)
				}
			}
			@form.ItemFlex() {
				@checkbox.Checkbox(checkbox.Props{
					Name:  "interests",
					Value: "marketing",
					ID:    "c3",
				})
				@form.Label(form.LabelProps{
					For: "c3",
				}) {
					Business and Marketing
				}
			}
			@form.Description() {
				Choose all areas that interest you.
			}
			@form.Message(form.MessageProps{
				Variant: form.MessageVariantError,
			}) {
				Please select at least one interest.
			}
		}
	</div>
}

```

## API Reference

Required parameter

Hover for description

### Checkbox

Control that allows selecting multiple options from a list.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the checkbox element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the checkbox. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the checkbox element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Name<br>```<br>Name attribute for the form input. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Value<br>```<br>Value attribute for the checkbox input. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Disabled<br>```<br>Whether the checkbox is disabled and non-interactive. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Required<br>```<br>Whether the checkbox is required for form submission. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Checked<br>```<br>Whether the checkbox is initially checked. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Icon<br>```<br>Custom icon component to use instead of the default checkmark. | ```text-muted-foreground<br>templ.Component<br>``` | - |