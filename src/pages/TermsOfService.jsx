const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Terms of Service
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <p className="text-gray-300">
              By inviting Dank Alert, you acknowledge that you have read, comprehended, and agreed to these terms. 
              Furthermore, you are accountable for informing the members within your Discord server about these terms. 
              If you disagree with any of these terms, you are not permitted to utilize or add Dank Alert to your server.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Proprietary Rights</h2>
            <p className="text-gray-300">
              Dank Alert, particularly represented by dipdey, possesses and maintains all rights to publicly available data. 
              We authorize you to utilize this data for personal purposes but strictly prohibit any commercial utilization. 
              Therefore, you are not permitted to sell, or engage in any form of commercial exploitation of the data unless 
              expressly granted permission to do so.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Availability</h2>
            <ul className="text-gray-300 list-disc pl-5 space-y-2">
              <li>Dank Alert is provided in its current state without any guarantees of future availability. 
                  Its purpose or availability may be altered at any time</li>
              <li>User related data including backups may be deleted at any time</li>
              <li>User related data including backups is non-transferable between discord accounts.</li>
              <li>Access to all or specific features of Dank Alert may be revoked, for all or a specific user, at any time.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;