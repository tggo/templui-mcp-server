---
url: "https://templui.io/docs/components/radio-card"
title: "Radio Card - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Radio Card

Selectable card component that uses radio buttons for single-option selection.

[Source](https://github.com/templui/templui/tree/main/internal/components/radiocard) Tailwind

PreviewCode

### Basic Plan

Essential features for individuals and small teams

Price$5.99

### Pro Plan

Enhanced capabilities for growing businesses.

Price$14.99

### Enterprise Plan

Advanced features for large organizations

Price$29.99

```
package showcase

import (
	"github.com/templui/templui/internal/components/icon"
	"github.com/templui/templui/internal/components/radiocard"
)

templ RadioCardDefault() {
	<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
		@radiocard.RadioCard(radiocard.Props{
			ID:    "comp-plan-basic",
			Name:  "comp-plan",
			Value: "basic",
		}) {
			@radiocard.Header() {
				<div class="flex items-center gap-2">
					@icon.Package(icon.Props{Size: 20})
					<h3>Basic Plan</h3>
				</div>
			}
			@radiocard.Description() {
				Essential features for individuals and small teams
			}
			@radiocard.Footer() {
				@radioCardPriceFooter("$5.99")
			}
		}
		@radiocard.RadioCard(radiocard.Props{
			ID:    "comp-plan-pro",
			Name:  "comp-plan",
			Value: "pro",
		}) {
			@radiocard.Header() {
				<div class="flex items-center gap-2">
					@icon.Star(icon.Props{Size: 20})
					<h3>Pro Plan</h3>
				</div>
			}
			@radiocard.Description() {
				Enhanced capabilities for growing businesses.
			}
			@radiocard.Footer() {
				@radioCardPriceFooter("$14.99")
			}
		}
		@radiocard.RadioCard(radiocard.Props{
			ID:       "comp-plan-enterprise",
			Name:     "comp-plan",
			Value:    "enterprise",
			Disabled: true,
		}) {
			@radiocard.Header() {
				<div class="flex items-center gap-2">
					@icon.Building(icon.Props{Size: 20})
					<h3>Enterprise Plan</h3>
				</div>
			}
			@radiocard.Description() {
				Advanced features for large organizations
			}
			@radiocard.Footer() {
				@radioCardPriceFooter("$29.99")
			}
		}
	</div>
}

templ radioCardPriceFooter(price string) {
	<div class="flex justify-between items-center border-t border-border pt-2 mt-2 text-sm">
		<span class="text-muted-foreground">Price</span>
		<span class="font-medium">{ price }</span>
	</div>
}

```

## Installation

```
templui add radiocard
```

## API Reference

Required parameter

Hover for description

### RadioCard

Main radio card component that combines radio button with rich content.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the radio card element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the radio card. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the radio card element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Name<br>```<br>Name attribute for grouping radio buttons together. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Value<br>```<br>Value attribute for the radio input element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Checked<br>```<br>Whether the radio card is checked. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Disabled<br>```<br>Whether the radio card is disabled and non-interactive. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Required<br>```<br>Whether the radio card is required for form submission. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |

### Description

Description section for additional text content in the radio card.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the description element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the description. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the description element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |