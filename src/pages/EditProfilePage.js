import React from 'react'
import EditProfile from '../components/EditProfile'

function EditProfilePage({currentProfile}) {
  return (
    <div>
        <EditProfile currentProfile={currentProfile}/>
    </div>
  )
}

export default EditProfilePage