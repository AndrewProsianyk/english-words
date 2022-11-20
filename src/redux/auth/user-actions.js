import { createAction } from "@reduxjs/toolkit";

export const setCurrentUser = createAction('user/setCurrentUser')
export const removeUser = createAction('user/removeUser')

export const addTheme = createAction('user/addTheme')
