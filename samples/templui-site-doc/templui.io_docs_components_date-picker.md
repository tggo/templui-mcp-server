---
url: "https://templui.io/docs/components/date-picker"
title: "Date Picker - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Date Picker

Calendar interface for selecting and formatting dates. Uses [Calendar](https://templui.io/docs/components/calendar) for date selection and [Popover](https://templui.io/docs/components/popover) for the popup.

[Source](https://github.com/templui/templui/tree/main/internal/components/datepicker) Tailwind Javascript

PreviewCode

Select a date

August 2025

Mon

Tue

Wed

Thu

Fri

Sat

Sun

12345678910111213141516171819202122232425262728293031

```
package showcase

import "github.com/templui/templui/internal/components/datepicker"

templ DatePickerDefault() {
	<div class="w-full max-w-sm">
		@datepicker.DatePicker()
	</div>
}

```

## Installation

1. Install the component





```
templui add datepicker
```

2. Add the JavaScript to your layout





```
@datepicker.Script()
@popover.Script()

```





Call this template in your base layout file (e.g., in the <head> section).


## Examples

With Label

PreviewCode

Select a date

August 2025

Mon

Tue

Wed

Thu

Fri

Sat

Sun

12345678910111213141516171819202122232425262728293031

```
package showcase

import "github.com/templui/templui/internal/components/datepicker"

templ DatePickerWithLabel() {
	<div class="w-full max-w-sm space-y-2">
		// @label.Label(label.Props{
		// 	For: "date-picker-with-label",
		// }) {
		// 	Pick a date
		// }
		@datepicker.DatePicker(datepicker.Props{
			ID: "xxxx",
		})
	</div>
}

```

Custom Placeholder

PreviewCode

When is your birthday?

August 2025

Mon

Tue

Wed

Thu

Fri

Sat

Sun

12345678910111213141516171819202122232425262728293031

```
package showcase

import "github.com/templui/templui/internal/components/datepicker"

templ DatePickerCustomPlaceholder() {
	<div class="w-full max-w-sm">
		@datepicker.DatePicker(datepicker.Props{
			Placeholder: "When is your birthday?",
		})
	</div>
}

```

Selected Date

PreviewCode

Aug 18, 2025

August 2025

Mon

Tue

Wed

Thu

Fri

Sat

Sun

12345678910111213141516171819202122232425262728293031

```

package showcase

import (
	"github.com/templui/templui/internal/components/datepicker"
	"time"
)

templ DatePickerSelectedDate() {
	<div class="w-full max-w-sm">
		@datepicker.DatePicker(datepicker.Props{
			Value: time.Now(),
		})
	</div>
}

```

Disabled

PreviewCode

Select a date

August 2025

Mon

Tue

Wed

Thu

Fri

Sat

Sun

12345678910111213141516171819202122232425262728293031

```
package showcase

import "github.com/templui/templui/internal/components/datepicker"

templ DatePickerDisabled() {
	<div class="w-full max-w-sm">
		@datepicker.DatePicker(datepicker.Props{
			Disabled: true,
		})
	</div>
}

```

Formats

PreviewCode

Default (Medium, en-US)Aug 18, 2025

August 2025

Mon

Tue

Wed

Thu

Fri

Sat

Sun

12345678910111213141516171819202122232425262728293031

Short Format (German)18.08.25

August 2025

Mo

Di

Mi

Do

Fr

Sa

So

12345678910111213141516171819202122232425262728293031

Long Format (Spanish)19 de julio de 2025

julio 2025

lun

mar

mié

jue

vie

sáb

dom

12345678910111213141516171819202122232425262728293031

Full Format (French)lundi 18 août 2025

août 2025

lun.

mar.

mer.

jeu.

ven.

sam.

dim.

12345678910111213141516171819202122232425262728293031

Medium Format (Japanese)2025/08/18

8月 2025

月

火

水

木

金

土

日

12345678910111213141516171819202122232425262728293031

Short Format (Arabic - ar-SA)٢٤‏/٢‏/١٤٤٧ هـ

جمادى الأولى 2025

الاثنين

الثلاثاء

الأربعاء

الخميس

الجمعة

السبت

الأحد

12345678910111213141516171819202122232425262728293031

```
package showcase

import (
	"github.com/templui/templui/internal/components/datepicker"
	"github.com/templui/templui/internal/components/label"
	"time"
)

templ DatePickerFormats() {
	<div class="w-full max-w-sm flex flex-col gap-4">
		<div class="space-y-2">
			@label.Label(label.Props{
				For: "dp-default",
			}) {
				Default (Medium, en-US)
			}
			@datepicker.DatePicker(datepicker.Props{
				ID:    "dp-default",
				Value: time.Now(),
			})
		</div>
		<div class="space-y-2">
			@label.Label(label.Props{
				For: "dp-de-short",
			}) {
				Short Format (German)
			}
			@datepicker.DatePicker(datepicker.Props{
				ID:        "dp-de-short",
				LocaleTag: datepicker.LocaleTagGerman,
				Format:    datepicker.FormatLOCALE_SHORT,
				Value:     time.Now(),
			})
		</div>
		<div class="space-y-2">
			@label.Label(label.Props{
				For: "dp-es-long",
			}) {
				Long Format (Spanish)
			}
			@datepicker.DatePicker(datepicker.Props{
				ID:          "dp-es-long",
				LocaleTag:   datepicker.LocaleTagSpanish,
				Format:      datepicker.FormatLOCALE_LONG,
				Value:       time.Now().AddDate(0, 0, -30), // 30 days ago
				Placeholder: "Seleccionar fecha",
			})
		</div>
		<div class="space-y-2">
			@label.Label(label.Props{
				For: "dp-fr-full",
			}) {
				Full Format (French)
			}
			@datepicker.DatePicker(datepicker.Props{
				ID:        "dp-fr-full",
				LocaleTag: datepicker.LocaleTagFrench,
				Format:    datepicker.FormatLOCALE_FULL,
				Value:     time.Now(),
			})
		</div>
		<div class="space-y-2">
			@label.Label(label.Props{
				For: "dp-ja-medium",
			}) {
				Medium Format (Japanese)
			}
			@datepicker.DatePicker(datepicker.Props{
				ID:        "dp-ja-medium",
				LocaleTag: datepicker.LocaleTagJapanese,
				Format:    datepicker.FormatLOCALE_MEDIUM,
				Value:     time.Now(),
			})
		</div>
		<div class="space-y-2">
			@label.Label(label.Props{
				For: "dp-ar-short",
			}) {
				Short Format (Arabic - ar-SA)
			}
			@datepicker.DatePicker(datepicker.Props{
				ID:        "dp-ar-short",
				LocaleTag: "ar-SA", // Using string literal for locale
				Format:    datepicker.FormatLOCALE_SHORT,
				Value:     time.Now(),
			})
		</div>
	</div>
}

```

Form

PreviewCode

Select a dateSelect a date

August 2025

Mon

Tue

Wed

Thu

Fri

Sat

Sun

12345678910111213141516171819202122232425262728293031

Select a date from the calendar.

Select a valid date

```
package showcase

import (
	"github.com/templui/templui/internal/components/datepicker"
	"github.com/templui/templui/internal/components/form"
)

templ DatePickerForm() {
	<div class="w-full max-w-sm">
		@form.Item() {
			@form.Label(form.LabelProps{
				For: "date-picker-form",
			}) {
				Select a date
			}
			@datepicker.DatePicker(datepicker.Props{
				ID:       "date-picker-form",
				HasError: true,
			})
			@form.Description() {
				Select a date from the calendar.
			}
			@form.Message(form.MessageProps{
				Variant: form.MessageVariantError,
			}) {
				Select a valid date
			}
		}
	</div>
}

```

## API Reference

Required parameter

Hover for description

### DatePicker

Main date picker component that triggers the popover calendar.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the date picker component | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>randomID<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the trigger button | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the trigger button | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |
| ```<br>Value<br>```<br>Current selected date value | ```text-muted-foreground<br>time.Time<br>``` | ```text-muted-foreground<br>time.Time{}<br>``` |
| ```<br>Format<br>```<br>Display format for the selected date | ```text-muted-foreground<br>Format<br>``` | ```text-muted-foreground<br>locale-medium<br>``` |
| ```<br>LocaleTag<br>```<br>BCP 47 Locale Tag for language and regional format | ```text-muted-foreground<br>LocaleTag<br>``` | ```text-muted-foreground<br>en-US<br>``` |
| ```<br>StartOfWeek<br>```<br>Optional start of week passed to Calendar component. When nil, Calendar defaults to Monday. Use calendar.Sunday through calendar.Saturday constants. | ```text-muted-foreground<br>*calendar.Day<br>``` | ```text-muted-foreground<br>nil<br>``` |
| ```<br>Placeholder<br>```<br>Placeholder text when no date is selected | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>Select a date<br>``` |
| ```<br>Disabled<br>```<br>Whether the date picker is disabled | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Required<br>```<br>Whether the date picker is required for form validation | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>HasError<br>```<br>Whether the date picker should display error styling | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Name<br>```<br>Name attribute for the hidden input field | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>ID value<br>``` |