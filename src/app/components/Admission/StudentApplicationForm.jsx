'use client'
import React, { useState } from 'react';

// This is a reusable component for form input fields to reduce repetition.
const FormInput = ({ id, label, type = 'text', placeholder, value, onChange, required = true }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-400 focus:border-green-400 sm:text-sm"
    />
  </div>
);

// This is a reusable component for dropdown/select fields.
const FormSelect = ({ id, label, value, onChange, children, required = true }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      required={required}
      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-400 focus:border-green-400 sm:text-sm rounded-md"
    >
      {children}
    </select>
  </div>
);

// The main application form component
const StudentApplicationForm = () => {
  const [formData, setFormData] = useState({
    // Student Info
    studentFullName: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    homeAddress: '',
    // Parent/Guardian 1
    parent1FullName: '',
    parent1Relationship: '',
    parent1Email: '',
    parent1Phone: '',
    // Parent/Guardian 2 (Optional)
    parent2FullName: '',
    parent2Relationship: '',
    // Academic Info
    previousSchool: '',
    lastGradeCompleted: '',
    // Admission Details
    applyingForGrade: '',
    academicYear: '2025-2026',
    // Additional Info
    personalStatement: '',
    specialNeeds: '',
    // Declaration
    declaration: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.declaration) {
      alert('You must accept the declaration to submit the application.');
      return;
    }
    // In a real application, you would send this data to a server.
    console.log('Form Data Submitted:', formData);
    alert('Application submitted successfully!');
    // Optionally, reset the form after submission
    // setFormData({ ...initial state ... });
  };

  return (
    <div className="sm:p-8">
      <div className="max-w-4xl mx-auto bg-white  overflow-hidden">
        <div className="px-6 py-8 sm:px-10">
          {/* Form Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">Regal Heights School</h1>
            <p className="mt-2 text-lg text-gray-600">Student Application Form</p>
          </div>

          <hr className="my-8 border-t-2 border-green-400" />

          {/* Welcome Message */}
          <div className="bg-green-50 border-l-4 border-green-400 text-green-800 p-4 mb-8 rounded-r-lg" role="alert">
            <p className="font-bold">Welcome to Regal Heights School!</p>
            <p>Please fill out this application form completely. All required fields must be completed before submission.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Section 1: Student's Personal Information */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-300 pb-2 mb-6">1. Student's Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput id="studentFullName" label="Full Name" placeholder="First Middle Last" value={formData.studentFullName} onChange={handleChange} />
                <FormInput id="dateOfBirth" label="Date of Birth" type="date" value={formData.dateOfBirth} onChange={handleChange} />
                <FormSelect id="gender" label="Gender" value={formData.gender} onChange={handleChange}>
                  <option value="">Select...</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </FormSelect>
                <FormInput id="nationality" label="Nationality" placeholder="e.g., Canadian" value={formData.nationality} onChange={handleChange} />
                <div className="md:col-span-2">
                  <FormInput id="homeAddress" label="Home Address" placeholder="Street, City, Province, Postal Code" value={formData.homeAddress} onChange={handleChange} />
                </div>
              </div>
            </section>

            {/* Section 2: Parent / Guardian Information */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-300 pb-2 mb-6">2. Parent / Guardian Information</h2>
              <div className="space-y-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-medium text-green-500 mb-4">Parent / Guardian 1</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput id="parent1FullName" label="Full Name" value={formData.parent1FullName} onChange={handleChange} />
                    <FormInput id="parent1Relationship" label="Relationship to Student" placeholder="e.g., Mother" value={formData.parent1Relationship} onChange={handleChange} />
                    <FormInput id="parent1Email" label="Email Address" type="email" placeholder="example@email.com" value={formData.parent1Email} onChange={handleChange} />
                    <FormInput id="parent1Phone" label="Phone Number" type="tel" placeholder="(555) 555-5555" value={formData.parent1Phone} onChange={handleChange} />
                  </div>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-medium text-gray-600 mb-4">Parent / Guardian 2 <span className="text-sm font-normal text-gray-500">(Optional)</span></h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput id="parent2FullName" label="Full Name" value={formData.parent2FullName} onChange={handleChange} required={false} />
                    <FormInput id="parent2Relationship" label="Relationship to Student" value={formData.parent2Relationship} onChange={handleChange} required={false} />
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Academic Information */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-300 pb-2 mb-6">3. Previous Academic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput id="previousSchool" label="Previous School Name" value={formData.previousSchool} onChange={handleChange} />
                <FormInput id="lastGradeCompleted" label="Last Grade Completed" placeholder="e.g., Grade 8" value={formData.lastGradeCompleted} onChange={handleChange} />
              </div>
            </section>

            {/* Section 4: Admissions Details */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-300 pb-2 mb-6">4. Admissions Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormSelect id="applyingForGrade" label="Applying for Grade" value={formData.applyingForGrade} onChange={handleChange}>
                  <option value="">Select Grade...</option>
                  <option value="9">Grade 9</option>
                  <option value="10">Grade 10</option>
                  <option value="11">Grade 11</option>
                  <option value="12">Grade 12</option>
                </FormSelect>
                <FormSelect id="academicYear" label="Applying for Academic Year" value={formData.academicYear} onChange={handleChange}>
                  <option value="2025-2026">2025-2026</option>
                  <option value="2026-2027">2026-2027</option>
                </FormSelect>
              </div>
            </section>

            {/* Section 5: Declaration & Submission */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-300 pb-2 mb-6">5. Declaration & Submission</h2>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="declaration"
                    name="declaration"
                    type="checkbox"
                    checked={formData.declaration}
                    onChange={handleChange}
                    className="focus:ring-green-400 h-4 w-4 text-green-400 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="declaration" className="font-medium text-gray-700">
                    I hereby declare that the information provided is true, complete, and accurate. <span className="text-red-500">*</span>
                  </label>
                </div>
              </div>
            </section>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex justify-center py-3 px-12 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 transition-colors duration-300"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentApplicationForm;