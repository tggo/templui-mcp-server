---
url: "https://templui.io/docs/components/progress"
title: "Progress - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Progress

Progress indicators inform users about the status of ongoing processes.

[Source](https://github.com/templui/templui/tree/main/internal/components/progress) Tailwind Javascript

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/progress"

templ ProgressDefault() {
	<div class="w-full max-w-sm">
		@progress.Progress(progress.Props{
			Value: 25,
		})
	</div>
}

```

## Installation

1. Install the component





```
templui add progress
```

2. Add the JavaScript to your layout





```
@progress.Script()

```





Call this template in your base layout file (e.g., in the <head> section).


## Examples

Sizes

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/progress"

templ ProgressSizes() {
	<div class="space-y-6 w-full max-w-sm">
		@progress.Progress(progress.Props{
			Value: 50,
			Size:  progress.SizeSm,
		})
		@progress.Progress(progress.Props{
			Value: 65,
			Size:  progress.SizeLg,
		})
		@progress.Progress(progress.Props{
			Value: 80,
			Size:  progress.SizeLg,
		})
	</div>
}

```

Variants

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/progress"

templ ProgressVariants() {
	<div class="space-y-6 w-full max-w-xs">
		@progress.Progress(progress.Props{
			Value:   50,
			Variant: progress.VariantSuccess,
		})
		@progress.Progress(progress.Props{
			Value:   75,
			Variant: progress.VariantDanger,
		})
		@progress.Progress(progress.Props{
			Value:   90,
			Variant: progress.VariantWarning,
		})
	</div>
}

```

## Integration Patterns

The Progress component can be integrated in different ways depending on your requirements:

### File Uploads

For file uploads, use the browser's XMLHttpRequest or fetch API with progress events:

### Multi-step Forms

For multi-step forms, you can use either client-side calculations or HTMX for server-side validation between steps:

```
// Client-side approach
<div data-current-step="1" data-total-steps="4">
    @components.Progress(components.ProgressProps{
        Value: 25, // 1 of 4 steps = 25%
        Label: "Step 1 of 4",
        ShowValue: true,
    })

    // Form steps
</div>

// HTMX approach
<button
    hx-get="/form/step/2"
    hx-target="#form-container"
    class="px-4 py-2 bg-primary text-white rounded"
>
    Next
</button>
```

### Background Processes

For tracking background processes, choose between:

- **HTMX Polling**: Simple approach, good for processes under a few minutes





```
@components.Progress(components.ProgressProps{
  	Value: initialValue,
  	Label: "Processing...",
  	ShowValue: true,
  	Attributes: templ.Attributes{
  		"hx-get":     "/api/job/123/progress",
  		"hx-trigger": "every 2s",
  		"hx-target":  "#progress-container",
  	},
})
```

- **Server-Sent Events (SSE)**: For real-time updates and longer processes





```
// Server-side Go code
func SSEHandler(w http.ResponseWriter, r *http.Request) {
  	// Set SSE headers
  	w.Header().Set("Content-Type", "text/event-stream")
  	w.Header().Set("Cache-Control", "no-cache")
  	w.Header().Set("Connection", "keep-alive")

  	// Send progress updates
  	for i := 0; i <= 100; i += 10 {
  		fmt.Fprintf(w, "data: {\"progress\": %d}\n\n", i)
  		w.(http.Flusher).Flush()
  		time.Sleep(1 * time.Second)
  	}
}
```


## API Reference

Required parameter

Hover for description

### Progress

Visual progress indicator component for showing completion status of tasks or processes.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the progress element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the progress. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the progress element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Value<br>```<br>Current progress value (0-100). | ```text-muted-foreground<br>int<br>``` | ```text-muted-foreground<br>0<br>``` |
| ```<br>Max<br>```<br>Maximum value for the progress (defaults to 100 if 0 or negative). | ```text-muted-foreground<br>int<br>``` | ```text-muted-foreground<br>0<br>``` |
| ```<br>Size<br>```<br>Size of the progress bar. Options: 'sm', 'lg', or default (empty). | ```text-muted-foreground<br>Size<br>``` | - |
| ```<br>Variant<br>```<br>Color variant of the progress bar. Options: 'default', 'success', 'danger', 'warning' (defaults to 'default' if empty). | ```text-muted-foreground<br>Variant<br>``` | - |
| ```<br>BarClass<br>```<br>Additional CSS classes to apply to the progress bar itself. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Label<br>```<br>Optional label text to display above the progress bar. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>ShowValue<br>```<br>Whether to display the progress value as text. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |