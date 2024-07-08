import { useEffect } from "react"
import { cleanup, init } from '../services/pushNotification'

export const useNotifications = (props: Record<string, any>) => {
    useEffect(() => {
        init();
        return () => {
            cleanup()
        };
    }, []);
}