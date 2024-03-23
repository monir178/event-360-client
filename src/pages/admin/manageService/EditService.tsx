import { useState } from "react";
import { useGetServices } from "@/api/service.hook";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import UpdateService from "./UpdateService";
import DeleteButton from "./DeleteService";
import { TService } from "@/types/eventType";
import { motion } from "framer-motion";
import { useFadeIn } from "@/hooks/useFadeIn";

const EditService = () => {
  const { data: services, isLoading, isError, refetch } = useGetServices();
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<TService | null>(null);

  const variants = useFadeIn();

  if (isLoading) {
    return (
      <div className="flex flex-col space-y-3 ">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }
  if (isError) {
    return <p>Something is missing</p>;
  }

  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      <h1 className="text-center mb-4">Edit Service</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {services.map((service: TService, index: number) => (
                <tr key={service._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="flex  gap-3 items-center">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={service.imageUrl}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{service.serviceName}</div>
                      </div>
                    </div>
                  </td>

                  <td className="flex flex-col gap-2">
                    <button
                      onClick={() => {
                        setOpen(true);
                        setSelectedService(service);
                      }}
                      className="bg-primary w-20 hover:bg-blue-700 text-white rounded-lg px-2 py-1 uppercase">
                      Update
                    </button>
                    <DeleteButton serviceId={service._id} refetch={refetch} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Service</DialogTitle>
          </DialogHeader>
          {selectedService && (
            <UpdateService
              service={selectedService}
              refetch={refetch}
              closeDialogue={() => setOpen(false)}
            />
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default EditService;
