---
url: "https://templui.io/docs/components/select-box"
title: "Select Box - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Select Box

Dropdown control for choosing from predefined options.

[Source](https://github.com/templui/templui/tree/main/internal/components/selectbox) Tailwind Javascript

PreviewCode

Select a fruit

Fruits

Apple

Banana

Blueberry

Grapes

Pineapple

```
package showcase

import "github.com/templui/templui/internal/components/selectbox"

templ SelectBoxDefault() {
	<div class="w-full max-w-sm">
		@selectbox.SelectBox() {
			@selectbox.Trigger() {
				@selectbox.Value(selectbox.ValueProps{
					Placeholder: "Select a fruit",
				})
			}
			@selectbox.Content() {
				@selectbox.Group() {
					@selectbox.Label() {
						Fruits
					}
					@selectbox.Item(selectbox.ItemProps{
						Value: "apple",
					}) {
						Apple
					}
					@selectbox.Item(selectbox.ItemProps{
						Value: "banana",
					}) {
						Banana
					}
					@selectbox.Item(selectbox.ItemProps{
						Value: "blueberry",
					}) {
						Blueberry
					}
					@selectbox.Item(selectbox.ItemProps{
						Value: "grapes",
					}) {
						Grapes
					}
					@selectbox.Item(selectbox.ItemProps{
						Value: "pineapple",
					}) {
						Pineapple
					}
				}
			}
		}
	</div>
}

```

## Installation

1. Install the component





```
templui add selectbox
```

2. Add the JavaScript to your layout





```
@selectbox.Script()
@popover.Script()

```





Call this template in your base layout file (e.g., in the <head> section).


## Examples

With Label

PreviewCode

Fruit

Select a fruit

Fruits

Apple

Banana

Orange

```
package showcase

import (
	"github.com/templui/templui/internal/components/label"
	"github.com/templui/templui/internal/components/selectbox"
)

templ SelectBoxWithLabel() {
	<div class="space-y-2 w-full max-w-sm">
		@label.Label(label.Props{
			For: "select-with-label",
		}) {
			Fruit
		}
		@selectbox.SelectBox() {
			@selectbox.Trigger(selectbox.TriggerProps{
				ID: "select-with-label",
			}) {
				@selectbox.Value(selectbox.ValueProps{
					Placeholder: "Select a fruit",
				})
			}
			@selectbox.Content() {
				@selectbox.Label() {
					Fruits
				}
				@selectbox.Item(selectbox.ItemProps{
					Value: "apple",
				}) {
					Apple
				}
				@selectbox.Item(selectbox.ItemProps{
					Value: "banana",
				}) {
					Banana
				}
				@selectbox.Item(selectbox.ItemProps{
					Value: "orange",
				}) {
					Orange
				}
			}
		}
	</div>
}

```

Multiple

PreviewCode

Select a fruit

Fruits

Apple

Banana

Blueberry

Grapes

Pineapple

```
package showcase

import "github.com/templui/templui/internal/components/selectbox"

templ SelectBoxMultipleSelect() {
	<div class="w-full max-w-sm">
		@selectbox.SelectBox() {
			@selectbox.Trigger(selectbox.TriggerProps{Multiple: true}) {
				@selectbox.Value(selectbox.ValueProps{
					Placeholder: "Select a fruit",
				})
			}
			@selectbox.Content() {
				@selectbox.Group() {
					@selectbox.Label() {
						Fruits
					}
					@selectbox.Item(selectbox.ItemProps{
						Value: "apple",
					}) {
						Apple
					}
					@selectbox.Item(selectbox.ItemProps{
						Value: "banana",
					}) {
						Banana
					}
					@selectbox.Item(selectbox.ItemProps{
						Value: "blueberry",
					}) {
						Blueberry
					}
					@selectbox.Item(selectbox.ItemProps{
						Value: "grapes",
					}) {
						Grapes
					}
					@selectbox.Item(selectbox.ItemProps{
						Value: "pineapple",
					}) {
						Pineapple
					}
				}
			}
		}
	</div>
}

```

Multiple Pills

PreviewCode

Select a fruit

Fruits

Apple

Banana

Blueberry

Grapes

Pineapple

```
package showcase

import "github.com/templui/templui/internal/components/selectbox"

templ SelectBoxMultipleSelectPills() {
	<div class="w-full max-w-sm">
		@selectbox.SelectBox() {
			@selectbox.Trigger(selectbox.TriggerProps{ShowPills: true,}) {
				@selectbox.Value(selectbox.ValueProps{
					Placeholder: "Select a fruit",
				})
			}
			@selectbox.Content() {
				@selectbox.Group() {
					@selectbox.Label() {
						Fruits
					}
					@selectbox.Item(selectbox.ItemProps{
						Value: "apple",
					}) {
						Apple
					}
					@selectbox.Item(selectbox.ItemProps{
						Value: "banana",
					}) {
						Banana
					}
					@selectbox.Item(selectbox.ItemProps{
						Value: "blueberry",
					}) {
						Blueberry
					}
					@selectbox.Item(selectbox.ItemProps{
						Value: "grapes",
					}) {
						Grapes
					}
					@selectbox.Item(selectbox.ItemProps{
						Value: "pineapple",
					}) {
						Pineapple
					}
				}
			}
		}
	</div>
}

```

No Search

PreviewCode

Select a fruit

Fruits

Apple

Banana

Blueberry

Grapes

Pineapple

```
package showcase

import "github.com/templui/templui/internal/components/selectbox"

templ SelectBoxNoSearch() {
	<div class="w-full max-w-sm">
		@selectbox.SelectBox() {
			@selectbox.Trigger() {
				@selectbox.Value(selectbox.ValueProps{
					Placeholder: "Select a fruit",
				})
			}
			@selectbox.Content(selectbox.ContentProps{NoSearch:true}) {
				@selectbox.Group() {
					@selectbox.Label() {
						Fruits
					}
					@selectbox.Item(selectbox.ItemProps{
						Value: "apple",
					}) {
						Apple
					}
					@selectbox.Item(selectbox.ItemProps{
						Value: "banana",
					}) {
						Banana
					}
					@selectbox.Item(selectbox.ItemProps{
						Value: "blueberry",
					}) {
						Blueberry
					}
					@selectbox.Item(selectbox.ItemProps{
						Value: "grapes",
					}) {
						Grapes
					}
					@selectbox.Item(selectbox.ItemProps{
						Value: "pineapple",
					}) {
						Pineapple
					}
				}
			}
		}
	</div>
}

```

Disabled

PreviewCode

Select a fruit

Fruits

Apple

Banana

```
package showcase

import "github.com/templui/templui/internal/components/selectbox"

templ SelectBoxDisabled() {
	<div class="space-y-2 w-full max-w-sm">
		@selectbox.SelectBox() {
			@selectbox.Trigger(selectbox.TriggerProps{
				Disabled: true,
			}) {
				@selectbox.Value(selectbox.ValueProps{
					Placeholder: "Select a fruit",
				})
			}
			@selectbox.Content() {
				@selectbox.Label() {
					Fruits
				}
				@selectbox.Item(selectbox.ItemProps{
					Value: "apple",
				}) {
					Apple
				}
				@selectbox.Item(selectbox.ItemProps{
					Value: "banana",
				}) {
					Banana
				}
			}
		}
	</div>
}

```

Form

PreviewCode

Fruit

Blueberry

Apple

Banana

Blueberry

Grapes

Pineapple (out of stock)

Select a fruit category.

A fruit selection is required.

```
package showcase

import (
	"github.com/templui/templui/internal/components/form"
	"github.com/templui/templui/internal/components/selectbox"
)

templ SelectBoxForm() {
	<div class="w-full max-w-sm">
		@form.Item() {
			@form.Label(form.LabelProps{
				For: "select-form",
			}) {
				Fruit
			}
			@selectbox.SelectBox() {
				@selectbox.Trigger(selectbox.TriggerProps{
					ID:       "select-form",
					Name:     "fruit",
					Required: true,
					HasError: true,
				}) {
					@selectbox.Value(selectbox.ValueProps{
						Placeholder: "Select a fruit",
					})
				}
				@selectbox.Content() {
					@selectbox.Item(selectbox.ItemProps{
						Value: "apple",
					}) {
						Apple
					}
					@selectbox.Item(selectbox.ItemProps{
						Value: "banana",
					}) {
						Banana
					}
					@selectbox.Item(selectbox.ItemProps{
						Value:    "blueberry",
						Selected: true,
					}) {
						Blueberry
					}
					@selectbox.Item(selectbox.ItemProps{
						Value: "grapes",
					}) {
						Grapes
					}
					@selectbox.Item(selectbox.ItemProps{
						Value:    "pineapple",
						Disabled: true,
					}) {
						Pineapple (out of stock)
					}
				}
			}
			@form.Description() {
				Select a fruit category.
			}
			@form.Message(form.MessageProps{
				Variant: form.MessageVariantError,
			}) {
				A fruit selection is required.
			}
		}
	</div>
}

```

## API Reference

Required parameter

Hover for description

### SelectBox

Root container for the select box component.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the select container. Auto-generated if not provided. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the select container. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the select container. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Multiple<br>```<br>Whether multiple options can be selected. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |

### Trigger

Button that opens the select dropdown when clicked.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the trigger element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the trigger. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the trigger element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Name<br>```<br>Name attribute for the hidden input field used in forms. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Required<br>```<br>Whether the select field is required for form validation. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Disabled<br>```<br>Whether the select is disabled and non-interactive. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>HasError<br>```<br>Whether to display error styling on the select trigger. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Multiple<br>```<br>Whether multiple selections are allowed. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>ShowPills<br>```<br>Whether to show selected items as pills (automatically enables Multiple). | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>SelectedCountText<br>```<br>Text template for showing selected count in multiple mode. | ```text-muted-foreground<br>string<br>``` | - |

### Value

Display area for the selected value(s) or placeholder text.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the value element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the value display. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the value element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Placeholder<br>```<br>Placeholder text shown when no option is selected. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Multiple<br>```<br>Whether this value display supports multiple selections. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |

### Content

Dropdown container that holds the selectable options.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the content element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the dropdown content. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the content element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>NoSearch<br>```<br>Whether to hide the search input in the dropdown. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>SearchPlaceholder<br>```<br>Placeholder text for the search input field. | ```text-muted-foreground<br>string<br>``` | - |

### Group

Container for grouping related select options together.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the group element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the group. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the group element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### Label

Label text for a group of select options.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the label element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the label. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the label element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### Item

Individual selectable option within the dropdown.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the item element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the item. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the item element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Value<br>```<br>The value of this option that will be submitted with forms. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Selected<br>```<br>Whether this option is currently selected. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Disabled<br>```<br>Whether this option is disabled and cannot be selected. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |