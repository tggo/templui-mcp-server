---
url: "https://templui.io/docs/components/label"
title: "Label - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Label

Renders an accessible label associated with controls.

[Source](https://github.com/templui/templui/tree/main/internal/components/label) Tailwind Javascript

PreviewCode

Accept terms and conditions

```
package showcase

import (
	"github.com/templui/templui/internal/components/checkbox"
	"github.com/templui/templui/internal/components/label"
)

templ CheckboxWithLabel() {
	<div class="flex items-center gap-2">
		@checkbox.Checkbox(checkbox.Props{
			ID: "checkbox-with-label",
		})
		@label.Label(label.Props{
			For: "checkbox-with-label",
		}) {
			Accept terms and conditions
		}
	</div>
}

```

## Installation

1. Install the component





```
templui add label
```

2. Add the JavaScript to your layout





```
@label.Script()

```





Call this template in your base layout file (e.g., in the <head> section).


### Usage

The Label component enhances the following form controls:

- [Checkbox](https://templui.io/docs/components/checkbox#with-label)
- [Date Picker](https://templui.io/docs/components/date-picker#with-label)
- [Input](https://templui.io/docs/components/input#with-label)
- [Input OTP](https://templui.io/docs/components/input-otp#with-label)
- [Radio](https://templui.io/docs/components/radio#with-label)
- [Select](https://templui.io/docs/components/select#with-label)
- [Textarea](https://templui.io/docs/components/textarea#with-label)
- [Tags Input](https://templui.io/docs/components/tags-input#with-label)
- [Toggle](https://templui.io/docs/components/toggle#with-label)
- [Rating](https://templui.io/docs/components/rating#with-label)

## API Reference

Required parameter

Hover for description

### Label

Accessible label component for associating text with form controls.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the label element. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the label. | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the label element. | ```text-muted-foreground<br>templ.Attributes<br>``` | - |
| ```<br>For<br>```<br>ID of the form control this label is associated with (for attribute). | ```text-muted-foreground<br>string<br>``` | - |
| ```<br>Error<br>```<br>Error message that changes the label styling to indicate validation errors. | ```text-muted-foreground<br>string<br>``` | - |