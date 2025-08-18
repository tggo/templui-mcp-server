---
url: "https://templui.io/docs/components/aspect-ratio"
title: "Aspect Ratio - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Aspect Ratio

A component for maintaining consistent width-to-height ratios across different screen sizes.

[Source](https://github.com/templui/templui/tree/main/internal/components/aspectratio) Tailwind

PreviewCode

![Example image](https://templui.io/assets/img/aspect_ratio_placeholder.jpeg)

```
package showcase

import "github.com/templui/templui/internal/components/aspectratio"

templ AspectRatioDefault() {
	@aspectratio.AspectRatio(aspectratio.Props{
		Ratio: aspectratio.RatioVideo,
		Class: "rounded-md overflow-hidden",
	}) {
		<img
			src="/assets/img/aspect_ratio_placeholder.jpeg"
			alt="Example image"
			class="h-full w-full object-cover"
		/>
	}
}

```

## Installation

```
templui add aspectratio
```

## API Reference

Required parameter

Hover for description

### AspectRatio

Component for maintaining consistent width-to-height ratios across different screen sizes.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the aspect ratio element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the aspect ratio container. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the aspect ratio element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Ratio<br>```<br>Aspect ratio preset. Options: 'auto', 'square', 'video', 'portrait', 'wide'. | ```text-muted-foreground<br>Ratio<br>``` | ```text-muted-foreground<br>auto<br>``` |