export const publish = (eventName: string, message: any) => {
  document.body.dispatchEvent(
    new CustomEvent(eventName, {
      detail: message
    })
  );
};

export const subscribe = (eventName: string, listener: (e) => void) => {
  document.body.addEventListener(eventName, listener);
};
