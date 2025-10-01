import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useProgressionStore = create()(
    persist(
        (set) => ({
            photosSolved: false,
            achievements: 0,
            addAchievement: () => set(state => ({ achievements: state.achievements + 1 })),
            solvePhotos: () => set({ photosSolved: true }),
        }),
        {
            name: 'progression-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage),
        },
    ),
)
