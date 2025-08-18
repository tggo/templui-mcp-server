---
url: "https://templui.io/docs/components/input-otp"
title: "Input OTP - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Input OTP

Input field for one-time password/verification code entry.

[Source](https://github.com/templui/templui/tree/main/internal/components/inputotp) Tailwind Javascript

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/inputotp"

templ InputOTPDefault() {
	@inputotp.InputOTP() {
		@inputotp.Group() {
			@inputotp.Slot(inputotp.SlotProps{
				Index: 0,
			})
			@inputotp.Slot(inputotp.SlotProps{
				Index: 1,
			})
			@inputotp.Slot(inputotp.SlotProps{
				Index: 2,
			})
			@inputotp.Slot(inputotp.SlotProps{
				Index: 3,
			})
			@inputotp.Slot(inputotp.SlotProps{
				Index: 4,
			})
			@inputotp.Slot(inputotp.SlotProps{
				Index: 5,
			})
		}
	}
}

```

## Installation

1. Install the component





```
templui add inputotp
```

2. Add the JavaScript to your layout





```
@inputotp.Script()

```





Call this template in your base layout file (e.g., in the <head> section).


## Examples

Placeholder

PreviewCode

-

```
package showcase

import "github.com/templui/templui/internal/components/inputotp"

templ InputOTPPlaceholder() {
	@inputotp.InputOTP() {
		@inputotp.Group() {
			@inputotp.Slot(inputotp.SlotProps{
				Index:       0,
				Placeholder: "•",
			})
			@inputotp.Slot(inputotp.SlotProps{
				Index:       1,
				Placeholder: "•",
			})
			@inputotp.Slot(inputotp.SlotProps{
				Index:       2,
				Placeholder: "•",
			})
			@inputotp.Separator()
			@inputotp.Slot(inputotp.SlotProps{
				Index:       3,
				Placeholder: "•",
			})
			@inputotp.Slot(inputotp.SlotProps{
				Index:       4,
				Placeholder: "•",
			})
			@inputotp.Slot(inputotp.SlotProps{
				Index:       5,
				Placeholder: "•",
			})
		}
	}
}

```

With Label

PreviewCode

Verification Code

```
package showcase

import "github.com/templui/templui/internal/components/inputotp"
import "github.com/templui/templui/internal/components/label"

templ InputOTPWithLabel() {
	<div class="w-full max-w-sm flex flex-col gap-2">
		@label.Label(label.Props{
			For: "otp-with-label",
		}) {
			Verification Code
		}
		@inputotp.InputOTP(inputotp.Props{
			ID:       "otp-with-label",
			Required: true,
			HasError: true,
		}) {
			@inputotp.Group() {
				@inputotp.Slot(inputotp.SlotProps{
					Index: 0,
				})
				@inputotp.Slot(inputotp.SlotProps{
					Index: 1,
				})
				@inputotp.Slot(inputotp.SlotProps{
					Index: 2,
				})
				@inputotp.Slot(inputotp.SlotProps{
					Index: 3,
				})
				@inputotp.Slot(inputotp.SlotProps{
					Index: 4,
				})
				@inputotp.Slot(inputotp.SlotProps{
					Index: 5,
				})
			}
		}
	</div>
}

```

Custom Length

PreviewCode

```
package showcase

import "github.com/templui/templui/internal/components/inputotp"

templ InputOTPCustomLength() {
	@inputotp.InputOTP(inputotp.Props{
		ID: "otp-custom-length",
	}) {
		@inputotp.Group() {
			@inputotp.Slot(inputotp.SlotProps{
				Index: 0,
			})
			@inputotp.Slot(inputotp.SlotProps{
				Index: 1,
			})
			@inputotp.Slot(inputotp.SlotProps{
				Index: 2,
			})
		}
	}
}

```

Password Type

PreviewCode

-

```
package showcase

import "github.com/templui/templui/internal/components/inputotp"

templ InputOTPPasswordType() {
	@inputotp.InputOTP(inputotp.Props{
		ID: "otp-password",
	}) {
		@inputotp.Group() {
			@inputotp.Slot(inputotp.SlotProps{
				Index: 0,
				Type:  "password",
			})
			@inputotp.Slot(inputotp.SlotProps{
				Index: 1,
				Type:  "password",
			})
			@inputotp.Slot(inputotp.SlotProps{
				Index: 2,
				Type:  "password",
			})
			@inputotp.Separator()
			@inputotp.Slot(inputotp.SlotProps{
				Index: 3,
				Type:  "password",
			})
			@inputotp.Slot(inputotp.SlotProps{
				Index: 4,
				Type:  "password",
			})
			@inputotp.Slot(inputotp.SlotProps{
				Index: 5,
				Type:  "password",
			})
		}
	}
}

```

Custom Styling

PreviewCode

-

```
package showcase

import "github.com/templui/templui/internal/components/inputotp"

templ InputOTPCustomStyling() {
	@inputotp.InputOTP(inputotp.Props{
		ID: "otp-styled",
	}) {
		@inputotp.Group(inputotp.GroupProps{
			Class: "gap-3",
		}) {
			@inputotp.Slot(inputotp.SlotProps{
				Index: 0,
				Class: "w-12 h-14 bg-primary/10 border-primary text-lg font-bold",
			})
			@inputotp.Slot(inputotp.SlotProps{
				Index: 1,
				Class: "w-12 h-14 bg-primary/10 border-primary text-lg font-bold",
			})
			@inputotp.Slot(inputotp.SlotProps{
				Index: 2,
				Class: "w-12 h-14 bg-primary/10 border-primary text-lg font-bold",
			})
			@inputotp.Separator(inputotp.SeparatorProps{
				Class: "text-2xl font-bold text-primary",
			}) {
				<span>:</span>
			}
			@inputotp.Slot(inputotp.SlotProps{
				Index: 3,
				Class: "w-12 h-14 bg-primary/10 border-primary text-lg font-bold",
			})
			@inputotp.Slot(inputotp.SlotProps{
				Index: 4,
				Class: "w-12 h-14 bg-primary/10 border-primary text-lg font-bold",
			})
			@inputotp.Slot(inputotp.SlotProps{
				Index: 5,
				Class: "w-12 h-14 bg-primary/10 border-primary text-lg font-bold",
			})
		}
	}
}

```

Form

PreviewCode

Verification Code

-

Enter the 6-digit code sent to your phone

Invalid verification code.

```
package showcase

import (
	"github.com/templui/templui/internal/components/form"
	"github.com/templui/templui/internal/components/inputotp"
)

templ InputOTPForm() {
	@form.Item() {
		@form.Label(form.LabelProps{
			For: "otp-form",
		}) {
			Verification Code
		}
		@inputotp.InputOTP(inputotp.Props{
			ID:       "otp-form",
			Required: true,
			HasError: true,
		}) {
			@inputotp.Group() {
				@inputotp.Slot(inputotp.SlotProps{
					Index: 0,
				})
				@inputotp.Slot(inputotp.SlotProps{
					Index: 1,
				})
				@inputotp.Slot(inputotp.SlotProps{
					Index: 2,
				})
				@inputotp.Separator()
				@inputotp.Slot(inputotp.SlotProps{
					Index: 3,
				})
				@inputotp.Slot(inputotp.SlotProps{
					Index: 4,
				})
				@inputotp.Slot(inputotp.SlotProps{
					Index: 5,
				})
			}
		}
		@form.Description() {
			Enter the 6-digit code sent to your phone
		}
		@form.Message(form.MessageProps{
			Variant: form.MessageVariantError,
		}) {
			Invalid verification code.
		}
	}
}

```

## API Reference

Required parameter

Hover for description

### InputOTP

Main container for the OTP input component.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the OTP input component | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the container | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the container | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |
| ```<br>Value<br>```<br>Current value of the OTP input | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Required<br>```<br>Whether the OTP input is required for form validation | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Name<br>```<br>Name attribute for the hidden input field | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>HasError<br>```<br>Whether the OTP input should display error styling | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |

### Group

Container for grouping OTP slots together.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the group element | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the group | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the group | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |

### Slot

Individual input slot for a single character.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the slot element | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the slot | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the slot | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |
| ```<br>Index<br>```<br>Index position of this slot in the OTP sequence | ```text-muted-foreground<br>int<br>``` | ```text-muted-foreground<br>0<br>``` |
| ```<br>Type<br>```<br>Input type for the slot (text or password) | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>text<br>``` |
| ```<br>Placeholder<br>```<br>Placeholder text for the slot | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Disabled<br>```<br>Whether the slot is disabled | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |

### Separator

Visual separator between groups of slots.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the separator element | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the separator | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the separator | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |