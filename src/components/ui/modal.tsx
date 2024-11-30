'use client';

import { ModalProps } from '@/types/modal.types';
import { Dialog, DialogContent, DialogHeader } from './dialog';
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog';

const Modal: React.FC<ModalProps> = ({
  title,
  description,
  isOpen,
  onClose,
  children
}: ModalProps): JSX.Element => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  return (
    <>
      <Dialog open={isOpen} onOpenChange={onChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div>{children}</div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Modal;
