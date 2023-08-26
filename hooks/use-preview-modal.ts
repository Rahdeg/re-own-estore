import { create } from "zustand";

interface PreviewModalProps {
  isOpen: boolean;
  data?: any;
  onOpen: (data: any) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalProps>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: any) => set({ data: data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
