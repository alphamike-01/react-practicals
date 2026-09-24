function StatCard({ title, value, description }) {
  return (
    <div className="stat-card">
      <strong>{value}</strong>
      <span>{title}</span>
      <small>{description}</small>
    </div>
  );
}

export default StatCard;
