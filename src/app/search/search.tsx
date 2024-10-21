'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') ?? '');

  const handleDataSearch = (event: FormEvent) => {
    event.preventDefault();
    router.push(`/search?q=${query}`);
  };

  console.log(query);

  return (
    <form className="grid justify-end" onSubmit={handleDataSearch}>
      <input
        type="text"
        placeholder="Search product ..."
        value={query}
        onChange={(event) => setQuery(event.currentTarget.value)}
        className="border border-gray-500 px-3 py-1.5 rounded-md m-2 placeholder:italic font-mono "
      />
    </form>
  );
}
