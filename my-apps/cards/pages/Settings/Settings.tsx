import { useNotificationsStore } from "../../stores/notifications";
import { LoadingIcon } from "@/icons/Loading";
import { Button } from "@/components/Button";

import styles from "./Settings.module.css";
import { send } from "process";
import { useEffect, useState } from "react";

export const Settings = () => {
  const {
    requestNotificationPermission,
    isPermissionRequesting,
    isNotificationsPermited,
    sendNotification
  } = useNotificationsStore(state => ({
    requestNotificationPermission: state.request,
    isPermissionRequesting: state.isRequesting,
    isNotificationsPermited: state.isPermited,
    sendNotification: state.send
  }));

  const [notificationsPermissionState, setNotificationsPermissionState] =
    useState(isNotificationsPermited);

  useEffect(() => {
    setNotificationsPermissionState(isNotificationsPermited);
  }, [isNotificationsPermited]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.setting}>
        <p>Are notifications enabled:</p>
        <input
          disabled={
            isPermissionRequesting || (isNotificationsPermited ?? false)
          }
          checked={notificationsPermissionState ?? false}
          type="checkbox"
          onChange={() => {
            requestNotificationPermission();
          }}
        />
        {isPermissionRequesting && <LoadingIcon width={20} height={20} />}
        {isNotificationsPermited && (
          <Button
            onClick={() => {
              sendNotification();
            }}
          >
            Test notification
          </Button>
        )}
      </div>
    </div>
  );
};
