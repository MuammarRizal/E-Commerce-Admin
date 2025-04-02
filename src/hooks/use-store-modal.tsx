import { useStoreModalStore } from '@/types/modal.types';
import { create } from 'zustand';

export const useStoreModal = create<useStoreModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: false }),
  onClose: () => set({ isOpen: false })
}));
