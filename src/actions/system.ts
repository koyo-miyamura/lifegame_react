export type SystemActionType = "open_toast" | "close_toast";

export type SystemAction = {
  type: SystemActionType;
  toastMessage?: string;
};

export const openToast = (message: string): SystemAction => ({
  type: "open_toast",
  toastMessage: message,
});

export const closeToast = (): SystemAction => ({
  type: "close_toast",
});
