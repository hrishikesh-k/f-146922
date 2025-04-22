import { useEffect, useState } from "react";
import api from "./api";
import { WorkExperience } from "@/models/experienceModel";


export function useFetchExperiences () {
  const [data, setData] = useState<WorkExperience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const onMutate = async () => {
      try {
        const res = await api.get(`experiences`);
        setData(res.data ?? []);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    onMutate();
  }, []);
  return {
    data,
    loading,
    error
  }
};