import { useEffect, useState } from 'react'
import { getUsers } from '../api/users'
import Card from '../components/Card'

export default function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUsers()
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {users.map(user => (
        <Card key={user.id}>
          <h3 className="font-bold">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
        </Card>
      ))}
    </div>
  )
}