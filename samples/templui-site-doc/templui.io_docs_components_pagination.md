---
url: "https://templui.io/docs/components/pagination"
title: "Pagination - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Pagination

Navigation controls for moving between pages of content.

[Source](https://github.com/templui/templui/tree/main/internal/components/pagination) Tailwind

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/pagination"

templ PaginationDefault() {
	@pagination.Pagination(pagination.Props{
		Class: "mt-8",
	}) {
		@pagination.Content() {
			@pagination.Item() {
				@pagination.Previous(pagination.PreviousProps{
					Href:     "?page=1",
					Disabled: false,
					Label:    "Previous",
				})
			}
			@pagination.Item() {
				@pagination.Link(pagination.LinkProps{
					Href: "?page=1",
				}) {
					1
				}
			}
			@pagination.Item() {
				@pagination.Link(pagination.LinkProps{
					Href:     "?page=2",
					IsActive: true,
				}) {
					2
				}
			}
			@pagination.Item() {
				@pagination.Link(pagination.LinkProps{
					Href: "?page=3",
				}) {
					3
				}
			}
			@pagination.Item() {
				@pagination.Ellipsis()
			}
			@pagination.Item() {
				@pagination.Next(pagination.NextProps{
					Href:  "?page=3",
					Label: "Next",
				})
			}
		}
	}
}

```

## Installation

```
templui add pagination
```

## Examples

With Helper

PreviewCode

```
package showcase

import (
	"fmt"
	"github.com/templui/templui/internal/components/pagination"
)

templ PaginationWithHelper() {
	{{ p := pagination.CreatePagination(5, 20, 3) }}
	@pagination.Pagination() {
		@pagination.Content() {
			@pagination.Item() {
				@pagination.Previous(pagination.PreviousProps{
					Href:     fmt.Sprintf("?page=%d", p.CurrentPage-1),
					Disabled: !p.HasPrevious,
					Label:    "Previous",
				})
			}
			// First page with ellipsis if needed
			if p.Pages[0] > 1 {
				@pagination.Item() {
					@pagination.Link(pagination.LinkProps{
						Href: "?page=1",
					}) {
						1
					}
				}
				if p.Pages[0] > 2 {
					@pagination.Item() {
						@pagination.Ellipsis()
					}
				}
			}
			// Visible pages
			for _, page := range p.Pages {
				@pagination.Item() {
					@pagination.Link(pagination.LinkProps{
						Href:     fmt.Sprintf("?page=%d", page),
						IsActive: page == p.CurrentPage,
					}) {
						{ fmt.Sprint(page) }
					}
				}
			}
			// Last page with ellipsis if needed
			if p.Pages[len(p.Pages)-1] < p.TotalPages {
				if p.Pages[len(p.Pages)-1] < p.TotalPages-1 {
					@pagination.Item() {
						@pagination.Ellipsis()
					}
				}
				@pagination.Item() {
					@pagination.Link(pagination.LinkProps{
						Href: fmt.Sprintf("?page=%d", p.TotalPages),
					}) {
						{ fmt.Sprint(p.TotalPages) }
					}
				}
			}
			@pagination.Item() {
				@pagination.Next(pagination.NextProps{
					Href:     fmt.Sprintf("?page=%d", p.CurrentPage+1),
					Disabled: !p.HasNext,
					Label:    "Next",
				})
			}
		}
	}
}

```

## API Reference

Required parameter

Hover for description

### Pagination

Root navigation container for pagination controls.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the pagination nav element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the pagination container. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the pagination element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### Content

List container that holds pagination items.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the content list element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the content list. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the content element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### Item

Individual list item that wraps pagination links or buttons.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the item element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the item. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the item element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### Link

Clickable link or button for page navigation.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the link element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the link. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the link element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Href<br>```<br>URL for the page link. Required for functional links. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>IsActive<br>```<br>Whether this page link represents the current page. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Disabled<br>```<br>Whether the link is disabled and non-clickable. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |

### Previous

Navigation button for going to the previous page.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the previous button. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the button. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the button element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Href<br>```<br>URL for the previous page. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Disabled<br>```<br>Whether the previous button is disabled (e.g., on first page). | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Label<br>```<br>Text label to display alongside the chevron icon. | ```text-muted-foreground<br>string<br>``` | - |

### Next

Navigation button for going to the next page.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the next button. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the button. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the button element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Href<br>```<br>URL for the next page. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Disabled<br>```<br>Whether the next button is disabled (e.g., on last page). | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Label<br>```<br>Text label to display alongside the chevron icon. | ```text-muted-foreground<br>string<br>``` | - |