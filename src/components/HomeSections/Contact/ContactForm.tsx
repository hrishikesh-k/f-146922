import React from 'react';
import { useState } from 'react';
import { useTranslations } from 'use-intl';

import { usePostContact } from '@/api/contact';
import Loader from '@/components/Shared/Loader';

export default function ContactForm() {
  const t = useTranslations();
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const { error, loading, onMutate, response } = usePostContact();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSuccess = () => {
    setForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onMutate(form, onSuccess);
  };

  return (
    <form onSubmit={handleSubmit} className="relative mt-4 grid gap-6 w-full">
      <div>
        <label htmlFor="name" className="block mb-1 text-textColor text-sm">
          {t('formName')}
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-primary text-textColor border-4 border-textColor focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-1 text-textColor text-sm">
          {t('formEmail')}
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-primary text-textColor border-4 border-textColor focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block mb-1 text-textColor text-sm">
          {t('formSubject')}
        </label>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-primary text-textColor border-4 border-textColor focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-1 text-textColor text-sm">
          {t('formMessage')}
        </label>
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-primary text-textColor border-4 border-textColor focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      <button
        name="submit form"
        type="submit"
        disabled={loading}
        className="w-fit px-6 py-2 border-4 border-borderColor cursor-pointer text-textColor hover:opacity-60 hover:scale-105 transition"
      >
        {t('sendMessage')}
      </button>
      {loading && (
        <div className="flex flex-wrap content-center justify-center absolute t-0 l-0 w-full h-full dark:bg-[rgba(0,0,0,0.5)] bg-[rgba(0,0,0,0.1)]">
          <div>
            <Loader invert />
          </div>
        </div>
      )}
      {error && (
        <div className="bg-red-800 dark:bg-red-400 text-center text-primary p-5">
          {t('contactError')}
        </div>
      )}
      {response && (
        <div className="bg-green-800 dark:bg-green-400  text-center text-primary p-5">
          {t('contactSuccess')}
        </div>
      )}
    </form>
  );
}
