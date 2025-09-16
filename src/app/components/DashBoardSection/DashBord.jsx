// This tells Next.js that this page is interactive and will run in the browser
'use client';

// We need these tools from React and Supabase
import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';

// --- DATABASE CONNECTION (same as before) ---
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// --- THIS IS OUR DASHBOARD PAGE COMPONENT ---
export default function DashboardPage() {
  // === STATE MANAGEMENT ===
  const [day, setDay] = useState('Monday');
  const [time, setTime] = useState('');
  const [subject, setSubject] = useState('Science');
  const [teacher, setTeacher] = useState('');

  // =================================================================
  // === STEP 1: ADD A NEW STATE FOR OUR SUCCESS MESSAGE ===
  // This will be 'true' when we want to show the message, and 'false' otherwise.
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  // =================================================================

  // === DATA FOR DROPDOWNS ===
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const subjects = ['Science', 'English', 'Math', 'History', 'Art', 'Music', 'Geography'];
  const teachers = ['Sara', 'Ama', 'Smith', 'Harry', 'Muru', 'Jone' ];

  // === FORM SUBMISSION HANDLER ===
  async function handleSubmit(event) {
    event.preventDefault();

    if (!time.trim()) {
      alert('Please enter a time.');
      return;
    }

    const { error } = await supabase
      .from('timetable')
      .insert([{ day: day, time: time, subject: subject, teacher: teacher }]);

    if (error) {
      console.error('Error inserting data:', error);
      alert('Failed to add entry. Check the console for errors.');
    } else {
      console.log('Data inserted successfully!');
      
      // =================================================================
      // === STEP 2: UPDATE THIS BLOCK TO SHOW THE MESSAGE ===
      // NO MORE ALERT!
      // Instead, we set our new state to 'true'.
      setShowSuccessMessage(true);

      // We use setTimeout to hide the message again after 3 seconds (3000 milliseconds).
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
      // =================================================================

      setTime(''); // Clear the time input for the next entry
    }
  }

  const classNameForLable = 'border-2 border-gray-400 rounded-xl p-3 font-poppins'

  // --- HTML and JSX to show on the screen ---
  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Dashboard: Add to Timetable</h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', gap: '15px' }} className=''>
        {/* --- Form inputs are the same as before --- */}
        <label className={classNameForLable}>
          Day:
          <select value={day} onChange={(e) => setDay(e.target.value)} style={{ width: '100%', padding: '8px', marginTop: '5px' }}>
            {daysOfWeek.map((d) => (<option key={d} value={d}>{d}</option>))}
          </select>
        </label>
        <label className={classNameForLable}>
          Time:
          <input type="text" placeholder="e.g., 09:00" value={time} onChange={(e) => setTime(e.target.value)} style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </label>
        <label className={classNameForLable}>
          Subject:
          <select value={subject} onChange={(e) => setSubject(e.target.value)} style={{ width: '100%', padding: '8px', marginTop: '5px' }}>
            {subjects.map((s) => (<option key={s} value={s}>{s}</option>))}
          </select>
        </label>
        <label className={classNameForLable}>
          Teacher:
          <select value={teacher} onChange={(e) => setTeacher(e.target.value)} style={{ width: '100%', padding: '8px', marginTop: '5px' }}>
            {teachers.map((t) => (<option key={t} value={t}>{t}</option>))}
          </select>
        </label> 
        <button type="submit" style={{ padding: '10px', backgroundColor: 'green', color: 'white', border: 'none', cursor: 'pointer' }} className={classNameForLable}>
          Add to Timetable
        </button>
      </form>

      {/* ================================================================= */}
      {/* === STEP 3: ADD THE SUCCESS MESSAGE DIV === */}
      {/* This JSX says: "If 'showSuccessMessage' is true, then render the div." */}
      {showSuccessMessage && (
        <div style={{
          position: 'fixed',        // Position relative to the browser window
          top: '50%',               // Start 50% from the top
          left: '50%',              // Start 50% from the left
          transform: 'translate(-50%, -50%)', // Move back 50% of its own width/height to be perfectly centered
          padding: '20px 40px',
          backgroundColor: '#28a745', // A nice green color
          color: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)', // A subtle shadow
          zIndex: 100, // Make sure it's on top of everything else
        }}>
          Data Submitted Successfully!
        </div>
      )}
      {/* ================================================================= */}
    </div>
  );
}