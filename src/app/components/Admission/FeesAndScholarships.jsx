import React from 'react';

// Reusable Icon Components for visual clarity
const MeritIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4v4m-2-2h4M17 3l-1.172 1.172a4 4 0 00-5.656 0L9 3m9 18l-1.172-1.172a4 4 0 00-5.656 0L9 21" /></svg>
);

const NeedIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
);

const FeesAndScholarships = () => {
  // Data for the fee structure. Easy to update here.
  const feeItems = [
    { item: 'Annual Tuition Fee', cost: '$18,500', notes: 'Covers all core academic instruction.' },
    { item: 'Technology & Lab Fee', cost: '$750', notes: 'Access to computer labs, software, and science materials.' },
    { item: 'Student Activity Fee', cost: '$400', notes: 'Supports clubs, sports, and school events.' },
    { item: 'Books & Supplies (Estimate)', cost: '$600', notes: 'Varies based on grade and courses.' },
  ];

  const totalCost = feeItems.reduce((total, item) => total + parseFloat(item.cost.replace(/[^0-9.-]+/g,"")), 0);

  return (
    <div className="bg-white rounded-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Fees & Scholarships</h3>
      <p className="text-gray-600 mb-8">
        We believe in transparent pricing and are committed to making a Regal Heights education accessible. Below is a breakdown of our fees and the financial aid opportunities available.
      </p>

      {/* Fee Structure Table */}
      <div className="mb-12">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Tuition & Fee Breakdown for 2025-2026</h4>
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost (USD)</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {feeItems.map((fee, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{fee.item}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{fee.cost}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fee.notes}</td>
                </tr>
              ))}
              {/* Total Row */}
              <tr className="bg-gray-100 font-bold">
                <td className="px-6 py-4 text-sm text-gray-900">Estimated Annual Total</td>
                <td className="px-6 py-4 text-sm text-gray-900">${totalCost.toLocaleString()}</td>
                <td className="px-6 py-4"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">*Please note: Fees are subject to change annually.</p>
      </div>

      {/* Scholarship Opportunities */}
      <div>
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Scholarship Opportunities</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Merit-Based Card */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-start space-x-4">
            <div className="flex-shrink-0 bg-green-400 text-white rounded-full h-12 w-12 flex items-center justify-center">
              <MeritIcon />
            </div>
            <div>
              <h5 className="text-lg font-semibold text-gray-900">Merit-Based Scholarships</h5>
              <p className="mt-1 text-gray-600">
                Awarded to students who demonstrate exceptional academic achievement, leadership skills, or talent in the arts or athletics.
              </p>
            </div>
          </div>
          {/* Need-Based Card */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-start space-x-4">
            <div className="flex-shrink-0 bg-green-400 text-white rounded-full h-12 w-12 flex items-center justify-center">
              <NeedIcon />
            </div>
            <div>
              <h5 className="text-lg font-semibold text-gray-900">Need-Based Financial Aid</h5>
              <p className="mt-1 text-gray-600">
                Financial assistance is available to families who demonstrate financial need. Applications are reviewed confidentially.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          All applicants are automatically considered for merit-based scholarships. To apply for need-based aid, please complete the separate Financial Aid application by the deadline.
        </p>
      </div>
      
      {/* Contact and CTA */}
      <div className="mt-12 bg-gray-100 p-6 rounded-lg text-center">
        <h4 className="text-lg font-semibold text-gray-800">Have Questions About Affordability?</h4>
        <p className="mt-2 text-gray-600">
          Our Financial Aid office is here to help you navigate the process. We encourage you to reach out to discuss your options.
        </p>
        <button className="mt-4 inline-block bg-green-400 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-500 transition-colors duration-300">
          Contact Financial Aid
        </button>
      </div>
    </div>
  );
};

export default FeesAndScholarships;