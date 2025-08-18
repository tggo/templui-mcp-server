---
url: "https://templui.io/docs/components/form"
title: "Form - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Form

A collection of form components and helper utilities for building accessible forms.

[Source](https://github.com/templui/templui/tree/main/internal/components/form) Tailwind

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

## Installation

```
templui add form
```

### Usage

Form elements are composed using a set of helper components that enhance the following form controls:

- [Checkbox](https://templui.io/docs/components/checkbox#form)
- [Date Picker](https://templui.io/docs/components/date-picker#form)
- [Input](https://templui.io/docs/components/input#form)
- [Input OTP](https://templui.io/docs/components/input-otp#form)
- [Radio](https://templui.io/docs/components/radio#form)
- [Select Box](https://templui.io/docs/components/select-box#form)
- [Textarea](https://templui.io/docs/components/textarea#form)
- [Tags Input](https://templui.io/docs/components/tags-input#form)
- [Time Picker](https://templui.io/docs/components/time-picker#form)
- [Toggle](https://templui.io/docs/components/toggle#form)
- [Rating](https://templui.io/docs/components/rating#form)

## API Reference

Required parameter

Hover for description

### Item

Container for form fields with vertical spacing layout.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the form item container. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the form item. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the form item element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### ItemFlex

Container for form fields with horizontal flex layout (for inline forms).

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the flex form item container. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the flex form item. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the flex form item element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### Label

Label element for form controls with proper accessibility association.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the label element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the label. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the label element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>For<br>```<br>ID of the form control this label is associated with. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>DisabledClass<br>```<br>Additional CSS classes to apply when the associated control is disabled. | ```text-muted-foreground<br>string<br>``` | - |

### Description

Descriptive text to provide additional context for form fields.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the description element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the description text. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the description element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### Message

Message text for displaying validation errors or informational messages.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the message element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the message text. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the message element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Variant<br>```<br>Message type that determines styling. Options: 'error', 'info'. | ```text-muted-foreground<br>MessageVariant<br>``` | - |