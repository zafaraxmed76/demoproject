import Navbar from "./components/Navbar";
import TravelBook from "./components/TravelBook";
// import Main from "./pages/Main";


function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="raw">
                    <div className="col-lg-8 offset-lg-2">
                    <TravelBook />
                    </div>
                </div>
            </div>
           
           
        </>
    );
}

export default App;