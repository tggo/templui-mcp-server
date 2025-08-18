---
url: "https://templui.io/docs/components/card"
title: "Card - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Card

Container for organizing related content and

[Source](https://github.com/templui/templui/tree/main/internal/components/card) Tailwind

PreviewCode

### Create Project

Deploy your new project in one-click.

Name

Service

Select

PostgreSQL

MySQL

SQLite

CancelDeploy

```
package showcase

import (
	"github.com/templui/templui/internal/components/button"
	"github.com/templui/templui/internal/components/card"
	"github.com/templui/templui/internal/components/input"
	"github.com/templui/templui/internal/components/label"
	"github.com/templui/templui/internal/components/selectbox"
)

templ CardDefault() {
	<div class="w-full max-w-sm">
		@card.Card() {
			@card.Header() {
				@card.Title() {
					Create Project
				}
				@card.Description() {
					Deploy your new project in one-click.
				}
			}
			@card.Content() {
				<div class="flex flex-col gap-4">
					<div class="w-full max-w-sm grid gap-2">
						@label.Label(label.Props{
							For: "name",
						}) {
							Name
						}
						@input.Input(input.Props{
							ID:          "name",
							Placeholder: "Enter project name",
						})
					</div>
					<div class="w-full max-w-sm grid gap-2">
						@label.Label(label.Props{
							For: "service",
						}) {
							Service
						}
						@selectbox.SelectBox() {
							@selectbox.Trigger(selectbox.TriggerProps{
								ID: "service",
							}) {
								@selectbox.Value(selectbox.ValueProps{
									Placeholder: "Select",
								})
							}
							@selectbox.Content() {
								@selectbox.Group() {
									@selectbox.Item(selectbox.ItemProps{
										Value: "postgres",
									}) {
										PostgreSQL
									}
									@selectbox.Item(selectbox.ItemProps{
										Value: "mysql",
									}) {
										MySQL
									}
									@selectbox.Item(selectbox.ItemProps{
										Value: "sqlite",
									}) {
										SQLite
									}
								}
							}
						}
					</div>
				</div>
			}
			@card.Footer(card.FooterProps{
				Class: "flex justify-between",
			}) {
				@button.Button(button.Props{
					Variant: button.VariantSecondary,
				}) {
					Cancel
				}
				@button.Button() {
					Deploy
				}
			}
		}
	</div>
}

```

## Installation

```
templui add card
```

## Examples

With Image

PreviewCode

![Card image](https://templui.io/assets/img/card_placeholder.jpeg)

### Featured Card

With top image

This card shows top image usage with lazy loading for better performance.

Learn more

```
package showcase

import (
	"github.com/templui/templui/internal/components/aspectratio"
	"github.com/templui/templui/internal/components/button"
	"github.com/templui/templui/internal/components/card"
)

templ CardWithImage() {
	<div class="w-full max-w-sm">
		@card.Card() {
			<div class="overflow-hidden w-full rounded-t-lg">
				@aspectratio.AspectRatio(aspectratio.Props{
					ID:    "top-media-aspect",
					Ratio: aspectratio.RatioVideo,
					Class: "h-full w-full",
				}) {
					<img
						src="/assets/img/card_placeholder.jpeg"
						alt="Card image"
						loading="lazy"
						class="h-full w-full object-cover"
					/>
				}
			</div>
			@card.Header() {
				@card.Title() {
					Featured Card
				}
				@card.Description() {
					With top image
				}
			}
			@card.Content() {
				<p>This card shows top image usage with lazy loading for better performance.</p>
			}
			@card.Footer() {
				@button.Button() {
					Learn more
				}
			}
		}
	</div>
}

```

## API Reference

Required parameter

Hover for description

### Card

Main card container component for organizing related content.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the card element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the card. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the card element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### Title

Card title component for the main heading.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the title element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the title. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the title element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### Description

Card description component for additional context.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the description element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the description. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the description element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### Content

Card content area for the main body.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the content element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the content. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the content element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |