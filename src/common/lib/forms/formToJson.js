import isValidElement from "./isValidElement";

export default (event, formId) => {
  const form = document.getElementById(formId);
  return [].reduce.call(
    form.elements,
    (data, element) => {
      const temp = data;
      if (isValidElement(element)) {
        temp[element.name] = element.value;
      }
      return temp;
    },
    {}
  );
};
