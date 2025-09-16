// This tells Next.js that this page is interactive and will run in the browser
'use client';

// We need these tools from React to manage our data
import { createClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';
import SideMenu from '../SideBar/SideBar';

// --- DATABASE CONNECTION ---
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


// --- THIS IS OUR MAIN PAGE COMPONENT ---
export default function TimetablePage() {
  const [timetable, setTimetable] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  // =================================================================
  // === STEP 1: ADD DATA FOR OUR NEW DROPDOWNS ===
  // These are the same arrays from your dashboard page.
  const subjects = ['Science', 'English', 'Math', 'History', 'Art', 'Music', 'Geography'];
  const teachers = ['Sara', 'Ama', 'Smith', 'Harry', 'Muru', 'Jone'];
  // =================================================================

  // This useEffect fetches data and sets up the real-time listener
  useEffect(() => {
    async function fetchTimetable() {
      const { data, error } = await supabase.from('timetable').select('*').order('time', { ascending: true }).order('day', { ascending: true });
      if (error) {
        console.error('Error fetching timetable:', error);
      } else {
        setTimetable(data);
      }
    }

    fetchTimetable();

    const channel = supabase
      .channel('timetable-realtime')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'timetable' },
        (payload) => {
          console.log('Change received!', payload);
          fetchTimetable();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);


  // --- DELETE FUNCTION ---
  async function handleDelete(id) {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      const { error } = await supabase.from('timetable').delete().eq('id',id);
      if (error) console.error('Error deleting data:', error);
    }
  }

  // --- EDITING FUNCTIONS ---
  function handleEditClick(item) {
    setEditingItem(item);
  }

  function handleEditChange(event) {
    setEditingItem({
      ...editingItem,
      [event.target.name]: event.target.value
    });
  }
  
  async function handleUpdate() {
    if (!editingItem) return;
    const { id, created_at, ...updatedData } = editingItem;
    const { error } = await supabase
      .from('timetable')
      .update(updatedData)
      .eq('id', id);

    if (error) {
      console.error('Error updating data:', error);
      alert('Could not update the entry.');
    } else {
      setEditingItem(null);
    }
  }

  // --- STYLES FOR OUR MODERN DESIGN ---
  const styles = {
    container: { padding: '40px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"', backgroundColor: '#f8f9fa' },
    header: { color: '#343a40', marginBottom: '30px' },
    table: { width: '100%', borderCollapse: 'collapse', boxShadow: '0 2px 15px rgba(0,0,0,0.1)', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden' },
    th: { backgroundColor: '#e9ecef', padding: '16px', textAlign: 'left', color: '#495057', borderBottom: '2px solid #dee2e6' },
    td: { padding: '16px', textAlign: 'left', borderBottom: '1px solid #dee2e6' },
    button: { border: 'none', padding: '8px 16px', borderRadius: '5px', cursor: 'pointer', marginRight: '8px', color: 'white', fontWeight: '500' },
    editButton: { backgroundColor: '#28a745' },
    deleteButton: { backgroundColor: '#c82333' },
    modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    modalContent: { backgroundColor: 'white', padding: '30px', borderRadius: '8px', width: '400px', boxShadow: '0 5px 20px rgba(0,0,0,0.3)' },
    // A single style for both inputs and select dropdowns
    modalInput: { width: '100%', padding: '10px', marginTop: '5px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ced4da', backgroundColor: 'white' },
    modalButtonContainer: { display: 'flex', justifyContent: 'flex-end', marginTop: '20px' },
    saveButton: { backgroundColor: '#28a745' },
    cancelButton: { backgroundColor: '#6c757d' }
  };


  // --- HTML and JSX ---
  return (
  
        <div style={styles.container} className='w-full mx-auto'>
          <h1 style={styles.header} className='font-lexend text-2xl'>School Timetable</h1>
          <table style={styles.table} className=''>
            {/* Table Head and Body are the same */}
            <thead>
              <tr>
                <th style={styles.th}>Day</th>
                <th style={styles.th}>Time</th>
                <th style={styles.th}>Subject</th>
                <th style={styles.th}>Teacher</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {timetable.map((item) => (
                <tr key={item.id}>
                  <td style={styles.td}>{item.day}</td>
                  <td style={styles.td}>{item.time}</td>
                  <td style={styles.td}>{item.subject}</td>
                  <td style={styles.td}>{item.teacher}</td>
                  <td style={styles.td}>
                    <button onClick={() => handleEditClick(item)} style={{...styles.button, ...styles.editButton}}>Edit</button>
                    <button onClick={() => handleDelete(item.id)} style={{...styles.button, ...styles.deleteButton}}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* THE EDIT MODAL */}
          {editingItem && (
            <div style={styles.modalOverlay}>
              <div style={styles.modalContent}>
                <h2>Edit Timetable Entry</h2>
        
                <label>Time:</label>
                <input type="text" name="time" value={editingItem.time || ''} onChange={handleEditChange} style={styles.modalInput} />
                {/* ================================================================= */}
                {/* === STEP 2: REPLACE INPUTS WITH SELECT DROPDOWNS === */}
                <label>Subject:</label>
                <select name="subject" value={editingItem.subject || ''} onChange={handleEditChange} style={styles.modalInput}>
                  {subjects.map((s) => (<option key={s} value={s}>{s}</option>))}
                </select>
                <label>Teacher:</label>
                <select name="teacher" value={editingItem.teacher || ''} onChange={handleEditChange} style={styles.modalInput}>
                  {/* Add a default disabled option for when there is no teacher */}
                  {!editingItem.teacher && <option value="" disabled>Select a teacher</option>}
                  {teachers.map((t) => (<option key={t} value={t}>{t}</option>))}
                </select>
                {/* ================================================================= */}
                <div style={styles.modalButtonContainer}>
                  <button onClick={() => setEditingItem(null)} style={{...styles.button, ...styles.cancelButton}}>Cancel</button>
                  <button onClick={handleUpdate} style={{...styles.button, ...styles.saveButton}}>Save Changes</button>
                </div>
              </div>
            </div>
          )}
        </div>
  
  );
}