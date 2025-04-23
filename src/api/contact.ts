import { useState } from 'react';

import { ContactForm } from '@/models/contactModel';

import api from './api';

export function usePostContact() {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);

  const onMutate = async (messageBody: ContactForm, onSuccess: () => void) => {
    try {
      setResponse(null);
      setLoading(true);
      const res = await api.post(`contact`, messageBody);
      setResponse(res.data ?? '');
    } catch {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 8000);
    } finally {
      onSuccess();
      setLoading(false);
      setTimeout(() => {
        setResponse(null);
      }, 10000);
    }
  };

  return {
    onMutate,
    response,
    loading,
    error,
  };
}
