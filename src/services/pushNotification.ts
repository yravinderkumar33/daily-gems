import { LocalNotifications } from "@capacitor/local-notifications"

export const register = async () => {
    return LocalNotifications.requestPermissions();
}

const addListeners = async () => {
    return LocalNotifications.addListener('localNotificationReceived', (notification) => {
        console.log('Local Notification Received:', notification);
    });
}

export const init = async () => {
    try {
        await register();
        await addListeners();
    } catch (error) {
        console.log("error sending local notification", error);
    }
}

export const generate = async (payload: Record<string, any>) => {
    return LocalNotifications.schedule({
        notifications: [
            {
                title: "Quote for the day",
                body: payload?.text,
                id: 1,
                schedule: { at: new Date(Date.now() + 1000 * 10) }
            }
        ]
    });
}

export const cleanup = async () => {
    return LocalNotifications.removeAllListeners();
}