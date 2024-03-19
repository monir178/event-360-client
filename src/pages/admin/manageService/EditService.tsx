import { useGetServices } from "@/api/service.hook";

import { Skeleton } from "@/components/ui/skeleton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const EditService = () => {
  const { data: services, isLoading, isError, refetch } = useGetServices();
  console.log(services);
  const queryClient = useQueryClient();

  const { mutateAsync: deleteService } = useMutation({
    mutationFn: async (serviceId) => {
      return await axios.delete(
        `http://localhost:5000/api/v1/services/${serviceId}`
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["services"],
      });
    },
  });

  // Function to handle service deletion
  const handleDeleteService = async (serviceId) => {
    try {
      await deleteService(serviceId);
      toast.success("Service deleted Successfully");
      refetch();
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

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
    <div>
      <h1>Edit Service</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Features</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {services.map((service, index) => (
                <tr key={service._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="flex  gap-3 flex-col">
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
                  <td>
                    {service.features.map((feature, index) => (
                      <p key={index} className="flex gap-1">
                        <span className="text-blue-600 font-semibold">
                          {index + 1}.
                        </span>
                        {feature}
                      </p>
                    ))}
                  </td>
                  <td className="flex flex-col gap-2">
                    <button className="bg-primary hover:bg-blue-700 text-white rounded-lg px-2 py-1 uppercase">
                      Update
                    </button>
                    <button
                      onClick={() => {
                        handleDeleteService(service._id);
                      }}
                      className="bg-destructive hover:bg-red-700 text-white rounded-lg  py-1 px-2 uppercase">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EditService;
