import { useState } from 'react'

import first from '../assets/images/1.png'
import second from '../assets/images/2.png'
import third from '../assets/images/3.png'
import fouth from '../assets/images/4.png'

export const initialData = [
  {id:1, img: first, value: '«Рождение Венеры» Сандро Боттичелли', old: '2 000 000$', new: '1 000 000$', sold: false, basket: false},
  {id:2, img: second, value: '«Тайная вечеря» Леонардо да Винчи', old: null, new: '3 000 000$', sold: false, basket: false},
  {id:3, img: third, value: '«Сотворение Адама» Микеланджело', old: '6 000 000$', new: '5 000 000$', sold: false, basket: false},
  {id:4, img: fouth, value: '«Урок анатомии»  Рембрандт', old: null, new: null , sold: true, basket: false}
]

export const useLocalStorage = (key, initialValue = initialData) => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}