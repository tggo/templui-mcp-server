---
url: "https://templui.io/docs/components/slider"
title: "Slider - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Slider

Control for selecting a numeric value within a range.

[Source](https://github.com/templui/templui/tree/main/internal/components/slider) Tailwind Javascript

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/slider"

templ SliderDefault() {
	<div class="w-full max-w-sm">
		@slider.Slider() {
			@slider.Input()
		}
	</div>
}

```

## Installation

1. Install the component





```
templui add slider
```

2. Add the JavaScript to your layout





```
@slider.Script()

```





Call this template in your base layout file (e.g., in the <head> section).


## Examples

Value

PreviewCode

75

```
package showcase

import "github.com/templui/templui/internal/components/slider"

templ SliderValue() {
	<div class="w-full max-w-sm">
		@slider.Slider() {
			<div class="flex justify-end mb-1">
				@slider.Value(slider.ValueProps{
					For: "slider-value",
				})
			</div>
			@slider.Input(slider.InputProps{
				ID:    "slider-value",
				Value: 75,
				Min:   0,
				Max:   100,
				Step:  1,
			})
		}
	</div>
}

```

Steps

PreviewCode

Zoom Level

100

```
package showcase

import (
	"github.com/templui/templui/internal/components/label"
	"github.com/templui/templui/internal/components/slider"
)

templ SliderSteps() {
	<div class="w-full max-w-sm">
		@slider.Slider(slider.Props{}) {
			<div class="flex justify-between items-center mb-1">
				@label.Label() {
					Zoom Level
				}
				<div class="flex items-center">
					@slider.Value(slider.ValueProps{
						For: "slider-steps",
					})
				</div>
			</div>
			@slider.Input(slider.InputProps{
				ID:    "slider-steps",
				Name:  "slider-steps",
				Value: 100,
				Min:   0,
				Max:   200,
				Step:  25,
			})
		}
	</div>
}

```

Disabled

PreviewCode

Volume20

```
package showcase

import (
	"github.com/templui/templui/internal/components/label"
	"github.com/templui/templui/internal/components/slider"
)

templ SliderDisabled() {
	<div class="w-full max-w-sm">
		@slider.Slider() {
			<div class="flex justify-between items-center mb-1">
				@label.Label() {
					Volume
				}
				@slider.Value(slider.ValueProps{
					For: "slider-disabled",
				})
			</div>
			@slider.Input(slider.InputProps{
				ID:       "slider-disabled",
				Value:    20,
				Min:      -20,
				Max:      200,
				Step:     20,
				Disabled: true,
			})
		}
	</div>
}

```

External Value

PreviewCode

External value (linked to the slider):

50%

```
package showcase

import "github.com/templui/templui/internal/components/slider"

templ SliderExternalValue() {
	<div class="space-y-6 w-full max-w-sm">
		<div>
			@slider.Slider() {
				@slider.Input(slider.InputProps{
					ID:    "slider-external-value",
					Value: 50,
					Min:   0,
					Max:   100,
					Step:  1,
				})
			}
		</div>
		<div class="bg-muted p-4 rounded-md">
			<p class="text-sm text-muted-foreground mb-2">External value (linked to the slider):</p>
			<div class="text-3xl font-bold flex gap-1">
				@slider.Value(slider.ValueProps{
					For:   "slider-external-value",
					Class: "text-3xl font-bold text-primary",
				})
				%
			</div>
		</div>
	</div>
}

```

## API Reference

Required parameter

Hover for description

### Slider

Main slider container component.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the slider component | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the slider container | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the slider container | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |

### Input

The actual range input element.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the input element | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>randomID<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the input | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the input | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |
| ```<br>Name<br>```<br>Name attribute for the input field | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Min<br>```<br>Minimum value for the slider | ```text-muted-foreground<br>int<br>``` | ```text-muted-foreground<br>0<br>``` |
| ```<br>Max<br>```<br>Maximum value for the slider | ```text-muted-foreground<br>int<br>``` | ```text-muted-foreground<br>0<br>``` |
| ```<br>Step<br>```<br>Step increment for slider values | ```text-muted-foreground<br>int<br>``` | ```text-muted-foreground<br>0<br>``` |
| ```<br>Value<br>```<br>Current value of the slider | ```text-muted-foreground<br>int<br>``` | ```text-muted-foreground<br>0<br>``` |
| ```<br>Disabled<br>```<br>Whether the slider is disabled | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |

### Value

Display element for the current slider value.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the value display element | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the value display | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the value display | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |
| ```<br>For<br>```<br>ID of the slider input this value display is connected to | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |