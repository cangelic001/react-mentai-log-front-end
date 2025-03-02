import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import * as logService from '../../services/logService';

const LogForm = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    text: '',
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (logId) {
      props.handleUpdateLog(logId, formData);
    } else {
      props.handleAddLog(logData);
    }
  };

  const { logId } = useParams();
  console.log(logId);

  useEffect(() => {
    const fetchLog = async () => {
      const logData = await logService.show(logId);
      setFormData(logData);
    };
    if (logId) fetchLog();
    return () => setFormData({ title: '', text: '' });
  }, [logId]);

  return (
    <div>
        <h1>{logId ? 'Edit Log' : 'New Log'}</h1>

        <form onSubmit={handleSubmit}>

            <div>
            <label htmlFor='title-input'>Title</label>
            <input
            required
            type='text'
            name='title'
            id='title-input'
            value={formData.title}
            onChange={handleChange}
            />
            </div>

            <div>
            <label htmlFor='text-input'>Text</label>
            <textarea
            required
            type='text'
            name='text'
            id='text-input'
            value={formData.text}
            onChange={handleChange}
            />
            </div>
            
            <div>
            <button type='submit'>SUBMIT</button>
            </div>

        </form>
    </div>
  );
};

export default LogForm;
