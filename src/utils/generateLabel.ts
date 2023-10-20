import { upperFirst } from "@mantine/hooks";

export default (value: string) => {
  if (value.includes("_mm_name")) {
    return "Myanmar";
  } else if (value.includes("_name")) {
    return "English";
  } else {
    return upperFirst(value);
  }
};
