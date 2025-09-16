import React from 'react';

// You can define your SVG icons here or import them
const DocumentIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
);

const ReviewIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
);

const DecisionIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);

const EnrollmentIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
);


// The main component to be exported
const AdmissionProcess = () => {
  const processSteps = [
    {
      step: 1,
      title: "Submit Your Application Online",
      description: "Complete and submit our online application form. Ensure all required fields are filled accurately and upload any initial documents requested.",
      icon: <DocumentIcon />,
    },
    {
      step: 2,
      title: "Application Review",
      description: "Our admissions committee carefully reviews your application, academic records, and personal statement to ensure all criteria are met.",
      icon: <ReviewIcon />,
    },
    {
      step: 3,
      title: "Admission Decision",
      description: "You will be notified of our admission decision via the email address provided in your application. Decisions are typically sent out by March 31st.",
      icon: <DecisionIcon />,
    },
    {
      step: 4,
      title: "Acceptance & Enrollment",
      description: "If accepted, you will receive an admissions package with instructions on how to accept your offer and complete the enrollment process by paying the deposit.",
      icon: <EnrollmentIcon />,
    },
  ];

  return (
    <div className="bg-white rounded-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Admission Process</h3>
      <p className="text-gray-600 mb-8">
        We have designed our admission process to be as straightforward as possible. Follow the steps below to begin your journey at Regal Heights School.
      </p>

      {/* Timeline Container */}
      <div className="space-y-8">
        {processSteps.map((item) => (
          <div key={item.step} className="flex items-start">
            {/* Icon and Number */}
            <div className="flex flex-col items-center mr-6">
              <div className="flex-shrink-0 bg-green-400 text-white rounded-full w-12 h-12 flex items-center justify-center">
                {item.icon}
              </div>
              {/* Vertical line connecting the dots, not shown for the last item */}
              {item.step !== processSteps.length && (
                <div className="w-px h-16 bg-gray-300 mt-2"></div>
              )}
            </div>
            
            {/* Content */}
            <div className="flex-grow">
              <p className="text-sm font-semibold text-green-500">STEP {item.step}</p>
              <h4 className="text-lg font-semibold text-gray-900 mt-1">{item.title}</h4>
              <p className="mt-2 text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Required Documents Section */}
      <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Required Documents Checklist</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Completed Online Application Form</li>
          <li>Official Academic Transcripts from Previous School</li>
          <li>A Copy of Student's Birth Certificate</li>
          <li>Two Letters of Recommendation (from a teacher or counselor)</li>
          <li>Personal Statement / Essay</li>
        </ul>
      </div>
    </div>
  );
};

export default AdmissionProcess;