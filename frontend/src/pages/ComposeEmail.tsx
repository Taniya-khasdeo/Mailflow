const ComposeEmail = () => {
  return (
    <div className="bg-white rounded-xl border p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Compose New Email</h2>
        <button className="bg-green-500 text-white px-4 py-1 rounded-lg text-sm">
          Send Later
        </button>
      </div>

      {/* From */}
      <div className="mb-4">
        <label className="text-sm text-gray-500">From</label>
        <input
          type="text"
          value="oliver.brown@domain.io"
          disabled
          className="w-full border rounded-lg px-3 py-2 text-sm bg-gray-100"
        />
      </div>

      {/* To */}
      <div className="mb-4 flex justify-between items-center">
        <div className="flex-1 mr-4">
          <label className="text-sm text-gray-500">To</label>
          <input
            type="text"
            placeholder="recipient@example.com"
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />
        </div>

        <button className="text-green-500 text-sm mt-6">
          Upload List
        </button>
      </div>

      {/* Subject */}
      <div className="mb-4">
        <label className="text-sm text-gray-500">Subject</label>
        <input
          type="text"
          placeholder="Subject"
          className="w-full border rounded-lg px-3 py-2 text-sm"
        />
      </div>

      {/* Delay + Limit */}
      <div className="flex gap-4 mb-4">
        <div>
          <label className="text-sm text-gray-500">Delay between 2 emails</label>
          <input
            type="number"
            className="w-24 border rounded-lg px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">Hourly Limit</label>
          <input
            type="number"
            className="w-24 border rounded-lg px-3 py-2 text-sm"
          />
        </div>
      </div>

      {/* Body */}
      <div className="mb-6">
        <textarea
          placeholder="Type your reply..."
          className="w-full h-40 border rounded-lg p-3 text-sm resize-none"
        />
      </div>

      {/* Footer */}
      <div className="flex justify-end">
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
};

export default ComposeEmail;
