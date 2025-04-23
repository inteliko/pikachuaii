import React, { useEffect, useState } from "react";
import axios from "axios";
import './Home.css'; // Import CSS for styling

const Home = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/leads/");
        setLeads(response.data);
      } catch (error) {
        console.error("There was an error fetching the leads:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="hero-container">
      <h1 className="hero-heading">Leads Dashboard</h1>
      <div className="lead-table-container">
        <table className="lead-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {leads.length > 0 ? (
              leads.map((lead) => (
                <tr key={lead.id}>
                  <td>{lead.id}</td>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.company}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No leads found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
