import Icons from './components/Icons/icons'
import './App.css'
function App() {
    return (
        <div className="App">
            <div className="masthead-container">
                <div className="masthead">
                    <div className="masthead--start">
                        <img src={Icons.Hamburger} alt="" />
                        <img src={Icons.LogoTitle} alt="" />
                    </div>
                    <div className="masthead--center">
                        <div className="search-container">
                            <form className="search-box">
                                <img src={Icons.Search} alt="" />
                                <input placeholder="Search" />
                                <img src={Icons.ClearSearch} alt="" />
                            </form>
                            <button>
                                <img src={Icons.Search} />
                            </button>
                        </div>
                        <img
                            className="voice-search"
                            src={Icons.VoiceSearch}
                            alt=""
                        />
                    </div>
                    <div className="masthead--end">
                        <div className="masthead--end--gap"></div>
                        <div className="masthead--end--buttons">
                            <div className="settings">
                                <img src={Icons.Settings} alt="" />
                            </div>
                            <button className="sign-in">
                                <img src={Icons.SignIn} alt="" />
                                SIGN IN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contents">

            </div>
        </div>
    )
}

export default App
