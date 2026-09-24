function About() {
  return (
    <section>
      <div className="page-heading">
        <div>
          <p className="eyebrow">Capstone Practical</p>
          <h1>About the Project</h1>
          <p>Practical 14 integrates the major React concepts from the preceding practicals.</p>
        </div>
      </div>

      <div className="card concept-grid">
        <div><strong>Components & Props</strong><span>Reusable StudentForm, StudentList and StatCard components.</span></div>
        <div><strong>Hooks</strong><span>useState, useEffect and useMemo manage UI state and derived search results.</span></div>
        <div><strong>Forms & Lists</strong><span>Controlled form inputs and dynamic student lists.</span></div>
        <div><strong>React Router</strong><span>Multiple application pages and edit routes.</span></div>
        <div><strong>Fetch API</strong><span>Frontend communicates with the Express REST API using fetch().</span></div>
        <div><strong>Redux Toolkit</strong><span>Centralized student state with store, slice and reducers.</span></div>
        <div><strong>Real Database</strong><span>MongoDB stores persistent student records.</span></div>
        <div><strong>CRUD</strong><span>Create, Read, Update and Delete are performed through REST endpoints.</span></div>
      </div>
    </section>
  );
}

export default About;
