import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Filters from './components/Filters.jsx'
import JobForm from './components/JobForm.jsx'
import JobList from './components/JobList.jsx'
import jobs from './data/jobs.js'

function App() {
  const [showForm, setShowForm] = useState(false)
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('')

  const filteredJobs = jobs.filter((job) => {
    const q = search.trim().toLowerCase()
    const matchesSearch =
      q === '' || `${job.empresa} ${job.puesto}`.toLowerCase().includes(q)
    const matchesStatus = status === '' || job.estado === status
    return matchesSearch && matchesStatus
  })

  return (
    <main>
      <Header />
      <Filters
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
      />
      {showForm && <JobForm />}
      <JobList
        jobs={filteredJobs}
        isFormOpen={showForm}
        onToggleForm={() => setShowForm((prev) => !prev)}
      />
      <Footer />
    </main>
  )
}

export default App
