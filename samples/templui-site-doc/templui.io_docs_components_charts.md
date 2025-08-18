---
url: "https://templui.io/docs/components/charts"
title: "Chart - templUI"
---

[✨ templUI Pro is live](https://pro.templui.io/)

# Chart

Beautiful charts. Built using [Chart.js](https://chartjs.org/).

[Source](https://github.com/templui/templui/tree/main/internal/components/chart) Tailwind Javascript

PreviewCode

```
package showcase

import (
	"github.com/templui/templui/internal/components/card"
	"github.com/templui/templui/internal/components/chart"
)

templ ChartDefault() {
	@card.Card(card.Props{Class: "max-w-sm"}) {
		@card.Content() {
			@chart.Chart(chart.Props{
				Variant:     chart.VariantBar,
				ShowYGrid:   true,
				ShowXLabels: true,
				Data: chart.Data{
					Labels: []string{"Jan", "Feb", "March", "April", "May", "June"},
					Datasets: []chart.Dataset{
						{
							Data: []float64{12, 19, 12, 5, 2, 3},
						},
					},
				},
			})
		}
	}
}

```

## Installation

1. Install the component





```
templui add chart
```

2. Add the JavaScript to your layout





```
@chart.Script()

```





Call this template in your base layout file (e.g., in the <head> section).


## Examples

Bar Chart - Multiple

PreviewCode

```
package showcase

import (
	"github.com/templui/templui/internal/components/card"
	"github.com/templui/templui/internal/components/chart"
)

templ ChartBarMultiple() {
	@card.Card(card.Props{Class: "max-w-sm"}) {
		@card.Content() {
			@chart.Chart(chart.Props{
				Variant:     chart.VariantBar,
				ShowYGrid:   true,
				ShowXLabels: true,
				Data: chart.Data{
					Labels: []string{"Jan", "Feb", "March", "April", "May", "June"},
					Datasets: []chart.Dataset{
						{
							Label: "Mobile",
							Data:  []float64{12, 19, 12, 5, 2, 3},
						},
						{
							Label: "Desktop",
							Data:  []float64{3, 9, 18, 3, 21, 13},
						},
					},
				},
			})
		}
	}
}

```

Bar Chart - Horizontal

PreviewCode

```
package showcase

import (
	"github.com/templui/templui/internal/components/card"
	"github.com/templui/templui/internal/components/chart"
)

templ ChartBarHorizontal() {
	@card.Card(card.Props{Class: "max-w-sm"}) {
		@card.Content() {
			@chart.Chart(chart.Props{
				Variant:     chart.VariantBar,
				Horizontal:  true,
				ShowXGrid:   true,
				ShowYLabels: true,
				Data: chart.Data{
					Labels: []string{"Jan", "Feb", "March", "April", "May", "June"},
					Datasets: []chart.Dataset{
						{
							Data: []float64{12, 19, 12, 5, 2, 3},
						},
					},
				},
			})
		}
	}
}

```

Bar Chart - Negative

PreviewCode

```
package showcase

import (
	"github.com/templui/templui/internal/components/card"
	"github.com/templui/templui/internal/components/chart"
)

templ ChartBarNegative() {
	@card.Card(card.Props{Class: "max-w-sm"}) {
		@card.Content() {
			@chart.Chart(chart.Props{
				Variant:     chart.VariantBar,
				ShowYGrid:   true,
				ShowXLabels: true,
				Data: chart.Data{
					Labels: []string{"Jan", "Feb", "March", "April", "May", "June"},
					Datasets: []chart.Dataset{
						{
							Data: []float64{12, 19, -12, 5, -2, 3},
						},
					},
				},
			})
		}
	}
}

```

Bar Chart - Stacked

PreviewCode

```
package showcase

import (
	"github.com/templui/templui/internal/components/card"
	"github.com/templui/templui/internal/components/chart"
)

templ ChartBarStacked() {
	@card.Card(card.Props{Class: "max-w-sm"}) {
		@card.Content() {
			@chart.Chart(chart.Props{
				Variant:     chart.VariantBar,
				ShowYGrid:   true,
				ShowXLabels: true,
				Stacked:     true,
				Data: chart.Data{
					Labels: []string{"Jan", "Feb", "March", "April", "May", "June"},
					Datasets: []chart.Dataset{
						{
							Label: "Mobile",
							Data:  []float64{12, 19, 12, 5, 2, 3},
						},
						{
							Label: "Desktop",
							Data:  []float64{3, 9, 18, 3, 21, 13},
						},
					},
				},
			})
		}
	}
}

```

Line Chart

PreviewCode

```
package showcase

import (
	"github.com/templui/templui/internal/components/card"
	"github.com/templui/templui/internal/components/chart"
)

templ ChartLine() {
	@card.Card(card.Props{Class: "max-w-sm"}) {
		@card.Content() {
			@chart.Chart(chart.Props{
				Variant:     chart.VariantLine,
				ShowYGrid:   true,
				ShowXLabels: true,
				Data: chart.Data{
					Labels: []string{"Jan", "Feb", "March", "April", "May", "June"},
					Datasets: []chart.Dataset{
						{
							Data:    []float64{12, 3, 9, 3, 12, 7},
							Tension: 0.5,
						},
					},
				},
			})
		}
	}
}

```

Line Chart - Linear

PreviewCode

```
package showcase

import (
	"github.com/templui/templui/internal/components/card"
	"github.com/templui/templui/internal/components/chart"
)

templ ChartLineLinear() {
	@card.Card(card.Props{Class: "max-w-sm"}) {
		@card.Content() {
			@chart.Chart(chart.Props{
				Variant:     chart.VariantLine,
				ShowYGrid:   true,
				ShowXLabels: true,
				Data: chart.Data{
					Labels: []string{"Jan", "Feb", "March", "April", "May", "June"},
					Datasets: []chart.Dataset{
						{
							Data: []float64{12, 3, 9, 3, 12, 7},
						},
					},
				},
			})
		}
	}
}

```

Line Chart - Step

PreviewCode

```
package showcase

import (
	"github.com/templui/templui/internal/components/card"
	"github.com/templui/templui/internal/components/chart"
)

templ ChartLineStep() {
	@card.Card(card.Props{Class: "max-w-sm"}) {
		@card.Content() {
			@chart.Chart(chart.Props{
				Variant:     chart.VariantLine,
				ShowYGrid:   true,
				ShowXLabels: true,
				Data: chart.Data{
					Labels: []string{"Jan", "Feb", "March", "April", "May", "June"},
					Datasets: []chart.Dataset{
						{
							Data:    []float64{12, 3, 9, 3, 12, 7},
							Stepped: true,
						},
					},
				},
			})
		}
	}
}

```

Line Chart - Multiple

PreviewCode

```
package showcase

import (
	"github.com/templui/templui/internal/components/card"
	"github.com/templui/templui/internal/components/chart"
)

templ ChartLineMultiple() {
	@card.Card(card.Props{Class: "max-w-sm"}) {
		@card.Content() {
			@chart.Chart(chart.Props{
				Variant:     chart.VariantLine,
				ShowYGrid:   true,
				ShowXLabels: true,
				Data: chart.Data{
					Labels: []string{"Jan", "Feb", "March", "April", "May", "June"},
					Datasets: []chart.Dataset{
						{
							Label:   "Mobile",
							Data:    []float64{12, 3, 9, 3, 12, 7},
							Tension: 0.5,
						},
						{
							Label:   "Desktop",
							Data:    []float64{7, 14, 12, 21, 2, 9},
							Tension: 0.5,
						},
					},
				},
			})
		}
	}
}

```

Area Chart

PreviewCode

```
package showcase

import (
	"github.com/templui/templui/internal/components/card"
	"github.com/templui/templui/internal/components/chart"
)

templ ChartArea() {
	@card.Card(card.Props{Class: "max-w-sm"}) {
		@card.Content() {
			@chart.Chart(chart.Props{
				Variant:     chart.VariantLine,
				ShowYGrid:   true,
				ShowXLabels: true,
				Data: chart.Data{
					Labels: []string{"Jan", "Feb", "March", "April", "May", "June"},
					Datasets: []chart.Dataset{
						{
							Data:        []float64{3, 9, 3, 12, 7, 8},
							Tension:     0.5,
							BorderWidth: 1,
							Fill:        true,
						},
					},
				},
			})
		}
	}
}

```

Area Chart - Linear

PreviewCode

```
package showcase

import (
	"github.com/templui/templui/internal/components/card"
	"github.com/templui/templui/internal/components/chart"
)

templ ChartAreaLinear() {
	@card.Card(card.Props{Class: "max-w-sm"}) {
		@card.Content() {
			@chart.Chart(chart.Props{
				Variant:     chart.VariantLine,
				ShowYGrid:   true,
				ShowXLabels: true,
				Data: chart.Data{
					Labels: []string{"Jan", "Feb", "March", "April", "May", "June"},
					Datasets: []chart.Dataset{
						{
							Data:        []float64{3, 9, 3, 12, 7, 8},
							BorderWidth: 1,
							Fill:        true,
						},
					},
				},
			})
		}
	}
}

```

Area Chart - Step

PreviewCode

```
package showcase

import (
	"github.com/templui/templui/internal/components/card"
	"github.com/templui/templui/internal/components/chart"
)

templ ChartAreaStep() {
	@card.Card(card.Props{Class: "max-w-sm"}) {
		@card.Content() {
			@chart.Chart(chart.Props{
				Variant:     chart.VariantLine,
				ShowYGrid:   true,
				ShowXLabels: true,
				Data: chart.Data{
					Labels: []string{"Jan", "Feb", "March", "April", "May", "June"},
					Datasets: []chart.Dataset{
						{
							Data:        []float64{3, 9, 3, 12, 7, 8},
							BorderWidth: 1,
							Fill:        true,
							Stepped:     true,
						},
					},
				},
			})
		}
	}
}

```

Area Chart - Stacked

PreviewCode

```
package showcase

import (
	"github.com/templui/templui/internal/components/card"
	"github.com/templui/templui/internal/components/chart"
)

templ ChartAreaStacked() {
	@card.Card(card.Props{Class: "max-w-sm"}) {
		@card.Content() {
			@chart.Chart(chart.Props{
				Variant:     chart.VariantLine,
				ShowYGrid:   true,
				ShowXLabels: true,
				Data: chart.Data{
					Labels: []string{"Jan", "Feb", "March", "April", "May", "June"},
					Datasets: []chart.Dataset{
						{
							Data:        []float64{3, 9, 3, 12, 7, 8},
							BorderWidth: 1,
							Fill:        true,
							Tension:     0.5,
							Label:       "Mobile",
						},
						{
							Data:        []float64{7, 16, 5, 20, 14, 15},
							BorderWidth: 1,
							Fill:        true,
							Tension:     0.5,
							Label:       "Mobile",
						},
					},
				},
			})
		}
	}
}

```

Pie Chart

PreviewCode

```
package showcase

import (
	"github.com/templui/templui/internal/components/card"
	"github.com/templui/templui/internal/components/chart"
)

templ ChartPie() {
	@card.Card(card.Props{Class: "max-w-sm"}) {
		@card.Content() {
			@chart.Chart(chart.Props{
				Variant: chart.VariantPie,
				Data: chart.Data{
					Labels: []string{"Jan", "Feb", "March", "April", "May", "June"},
					Datasets: []chart.Dataset{
						{
							Data: []float64{3, 9, 3, 12, 7, 8},
						},
					},
				},
			})
		}
	}
}

```

Pie Chart - Stacked

PreviewCode

```
package showcase

import (
	"github.com/templui/templui/internal/components/card"
	"github.com/templui/templui/internal/components/chart"
)

templ ChartPieStacked() {
	@card.Card(card.Props{Class: "max-w-sm"}) {
		@card.Content() {
			@chart.Chart(chart.Props{
				Variant: chart.VariantPie,
				Data: chart.Data{
					Labels: []string{"Jan", "Feb", "March", "April", "May", "June"},
					Datasets: []chart.Dataset{
						{
							Data:  []float64{3, 9, 3, 12, 7, 8},
							Label: "Mobile",
						},
						{
							Data:  []float64{7, 16, 5, 20, 14, 15},
							Label: "Desktop",
						},
					},
				},
			})
		}
	}
}

```

Pie Chart - Legend

PreviewCode

```
package showcase

import (
	"github.com/templui/templui/internal/components/card"
	"github.com/templui/templui/internal/components/chart"
)

templ ChartPieLegend() {
	@card.Card(card.Props{Class: "max-w-sm"}) {
		@card.Content() {
			@chart.Chart(chart.Props{
				Variant:    chart.VariantPie,
				ShowLegend: true,
				Data: chart.Data{
					Labels: []string{"Jan", "Feb", "March", "April", "May", "June"},
					Datasets: []chart.Dataset{
						{
							Data: []float64{7, 16, 5, 20, 14, 15},
						},
					},
				},
			})
		}
	}
}

```

Doughnut Chart

PreviewCode

```
package showcase

import (
	"github.com/templui/templui/internal/components/card"
	"github.com/templui/templui/internal/components/chart"
)

templ ChartDoughnut() {
	@card.Card(card.Props{Class: "max-w-sm"}) {
		@card.Content() {
			@chart.Chart(chart.Props{
				Variant: chart.VariantDoughnut,
				Data: chart.Data{
					Labels: []string{"Jan", "Feb", "March", "April", "May", "June"},
					Datasets: []chart.Dataset{
						{
							Data: []float64{7, 16, 5, 20, 14, 15},
						},
					},
				},
			})
		}
	}
}

```

Doughnut Chart - Stacked

PreviewCode

```
package showcase

import (
	"github.com/templui/templui/internal/components/card"
	"github.com/templui/templui/internal/components/chart"
)

templ ChartDoughnutStacked() {
	@card.Card(card.Props{Class: "max-w-sm"}) {
		@card.Content() {
			@chart.Chart(chart.Props{
				Variant: chart.VariantDoughnut,
				Data: chart.Data{
					Labels: []string{"Jan", "Feb", "March", "April", "May", "June"},
					Datasets: []chart.Dataset{
						{
							Data:  []float64{3, 9, 3, 12, 7, 8},
							Label: "Mobile",
						},
						{
							Data:  []float64{7, 16, 5, 20, 14, 15},
							Label: "Desktop",
						},
					},
				},
			})
		}
	}
}

```

Doughnut Chart - Legend

PreviewCode

```
package showcase

import (
	"github.com/templui/templui/internal/components/card"
	"github.com/templui/templui/internal/components/chart"
)

templ ChartDoughnutLegend() {
	@card.Card(card.Props{Class: "max-w-sm"}) {
		@card.Content() {
			@chart.Chart(chart.Props{
				Variant:    chart.VariantDoughnut,
				ShowLegend: true,
				Data: chart.Data{
					Labels: []string{"Jan", "Feb", "March", "April", "May", "June"},
					Datasets: []chart.Dataset{
						{
							Data:  []float64{3, 9, 3, 12, 7, 8},
							Label: "Mobile",
						},
					},
				},
			})
		}
	}
}

```

Radar Chart

PreviewCode

```
package showcase

import (
	"github.com/templui/templui/internal/components/card"
	"github.com/templui/templui/internal/components/chart"
)

templ ChartRadar() {
	@card.Card(card.Props{Class: "max-w-sm"}) {
		@card.Content() {
			@chart.Chart(chart.Props{
				Variant: chart.VariantRadar,
				Data: chart.Data{
					Labels: []string{"Jan", "Feb", "March", "April", "May", "June"},
					Datasets: []chart.Dataset{
						{
							Data: []float64{3, 9, 3, 12, 7, 8},
						},
					},
				},
			})
		}
	}
}

```

Radar Chart - Stacked

PreviewCode

```
package showcase

import (
	"github.com/templui/templui/internal/components/card"
	"github.com/templui/templui/internal/components/chart"
)

templ CharRadarStacked() {
	@card.Card(card.Props{Class: "max-w-sm"}) {
		@card.Content() {
			@chart.Chart(chart.Props{
				Variant: chart.VariantRadar,
				Data: chart.Data{
					Labels: []string{"Jan", "Feb", "March", "April", "May", "June"},
					Datasets: []chart.Dataset{
						{
							Data:  []float64{15, 9, 3, 12, 7, 8},
							Label: "Mobile",
						},
						{
							Data:  []float64{7, 16, 5, 20, 14, 15},
							Label: "Desktop",
						},
					},
				},
			})
		}
	}
}

```

## API Reference

Required parameter

Hover for description

### Chart

Main chart component that renders various chart types.

| Name | Type | Default |
| --- | --- | --- |
| ```<br>ID<br>```<br>Unique identifier for the chart element | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>chart-{randomID}<br>``` |
| ```<br>Variant<br>```<br>Type of chart to render | ```text-muted-foreground<br>Variant<br>``` | ```text-muted-foreground<br>-<br>``` |
| ```<br>Data<br>```<br>Chart data configuration including labels and datasets | ```text-muted-foreground<br>Data<br>``` | ```text-muted-foreground<br>-<br>``` |
| ```<br>Options<br>```<br>Chart configuration options | ```text-muted-foreground<br>Options<br>``` | ```text-muted-foreground<br>{}<br>``` |
| ```<br>ShowLegend<br>```<br>Whether to display the chart legend | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>ShowXAxis<br>```<br>Whether to display the X-axis | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>ShowYAxis<br>```<br>Whether to display the Y-axis | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>ShowXLabels<br>```<br>Whether to display X-axis labels | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>ShowYLabels<br>```<br>Whether to display Y-axis labels | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>ShowXGrid<br>```<br>Whether to display X-axis grid lines | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>ShowYGrid<br>```<br>Whether to display Y-axis grid lines | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Horizontal<br>```<br>Whether to render the chart horizontally | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Stacked<br>```<br>Whether to stack chart elements | ```text-muted-foreground<br>bool<br>``` | ```text-muted-foreground<br>false<br>``` |
| ```<br>Class<br>```<br>Additional CSS classes to apply to the chart container | ```text-muted-foreground<br>string<br>``` | ```text-muted-foreground<br>""<br>``` |
| ```<br>Attributes<br>```<br>Additional HTML attributes to apply to the chart container | ```text-muted-foreground<br>templ.Attributes<br>``` | ```text-muted-foreground<br>nil<br>``` |