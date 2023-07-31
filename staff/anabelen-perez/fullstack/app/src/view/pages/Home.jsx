import Posts from '../components/Posts'
import { useState, useEffect } from 'react'
import AddPostModal from '../components/AddPostModal'
import Profile from '../components/Profile'
import EditPostModal from '../components/EditPostModal'
import './Home.css'
import retrieveUser from '../../logic/retrieveUser'
import Container from '../library/Container'
import { useAppContext } from '../hooks'
import logoutUser from '../../logic/logoutUser'

export default function Home() {
    console.debug('Home -> render')

    const [view, setView] = useState('posts')
    const [modal, setModal] = useState(null)
    const [postId, setPostId] = useState(null)
    const [lastPostsUpdate, setLastPostsUpdate] = useState(null)
    const [user, setUser] = useState()
    const { alert, navigate } = useAppContext()

    useEffect(() => {
        try {
            retrieveUser()
                .then(setUser)
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])


    const handleOpenAddPostModal = () => setModal('add-post')

    const handleOpenEditPostModal = postId => {
        setPostId(postId)
        setModal('edit-post')
    }

    const handleCloseModal = () => setModal(null)

    const handleGoToProfile = event => {
        event.preventDefault()

        setView('profile')
    }

    const handleGoToPosts = () => setView('posts')

    const handleSwitchMode = () => document.querySelector(':root').classList.toggle('dark')

    const handlePostUpdated = () => {
        setModal(null)
        setLastPostsUpdate(Date.now())
    }

    const handleLogout = () => {
        logoutUser()

        navigate('/login')
    }

    const handleUserAvatarUpdated = () => {
        try {
            retrieveUser()
                .then(setUser)
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="home">
        <header className="home-header">
            <h1 className="home-header-title" onClick={handleGoToPosts}>Home</h1>

            <nav className="home-header-nav">
                {user && <>
                    <img className="home-header-avatar" src={user.avatar} alt="" />
                    <a href="" onClick={handleGoToProfile}>{user.name}</a>
                </>}
            </nav>

            <button onClick={handleSwitchMode}>Switch Mode</button>
            <button onClick={handleLogout} className="home-header-logout">Logout</button>
        </header>

        <Container tag="main">
            {view === 'posts' && <Posts
                onEditPost={handleOpenEditPostModal}
                lastPostsUpdate={lastPostsUpdate}
            />}
            {view === 'profile' && <Profile onUserAvatarUpdated={handleUserAvatarUpdated} />}

            {modal === 'add-post' && <AddPostModal
                onCancel={handleCloseModal}
                onPostCreated={handlePostUpdated}
            />}

            {modal === 'edit-post' && <EditPostModal
                onCancel={handleCloseModal}
                onPostUpdated={handlePostUpdated}
                postId={postId}
            />}
        </Container>

        <footer className="home-footer">
            <button className="add-post-button" onClick={handleOpenAddPostModal}>+</button>
        </footer>
    </div>
}

