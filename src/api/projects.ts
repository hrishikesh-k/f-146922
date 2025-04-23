import { useEffect, useState } from 'react';

import { Project } from '@/models/projectModel';

import api from './api';

export function useFetchProjects(type: 'main' | 'design' | 'intranet' = 'main') {
  const [data, setData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const onMutate = async () => {
      try {
        const res = await api.get(`projects/${type}`);
        setData(res.data ?? []);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    onMutate();
  }, [type]);
  return {
    data,
    loading,
    error,
  };
}
