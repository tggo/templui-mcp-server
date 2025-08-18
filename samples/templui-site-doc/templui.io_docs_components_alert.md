---
url: "https://templui.io/docs/components/alert"
title: "Alert - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Alert

Status message that displays contextual feedback or notifications.

[Source](https://github.com/templui/templui/tree/main/internal/components/alert) Tailwind

PreviewCode

##### Note

This is a default alert — check it out!

```
package showcase

import (
	"github.com/templui/templui/internal/components/alert"
	"github.com/templui/templui/internal/components/icon"
)

templ AlertDefault() {
	<div class="w-full max-w-xl">
		@alert.Alert() {
			@icon.Rocket(icon.Props{Size: 16})
			@alert.Title() {
				Note
			}
			@alert.Description() {
				This is a default alert — check it out!
			}
		}
	</div>
}

```

## Installation

```
templui add alert
```

## Examples

Destructive

PreviewCode

##### Error

Your session has expired. Please log in again.

```
package showcase

import (
	"github.com/templui/templui/internal/components/alert"
	"github.com/templui/templui/internal/components/icon"
)

templ AlertDestructive() {
	<div class="w-full max-w-xl">
		@alert.Alert(alert.Props{Variant: alert.VariantDestructive}) {
			@icon.TriangleAlert(icon.Props{Size: 16})
			@alert.Title() {
				Error
			}
			@alert.Description() {
				Your session has expired. Please log in again.
			}
		}
	</div>
}

```

## API Reference

Required parameter

Hover for description

### Alert

Main alert container component for displaying status messages.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the alert element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the alert. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the alert element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Variant<br>```<br>Visual style variant. Options: 'default', 'destructive'. | ```text-muted-foreground<br>Variant<br>``` | ```text-muted-foreground<br>default<br>``` |

### Title

Alert title component for the main heading.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the title element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the title. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the title element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### Description

Alert description component for detailed content.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the description element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the description. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the description element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |