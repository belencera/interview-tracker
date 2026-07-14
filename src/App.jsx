import { useState, useEffect } from 'react'
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
  const [jobList, setJobList] = useState(() => {
    try {
      const raw = localStorage.getItem('jobs')
      return raw ? JSON.parse(raw) : jobs
    } catch {
      return jobs
    }
  })
  const [editingJob, setEditingJob] = useState(null)

  const filteredJobs = jobList.filter((job) => {
    const q = search.trim().toLowerCase()
    const matchesSearch =
      q === '' || `${job.empresa} ${job.puesto}`.toLowerCase().includes(q)
    const matchesStatus = status === '' || job.estado === status
    return matchesSearch && matchesStatus
  })

  useEffect(() => {
    try {
      localStorage.setItem('jobs', JSON.stringify(jobList))
    } catch {
      console.error('Error guardando en localStorage')
    }
  }, [jobList])

  const handleAddJob = (newJob) => {
    setJobList((prev) => [
      { ...newJob, id: Date.now() + Math.floor(Math.random() * 1000) },
      ...prev,
    ])
  }

  const handleDeleteJob = (id) => {
    setJobList((prev) => prev.filter((j) => j.id !== id))
  }

  const handleStartEdit = (job) => {
    setEditingJob(job)
    setShowForm(true)
  }

  const handleUpdateJob = (updated) => {
    setJobList((prev) => prev.map((j) => (j.id === updated.id ? updated : j)))
    setEditingJob(null)
    setShowForm(false)
  }

  return (
    <main>
      <Header />
      <Filters
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
      />
      {showForm && (
        <JobForm
          onAddJob={handleAddJob}
          onUpdateJob={handleUpdateJob}
          editingJob={editingJob}
          onCancel={() => {
            setShowForm(false)
            setEditingJob(null)
          }}
        />
      )}
      <JobList
        jobs={filteredJobs}
        isFormOpen={showForm}
        onToggleForm={() => {
          setEditingJob(null)
          setShowForm((prev) => !prev)
        }}
        onEdit={handleStartEdit}
        onDelete={handleDeleteJob}
      />
      <Footer />
    </main>
  )
}

export default App
