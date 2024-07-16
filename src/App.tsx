import SectionTimer from "./components/sectionComponents/SectionTimer";

function App() {
  return (
    <div className="bg-pomo-pink-50 h-screen flex flex-col items-center justify-center">
      <div className="w-[1300px] h-[90vh] bg-pomo-pink rounded-md">
        {/* section timer */}
        <div>
          <SectionTimer />
        </div>
      </div>
    </div>
  );
}

export default App;
