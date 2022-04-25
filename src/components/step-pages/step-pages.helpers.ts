import {StorageKey} from "./step-pages.types";

export const getStorageDataByKey = (key: StorageKey) => JSON.parse(window.localStorage.getItem(key) || '')