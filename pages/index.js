import Header from '../components/Header'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LoginForm from '../components/LoginForm'
import { useAuth } from '../contexts/auth'
import Link from 'next/link'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Box } from "@chakra-ui/react"

export default function Home()
{
  const { user, login, logout } = useAuth();
  return (
    <Box>
      <>
        <Header pageName="Home" />
        {!user && <LoginForm onSubmit={login} />}
      </>
    </Box>
  )
}

