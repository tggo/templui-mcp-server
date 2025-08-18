---
url: "https://templui.io/docs/components/breadcrumb"
title: "Breadcrumb - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Breadcrumb

Navigation component that helps users understand their location within a website's hierarchy.

[Source](https://github.com/templui/templui/tree/main/internal/components/breadcrumb) Tailwind

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/breadcrumb"

templ BreadcrumbDefault() {
	@breadcrumb.Breadcrumb() {
		@breadcrumb.List() {
			@breadcrumb.Item() {
				@breadcrumb.Link(breadcrumb.LinkProps{
					Href: "/",
				}) {
					Home
				}
			}
			@breadcrumb.Item() {
				@breadcrumb.Separator()
				@breadcrumb.Link(breadcrumb.LinkProps{
					Href: "/docs",
				}) {
					Documentation
				}
			}
			@breadcrumb.Item() {
				@breadcrumb.Separator()
				@breadcrumb.Page(breadcrumb.ItemProps{Current: true}) {
					Components
				}
			}
		}
	}
}

```

## Installation

```
templui add breadcrumb
```

## Examples

With Icons

PreviewCode

```
package showcase

import (
	"github.com/templui/templui/internal/components/breadcrumb"
	"github.com/templui/templui/internal/components/icon"
)

templ BreadcrumbWithIcons() {
	@breadcrumb.Breadcrumb() {
		@breadcrumb.List() {
			@breadcrumb.Item() {
				@breadcrumb.Link(breadcrumb.LinkProps{
					Href: "/",
				}) {
					@icon.House(icon.Props{Size: 16})
					<span class="ml-1">Home</span>
				}
			}
			@breadcrumb.Item() {
				@breadcrumb.Separator()
				@breadcrumb.Link(breadcrumb.LinkProps{
					Href: "/docs",
				}) {
					@icon.FileText(icon.Props{Size: 16})
					<span class="ml-1">Documentation</span>
				}
			}
			@breadcrumb.Item() {
				@breadcrumb.Separator()
				@breadcrumb.Page(breadcrumb.ItemProps{Current: true}) {
					@icon.Component(icon.Props{Size: 16})
					<span class="ml-1">Components</span>
				}
			}
		}
	}
}

```

Custom Separator

PreviewCode

```
package showcase

import (
	"github.com/templui/templui/internal/components/breadcrumb"
	"github.com/templui/templui/internal/components/icon"
)

templ BreadcrumbCustomSeparator() {
	@breadcrumb.Breadcrumb() {
		@breadcrumb.List() {
			@breadcrumb.Item() {
				@breadcrumb.Link(breadcrumb.LinkProps{
					Href: "/",
				}) {
					Home
				}
			}
			@breadcrumb.Item() {
				@breadcrumb.Separator(breadcrumb.SeparatorProps{UseCustom: true}) {
					@icon.Slash(icon.Props{Size: 14})
				}
				@breadcrumb.Link(breadcrumb.LinkProps{
					Href: "/products",
				}) {
					Products
				}
			}
			@breadcrumb.Item() {
				@breadcrumb.Separator(breadcrumb.SeparatorProps{UseCustom: true}) {
					@icon.Slash(icon.Props{Size: 14})
				}
				@breadcrumb.Page(breadcrumb.ItemProps{Current: true}) {
					Category
				}
			}
		}
	}
}

```

Responsive

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/breadcrumb"

templ BreadcrumbResponsive() {
	<!-- Mobile view (simplified with ellipsis) -->
	<div class="md:hidden">
		@breadcrumb.Breadcrumb() {
			@breadcrumb.List() {
				@breadcrumb.Item() {
					@breadcrumb.Link(breadcrumb.LinkProps{
						Href: "/",
					}) {
						Home
					}
				}
				@breadcrumb.Separator()
				@breadcrumb.Item() {
					@breadcrumb.Link(breadcrumb.LinkProps{
						Href: "#",
					}) {
						...
					}
				}
				@breadcrumb.Separator()
				@breadcrumb.Item() {
					@breadcrumb.Page(breadcrumb.ItemProps{Current: true}) {
						Current Page
					}
				}
			}
		}
	</div>
	<!-- Desktop view (full breadcrumb) -->
	<div class="hidden md:block">
		@breadcrumb.Breadcrumb() {
			@breadcrumb.List() {
				@breadcrumb.Item() {
					@breadcrumb.Link(breadcrumb.LinkProps{
						Href: "/",
					}) {
						Home
					}
				}
				@breadcrumb.Separator()
				@breadcrumb.Item() {
					@breadcrumb.Link(breadcrumb.LinkProps{
						Href: "/category",
					}) {
						Category
					}
				}
				@breadcrumb.Separator()
				@breadcrumb.Item() {
					@breadcrumb.Link(breadcrumb.LinkProps{
						Href: "/category/subcategory",
					}) {
						Subcategory
					}
				}
				@breadcrumb.Separator()
				@breadcrumb.Item() {
					@breadcrumb.Page(breadcrumb.ItemProps{Current: true}) {
						Current Page
					}
				}
			}
		}
	</div>
}

```

## API Reference

Required parameter

Hover for description

### Breadcrumb

Main breadcrumb navigation container component.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the breadcrumb element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the breadcrumb. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the breadcrumb element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### List

Breadcrumb list container for organizing breadcrumb items.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the list element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the list. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the list element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### Item

Individual breadcrumb item component.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the item element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the item. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the item element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Current<br>```<br>Whether this item represents the current page. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |

### Link

Clickable breadcrumb link component.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the link element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the link. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the link element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Href<br>```<br>URL destination for the breadcrumb link. | ```text-muted-foreground<br>string<br>``` | - |

### Separator

Visual separator between breadcrumb items.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the separator element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the separator. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the separator element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>UseCustom<br>```<br>Whether to use custom separator content instead of default. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |