---
url: "https://templui.io/docs/components/dropdown"
title: "Dropdown - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Dropdown

Floating menu for displaying a list of actions or options. Uses Popover for the popup.

[Source](https://github.com/templui/templui/tree/main/internal/components/dropdown) Tailwind Javascript

PreviewCode

Open

My Account

Team

Invite users

EmailMessage

More...

New Team⌘+T

[GitHub](https://github.com/)SupportAPI

Log out⇧⌘Q

```
package showcase

import (
	"github.com/templui/templui/internal/components/button"
	"github.com/templui/templui/internal/components/dropdown"
	"github.com/templui/templui/internal/components/icon"
)

templ DropdownDefault() {
	@dropdown.Dropdown() {
		@dropdown.Trigger() {
			@button.Button(button.Props{
				Variant: button.VariantOutline,
			}) {
				Open
			}
		}
		@dropdown.Content(dropdown.ContentProps{
			Width: "w-56",
		}) {
			@dropdown.Label() {
				My Account
			}
			@dropdown.Separator()
			@dropdown.Group() {
				@dropdown.Item() {
					Team
				}
				@dropdown.Sub() {
					@dropdown.SubTrigger() {
						<span class="flex items-center">
							@icon.Users(icon.Props{Size: 16, Class: "mr-2"})
							Invite users
						</span>
					}
					@dropdown.SubContent() {
						@dropdown.Item() {
							<span class="flex items-center">
								@icon.Mail(icon.Props{Size: 16, Class: "mr-2"})
								Email
							</span>
						}
						@dropdown.Item() {
							<span class="flex items-center">
								@icon.MessageSquare(icon.Props{Size: 16, Class: "mr-2"})
								Message
							</span>
						}
						@dropdown.Separator()
						@dropdown.Item() {
							More...
						}
					}
				}
				@dropdown.Item() {
					New Team
					@dropdown.Shortcut() {
						⌘+T
					}
				}
			}
			@dropdown.Separator()
			@dropdown.Item(dropdown.ItemProps{
				Href:   "https://github.com",
				Target: "_blank",
			}) {
				<span class="flex items-center">
					@icon.Github(icon.Props{Size: 16, Class: "mr-2"})
					GitHub
				</span>
			}
			@dropdown.Item() {
				<span class="flex items-center">
					@icon.LifeBuoy(icon.Props{Size: 16, Class: "mr-2"})
					Support
				</span>
			}
			@dropdown.Item(dropdown.ItemProps{
				Disabled: true,
			}) {
				<span class="flex items-center">
					@icon.Code(icon.Props{Size: 16, Class: "mr-2"})
					API
				</span>
			}
			@dropdown.Separator()
			@dropdown.Item() {
				<span class="flex items-center">
					@icon.LogOut(icon.Props{Size: 16, Class: "mr-2"})
					Log out
				</span>
				@dropdown.Shortcut() {
					⇧⌘Q
				}
			}
		}
	}
}

```

## Installation

1. Install the component





```
templui add dropdown
```

2. Add the JavaScript to your layout





```
@dropdown.Script()
@popover.Script()

```





Call this template in your base layout file (e.g., in the <head> section).


## API Reference

Required parameter

Hover for description

### Dropdown

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the dropdown container | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>randomID<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the dropdown container | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the dropdown container | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |

### Trigger

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the trigger element | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the trigger | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the trigger | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |

### Content

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the content element | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the content | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the content | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |
| ```<br>Width<br>```<br>Custom width for the dropdown content | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>MaxHeight<br>```<br>Maximum height for the dropdown content | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>300px<br>``` |
| ```<br>Align<br>```<br>Alignment of the dropdown relative to trigger | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Side<br>```<br>Side placement of the dropdown | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |

### Group

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the group element | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the group | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the group | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |

### Label

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the label element | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the label | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the label | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |

### Item

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the item element | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>randomID<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the item | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the item | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |
| ```<br>Disabled<br>```<br>Whether the item is disabled | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Href<br>```<br>URL to navigate to when item is clicked (renders as anchor) | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Target<br>```<br>Target attribute for anchor items | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>PreventClose<br>```<br>Whether to prevent dropdown from closing when item is clicked | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |

### Separator

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the separator element | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the separator | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the separator | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |

### Shortcut

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the shortcut element | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the shortcut | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the shortcut | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |

### Sub

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the submenu container | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>randomID<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the submenu container | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the submenu container | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |

### SubTrigger

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the submenu trigger | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the submenu trigger | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the submenu trigger | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |

### SubContent

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the submenu content | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the submenu content | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the submenu content | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |