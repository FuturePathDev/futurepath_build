export function Sidebar({ student }) {
  return (
    <aside className="w-64 bg-white shadow-lg rounded-r-3xl p-4 space-y-6">
      <div className="flex items-center space-x-4">
        <img src={student.avatar} alt="Avatar" className="w-14 h-14 rounded-full" />
        <div>
          <h2 className="text-lg font-bold">{student.name}</h2>
          <p className="text-sm text-gray-500">{student.username}</p>
          <p className="text-sm text-gray-700">{student.grade}</p>
        </div>
      </div>

      <nav className="space-y-4 text-sm">
        <button className="block w-full text-left hover:text-teal-500">📋 Tasks</button>
        <button className="block w-full text-left hover:text-teal-500">📆 Schedule & Events</button>
        <button className="block w-full text-left hover:text-teal-500">📓 Student Journal</button>
        <button className="block w-full text-left hover:text-teal-500">💬 Messages</button>
        <button className="block w-full text-left hover:text-teal-500">🏆 Leaderboard</button>
      </nav>
    </aside>
  );
}
