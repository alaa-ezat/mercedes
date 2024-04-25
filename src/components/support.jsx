import React from 'react';

const Support = () => {
    return (
        <div className="bg-black text-white p-8 min-h-screen">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-semibold mb-4">Customer Support</h1>
                <p className="text-lg text-gray-400">Welcome to our support page. How can we help you today?</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Support Section: FAQs */}
                <div className="bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>
                    <p className="text-gray-400">Find answers to the most common questions about our vehicles, services, and more.</p>
                    <button className="btn">View FAQs</button>
                </div>

                {/* Support Section: Vehicle Manuals */}
                <div className="bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-3">Vehicle Manuals</h2>
                    <p className="text-gray-400">Download the latest manuals and guides for your Mercedes-Benz vehicle.</p>
                    <button className="btn">Find Manuals</button>
                </div>

                {/* Support Section: Contact Us */}
                <div className="bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
                    <p className="text-gray-400">Need more help? Contact our customer service team for direct support.</p>
                    <button className="btn">Get in Touch</button>
                </div>
            </div>
        </div>
    );
};

export default Support;
