---
url: "https://templui.io/docs/components/accordion"
title: "Accordion - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Accordion

Vertically stacked interactive sections to organize content.

[Source](https://github.com/templui/templui/tree/main/internal/components/accordion) Tailwind

PreviewCode

Is it accessible?

Yes. It adheres to the WAI-ARIA design pattern.

Is it styled?

Yes. It comes with default styles that matches the other components aesthetic.

Is it animated?

Yes. It is animated by default, but you can disable it if you prefer.

```
package showcase

import "github.com/templui/templui/internal/components/accordion"

templ AccordionDefault() {
	<div class="w-full max-w-sm">
		@accordion.Accordion(accordion.Props{
			Class: "w-full",
		}) {
			@accordion.Item() {
				@accordion.Trigger() {
					Is it accessible?
				}
				@accordion.Content() {
					Yes. It adheres to the WAI-ARIA design pattern.
				}
			}
			@accordion.Item() {
				@accordion.Trigger() {
					Is it styled?
				}
				@accordion.Content() {
					Yes. It comes with default styles that matches the other components aesthetic.
				}
			}
			@accordion.Item() {
				@accordion.Trigger() {
					Is it animated?
				}
				@accordion.Content() {
					Yes. It is animated by default, but you can disable it if you prefer.
				}
			}
		}
	</div>
}

```

## Installation

```
templui add accordion
```

## API Reference

Required parameter

Hover for description

### Accordion

The main accordion container component.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the accordion element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the accordion. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the accordion element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### Item

Individual accordion item container.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the item element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the item. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the item element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### Trigger

Clickable trigger element that toggles the accordion item.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the trigger element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the trigger. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the trigger element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### Content

Collapsible content area of the accordion item.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the content element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the content. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the content element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |