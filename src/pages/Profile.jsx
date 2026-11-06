import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import axios from 'axios'
import { auth } from '../firebase'

import Navbar from '../components/Navbar'

function Profile() {

    const navigate = useNavigate()

    const [profile, setProfile] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    })

    const [editing, setEditing] = useState(false)
    const [loading, setLoading] = useState(true)

    // Fetch user profile
    useEffect(() => {

        async function getProfile() {

            try {
                const user = auth.currentUser

                if (!user) {
                    navigate('/')
                    return
                }

                const token = await user.getIdToken()

                const response = await axios.get(
                    'http://localhost:5000/users/profile',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )

                setProfile(response.data)

            } catch (error) {
                console.log('Profile error:', error)
            }

            setLoading(false)
        }

        getProfile()

    }, [navigate])

    // Handle input changes
    function handleChange(event) {

        setProfile({
            ...profile,
            [event.target.name]: event.target.value
        })

    }

    // Save profile
    async function handleSave() {

        try {
            const user = auth.currentUser
            const token = await user.getIdToken()

            await axios.put(
                'http://localhost:5000/users/profile',
                {
                    name: profile.name,
                    phone: profile.phone,
                    address: profile.address
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            setEditing(false)
            alert('Profile updated successfully!')

        } catch (error) {
            console.log('Update error:', error)
            alert('Unable to update profile')
        }

    }

    // Logout
    async function handleLogout() {

        await signOut(auth)
        navigate('/')

    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F8F3EF]">
                <p className="text-[#805255]">Loading profile...</p>
            </div>
        )
    }

    return (
        <>
        <Navbar></Navbar>

        <div className="min-h-screen bg-[#F8F3EF] px-5 py-12">

            <div className="max-w-3xl mx-auto">

                {/* Page Heading */}
                <div className="text-center mb-10">

                    <h1 className="text-4xl font-serif text-[#382522]">
                        My Account
                    </h1>

                    <p className="text-[#8B7B76] mt-3">
                        Manage your personal information and account
                    </p>

                </div>

                {/* Personal Information */}
                <div className="bg-[#FFFCF9] p-7 md:p-10 rounded-xl shadow-[0_14px_45px_rgba(65,39,32,0.09)]">

                    <div className="flex justify-between items-center mb-7">

                        <h2 className="text-2xl font-serif text-[#382522]">
                            Personal Information
                        </h2>

                        <button
                            onClick={() => setEditing(!editing)}
                            className="text-[#98676A] font-medium hover:text-[#805255]"
                        >
                            {editing ? 'Cancel' : 'Edit'}
                        </button>

                    </div>

                    <div className="space-y-6">

                        {/* Full Name */}
                        <div>
                            <label className="block text-sm text-[#8B7B76] mb-2">
                                Full Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={profile.name}
                                onChange={handleChange}
                                disabled={!editing}
                                className="w-full border border-[#E9DDD6] rounded-lg px-4 py-3 bg-[#F8F3EF] text-[#382522] outline-none focus:border-[#98676A] disabled:opacity-80"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm text-[#8B7B76] mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                value={profile.email}
                                disabled
                                className="w-full border border-[#E9DDD6] rounded-lg px-4 py-3 bg-[#F8F3EF] text-[#382522] opacity-80"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm text-[#8B7B76] mb-2">
                                Phone Number
                            </label>

                            <input
                                type="tel"
                                name="phone"
                                value={profile.phone}
                                onChange={handleChange}
                                disabled={!editing}
                                placeholder="Enter your phone number"
                                className="w-full border border-[#E9DDD6] rounded-lg px-4 py-3 bg-[#F8F3EF] text-[#382522] outline-none focus:border-[#98676A] disabled:opacity-80"
                            />
                        </div>

                        {/* Delivery Address */}
                        <div>
                            <label className="block text-sm text-[#8B7B76] mb-2">
                                Delivery Address
                            </label>

                            <textarea
                                name="address"
                                value={profile.address}
                                onChange={handleChange}
                                disabled={!editing}
                                rows="3"
                                placeholder="Enter your delivery address"
                                className="w-full border border-[#E9DDD6] rounded-lg px-4 py-3 bg-[#F8F3EF] text-[#382522] outline-none focus:border-[#98676A] disabled:opacity-80 resize-none"
                            />
                        </div>

                    </div>

                    {editing && (
                        <button
                            onClick={handleSave}
                            className="mt-7 bg-[#805255] text-white px-8 py-3 rounded-lg hover:bg-[#98676A] transition"
                        >
                            Save Changes
                        </button>
                    )}

                </div>

                {/* My Activities */}
                <div className="bg-[#FFFCF9] p-7 md:p-10 rounded-xl shadow-[0_14px_45px_rgba(65,39,32,0.09)] mt-7">

                    <h2 className="text-2xl font-serif text-[#382522] mb-5">
                        My Activities
                    </h2>

                    <div className="border-b border-[#E9DDD6] py-5">
                        <button
                            onClick={() => navigate('/orders')}
                            className="w-full flex justify-between items-center text-[#382522] hover:text-[#98676A]"
                        >
                            My Orders
                            <span>→</span>
                        </button>
                    </div>

                    <div className="py-5">
                        <button
                            onClick={() => navigate('/wishlist')}
                            className="w-full flex justify-between items-center text-[#382522] hover:text-[#98676A]"
                        >
                            My Wishlist
                            <span>→</span>
                        </button>
                    </div>

                </div>

                {/* Logout */}
                <div className="text-center mt-8">

                    <button
                        onClick={handleLogout}
                        className="text-[#805255] font-medium hover:text-[#98676A]"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </div>
        </>

    )

}

export default Profile
