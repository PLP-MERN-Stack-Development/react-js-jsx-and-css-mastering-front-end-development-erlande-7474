export default function SearchBar({ onSearch }) {
  return (
    <div className="flex justify-center mt-5">
      <input
        type="text"
        placeholder="Enter city"
        className="p-2 border rounded-l"
        id="city-input"
      />
      <button
        className="bg-blue-500 text-white px-4 rounded-r"
        onClick={() => {
          const city = document.getElementById("city-input").value;
          onSearch(city);
        }}
      >
        Search
      </button>
    </div>
  );
}