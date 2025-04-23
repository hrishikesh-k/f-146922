import { useEffect, useState } from 'react';

import { EducationResponse } from '@/models/educationModel';

import api from './api';

export function useFetchEducations() {
  const [data, setData] = useState<EducationResponse>({} as EducationResponse);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const onMutate = async () => {
      try {
        const res = await api.get(`educations`);
        setData(res.data ?? {});
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
    error,
  };
}
