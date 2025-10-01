import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import {initialPrograms} from "./programs/lib.jsx";

export const useProgressionStore = create()(
    persist(
        (set) => ({
            photosSolved: false,
            achievements: 0,
            availablePrograms: initialPrograms,
            addAvailableProgram: (program) => set(state => ({availablePrograms: [...state.availablePrograms, program]})),
            removeAvailableProgram: (program) => set(state => ({availablePrograms: state.availablePrograms.filter(p => p !== program)})),
            addAchievement: () => set(state => ({ achievements: state.achievements + 1 })),
            solvePhotos: () => set({ photosSolved: true }),
        }),
        {
            name: 'progression-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage),
        },
    ),
)
