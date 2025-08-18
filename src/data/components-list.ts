export interface ComponentInfo {
  name: string;
  displayName: string;
  description: string;
  category: string;
  hasJavaScript: boolean;
  installCommand: string;
}

export const TEMPLUI_COMPONENTS: ComponentInfo[] = [
  {
    name: "accordion",
    displayName: "Accordion",
    description: "A collapsible content area for organizing information",
    category: "layout",
    hasJavaScript: false,
    installCommand: "templui add accordion"
  },
  {
    name: "alert",
    displayName: "Alert",
    description: "Display important messages or notifications to users",
    category: "feedback",
    hasJavaScript: false,
    installCommand: "templui add alert"
  },
  {
    name: "aspectratio",
    displayName: "Aspect Ratio",
    description: "Maintain consistent proportions for content containers",
    category: "layout",
    hasJavaScript: false,
    installCommand: "templui add aspectratio"
  },
  {
    name: "avatar",
    displayName: "Avatar",
    description: "Display user profile pictures or placeholder images",
    category: "display",
    hasJavaScript: true,
    installCommand: "templui add avatar"
  },
  {
    name: "badge",
    displayName: "Badge",
    description: "Small status indicators and labels",
    category: "display",
    hasJavaScript: false,
    installCommand: "templui add badge"
  },
  {
    name: "breadcrumb",
    displayName: "Breadcrumb",
    description: "Navigation component showing current page location",
    category: "navigation",
    hasJavaScript: false,
    installCommand: "templui add breadcrumb"
  },
  {
    name: "button",
    displayName: "Button",
    description: "Interactive element that triggers actions when clicked",
    category: "form",
    hasJavaScript: false,
    installCommand: "templui add button"
  },
  {
    name: "calendar",
    displayName: "Calendar",
    description: "Date picker and calendar interface",
    category: "form",
    hasJavaScript: true,
    installCommand: "templui add calendar"
  },
  {
    name: "card",
    displayName: "Card",
    description: "Flexible content container with optional header and footer",
    category: "layout",
    hasJavaScript: false,
    installCommand: "templui add card"
  },
  {
    name: "carousel",
    displayName: "Carousel",
    description: "Slideshow component for displaying multiple items",
    category: "display",
    hasJavaScript: true,
    installCommand: "templui add carousel"
  },
  {
    name: "chart",
    displayName: "Chart",
    description: "Data visualization with various chart types",
    category: "display",
    hasJavaScript: true,
    installCommand: "templui add chart"
  },
  {
    name: "checkbox",
    displayName: "Checkbox",
    description: "Binary choice input for forms",
    category: "form",
    hasJavaScript: false,
    installCommand: "templui add checkbox"
  },
  {
    name: "checkboxcard",
    displayName: "Checkbox Card",
    description: "Card-style checkbox for enhanced selection experience",
    category: "form",
    hasJavaScript: false,
    installCommand: "templui add checkboxcard"
  },
  {
    name: "code",
    displayName: "Code",
    description: "Syntax highlighted code display with copy functionality",
    category: "display",
    hasJavaScript: true,
    installCommand: "templui add code"
  },
  {
    name: "datepicker",
    displayName: "Date Picker",
    description: "Date selection input with calendar popup",
    category: "form",
    hasJavaScript: true,
    installCommand: "templui add datepicker"
  },
  {
    name: "drawer",
    displayName: "Drawer",
    description: "Slide-out panel for navigation or content",
    category: "overlay",
    hasJavaScript: true,
    installCommand: "templui add drawer"
  },
  {
    name: "dropdown",
    displayName: "Dropdown",
    description: "Contextual menu with action items",
    category: "overlay",
    hasJavaScript: true,
    installCommand: "templui add dropdown"
  },
  {
    name: "form",
    displayName: "Form",
    description: "Form layout and validation components",
    category: "form",
    hasJavaScript: false,
    installCommand: "templui add form"
  },
  {
    name: "icon",
    displayName: "Icon",
    description: "Scalable vector icons with various styles",
    category: "display",
    hasJavaScript: false,
    installCommand: "templui add icon"
  },
  {
    name: "input",
    displayName: "Input",
    description: "Text input field with validation support",
    category: "form",
    hasJavaScript: true,
    installCommand: "templui add input"
  },
  {
    name: "inputotp",
    displayName: "Input OTP",
    description: "One-time password input with individual digit fields",
    category: "form",
    hasJavaScript: true,
    installCommand: "templui add inputotp"
  },
  {
    name: "label",
    displayName: "Label",
    description: "Form field labels with accessibility support",
    category: "form",
    hasJavaScript: true,
    installCommand: "templui add label"
  },
  {
    name: "modal",
    displayName: "Modal",
    description: "Overlay dialog for important content or actions",
    category: "overlay",
    hasJavaScript: true,
    installCommand: "templui add modal"
  },
  {
    name: "pagination",
    displayName: "Pagination",
    description: "Navigation between multiple pages of content",
    category: "navigation",
    hasJavaScript: false,
    installCommand: "templui add pagination"
  },
  {
    name: "popover",
    displayName: "Popover",
    description: "Floating content container with positioning",
    category: "overlay",
    hasJavaScript: true,
    installCommand: "templui add popover"
  },
  {
    name: "progress",
    displayName: "Progress",
    description: "Visual indicator for task completion status",
    category: "feedback",
    hasJavaScript: true,
    installCommand: "templui add progress"
  },
  {
    name: "radio",
    displayName: "Radio",
    description: "Single choice selection from multiple options",
    category: "form",
    hasJavaScript: false,
    installCommand: "templui add radio"
  },
  {
    name: "radiocard",
    displayName: "Radio Card",
    description: "Card-style radio button for enhanced selection",
    category: "form",
    hasJavaScript: false,
    installCommand: "templui add radiocard"
  },
  {
    name: "rating",
    displayName: "Rating",
    description: "Star rating input for feedback and reviews",
    category: "form",
    hasJavaScript: true,
    installCommand: "templui add rating"
  },
  {
    name: "selectbox",
    displayName: "Select Box",
    description: "Dropdown selection with search and multi-select",
    category: "form",
    hasJavaScript: true,
    installCommand: "templui add selectbox"
  },
  {
    name: "separator",
    displayName: "Separator",
    description: "Visual divider between content sections",
    category: "layout",
    hasJavaScript: false,
    installCommand: "templui add separator"
  },
  {
    name: "skeleton",
    displayName: "Skeleton",
    description: "Loading placeholder for content areas",
    category: "feedback",
    hasJavaScript: false,
    installCommand: "templui add skeleton"
  },
  {
    name: "slider",
    displayName: "Slider",
    description: "Range input for selecting numeric values",
    category: "form",
    hasJavaScript: true,
    installCommand: "templui add slider"
  },
  {
    name: "table",
    displayName: "Table",
    description: "Data table with sorting and filtering capabilities",
    category: "display",
    hasJavaScript: false,
    installCommand: "templui add table"
  },
  {
    name: "tabs",
    displayName: "Tabs",
    description: "Tabbed interface for organizing related content",
    category: "navigation",
    hasJavaScript: true,
    installCommand: "templui add tabs"
  },
  {
    name: "tagsinput",
    displayName: "Tags Input",
    description: "Input field for adding and removing tags",
    category: "form",
    hasJavaScript: true,
    installCommand: "templui add tagsinput"
  },
  {
    name: "textarea",
    displayName: "Textarea",
    description: "Multi-line text input with auto-resize",
    category: "form",
    hasJavaScript: true,
    installCommand: "templui add textarea"
  },
  {
    name: "timepicker",
    displayName: "Time Picker",
    description: "Time selection input with hour/minute controls",
    category: "form",
    hasJavaScript: true,
    installCommand: "templui add timepicker"
  },
  {
    name: "toast",
    displayName: "Toast",
    description: "Temporary notification messages",
    category: "feedback",
    hasJavaScript: true,
    installCommand: "templui add toast"
  },
  {
    name: "toggle",
    displayName: "Toggle",
    description: "Switch control for binary state changes",
    category: "form",
    hasJavaScript: false,
    installCommand: "templui add toggle"
  },
  {
    name: "tooltip",
    displayName: "Tooltip",
    description: "Contextual information display on hover",
    category: "overlay",
    hasJavaScript: false,
    installCommand: "templui add tooltip"
  }
];

export function getComponentByName(name: string): ComponentInfo | undefined {
  return TEMPLUI_COMPONENTS.find(component => 
    component.name.toLowerCase() === name.toLowerCase()
  );
}

export function getComponentsByCategory(category: string): ComponentInfo[] {
  return TEMPLUI_COMPONENTS.filter(component => 
    component.category.toLowerCase() === category.toLowerCase()
  );
}