---
url: "https://templui.io/docs/components/time-picker"
title: "Time Picker - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Time Picker

A native time selector with support for 12/24 hour formats.

[Source](https://github.com/templui/templui/tree/main/internal/components/timepicker) Tailwind Javascript

PreviewCode

Select time

Hour

000102030405060708091011121314151617181920212223

Minute

000102030405060708091011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859

Done

```
package showcase

import "github.com/templui/templui/internal/components/timepicker"

templ TimePickerDefault() {
	<div class="w-full max-w-sm">
		@timepicker.TimePicker()
	</div>
}

```

## Installation

1. Install the component





```
templui add timepicker
```

2. Add the JavaScript to your layout





```
@timepicker.Script()
@popover.Script()

```





Call this template in your base layout file (e.g., in the <head> section).


## Examples

12h Format

PreviewCode

Select time

Hour

120102030405060708091011

Minute

000102030405060708091011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859

AMPM

Done

```
package showcase

import "github.com/templui/templui/internal/components/timepicker"

templ TimePicker12Hour() {
	<div class="w-full max-w-sm">
		@timepicker.TimePicker(timepicker.Props{
			Use12Hours: true,
		})
	</div>
}

```

With Label

PreviewCode

Select a timeSelect time

Hour

120102030405060708091011

Minute

000102030405060708091011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859

AMPM

Done

```
package showcase

import (
	"github.com/templui/templui/internal/components/label"
	"github.com/templui/templui/internal/components/timepicker"
)

templ TimePickerLabel() {
	<div class="flex flex-col gap-2 w-full max-w-sm">
		@label.Label(label.Props{
			For: "time-picker-label",
		}) {
			Select a time
		}
		@timepicker.TimePicker(timepicker.Props{
			ID:         "time-picker-label",
			Use12Hours: true,
		})
	</div>
}

```

With Custom Placeholder

PreviewCode

When do you want to meet?

Hour

000102030405060708091011121314151617181920212223

Minute

000102030405060708091011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859

Done

```
package showcase

import "github.com/templui/templui/internal/components/timepicker"

templ TimePickerCustomPlaceholder() {
	<div class="w-full max-w-sm">
		@timepicker.TimePicker(timepicker.Props{
			Placeholder: "When do you want to meet?",
		})
	</div>
}

```

With Selected Time

PreviewCode

10:38

Hour

000102030405060708091011121314151617181920212223

Minute

000102030405060708091011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859

Done

```
package showcase

import (
	"github.com/templui/templui/internal/components/timepicker"
	"time"
)

templ TimePickerSelectedTime() {
	<div class="w-full max-w-sm">
		@timepicker.TimePicker(timepicker.Props{
			Value: time.Now(),
		})
	</div>
}

```

With Form

PreviewCode

Select a timeSelect time

Hour

000102030405060708091011121314151617181920212223

Minute

000102030405060708091011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859

Done

Select a time from the dropdown.

Please select a time

```
package showcase

import (
	"github.com/templui/templui/internal/components/form"
	"github.com/templui/templui/internal/components/timepicker"
)

templ TimePickerForm() {
	<div class="w-full max-w-sm">
		@form.Item() {
			@form.Label(form.LabelProps{
				For: "time-picker-form",
			}) {
				Select a time
			}
			@timepicker.TimePicker(timepicker.Props{
				ID:       "time-picker-form",
				Name:     "time-picker-form",
				HasError: true,
			})
			@form.Description() {
				Select a time from the dropdown.
			}
			@form.Message(form.MessageProps{
				Variant: form.MessageVariantError,
			}) {
				Please select a time
			}
		}
	</div>
}

```

## API Reference

Required parameter

Hover for description

### TimePicker

Time picker component for selecting time values with 12/24 hour format support.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the time picker element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the time picker. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the time picker element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Name<br>```<br>Name attribute for the hidden input field. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Value<br>```<br>Selected time value. | ```text-muted-foreground<br>time.Time<br>``` | - |
| ```<br>Use12Hours<br>```<br>Whether to use 12-hour format (AM/PM) or 24-hour format. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>AMLabel<br>```<br>Label for AM period in 12-hour format. | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>AM<br>``` |
| ```<br>PMLabel<br>```<br>Label for PM period in 12-hour format. | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>PM<br>``` |
| ```<br>Placeholder<br>```<br>Placeholder text when no time is selected. | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>Select time<br>``` |
| ```<br>Required<br>```<br>Whether the time picker is required for form submission. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Disabled<br>```<br>Whether the time picker is disabled and non-interactive. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>HasError<br>```<br>Whether the time picker has an error state (applies error styling). | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |