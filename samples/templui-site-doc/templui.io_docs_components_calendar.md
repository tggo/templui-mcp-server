---
url: "https://templui.io/docs/components/calendar"
title: "Calendar - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Calendar

A date field component that allows users to enter and edit date.

[Source](https://github.com/templui/templui/tree/main/internal/components/calendar) Tailwind Javascript

PreviewCode

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
	"github.com/templui/templui/internal/components/calendar"
	"github.com/templui/templui/internal/components/card"
)

templ CalendarDefault() {
	<div class="w-full max-w-sm">
		@card.Card() {
			@card.Content() {
				@calendar.Calendar()
			}
		}
	</div>
}

```

## Installation

1. Install the component





```
templui add calendar
```

2. Add the JavaScript to your layout





```
@calendar.Script()

```





Call this template in your base layout file (e.g., in the <head> section).


## API Reference

Required parameter

Hover for description

### Calendar

Calendar component for date selection with internationalization support.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the calendar element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the calendar. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>LocaleTag<br>```<br>Locale tag for internationalization. Options: 'en-US', 'zh-CN', 'fr-FR', 'de-DE', 'it-IT', 'ja-JP', 'pt-PT', 'es-ES'. | ```text-muted-foreground<br>LocaleTag<br>``` | ```text-muted-foreground<br>en-US<br>``` |
| ```<br>Value<br>```<br>Selected date value. Pointer to time.Time for optional selection. | ```text-muted-foreground<br>*time.Time<br>``` | ```text-muted-foreground<br>nil<br>``` |
| ```<br>Name<br>```<br>Name attribute for the hidden input field. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>InitialMonth<br>```<br>Initial month to display (0-11). Defaults to current month or Value's month. | ```text-muted-foreground<br>int<br>``` | - |
| ```<br>InitialYear<br>```<br>Initial year to display. Defaults to current year or Value's year. | ```text-muted-foreground<br>int<br>``` | - |
| ```<br>StartOfWeek<br>```<br>Optional start of week (0-6, Sun-Sat). When nil, defaults to Monday (1). Use calendar.Sunday through calendar.Saturday constants. | ```text-muted-foreground<br>*Day<br>``` | ```text-muted-foreground<br>nil<br>``` |