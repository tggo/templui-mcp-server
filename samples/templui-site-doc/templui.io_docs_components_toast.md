---
url: "https://templui.io/docs/components/toast"
title: "Toast - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Toast

Flexible toast component for notifications and feedback.

[Source](https://github.com/templui/templui/tree/main/internal/components/toast) Tailwind Javascript

PreviewCode

Show Toast

```
package showcase

import "github.com/templui/templui/internal/components/button"

templ ToastDefault() {
	<div>
		<form
			class="flex flex-col gap-2"
			hx-post="/docs/toast/demo"
			hx-trigger="submit"
			hx-target="#toast-container"
			hx-vals='{
				"title": "You have a new notification",
				"description": "Test Notification",
				"dismissible": "on"
			}'
		>
			@button.Button(button.Props{
				Type:    button.TypeSubmit,
				Variant: button.VariantOutline,
			}) {
				Show Toast
			}
		</form>
		<div id="toast-container"></div>
	</div>
}

```

## Installation

1. Install the component





```
templui add toast
```

2. Add the JavaScript to your layout





```
@toast.Script()

```





Call this template in your base layout file (e.g., in the <head> section).


With HTMXFull Page Form

```
// Template
templ UserForm() {
	<form hx-post="/save" hx-target="#toast">
	   <input name="email" />
	</form>
	<div id="toast"></div>
}
// Handler
func Save(w http.ResponseWriter, r *http.Request) {
	if err != nil {
		components.Toast(components.ToastProps{
			Text: err.Error(),
			Variant: components.ToastVariantError,
		}).Render(r.Context(), w)
	}
}
```

```
// Template
templ UserForm(error string) {
    if error != "" {
        @components.Toast(components.ToastProps{
            Text: error,
            Variant:    components.ToastVariantError,
        })
    }
    <form method="POST">
        <input name="email"/>
    </form>
}
// Handler
func Save(w http.ResponseWriter, r *http.Request) {
    if err != nil {
        UserForm(err.Error()).Render(r.Context(), w)
    }
}
```

## Examples

Playground

PreviewCode

Message

Description

Type

Default

Default

Success

Error

Warning

Info

Position

Bottom Right

Top Right

Top Left

Top Center

Bottom Right

Bottom Left

Bottom Center

Duration (ms)

Dismissible

Dimissible

Show Icon

Show Indicator

Show Toast

```
package showcase

import (
	"github.com/templui/templui/internal/components/button"
	"github.com/templui/templui/internal/components/card"
	"github.com/templui/templui/internal/components/form"
	"github.com/templui/templui/internal/components/input"
	"github.com/templui/templui/internal/components/label"
	"github.com/templui/templui/internal/components/selectbox"
	"github.com/templui/templui/internal/components/toggle"
)

templ ToastPlayground() {
	<div class="w-full max-w-4xl mx-auto p-8">
		<section class="mb-12">
			@card.Card() {
				@card.Content() {
					<form
						class="flex flex-col gap-2"
						hx-post="/docs/toast/demo"
						hx-trigger="submit"
						hx-target="#toast-advanced-container"
					>
						// Message
						@form.Item() {
							@form.Label(form.LabelProps{
								For: "title",
							}) {
								Message
							}
							@input.Input(input.Props{
								Value: "You have a new notification",
								ID:    "title",
								Name:  "title",
							})
						}
						// Description
						@form.Item() {
							@form.Label(form.LabelProps{
								For: "description",
							}) {
								Description
							}
							@input.Input(input.Props{
								Value: "Test Notification",
								ID:    "description",
								Name:  "description",
							})
						}
						// Type
						@form.Item() {
							@form.Label(form.LabelProps{
								For: "type",
							}) {
								Type
							}
							@selectbox.SelectBox() {
								@selectbox.Trigger(selectbox.TriggerProps{
									Name: "type",
									ID:   "type",
								}) {
									@selectbox.Value(selectbox.ValueProps{
										Placeholder: "Default",
									})
								}
								@selectbox.Content() {
									@selectbox.Group() {
										@selectbox.Item(selectbox.ItemProps{
											Value:    "default",
											Selected: true,
										}) {
											Default
										}
										@selectbox.Item(selectbox.ItemProps{
											Value: "success",
										}) {
											Success
										}
										@selectbox.Item(selectbox.ItemProps{
											Value: "error",
										}) {
											Error
										}
										@selectbox.Item(selectbox.ItemProps{
											Value: "warning",
										}) {
											Warning
										}
										@selectbox.Item(selectbox.ItemProps{
											Value: "info",
										}) {
											Info
										}
									}
								}
							}
						}
						// Position
						@form.Item() {
							@form.Label(form.LabelProps{
								For: "position",
							}) {
								Position
							}
							@selectbox.SelectBox() {
								@selectbox.Trigger(selectbox.TriggerProps{
									Name: "position",
									ID:   "position",
								}) {
									@selectbox.Value(selectbox.ValueProps{
										Placeholder: "Bottom Right",
									})
								}
								@selectbox.Content() {
									@selectbox.Group() {
										@selectbox.Item(selectbox.ItemProps{
											Value: "top-right",
										}) {
											Top Right
										}
										@selectbox.Item(selectbox.ItemProps{
											Value: "top-left",
										}) {
											Top Left
										}
										@selectbox.Item(selectbox.ItemProps{
											Value: "top-center",
										}) {
											Top Center
										}
										@selectbox.Item(selectbox.ItemProps{
											Value:    "bottom-right",
											Selected: true,
										}) {
											Bottom Right
										}
										@selectbox.Item(selectbox.ItemProps{
											Value: "bottom-left",
										}) {
											Bottom Left
										}
										@selectbox.Item(selectbox.ItemProps{
											Value: "bottom-center",
										}) {
											Bottom Center
										}
									}
								}
							}
						}
						// Duration
						@form.Item() {
							@form.Label(form.LabelProps{
								For: "duration",
							}) {
								Duration (ms)
							}
							@input.Input(input.Props{
								Type:  input.TypeNumber,
								Value: "3000",
								ID:    "duration",
								Name:  "duration",
							})
						}
						// Options
						@form.Item() {
							@form.Label(form.LabelProps{
								For: "dismissible",
							}) {
								Dismissible
							}
							@form.ItemFlex() {
								@toggle.Toggle(toggle.Props{
									Name:    "dismissible",
									Checked: true,
									ID:      "dismissible",
								})
								@label.Label(label.Props{
									For: "dismissible",
								}) {
									Dimissible
								}
							}
							@form.ItemFlex() {
								@toggle.Toggle(toggle.Props{
									Name:    "icon",
									Checked: true,
								})
								@label.Label(label.Props{
									For: "icon",
								}) {
									Show Icon
								}
							}
							@form.ItemFlex() {
								@toggle.Toggle(toggle.Props{
									ID:      "indicator",
									Name:    "indicator",
									Checked: true,
								})
								@label.Label(label.Props{
									For: "indicator",
								}) {
									Show Indicator
								}
							}
						}
						// Submit
						@button.Button(button.Props{
							Variant: button.VariantOutline,
							Type:    button.TypeSubmit,
							Class:   "w-full",
						}) {
							Show Toast
						}
					</form>
				}
			}
		</section>
		<div id="toast-advanced-container"></div>
	</div>
}

```

## API Reference

Required parameter

Hover for description

### Toast

Notification component that appears temporarily to provide feedback.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the toast element. Auto-generated if not provided. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the toast. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the toast element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Title<br>```<br>Title text displayed in the toast header. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Description<br>```<br>Description text displayed below the title. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Variant<br>```<br>Visual style variant. Options: 'default', 'success', 'error', 'warning', 'info'. | ```text-muted-foreground<br>Variant<br>``` | ```text-muted-foreground<br>default<br>``` |
| ```<br>Position<br>```<br>Screen position for the toast. Options: 'top-right', 'top-left', 'top-center', 'bottom-right', 'bottom-left', 'bottom-center'. | ```text-muted-foreground<br>Position<br>``` | ```text-muted-foreground<br>bottom-right<br>``` |
| ```<br>Duration<br>```<br>Duration in milliseconds before auto-dismissing the toast. | ```text-muted-foreground<br>int<br>``` | ```text-muted-foreground<br>3000<br>``` |
| ```<br>Dismissible<br>```<br>Whether to show a close button for manual dismissal. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>ShowIndicator<br>```<br>Whether to show a progress indicator bar at the top. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Icon<br>```<br>Whether to show an icon based on the variant type. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |