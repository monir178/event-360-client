import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const DeleteButton = ({
  serviceId,
  refetch,
}: {
  serviceId: string;
  refetch: () => void;
}) => {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteService } = useMutation({
    mutationFn: async () => {
      return await axios.delete(
        `https://frontend-assignment-5-server.vercel.app/api/v1/services/${serviceId}`
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["services"],
      });
    },
  });

  const handleDeleteService = async () => {
    try {
      const confirmDeletion = window.confirm(
        "Are you sure you want to delete this service?"
      );
      if (!confirmDeletion) {
        return;
      }

      await deleteService();
      toast.success("Service deleted Successfully");
      refetch();
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  return (
    <button
      onClick={handleDeleteService}
      className="bg-destructive w-20 hover:bg-red-700 text-white rounded-lg py-1 px-2 uppercase">
      Delete
    </button>
  );
};

export default DeleteButton;
