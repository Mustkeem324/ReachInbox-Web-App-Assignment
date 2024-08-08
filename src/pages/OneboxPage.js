// src/pages/OneboxPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomEditor from '../components/CustomEditor';

const OneboxPage = () => {
  const [threads, setThreads] = useState([]);
  const [selectedThread, setSelectedThread] = useState(null);

  useEffect(() => {
    fetchThreads();
  }, []);

  const fetchThreads = async () => {
    try {
      const response = await axios.get('/onebox/list');
      setThreads(response.data);
    } catch (error) {
      console.error('Failed to fetch threads', error);
    }
  };

  const handleDelete = async (threadId) => {
    try {
      await axios.delete(`/onebox/${threadId}`);
      fetchThreads();
    } catch (error) {
      console.error('Failed to delete thread', error);
    }
  };

  const handleReply = async (threadId, content) => {
    try {
      await axios.post(`/reply/${threadId}`, {
        from: 'email',
        to: 'email',
        subject: 'Re: Your Subject',
        body: content,
      });
    } catch (error) {
      console.error('Failed to send reply', error);
    }
  };

  return (
    <div className="onebox-page">
      <h1>Onebox</h1>
      <ul>
        {threads.map(thread => (
          <li key={thread.id} onClick={() => setSelectedThread(thread.id)}>
            {thread.subject}
            <button onClick={() => handleDelete(thread.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {selectedThread && (
        <div className="reply-box">
          <CustomEditor />
          <button onClick={() => handleReply(selectedThread, 'Your reply content')}>Send Reply</button>
        </div>
      )}
    </div>
  );
};

export default OneboxPage;
