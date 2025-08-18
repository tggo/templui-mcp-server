---
url: "https://templui.io/docs/components/table"
title: "Table - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Table

Display tabular data with rich formatting and interaction options

[Source](https://github.com/templui/templui/tree/main/internal/components/table) Tailwind

PreviewCode

| Name | Role | Status | Actions |
| --- | --- | --- | --- |
| John Doe | Software Engineer | Active | Edit |
| Jane Smith | Designer | Active | Edit |
| Bob Johnson | Product Manager | Inactive | Edit |
| 3 items | 1 page | 1-3 of 3 | Next |

A list of your recent hires.

```
package showcase

import "github.com/templui/templui/internal/components/table"

templ Table() {
	@table.Table() {
		@table.Caption() {
			A list of your recent hires.
		}
		@table.Header() {
			@table.Row() {
				@table.Head() {
					Name
				}
				@table.Head() {
					Role
				}
				@table.Head() {
					Status
				}
				@table.Head() {
					Actions
				}
			}
		}
		@table.Body() {
			@table.Row() {
				@table.Cell() {
					John Doe
				}
				@table.Cell() {
					Software Engineer
				}
				@table.Cell() {
					Active
				}
				@table.Cell() {
					Edit
				}
			}
			@table.Row() {
				@table.Cell() {
					Jane Smith
				}
				@table.Cell() {
					Designer
				}
				@table.Cell() {
					Active
				}
				@table.Cell() {
					Edit
				}
			}
			@table.Row() {
				@table.Cell() {
					Bob Johnson
				}
				@table.Cell() {
					Product Manager
				}
				@table.Cell() {
					Inactive
				}
				@table.Cell() {
					Edit
				}
			}
			@table.Footer() {
				@table.Row() {
					@table.Head() {
						3 items
					}
					@table.Head() {
						1 page
					}
					@table.Head() {
						1-3 of 3
					}
					@table.Head() {
						Next
					}
				}
			}
		}
	}
}

```

## Installation

```
templui add table
```

## API Reference

Required parameter

Hover for description

### Table

Main table container component for displaying tabular data.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the table element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the table. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the table element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### Body

Table body container for table rows and data.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the body element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the body. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the body element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### Row

Table row component for containing table cells.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the row element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the row. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the row element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Selected<br>```<br>Whether the row is selected (adds selected styling). | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |

### Head

Table header cell component for column headers.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the header cell element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the header cell. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the header cell element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### Cell

Table data cell component for displaying content.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the cell element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the cell. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the cell element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### Caption

Table caption component for describing the table content.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the caption element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the caption. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the caption element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |