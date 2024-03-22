import Container from "@/components/Container";
import { useFadeIn } from "@/hooks/useFadeIn";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

interface Service {
  serviceName: string;
  imageUrl: string;
  features?: string[];
}

const AddService = () => {
  const [features, setFeatures] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Service>();

  const variants = useFadeIn();

  const queryClient = useQueryClient();

  const { mutateAsync, isError, isSuccess } = useMutation<
    Service,
    Error,
    Service
  >({
    mutationFn: async (data) => {
      try {
        const response = await axios.post(
          "https://frontend-assignment-5-server.vercel.app/api/v1/services",
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
        console.log("Error creating service:", error);
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("Service added successfully");
      reset();
    }
  }, [isSuccess, reset]);

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

  const onSubmit = async (data: Service) => {
    try {
      data.features = features.filter((feature) => feature.trim() !== "");
      await mutateAsync(data);
      setFeatures([]);
    } catch (error) {
      console.error("Error creating service:", error);
    }
  };

  return (
    <Container>
      <motion.div variants={variants} initial="hidden" animate="visible">
        <h1 className="text-center mb-12">Add a service</h1>
        <form
          className="w-full rounded-lg md:w-3/5 mx-auto space-y-4 p-8 bg-gradient-to-tr from-blue-100 to-pink-100  "
          onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col ">
            <label htmlFor="serviceName">Service Name:</label>
            <input
              type="text"
              id="serviceName"
              {...register("serviceName", { required: true })}
              style={{ border: "1px solid #ccc", padding: "5px" }}
            />
            {errors.serviceName && <p>{errors.serviceName.message}</p>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="imageUrl">Image URL:</label>
            <input
              type="text"
              id="imageUrl"
              {...register("imageUrl", { required: true })}
              style={{ border: "1px solid #ccc", padding: "5px" }}
            />
            {errors.imageUrl && <p>{errors.imageUrl.message}</p>}
          </div>

          <div className="">
            <label className="mr-2">Features:</label>
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-center ">
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

          {errors.features && <p>{errors.features.message}</p>}

          <div className="flex justify-center">
            <button
              className="bg-blue-500 mx-auto hover:bg-blue-600 text-white text-xl px-12  py-2 rounded-lg mb-2"
              type="submit"
              disabled={isError}>
              {isError ? "Saving..." : "Add Service"}
            </button>
          </div>
        </form>
      </motion.div>
    </Container>
  );
};

export default AddService;
