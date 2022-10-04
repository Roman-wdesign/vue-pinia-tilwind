export const vAutofocus = {
  mounted: (el: HTMLElement) => {
    el.focus();
    console.log("focus set");
  },
};
