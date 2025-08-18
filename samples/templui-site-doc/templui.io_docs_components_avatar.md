---
url: "https://templui.io/docs/components/avatar"
title: "Avatar - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Avatar

Visual representation of a user through images or initials.

[Source](https://github.com/templui/templui/tree/main/internal/components/avatar) Tailwind Javascript

PreviewCode

![User avatar](https://avatars.githubusercontent.com/u/26936893?v=4)

```
package showcase

import "github.com/templui/templui/internal/components/avatar"

templ AvatarDefault() {
	@avatar.Avatar() {
		@avatar.Image(avatar.ImageProps{
			Src: "https://avatars.githubusercontent.com/u/26936893?v=4",
		})
	}
}

```

## Installation

1. Install the component





```
templui add avatar
```

2. Add the JavaScript to your layout





```
@avatar.Script()

```





Call this template in your base layout file (e.g., in the <head> section).


## Examples

Fallback

PreviewCode

![User avatar](https://templui.io/docs/components/broken-image.jpg)JD

```
package showcase

import "github.com/templui/templui/internal/components/avatar"

templ AvatarFallback() {
	@avatar.Avatar() {
		@avatar.Image(avatar.ImageProps{
			// simulate a broken image
			Src: "broken-image.jpg",
		})
		@avatar.Fallback() {
			{ avatar.Initials("John Doe") }
		}
	}
}

```

Sizes

PreviewCode

![User avatar](https://avatars.githubusercontent.com/u/26936893?v=4)

![User avatar](https://avatars.githubusercontent.com/u/26936893?v=4)

![User avatar](https://avatars.githubusercontent.com/u/26936893?v=4)

```
package showcase

import "github.com/templui/templui/internal/components/avatar"

templ AvatarSizes() {
	<div class="flex flex-wrap gap-2">
		@avatar.Avatar(avatar.Props{
			Size: avatar.SizeSm,
		}) {
			@avatar.Image(avatar.ImageProps{
				Src: "https://avatars.githubusercontent.com/u/26936893?v=4",
			})
		}
		@avatar.Avatar() {
			@avatar.Image(avatar.ImageProps{
				Src: "https://avatars.githubusercontent.com/u/26936893?v=4",
			})
		}
		@avatar.Avatar(avatar.Props{
			Size: avatar.SizeLg,
		}) {
			@avatar.Image(avatar.ImageProps{
				Src: "https://avatars.githubusercontent.com/u/26936893?v=4",
			})
		}
	</div>
}

```

With Icon

PreviewCode

```
package showcase

import (
	"github.com/templui/templui/internal/components/avatar"
	"github.com/templui/templui/internal/components/icon"
)

templ AvatarWithIcon() {
	@avatar.Avatar() {
		@icon.Camera(icon.Props{
			Size:  22,
			Class: "text-muted-foreground",
		})
	}
}

```

Group

PreviewCode

![User avatar](https://avatars.githubusercontent.com/u/26936893?v=4)

![User avatar](https://avatars.githubusercontent.com/u/26936893?v=4)

![User avatar](https://avatars.githubusercontent.com/u/26936893?v=4)

+2

```
package showcase

import "github.com/templui/templui/internal/components/avatar"

templ AvatarGroup() {
	@avatar.Group(avatar.GroupProps{
		Spacing: avatar.GroupSpacingLg,
	}) {
		@avatar.Avatar(avatar.Props{
			InGroup: true,
		}) {
			@avatar.Image(avatar.ImageProps{
				Src: "https://avatars.githubusercontent.com/u/26936893?v=4",
			})
		}
		@avatar.Avatar(avatar.Props{
			InGroup: true,
		}) {
			@avatar.Image(avatar.ImageProps{
				Src: "https://avatars.githubusercontent.com/u/26936893?v=4",
			})
		}
		@avatar.Avatar(avatar.Props{
			InGroup: true,
		}) {
			@avatar.Image(avatar.ImageProps{
				Src: "https://avatars.githubusercontent.com/u/26936893?v=4",
			})
		}
		@avatar.GroupOverflow(2, avatar.Props{
			InGroup: true,
		}) {
			@avatar.Image(avatar.ImageProps{
				Src: "https://avatars.githubusercontent.com/u/26936893?v=4",
			})
		}
	}
}

```

## API Reference

Required parameter

Hover for description

### Avatar

Root container for avatar component that manages fallback behavior and styling.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the avatar element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the avatar. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the avatar element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Size<br>```<br>Size of the avatar. Options: 'small', 'medium', 'large'. | ```text-muted-foreground<br>Size<br>``` | ```text-muted-foreground<br>medium<br>``` |
| ```<br>InGroup<br>```<br>Indicates if the avatar is part of a group layout. | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |

### Image

Image element within the avatar that displays the user's photo.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the image element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the image. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the image element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Src<br>```<br>Image source URL. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Alt<br>```<br>Alternative text for the image. | ```text-muted-foreground<br>string<br>``` | - |

### Fallback

Fallback element displayed when the image fails to load, typically showing initials or an icon.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the fallback element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the fallback. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the fallback element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |

### Group

Container for displaying multiple avatars in a group layout.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the group element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the group. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the group element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>Spacing<br>```<br>Spacing between avatars in the group. | ```text-muted-foreground<br>Spacing<br>``` | ```text-muted-foreground<br>SpacingMd<br>``` |