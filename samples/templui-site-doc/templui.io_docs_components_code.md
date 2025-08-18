---
url: "https://templui.io/docs/components/code"
title: "Code - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Code

Code displays a code block with optional syntax highlighting and copy functionality

[Source](https://github.com/templui/templui/tree/main/internal/components/code) Tailwind Javascript

PreviewCode

```go overflow-y-auto! hljs-target rounded-md block text-sm max-h-[501px] hljs
fmt.Println("Hello, World!")
```

```
package showcase

import "github.com/templui/templui/internal/components/code"

templ CodeDefault() {
	<div class="w-full max-w-md">
		@code.Code(code.Props{
			Language: "go",
		}) {
			{ `fmt.Println("Hello, World!")` }
		}
	</div>
}

```

## Installation

1. Install the component





```
templui add code
```

2. Add the JavaScript to your layout





```
@code.Script()

```





Call this template in your base layout file (e.g., in the <head> section).


## Examples

Copy Button

PreviewCode

```go overflow-y-auto! hljs-target rounded-md block text-sm max-h-[501px] hljs
fmt.Println("Hello, World!")
```

```
package showcase

import "github.com/templui/templui/internal/components/code"

templ CodeCopyButton() {
	<div class="w-full max-w-md">
		@code.Code(code.Props{
			Language:       "go",
			ShowCopyButton: true,
		}) {
			{ `fmt.Println("Hello, World!")` }
		}
	</div>
}

```

Custom Size

PreviewCode

```go overflow-y-auto! hljs-target rounded-md text-sm block max-h-[250px] hljs
package main

import (
   "fmt"
   "log"
   "net/http"
)

func main() {
   http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
       fmt.Fprintf(w, "Hello, World!")
   })

   fmt.Println("Server starting on :3000...")
   if err := http.ListenAndServe(":3000", nil); err != nil {
       log.Fatal(err)
   }
}
```

```
package showcase

import "github.com/templui/templui/internal/components/code"

templ CodeCustomSize() {
	<div class="w-full max-w-md">
		@code.Code(code.Props{
			Language:       "go",
			ShowCopyButton: true,
			Size:           code.SizeSm,
		}) {
			{ `package main

import (
   "fmt"
   "log"
   "net/http"
)

func main() {
   http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
       fmt.Fprintf(w, "Hello, World!")
   })

   fmt.Println("Server starting on :3000...")
   if err := http.ListenAndServe(":3000", nil); err != nil {
       log.Fatal(err)
   }
}` }
		}
	</div>
}

```

## API Reference

Required parameter

Hover for description

### Code

API reference for the Code component.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the code component | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>code-{randomID}<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the code container | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attrs<br>```<br>Additional HTML attributes to apply to the code container | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |
| ```<br>Language<br>```<br>Programming language for syntax highlighting | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>ShowCopyButton<br>```<br>Whether to show a copy button for the code | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Size<br>```<br>Size variant for the code block height | ```text-muted-foreground<br>Size<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>CodeClass<br>```<br>Additional CSS classes to apply to the code element | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |