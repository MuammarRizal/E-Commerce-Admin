'use client';

import { useStoreModal } from '@/hooks/use-store-modal';
import Modal from '../ui/modal';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const formSchema = z.object({
  name: z.string().min(1)
});

export const StoreModal = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: ''
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const storeModal = useStoreModal();
  return (
    <Modal
      title="Buat Store"
      description="Tambahkan store untuk membuat product dan kategori"
      isOpen={storeModal.isOpen}
      onClose={() => {
        storeModal.onClose;
      }}
    >
      <div className="container space-y-4 py-2 pb-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Nama Toko" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
              <Button
                variant="outline"
                onClick={storeModal.onClose}
                className="bg-red-600"
              >
                Cancel
              </Button>
              <Button type="submit">Continue</Button>
            </div>
          </form>
        </Form>
      </div>
    </Modal>
  );
};
