import {StorageKey, StorageValue} from "./step-pages.types";

export const getStorageData = (key: StorageKey) => window.localStorage.getItem(key) || '';

export const setStorageData = (key: StorageKey, value: StorageValue) => window.localStorage.setItem(key, value);