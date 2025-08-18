---
url: "https://templui.io/docs/components/skeleton"
title: "Skeleton - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Skeleton

UI placeholder for indicating content that is loading. It's designed to be a simple building block that users can compose into more complex loading UI patterns.

[Source](https://github.com/templui/templui/tree/main/internal/components/skeleton) Tailwind

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/skeleton"

templ SkeletonDefault() {
	<div class="space-y-2 w-full max-w-sm">
		@skeleton.Skeleton(skeleton.Props{Class: "h-4 w-full"})
		@skeleton.Skeleton(skeleton.Props{Class: "h-4 w-2/3"})
		@skeleton.Skeleton(skeleton.Props{Class: "h-4 w-1/3"})
	</div>
}

```

## Installation

```
templui add skeleton
```

## Examples

Profile

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/skeleton"

templ SkeletonProfile() {
	<div class="flex items-center gap-4 w-full max-w-sm">
		@skeleton.Skeleton(skeleton.Props{Class: "h-12 w-12 rounded-full"})
		<div class="space-y-2 w-full">
			@skeleton.Skeleton(skeleton.Props{Class: "h-4 w-full"})
			@skeleton.Skeleton(skeleton.Props{Class: "h-4 w-3/4"})
		</div>
	</div>
}

```

Card

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/skeleton"

templ SkeletonCard() {
	<div class="p-4 w-full max-w-sm">
		@skeleton.Skeleton(skeleton.Props{Class: "h-[200px] w-full rounded-md mb-4"})
		<div class="space-y-2">
			@skeleton.Skeleton(skeleton.Props{Class: "h-5 w-2/3"})
			@skeleton.Skeleton(skeleton.Props{Class: "h-4 w-full"})
			@skeleton.Skeleton(skeleton.Props{Class: "h-4 w-full"})
			@skeleton.Skeleton(skeleton.Props{Class: "h-4 w-3/4"})
		</div>
	</div>
}

```

Dashboard

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/skeleton"

templ SkeletonDashboard() {
	<div>
		<div class="grid gap-6 md:grid-cols-3">
			for i := 0; i < 3; i++ {
				<div class="p-4">
					@skeleton.Skeleton(skeleton.Props{Class: "h-4 w-20 mb-2"})
					@skeleton.Skeleton(skeleton.Props{Class: "h-8 w-24 mb-4"})
					<div class="flex items-center gap-2">
						@skeleton.Skeleton(skeleton.Props{Class: "h-4 w-12"})
						@skeleton.Skeleton(skeleton.Props{Class: "h-4 w-4"})
					</div>
				</div>
			}
		</div>
		<div class="mt-4 p-4">
			@skeleton.Skeleton(skeleton.Props{Class: "h-5 w-1/3 mb-6"})
			@skeleton.Skeleton(skeleton.Props{Class: "h-[240px] w-full rounded-md"})
		</div>
	</div>
}

```

## API Reference

Required parameter

Hover for description

### Skeleton

Loading placeholder component that can be composed into complex loading UI patterns.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the skeleton element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the skeleton. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the skeleton element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |