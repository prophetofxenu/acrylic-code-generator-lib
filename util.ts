import Color from "./color";


export function replacer(key: any, value: any) {
  if (value instanceof Map) {
    return {
      dataType: "Map",
      value: Array.from(value.entries())
    };
  } else if (value instanceof Color) {
    return {
      dataType: "Color",
      value: {
        r: value.r,
        g: value.g,
        b: value.b
      }
    }
  } else {
    return value;
  }
}

export function reviver(key: any, value: any) {
  if (typeof value === "object" && value !== null) {
    if (value.dataType === "Map") {
      return new Map(value.value);
    } else if (value.dataType === "Color") {
      const val = value.value;
      return Color.fromRgb(val.r, val.g, val.b);
    }
  }
  return value;
}
