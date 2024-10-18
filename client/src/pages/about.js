import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>About Our Application</h2>
      <p>
        Welcome to our Sales Dashboard! This application is designed to help you visualize and track daily sales data,
        customer statistics, and performance metrics efficiently. Our goal is to provide users with an easy-to-use platform
        for monitoring key performance indicators (KPIs), making data-driven decisions, and improving overall business productivity.
      </p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Interactive Charts: Visualize sales data in different formats like Bar, Line, Pie, and Doughnut charts.</li>
        <li>Real-time Updates: Track your sales performance and customer activity as they happen.</li>
        <li>Role-Based Access: Admins and cashiers have different levels of access to the application's features.</li>
        <li>Comprehensive Data Insights: View statistics like total sales, total customers, total days, and average sales.</li>
      </ul>

      <h3>Version Information</h3>
      <p>Current Version: 1.0.0</p>

      <h3>Development Team</h3>
      <p>
        This application was developed by a team of passionate developers dedicated to providing tools that improve business performance. 
        If you have any questions or need support, please reach out to us at <a href="mailto:support@example.com">support@example.com</a>.
      </p>

      <h3>How to Use the Application</h3>
      <p>
        - **Login**: Access the application by logging in with your credentials.<br />
        - **Dashboard**: After logging in, you'll be able to view real-time sales charts and metrics.<br />
        - **Add Data**: If you have the proper role (e.g., cashier), you can add new sales records to the system.
      </p>
    </div>
  );
};

export default About;
