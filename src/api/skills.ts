import { useEffect, useState } from "react";
import api from "./api";
import { SkillsResponse } from "@/models/skillModel";


export function useFetchSkills () {
  const [data, setData] = useState<SkillsResponse>({} as SkillsResponse);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const onMutate = async () => {
      try {
        const res = await api.get(`skills`);
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