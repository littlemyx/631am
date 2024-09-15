import { create } from "zustand";
import { persist } from "zustand/middleware";

interface NotificationsState {
  isRequesting: boolean;
  isPermited: boolean | null;

  request: () => void;
  send: () => void;
}

export const useNotificationsStore = create<NotificationsState>()(
  (set, get) => ({
    isPermited: null,
    isRequesting: false,

    request: async () => {
      set({ isRequesting: true });
      const result = await Notification.requestPermission();
      set({ isPermited: result === "granted", isRequesting: false });
    },
    send: async () => {
      const { isPermited } = get();
      if (isPermited) {
        const notification = new Notification("Hello, world!");
      }
    }
  })
);

const permissionStatusHandler = (state: PermissionState) => {
  switch (state) {
    case "granted":
      useNotificationsStore.setState({ isPermited: true });
      break;
    case "denied":
    case "prompt":
    default:
      useNotificationsStore.setState({ isPermited: false });
      break;
  }
};

if (typeof window === "object") {
  navigator.permissions
    .query({ name: "notifications" })
    .then(permissionStatus => {
      permissionStatusHandler(permissionStatus.state);

      permissionStatus.onchange = () => {
        permissionStatusHandler(permissionStatus.state);
      };
    });
}
