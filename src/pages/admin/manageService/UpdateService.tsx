import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { TService } from "@/types/eventType";

const UpdateService = ({
  service,
  refetch,
  closeDialogue,
}: {
  service: TService;
  refetch: () => void;
  closeDialogue: () => void;
}) => {
  const [updatedService, setUpdatedService] = useState<TService>(service);
  const [features, setFeatures] = useState<string[]>(service.features || []);
  const queryClient = useQueryClient();

  const { mutateAsync, isError, isSuccess } = useMutation<
    TService,
    Error,
    TService
  >({
    mutationFn: async (data) => {
      try {
        const response = await axios.patch(
          `https://frontend-assignment-5-server.vercel.app/api/v1/services/${data._id}`,
          data,
          {
            headers: {
              "content-type": "application/json",
            },
          }
        );
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.log("Error updating service:", error);
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
      refetch();
      closeDialogue();
    },
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("Service updated successfully");
    }
  }, [isSuccess]);

  const handleAddFeature = () => {
    setFeatures([...features, ""]);
  };

  const handleRemoveFeature = (index: number) => {
    const updatedFeatures = [...features];
    updatedFeatures.splice(index, 1);
    setFeatures(updatedFeatures);
  };

  const handleFeatureChange = (index: number, value: string) => {
    const updatedFeatures = [...features];
    updatedFeatures[index] = value;
    setFeatures(updatedFeatures);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form submission
    try {
      updatedService.features = features.filter(
        (feature) => feature.trim() !== ""
      );

      console.log("Payload Data:", updatedService); // Log the payload data

      await mutateAsync(updatedService);
    } catch (error) {
      console.error("Error updating service:", error);
    }
  };

  return (
    <div>
      <form
        className="w-full rounded-lg space-y-4 p-4 bg-gradient-to-tr from-blue-100 to-pink-100"
        onSubmit={onSubmit}>
        <div className="flex flex-col">
          <label htmlFor="serviceName">Service Name:</label>
          <input
            type="text"
            id="serviceName"
            value={updatedService.serviceName}
            onChange={(e) =>
              setUpdatedService({
                ...updatedService,
                serviceName: e.target.value,
              })
            }
            style={{ border: "1px solid #ccc", padding: "5px" }}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            value={updatedService.imageUrl}
            onChange={(e) =>
              setUpdatedService({ ...updatedService, imageUrl: e.target.value })
            }
            style={{ border: "1px solid #ccc", padding: "5px" }}
          />
        </div>

        <div className="">
          <label className="mr-2">Features:</label>
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4 items-center">
              <input
                className="w-4/5 mb-1"
                type="text"
                placeholder={`Feature ${index + 1}`}
                value={feature}
                onChange={(e) => handleFeatureChange(index, e.target.value)}
                style={{ border: "1px solid #ccc", padding: "5px" }}
              />
              <button
                className="bg-red-500 text-white px-4 py-1 rounded-lg mb-2"
                type="button"
                onClick={() => handleRemoveFeature(index)}>
                Remove
              </button>
            </div>
          ))}

          <button
            className="bg-green-600 text-white px-4 py-1 rounded-lg mb-2"
            type="button"
            onClick={handleAddFeature}>
            Add Feature
          </button>
        </div>

        <div className="flex justify-center">
          <button
            className="bg-blue-500 mx-auto hover:bg-blue-600 text-white text-xl px-12 py-2 rounded-lg mb-2"
            type="submit"
            disabled={isError}>
            {isError ? "Updating..." : "Update Service"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateService;
