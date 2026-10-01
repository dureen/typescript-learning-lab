/**
 * Advanced Lesson 04 – Template Literal Types
 */

type EventName = "click" | "focus" | "blur";
type HandlerName = `on${Capitalize<EventName>}`;

// "onClick" | "onFocus" | "onBlur"

type CssValue = `${number}px` | `${number}%` | "auto";

const width: CssValue = "100px";
const height: CssValue = "50%";

console.log(width, height);
