---
url: "https://templui.io/docs/components/textarea"
title: "Textarea - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Textarea

Multi-line text field for longer form content.

[Source](https://github.com/templui/templui/tree/main/internal/components/textarea) Tailwind Javascript

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/textarea"

templ TextareaDefault() {
	<div class="w-full max-w-md">
		@textarea.Textarea(textarea.Props{
			Placeholder: "Type your message here...",
		})
	</div>
}

```

## Installation

1. Install the component





```
templui add textarea
```

2. Add the JavaScript to your layout





```
@textarea.Script()

```





Call this template in your base layout file (e.g., in the <head> section).


## Examples

Custom Rows

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/textarea"

templ TextareaCustomRows() {
	<div class="w-full max-w-md">
		@textarea.Textarea(textarea.Props{
			Placeholder: "Type your message here...",
			Rows:        6,
		})
	</div>
}

```

Auto Resize

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/textarea"

templ TextareaAutoResize() {
	<div class="w-full max-w-md">
		@textarea.Textarea(textarea.Props{
			Placeholder: "Start typing to see the magic...",
			AutoResize:  true,
		})
	</div>
}

```

With Label

PreviewCode

Your Message

```
package showcase

import (
	"github.com/templui/templui/internal/components/label"
	"github.com/templui/templui/internal/components/textarea"
)

templ TextareaWithLabel() {
	<div class="space-y-2 w-full max-w-md">
		@label.Label(label.Props{
			For: "textarea-with-label",
		}) {
			Your Message
		}
		@textarea.Textarea(textarea.Props{
			ID:          "textarea-with-label",
			Placeholder: "Type your message here...",
			Rows:        4,
		})
	</div>
}

```

Disabled

PreviewCode

Your Message

```
package showcase

import (
	"github.com/templui/templui/internal/components/label"
	"github.com/templui/templui/internal/components/textarea"
)

templ TextareaDisabled() {
	<div class="space-y-2 w-full max-w-md">
		@label.Label(label.Props{
			For: "textarea-disabled",
		}) {
			Your Message
		}
		@textarea.Textarea(textarea.Props{
			ID:          "textarea-disabled",
			Disabled:    true,
			Placeholder: "Type your message here...",
		})
	</div>
}

```

Form

PreviewCode

Your Message

Please type your message in the textarea.

This message is required.

```
package showcase

import (
	"github.com/templui/templui/internal/components/form"
	"github.com/templui/templui/internal/components/textarea"
)

templ TextareaForm() {
	<div class="w-full max-w-md">
		@form.Item() {
			@form.Label(form.LabelProps{
				For: "textarea-form",
			}) {
				Your Message
			}
			@textarea.Textarea(textarea.Props{
				ID:          "textarea-form",
				Name:        "message",
				Placeholder: "Type your message here...",
			})
			@form.Description() {
				Please type your message in the textarea.
			}
			@form.Message(form.MessageProps{
				Variant: form.MessageVariantError,
			}) {
				This message is required.
			}
		}
	</div>
}

```

## API Reference

Required parameter

Hover for description

### Textarea

Multi-line text field component for longer form content with auto-resize capability.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the textarea element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the textarea. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the textarea element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Name<br>```<br>Name attribute for form submission. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Placeholder<br>```<br>Placeholder text displayed when textarea is empty. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Value<br>```<br>Initial value of the textarea. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Rows<br>```<br>Number of visible text lines in the textarea. | ```text-muted-foreground<br>int<br>``` | ```text-muted-foreground<br>3<br>``` |
| ```<br>Disabled<br>```<br>Whether the textarea is disabled and non-interactive. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>AutoResize<br>```<br>Whether the textarea should automatically resize based on content. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Required<br>```<br>Whether the textarea is required for form submission. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>ReadOnly<br>```<br>Whether the textarea is read-only. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |