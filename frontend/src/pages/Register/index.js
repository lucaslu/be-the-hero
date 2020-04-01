import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'
import logoImg from '../../assets/logo.svg'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [st, setSt] = useState('')

    const history = useHistory()

    async function handleRegister(e) {
        e.preventDefault()
        const data = {
            name,
            email,
            whatsapp,
            city,
            st
        }
        try {
            const response = await api.post('ngos', data)

            alert(`Your user ID: ${response.data.id}`)
            history.push('/')
        } catch (err) {
            alert('Error, please try again')
        }

    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Registration</h1>
                    <p>Please register and help people to find incidents of your NGO.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Not registered
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="NGO name" value={name} onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                    <input placeholder="WhatsApp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
                    <div className="input-group">
                        <input placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
                        <input placeholder="ST" style={{ width: 80 }} value={st} onChange={e => setSt(e.target.value)} />
                    </div>
                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}