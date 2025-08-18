---
url: "https://templui.io/docs/components/input"
title: "Input - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Input

Text field that allows users to enter and edit values.

[Source](https://github.com/templui/templui/tree/main/internal/components/input) Tailwind Javascript

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/input"

templ InputDefault() {
	<div class="w-full max-w-sm">
		@input.Input(input.Props{
			Type:        input.TypeEmail,
			Placeholder: "Email",
		},
		)
	</div>
}

```

## Installation

1. Install the component





```
templui add input
```

2. Add the JavaScript to your layout





```
@input.Script()

```





Call this template in your base layout file (e.g., in the <head> section).


## Examples

File

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/input"

templ InputFile() {
	<div class="w-full max-w-sm">
		@input.Input(input.Props{Type: input.TypeFile})
	</div>
}

```

Disabled

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/input"

templ InputDisabled() {
	<div class="w-full max-w-sm">
		@input.Input(input.Props{
			Type:        input.TypeEmail,
			Placeholder: "Email",
			Disabled:    true,
		},
		)
	</div>
}

```

With Label

PreviewCode

Email

```
package showcase

import (
	"github.com/templui/templui/internal/components/input"
	"github.com/templui/templui/internal/components/label"
)

templ InputWithLabel() {
	<div class="w-full max-w-sm grid gap-2">
		@label.Label(label.Props{
			For: "email",
		}) {
			Email
		}
		@input.Input(input.Props{
			ID:          "email",
			Type:        input.TypeEmail,
			Placeholder: "Email",
		})
	</div>
}

```

Password

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/input"

templ InputPassword() {
	<div class="w-full max-w-sm">
		@input.Input(input.Props{
			Type:        input.TypePassword,
			Placeholder: "your password",
		})
	</div>
}

```

Form

PreviewCode

Email

Enter your email address for notifications.

Please enter a valid email address

```
package showcase

import (
	"github.com/templui/templui/internal/components/form"
	"github.com/templui/templui/internal/components/input"
)

templ InputForm() {
	<div class="w-full max-w-sm">
		@form.Item() {
			@form.Label(form.LabelProps{
				For: "email-form",
			}) {
				Email
			}
			@input.Input(input.Props{
				ID:          "email-form",
				Type:        input.TypeEmail,
				Placeholder: "m@example.com",
				HasError:    true,
			})
			@form.Description() {
				Enter your email address for notifications.
			}
			@form.Message(form.MessageProps{
				Variant: form.MessageVariantError,
			}) {
				Please enter a valid email address
			}
		}
	</div>
}

```

## API Reference

Required parameter

Hover for description

### Input

Text field that allows users to enter and edit values.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the input element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the input. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the input element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Name<br>```<br>Name attribute for the form input. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Type<br>```<br>Input type. Options: 'text', 'password', 'email', 'number', 'tel', 'url', 'search', 'date', 'time', 'file'. | ```text-muted-foreground<br>Type<br>``` | ```text-muted-foreground<br>text<br>``` |
| ```<br>Placeholder<br>```<br>Placeholder text to display when input is empty. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Value<br>```<br>Current value of the input field. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Disabled<br>```<br>Whether the input is disabled and non-interactive. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Readonly<br>```<br>Whether the input is read-only. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Required<br>```<br>Whether the input is required for form submission. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>FileAccept<br>```<br>Accepted file types for file inputs (e.g., '.jpg,.png'). | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>HasError<br>```<br>Whether the input has a validation error. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>NoTogglePassword<br>```<br>Disable password visibility toggle for password inputs. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |