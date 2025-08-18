---
url: "https://templui.io/docs/components/tags-input"
title: "Tags Input - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Tags Input

Tags input field that allows users to enter and edit tags.

[Source](https://github.com/templui/templui/tree/main/internal/components/tagsinput) Tailwind Javascript

PreviewCode

127.0.0.1/32

```
package showcase

import "github.com/templui/templui/internal/components/tagsinput"

templ TagsInputDefault() {
	<div class="w-full max-w-sm">
		@tagsinput.TagsInput(tagsinput.Props{
			Placeholder: "Enter a network",
			Value:       []string{"127.0.0.1/32"},
		},
		)
	</div>
}

```

## Installation

1. Install the component





```
templui add tagsinput
```

2. Add the JavaScript to your layout





```
@tagsinput.Script()

```





Call this template in your base layout file (e.g., in the <head> section).


## Examples

Disabled

PreviewCode

127.0.0.1/32

```
package showcase

import "github.com/templui/templui/internal/components/tagsinput"

templ TagsInputDisabled() {
	<div class="w-full max-w-sm">
		@tagsinput.TagsInput(tagsinput.Props{
			Placeholder: "Enter a network",
			Value: []string{"127.0.0.1/32"},
			Disabled:    true,
		},
		)
	</div>
}
```

With Label

PreviewCode

Nets

127.0.0.1/32

```
package showcase

import (
	"github.com/templui/templui/internal/components/tagsinput"
	"github.com/templui/templui/internal/components/label"
)

templ TagsInputWithLabel() {
	<div class="w-full max-w-sm grid gap-2">
		@label.Label(label.Props{
			For: "nets",
		}) {
			Nets
		}
		@tagsinput.TagsInput(tagsinput.Props{
			ID:          "nets",
			Placeholder: "Enter a network",
			Value: []string{"127.0.0.1/32"},
		})
	</div>
}
```

Form

PreviewCode

Net

Enter a network in format like '1.1.1.1/32'

Please enter a valid network in format like '1.1.1.1/32'

```
package showcase

import (
"github.com/templui/templui/internal/components/form"
"github.com/templui/templui/internal/components/tagsinput"
)

templ TagsInputForm() {
<div class="w-full max-w-sm">
    @form.Item() {
        @form.Label(form.LabelProps{
            For: "tags-form",
        }) {
            Net
        }
        @tagsinput.TagsInput(tagsinput.Props{
            ID:          "tags-form",
            Placeholder: "Enter a network",
            HasError:    true,
        })
        @form.Description() {
            Enter a network in format like '1.1.1.1/32'
        }
        @form.Message(form.MessageProps{
            Variant: form.MessageVariantError,
        }) {
            Please enter a valid network in format like '1.1.1.1/32'
        }
    }
</div>
}
```

## API Reference

Required parameter

Hover for description

### TagsInput

Interactive input component for managing a collection of tags.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the tags input container. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Name<br>```<br>Name attribute for the hidden input fields used in form submission. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Value<br>```<br>Array of current tag values. | ```text-muted-foreground<br>[]string<br>``` | ```text-muted-foreground<br>[]<br>``` |
| ```<br>Placeholder<br>```<br>Placeholder text for the input field. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the tags input container. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>HasError<br>```<br>Whether to display error styling on the input. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the container element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Disabled<br>```<br>Whether the input is disabled and non-interactive. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Readonly<br>```<br>Whether the input is read-only (tags can be removed but not added). | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |