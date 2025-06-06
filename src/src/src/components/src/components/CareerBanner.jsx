export function CareerBanner({ student }) {
  return (
    <div className="bg-teal-400 text-white rounded-xl p-6 mb-8 flex flex-col items-center shadow-md">
      <h1 className="text-2xl font-bold">Focus Career: {student.focusCareer}</h1>
      <div className="w-full bg-white rounded-full mt-4 h-4">
        <div
          className="bg-teal-700 h-4 rounded-full"
          style={{ width: `${student.progress}%` }}
        ></div>
      </div>
      <p className="text-sm mt-2">{student.progress}% Complete</p>
    </div>
  );
}
