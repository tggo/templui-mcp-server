---
url: "https://templui.io/docs/components/rating"
title: "Rating - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Rating

Interactive rating component for capturing user feedback and displaying scores.

[Source](https://github.com/templui/templui/tree/main/internal/components/rating) Tailwind Javascript

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/rating"

templ RatingDefault() {
	@rating.Rating(rating.Props{
		Value:     3.5,
		ReadOnly:  false,
		Precision: 0.5,
	}) {
		@rating.Group() {
			for i := 1; i <= 5; i++ {
				@rating.Item(rating.ItemProps{
					Value: i,
					Style: rating.StyleStar,
				})
			}
		}
	}
}

```

## Installation

1. Install the component





```
templui add rating
```

2. Add the JavaScript to your layout





```
@rating.Script()

```





Call this template in your base layout file (e.g., in the <head> section).


## Examples

With Label

PreviewCode

Fruit

```
package showcase

import (
	"github.com/templui/templui/internal/components/label"
	"github.com/templui/templui/internal/components/rating"
)

templ RatingWithLabel() {
	<div class="items-center">
		<div class="flex flex-col gap-2">
			@label.Label(label.Props{
				For: "rating-with-label",
			}) {
				Fruit
			}
			@rating.Rating(rating.Props{
				Value: 2,
			}) {
				@rating.Group() {
					for i := 1; i <= 5; i++ {
						@rating.Item(rating.ItemProps{
							Value: i,
							Style: rating.StyleStar,
						})
					}
				}
			}
		</div>
	</div>
}

```

Styles

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/rating"

templ RatingStyles() {
	<div class="flex flex-col gap-4">
		@rating.Rating(rating.Props{
			Value: 2,
		}) {
			@rating.Group() {
				for i := 1; i <= 5; i++ {
					@rating.Item(rating.ItemProps{
						Value: i,
						Style: rating.StyleStar,
					})
				}
			}
		}
		@rating.Rating(rating.Props{
			Value: 3,
		}) {
			@rating.Group() {
				for i := 1; i <= 5; i++ {
					@rating.Item(rating.ItemProps{
						Value: i,
						Style: rating.StyleHeart,
					})
				}
			}
		}
		@rating.Rating(rating.Props{
			Value: 4,
		}) {
			@rating.Group() {
				for i := 1; i <= 5; i++ {
					@rating.Item(rating.ItemProps{
						Value: i,
						Style: rating.StyleEmoji,
					})
				}
			}
		}
	</div>
}

```

Precision (Read-Only)

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/rating"

templ RatingPrecision() {
	@rating.Rating(rating.Props{
		Value:     1.3,
		ReadOnly:  true,
		Precision: 0.5,
	}) {
		@rating.Group() {
			for i := 1; i <= 5; i++ {
				@rating.Item(rating.ItemProps{
					Value: i,
					Style: rating.StyleStar,
				})
			}
		}
	}
}

```

Max Values

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/rating"

templ RatingMaxValues() {
	@rating.Rating(rating.Props{
		Value: 7,
	}) {
		@rating.Group() {
			for i := 1; i <= 10; i++ {
				@rating.Item(rating.ItemProps{
					Value: i,
					Style: rating.StyleStar,
					Class: "scale-75", // Smaller stars for better display
				})
			}
		}
	}
}

```

Form

PreviewCode

Product Quality

Rate the quality of the product you received.

Please rate the product quality.

```
package showcase

import (
	"github.com/templui/templui/internal/components/form"
	"github.com/templui/templui/internal/components/rating"
)

templ RatingForm() {
	<form class="max-w-sm mx-auto">
		@form.Item() {
			@form.Label(form.LabelProps{
				For: "product_quality",
			}) {
				Product Quality
			}
			@rating.Rating(rating.Props{
				Value:     3,
				ReadOnly:  false,
				Precision: 1.0,
				Name:      "product_quality",
			}) {
				@rating.Group() {
					for i := 1; i <= 5; i++ {
						@rating.Item(rating.ItemProps{
							Value: i,
							Style: rating.StyleStar,
						})
					}
				}
			}
			@form.Description() {
				Rate the quality of the product you received.
			}
			@form.Message(form.MessageProps{
				Variant: form.MessageVariantError,
			}) {
				Please rate the product quality.
			}
		}
	</form>
}

```

## API Reference

Required parameter

Hover for description

### Rating

Main rating component container.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the rating component | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the rating container | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the rating container | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |
| ```<br>Value<br>```<br>Current rating value | ```text-muted-foreground<br>float64<br>``` | ```text-muted-foreground<br>0<br>``` |
| ```<br>ReadOnly<br>```<br>Whether the rating is read-only | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Precision<br>```<br>Precision for rating values (e.g., 0.5 for half-star ratings) | ```text-muted-foreground<br>float64<br>``` | ```text-muted-foreground<br>1.0<br>``` |
| ```<br>Name<br>```<br>Name attribute for the hidden input field | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>OnlyInteger<br>```<br>Whether to only allow integer rating values | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |

### Rating.Group

Container for grouping rating items.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the group element | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the group | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the group | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |

### Rating.Item

Individual rating item (star, heart, emoji).

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the item element | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the item | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the item | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |
| ```<br>Value<br>```<br>Numeric value for this rating item | ```text-muted-foreground<br>int<br>``` | ```text-muted-foreground<br>0<br>``` |
| ```<br>Style<br>```<br>Visual style for the rating item (star, heart, emoji) | ```text-muted-foreground<br>Style<br>``` | ```text-muted-foreground<br>star<br>``` |