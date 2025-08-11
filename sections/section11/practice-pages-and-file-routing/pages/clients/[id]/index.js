import React from 'react';
import { useRouter } from 'next/router';

export default function ClientProjects() {
  const router = useRouter();
  const { id: clientId } = router.query;
  console.log(router.query);

  function loadProjectHandler() {
    // router.push(`/clients/${clientId}/projecta`);
    router.push({
      pathname: '/clients/[id]/[clientProjectId]',
      query: { id: clientId, clientProjectId: 'projecta' },
    });
  }

  return (
    <div>
      <h1>Projects of a Client: {clientId}</h1>
      <button onClick={loadProjectHandler}>Load Projects</button>
    </div>
  );
}
