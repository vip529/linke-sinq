// Avatar Constants
export const AVATAR_SIZES = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
} as const;

export const AVATAR_SHAPES = {
  CIRCLE: 'circle',
  SQUARE: 'square',
} as const;

export type AvatarSize = (typeof AVATAR_SIZES)[keyof typeof AVATAR_SIZES];
export type AvatarShape = (typeof AVATAR_SHAPES)[keyof typeof AVATAR_SHAPES];

// Badge Constants
export const BADGE_VARIANTS = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  INFO: 'info',
} as const;

export const BADGE_SIZES = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
} as const;

export type BadgeVariant = (typeof BADGE_VARIANTS)[keyof typeof BADGE_VARIANTS];
export type BadgeSize = (typeof BADGE_SIZES)[keyof typeof BADGE_SIZES];

// Button Constants
export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  GHOST: 'ghost',
  DANGER: 'danger',
} as const;

export const BUTTON_SIZES = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
} as const;

export type ButtonVariant = (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];
export type ButtonSize = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];

// Card Constants
export const CARD_VARIANTS = {
  DEFAULT: 'default',
  ELEVATED: 'elevated',
  OUTLINED: 'outlined',
} as const;

export const CARD_PADDING = {
  NONE: 'none',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
} as const;

export type CardVariant = (typeof CARD_VARIANTS)[keyof typeof CARD_VARIANTS];
export type CardPadding = (typeof CARD_PADDING)[keyof typeof CARD_PADDING];

// Dialog Constants
export const DIALOG_SIZES = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
  FULL: 'full',
} as const;

export type DialogSize = (typeof DIALOG_SIZES)[keyof typeof DIALOG_SIZES];

// Divider Constants
export const DIVIDER_ORIENTATIONS = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
} as const;

export type DividerOrientation = (typeof DIVIDER_ORIENTATIONS)[keyof typeof DIVIDER_ORIENTATIONS];

// Drawer Constants
export const DRAWER_SIDES = {
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  BOTTOM: 'bottom',
} as const;

export const DRAWER_SIZES = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  FULL: 'full',
} as const;

export type DrawerSide = (typeof DRAWER_SIDES)[keyof typeof DRAWER_SIDES];
export type DrawerSize = (typeof DRAWER_SIZES)[keyof typeof DRAWER_SIZES];

// Input Constants
export const INPUT_SIZES = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
} as const;

export const INPUT_STATES = {
  DEFAULT: 'default',
  ERROR: 'error',
  SUCCESS: 'success',
} as const;

export type InputSize = (typeof INPUT_SIZES)[keyof typeof INPUT_SIZES];
export type InputState = (typeof INPUT_STATES)[keyof typeof INPUT_STATES];

// Popover Constants
export const POPOVER_SIDES = {
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left',
} as const;

export const POPOVER_ALIGN = {
  START: 'start',
  CENTER: 'center',
  END: 'end',
} as const;

export type PopoverSide = (typeof POPOVER_SIDES)[keyof typeof POPOVER_SIDES];
export type PopoverAlign = (typeof POPOVER_ALIGN)[keyof typeof POPOVER_ALIGN];

// Progress Constants
export const PROGRESS_VARIANTS = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
} as const;

export const PROGRESS_SIZES = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
} as const;

export type ProgressVariant = (typeof PROGRESS_VARIANTS)[keyof typeof PROGRESS_VARIANTS];
export type ProgressSize = (typeof PROGRESS_SIZES)[keyof typeof PROGRESS_SIZES];

// Select Constants
export const SELECT_SIZES = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
} as const;

export type SelectSize = (typeof SELECT_SIZES)[keyof typeof SELECT_SIZES];

// Skeleton Constants
export const SKELETON_VARIANTS = {
  TEXT: 'text',
  CIRCULAR: 'circular',
  RECTANGULAR: 'rectangular',
} as const;

export type SkeletonVariant = (typeof SKELETON_VARIANTS)[keyof typeof SKELETON_VARIANTS];

// Switch Constants
export const SWITCH_SIZES = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
} as const;

export type SwitchSize = (typeof SWITCH_SIZES)[keyof typeof SWITCH_SIZES];

// Tabs Constants
export const TABS_VARIANTS = {
  DEFAULT: 'default',
  PILLS: 'pills',
} as const;

export type TabsVariant = (typeof TABS_VARIANTS)[keyof typeof TABS_VARIANTS];

// Textarea Constants
export const TEXTAREA_SIZES = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
} as const;

export const TEXTAREA_STATES = {
  DEFAULT: 'default',
  ERROR: 'error',
  SUCCESS: 'success',
} as const;

export const TEXTAREA_RESIZE = {
  NONE: 'none',
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
  BOTH: 'both',
} as const;

export type TextareaSize = (typeof TEXTAREA_SIZES)[keyof typeof TEXTAREA_SIZES];
export type TextareaState = (typeof TEXTAREA_STATES)[keyof typeof TEXTAREA_STATES];
export type TextareaResize = (typeof TEXTAREA_RESIZE)[keyof typeof TEXTAREA_RESIZE];

// Toast Constants
export const TOAST_VARIANTS = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  INFO: 'info',
} as const;

export type ToastVariant = (typeof TOAST_VARIANTS)[keyof typeof TOAST_VARIANTS];

// Tooltip Constants
export const TOOLTIP_SIDES = {
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left',
} as const;

export const TOOLTIP_ALIGN = {
  START: 'start',
  CENTER: 'center',
  END: 'end',
} as const;

export type TooltipSide = (typeof TOOLTIP_SIDES)[keyof typeof TOOLTIP_SIDES];
export type TooltipAlign = (typeof TOOLTIP_ALIGN)[keyof typeof TOOLTIP_ALIGN];
