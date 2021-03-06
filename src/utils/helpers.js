import { ACTIVE_PAUSED_GAME_STATUS, ACTIVE_RUNNING_GAME_STATUS, COMPLETE_GAME_STATUS } from './constants'

export const isGameActive = status => (status === ACTIVE_RUNNING_GAME_STATUS) || (status === ACTIVE_PAUSED_GAME_STATUS)

export const isGameComplete = status => status === COMPLETE_GAME_STATUS

export const isGamePaused = status => status === ACTIVE_PAUSED_GAME_STATUS

export const isGameRunning = status => status === ACTIVE_RUNNING_GAME_STATUS

export const isWithinBounds = (x, y, size) => x >= 0 && y >= 0 && x < size && y < size