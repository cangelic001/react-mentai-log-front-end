
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as logService from "../../services/logService";
import "./LogForm.css";

const LogForm = (props) => {
  const { logId } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    text: "",
  });

  useEffect(() => {
    const fetchLog = async () => {
      const logData = await logService.show(logId);
      setFormData(logData);
    };
    if (logId) fetchLog();
    return () => setFormData({ title: '', text: '' });
  }, [logId]);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (logId) {
        props.handleUpdateLog(logId, formData);
      } else {
        props.handleAddLog(formData);
      }
  };

  return (
    <main className="log-form-container">
        <div className="log-form">
            <h1 className="mentai-text">{logId ? "Edit Log" : "New Log"}</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title-input">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title-input"
                        value={formData.title}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="text-input">Text</label>
                    <textarea
                        required
                        name="text"
                        id="text-input"
                        value={formData.text}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                <button type="submit" className="btn-submit">SUBMIT</button>
            </form>
        </div>
    </main>
  );
};

export default LogForm;
