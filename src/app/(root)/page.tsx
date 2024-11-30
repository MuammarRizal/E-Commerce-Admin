'use client';

import { StoreModal } from '@/components/modals/store-modal';
import Modal from '@/components/ui/modal';
import { useStoreModal } from '@/hooks/use-store-modal';
import { useEffect } from 'react';

const SetupPage = (): JSX.Element => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return <div className="container p-4">Root page</div>;
};

export default SetupPage;
