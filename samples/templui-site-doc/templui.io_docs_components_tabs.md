---
url: "https://templui.io/docs/components/tabs"
title: "Tabs - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Tabs

Navigation interface that organizes content into sections.

[Source](https://github.com/templui/templui/tree/main/internal/components/tabs) Tailwind Javascript

PreviewCode

AccountPassword

### Account

Make changes to your account here. Click save when you are done.

Save changes

### Password

Change your password here. After saving, you will be logged out.

Save password

```
package showcase

import (
	"github.com/templui/templui/internal/components/button"
	"github.com/templui/templui/internal/components/card"
	"github.com/templui/templui/internal/components/input"
	"github.com/templui/templui/internal/components/tabs"
)

templ TabsDefault() {
	@tabs.Tabs(tabs.Props{
		ID: "account-tabs",
	}) {
		@tabs.List(tabs.ListProps{
			Class: "w-full max-w-xs",
		}) {
			@tabs.Trigger(tabs.TriggerProps{
				Value:    "account",
				IsActive: true,
			}) {
				Account
			}
			@tabs.Trigger(tabs.TriggerProps{
				Value: "password",
			}) {
				Password
			}
		}
		<div class="w-full max-w-xs mt-2">
			@tabs.Content(tabs.ContentProps{
				Value:    "account",
				IsActive: true,
			}) {
				@AccountTab()
			}
			@tabs.Content(tabs.ContentProps{
				Value: "password",
			}) {
				@PasswordTab()
			}
		</div>
	}
}

templ AccountTab() {
	@card.Card() {
		@card.Header() {
			@card.Title() {
				Account
			}
			@card.Description() {
				Make changes to your account here. Click save when you are done.
			}
		}
		@card.Content() {
			<div class="flex flex-col gap-4">
				@input.Input(input.Props{
					Type:        input.TypeText,
					Placeholder: "Name",
					ID:          "name",
					Value:       "John Doe",
				})
				@input.Input(input.Props{
					Type:        input.TypeEmail,
					Placeholder: "Email",
					ID:          "email",
					Value:       "john.doe@example.com",
				})
			</div>
		}
		@card.Footer() {
			@button.Button() {
				Save changes
			}
		}
	}
}

templ PasswordTab() {
	@card.Card() {
		@card.Header() {
			@card.Title() {
				Password
			}
			@card.Description() {
				Change your password here. After saving, you will be logged out.
			}
		}
		@card.Content() {
			<div class="flex flex-col gap-4">
				@input.Input(input.Props{
					Type:        input.TypePassword,
					Placeholder: "Current Password",
					ID:          "current_password",
				})
				@input.Input(input.Props{
					Type:        input.TypePassword,
					Placeholder: "New Password",
					ID:          "new_password",
				})
			</div>
		}
		@card.Footer() {
			@button.Button() {
				Save password
			}
		}
	}
}

```

## Installation

1. Install the component





```
templui add tabs
```

2. Add the JavaScript to your layout





```
@tabs.Script()

```





Call this template in your base layout file (e.g., in the <head> section).


## API Reference

Required parameter

Hover for description

### Tabs

Root container for the tabs component.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the tabs container. Auto-generated if not provided. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the tabs container. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the tabs container. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### List

Container for tab triggers with styled background and indicator.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the tab list element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the tab list. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the tab list element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### Trigger

Individual tab button that activates corresponding content.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the tab trigger element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the tab trigger. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the tab trigger element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Value<br>```<br>Unique value that identifies this tab and its corresponding content. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>IsActive<br>```<br>Whether this tab is currently active/selected. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>TabsID<br>```<br>ID of the parent tabs container. Auto-detected if not provided. | ```text-muted-foreground<br>string<br>``` | - |

### Content

Container for tab content that shows when corresponding trigger is active.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the tab content element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the tab content. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the tab content element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Value<br>```<br>Value that matches the corresponding tab trigger. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>IsActive<br>```<br>Whether this content is currently visible/active. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>TabsID<br>```<br>ID of the parent tabs container. Auto-detected if not provided. | ```text-muted-foreground<br>string<br>``` | - |