---
url: "https://templui.io/docs/components/checkbox-card"
title: "Checkbox Card - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Checkbox Card

Selectable card component that combines a checkbox with rich content for option selection.

[Source](https://github.com/templui/templui/tree/main/internal/components/checkboxcard) Tailwind

PreviewCode

### Analytics

Real-time data analytics and reporting tools

Price$5/month

### Cloud Storage

Secure file storage with 100GB capacity

Price$3/month

### API Access

Full access to our developer API endpoints

Price$8/month

```
package showcase

import "github.com/templui/templui/internal/components/icon"
import "github.com/templui/templui/internal/components/checkboxcard"

templ CheckboxCardDefault() {
	<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
		@checkboxcard.CheckboxCard(checkboxcard.Props{
			ID: "feature-analytics",
		},
		) {
			@checkboxcard.Header() {
				<div class="flex items-center gap-2">
					<div class="text-primary">
						@icon.ChartBar(icon.Props{Size: 20})
					</div>
					<h3>Analytics</h3>
				</div>
			}
			@checkboxcard.Description() {
				Real-time data analytics and reporting tools
			}
			@checkboxcard.Footer() {
				@radioCardPriceFooter("$5/month")
			}
		}
		@checkboxcard.CheckboxCard(checkboxcard.Props{
			ID: "feature-storage",
		},
		) {
			@checkboxcard.Header() {
				<div class="flex items-center gap-2">
					<div class="text-primary">
						@icon.Cloud(icon.Props{Size: 20})
					</div>
					<h3>Cloud Storage</h3>
				</div>
			}
			@checkboxcard.Description() {
				Secure file storage with 100GB capacity
			}
			@checkboxcard.Footer() {
				@radioCardPriceFooter("$3/month")
			}
		}
		@checkboxcard.CheckboxCard(checkboxcard.Props{
			ID:       "feature-api",
			Disabled: true,
		}) {
			@checkboxcard.Header() {
				<div class="flex items-center gap-2">
					<div class="text-primary">
						@icon.Code(icon.Props{Size: 20})
					</div>
					<h3>API Access</h3>
				</div>
			}
			@checkboxcard.Description() {
				Full access to our developer API endpoints
			}
			@checkboxcard.Footer() {
				@radioCardPriceFooter("$8/month")
			}
		}
	</div>
}

```

## Installation

```
templui add checkboxcard
```

## API Reference

Required parameter

Hover for description

### CheckboxCard

Main checkbox card component that combines a checkbox with rich content.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the checkbox card element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the checkbox card. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the checkbox card element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Checked<br>```<br>Whether the checkbox is checked. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Disabled<br>```<br>Whether the checkbox is disabled and non-interactive. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Required<br>```<br>Whether the checkbox is required for form submission. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Name<br>```<br>Name attribute for the checkbox input element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Value<br>```<br>Value attribute for the checkbox input element. | ```text-muted-foreground<br>string<br>``` | - |

### Description

Description section for additional text content in the checkbox card.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the description element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the description. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the description element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |