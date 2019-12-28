import { IRootState } from './state';

export enum RootMutationsType {
    SHOW_LOGIN_DIALOG = 'SHOW_LOGIN_DIALOG',
    HIDE_LOGIN_DIALOG = 'HIDE_LOGIN_DIALOG'
}

export const RootMutations = {
    [RootMutationsType.SHOW_LOGIN_DIALOG]: (state: IRootState, componentName: string) => {
        state.loginModalVisible = true;
    },
    [RootMutationsType.HIDE_LOGIN_DIALOG]: (state: IRootState) => {
        state.loginModalVisible = false;
    },
};