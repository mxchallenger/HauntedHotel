import React from 'react';
import styles from '../../styles/homepage.module.css';

function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Haunted Hotel Booking App</h1>
      <p className={styles.description}>
        This project was completed during my software development bootcamp at Catalyte.
        Initially, it was a React Front-End only project with a deployed API on Heroku.
        The API was provided to all students to build their front end. Since then,
        I have added a new backend using Supabase, integrating both front-end and
        back-end functionalities.
      </p>
      <p className={styles.description}>
        The project is a full CRUD application utilizing ReactJS, Supabase,
        and Material-UI. It allows for creating, updating, deleting, and viewing
        hotel room types at the Haunted Hotel. Additionally, it supports creating,
        updating, deleting, and viewing reservations for these room types.
      </p>
      <p className={styles.description}>
        Key features include form validation, dynamic image display from URLs,
        and reservation cost calculations based on room rates.
      </p>
      <p className={styles.description}>
        <a
          href="https://github.com/mxchallenger/HauntedHotel"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          View HauntedHotel GitHub Repository
        </a>
      </p>
    </div>
  );
}

export default HomePage;
