---
url: "https://templui.io/docs/components/carousel"
title: "Carousel - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Carousel

Interactive slideshow for cycling through a series of content.

[Source](https://github.com/templui/templui/tree/main/internal/components/carousel) Tailwind Javascript

PreviewCode

## Slide 1

This is the first slide

## Slide 2

This is the second slide

## Slide 3

This is the third slide

```
package showcase

import "github.com/templui/templui/internal/components/carousel"
import "github.com/templui/templui/internal/components/card"

templ CarouselDefault() {
	@carousel.Carousel(carousel.Props{
		Class: "rounded-md",
	}) {
		@carousel.Content() {
			@carousel.Item() {
				@CarouselSlide("Slide 1", "This is the first slide")
			}
			@carousel.Item() {
				@CarouselSlide("Slide 2", "This is the second slide")
			}
			@carousel.Item() {
				@CarouselSlide("Slide 3", "This is the third slide")
			}
		}
		@carousel.Previous()
		@carousel.Next()
		@carousel.Indicators(carousel.IndicatorsProps{
			Count: 3,
		})
	}
}

templ CarouselSlide(title, description string) {
	@card.Card() {
		@card.Content() {
			<div class={ "w-full h-96 flex items-center justify-center" }>
				<div class="text-center">
					<h2 class="text-3xl font-bold mb-2">{ title }</h2>
					<p class="text-xl">{ description }</p>
				</div>
			</div>
		}
	}
}

```

## Installation

1. Install the component





```
templui add carousel
```

2. Add the JavaScript to your layout





```
@carousel.Script()

```





Call this template in your base layout file (e.g., in the <head> section).


## API Reference

Required parameter

Hover for description

### Carousel

Main carousel container component for interactive slideshows.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the carousel element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the carousel. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the carousel element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Autoplay<br>```<br>Whether the carousel should automatically advance slides. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Interval<br>```<br>Time in milliseconds between automatic slide transitions. | ```text-muted-foreground<br>int<br>``` | ```text-muted-foreground<br>5000<br>``` |
| ```<br>Loop<br>```<br>Whether the carousel should loop back to the first slide after the last. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |

### Content

Container for carousel slides with smooth transitions.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the content element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the content. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the content element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### Item

Individual carousel slide container.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the item element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the item. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the item element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### Previous

Navigation button to go to the previous slide.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the previous button element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the previous button. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the previous button element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### Next

Navigation button to go to the next slide.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the next button element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the next button. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the next button element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### Indicators

Dot indicators showing current slide position and allowing direct navigation.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the indicators element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the indicators. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the indicators element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Count<br>```<br>Number of indicator dots to display (should match number of slides). | ```text-muted-foreground<br>int<br>``` | - |