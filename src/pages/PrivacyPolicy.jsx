const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Privacy Policy
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <p className="text-gray-300">
              The use of this application ("Dank Alert") in a server requires the collection of some specific user data and server data. 
              The Data collected includes, but is not limited to Discord user ID values. Use of the Bot is considered an agreement to the terms of this Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Access to Data</h2>
            <p className="text-gray-300">
              Access to Data is only permitted to Bot's developers, and only in the scope required for the development, testing, and implementation of features for Bot. 
              Data is not sold, provided to, or shared with any third party, except where required by law or a Privacy Policy agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Storage of Data</h2>
            <p className="text-gray-300">
              Data is stored in a database. The database is secured to prevent external access, however no guarantee is provided and the Bot owners assume no liability for the unintentional or malicious breach of Data. 
              In the event of an unauthorised Data access, users will be notified through the Discord support server.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">User Rights</h2>
            <p className="text-gray-300">
              At any time, you have the right to request to view the Data pertaining to your Discord account. 
              You may submit a request through the Discord Server. You have the right to request the removal of relevant Data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Questions</h2>
            <p className="text-gray-300">
              If you have any questions or are concerned about what data might be being stored from your account contact Discord Server. 
              For more information check the Discord Terms Of Service.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;