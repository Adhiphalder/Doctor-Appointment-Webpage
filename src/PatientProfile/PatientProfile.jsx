import React from "react";
import styles from "./PatientProfile.module.css";
import profileimg from '../assets/images/profile.jpg';

export default function PatientProfile() {
  // 1. Set DOB in YYYY-MM-DD format
  const dob = "2003-06-15"; // <-- change this to patient DOB

  // 2. Function to calculate age from DOB
  const calculateAge = (dobString) => {
    const dobDate = new Date(dobString);
    const diffMs = Date.now() - dobDate.getTime();
    const ageDate = new Date(diffMs); // milliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const age = calculateAge(dob);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.card}>
        
        {/* Profile Image */}
        <div className={styles.imageWrapper}>
          <img className={styles.imageWrapperimg} src={profileimg} alt="patient profile" />
        </div>

        {/* Patient Information */}
        <div className={styles.infoSection}>
          <h1 className={styles.name}>SOUMI GHOSH</h1>
          <p className={styles.text}>Phone no: 6289369698</p>
          <p className={styles.text}>Email address: soumigh234@gmail.com</p>
          <p className={styles.text}>Address: Tribeni, Hooghly-712503</p>
          <p className={styles.dob}>
            DOB: {dob.split("-").reverse().join("-")} <span>|</span> Age: {age} years
          </p>
        </div>

        {/* Edit Button */}
        <div className={styles.buttonWrapper}>
          <button className={styles.editButton}>EDIT</button>
        </div>

      </div>
    </div>
  );
}
